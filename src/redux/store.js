import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth';
import { contactsReducer } from './contacts';
import { weatherReducer } from './weather';
import { colorReduser } from './color';

const myMiddleWare = store => next => action => {
  next(action);
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  myMiddleWare,
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
const weatherPersistConfig = {
  key: 'weather',
  storage,
};
const colorPersistConfig = {
  key: 'color',
  storage,
};

const store = configureStore({
  reducer: combineReducers({
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
    weather: persistReducer(weatherPersistConfig, weatherReducer),
    color: persistReducer(colorPersistConfig, colorReduser),
  }),
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistStor = persistStore(store);
export default { store, persistStor };
