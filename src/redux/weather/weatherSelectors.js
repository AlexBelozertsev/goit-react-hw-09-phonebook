const getWeather = state => state.weather.main;
const getCityName = state => state.weather.name;
const getCityTemp = state => state.weather.main.main?.temp || null;

export default { getWeather, getCityName, getCityTemp };
