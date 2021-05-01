import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import api from '../../services/weather-api';
import { addCity } from '../../redux/weather/weatherActions';
import { weatherOperation, weatherSelectors } from '../../redux/weather';
import './Weather.scss';
import Form from '../Form';
import Label from '../Label';
import Input from '../Input';

export default function Weather() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('Kyiv');
  const [data, setData] = useState('');
  const initialCityName = useSelector(weatherSelectors.getCityName);
  const { name, main, weather, wind } = data;

  const getData = useCallback(
    search =>
      api.getFetch(search).then(d => {
        setData(d);
        dispatch(addCity({ name, main }));
      }),
    [dispatch, main, name],
  );

  useEffect(() => {
    initialCityName && setSearch(initialCityName);
    // dispatch(weatherOperation.getCurrentWeather());
  }, []);

  useEffect(() => {
    getData(search);
    // console.log({ name, main });
  }, [getData]);

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
      {data && (
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
              {name} . {Math.round(main.temp)}°C
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
      )}
    </>
  );
}
