const getCityName = state => state.weather.name;

const getCityWeather = state => {
  const cityName = state.weather.name;
  const cityTemp = cityName ? Math.round(state.weather.main.temp) : null;
  return { cityName, cityTemp };
};

export default { getCityWeather, getCityName };
