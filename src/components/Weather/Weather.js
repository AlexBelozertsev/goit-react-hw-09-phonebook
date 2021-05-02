import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import api from '../../services/weather-api';
import { addCity } from '../../redux/weather/weatherActions';
import { weatherSelectors } from '../../redux/weather';
import './Weather.scss';
import Form from '../Form';
import Label from '../Label';
import Input from '../Input';

export default function Weather() {
  const dispatch = useDispatch();
  const initialCityName = useSelector(weatherSelectors.getCityName);
  const [search, setSearch] = useState(initialCityName);
  // const store = useStore();
  // console.log(store.getState());

  useEffect(() => {
    api.getFetch(search).then(data => {
      dispatch(addCity({ name: data.name, main: data }));
    });
  }, [dispatch, search]);

  const { weather, wind, name, main } = useSelector(
    weatherSelectors.getWeather,
  );

  const handleChange = e => {
    return e.target.value;
  };

  const handleSumbit = useCallback(
    e => {
      e.preventDefault();
      if (e.target.elements.search.value !== search) {
        setSearch(e.target.elements.search.value);
      }
    },
    [search],
  );

  return (
    <>
      <div className="card">
        <Form onSubmit={handleSumbit}>
          <Label name={`Weather in:`}>
            <Input
              type={'text'}
              name={'search'}
              placeholder={'your city'}
              onChange={handleChange}
            />
          </Label>
        </Form>
        <div className="weather">
          <h1>
            {name} : {Math.round(main.temp)}°C
          </h1>
          <ul className="flex">
            {weather.map(el => {
              const { icon, description } = el;
              return (
                <li key={el.id}>
                  <img
                    src={`https://openweathermap.org/img/wn/${icon}.png`}
                    alt="icon"
                    className="icon"
                  />
                  <p>{description}</p>
                </li>
              );
            })}
          </ul>
          <p>Humidity: {main.humidity}%</p>
          <p>Wind speed: {wind.speed} km/h</p>
        </div>
      </div>
    </>
  );
}
