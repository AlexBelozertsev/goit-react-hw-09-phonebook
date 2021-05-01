import { addCity } from './weatherActions';
import weatherSelectors from './weatherSelectors';
import { useSelector } from 'react-redux';

const getCurrentWeather = search => async (dispatch, getState) => {
  // const initialReduxData = useSelector(weatherSelectors.getCityName);
  // if (initialReduxData.name) { return }
  // addCity(search)
  // const {
  //   weather: { name: persistedToken },
  //   } = getState();
  //   console.log('persistedToken', persistedToken);
  //   if (!persistedToken) {
  //   return;
  //   }
  //   // ////////////////////////////////////////////////////////////////////////
  // const { payload } = await addCity(persistedToken);
  //   console.log('persistedToken after', persistedToken);
  // console.log('data operation', payload);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getCurrentWeather };
