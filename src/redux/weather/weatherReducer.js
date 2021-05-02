import { createReducer } from '@reduxjs/toolkit';
import { addCity } from './weatherActions';

const weatherReduser = createReducer(
  { name: 'Kyiv', main: {} },
  {
    [addCity]: (_, { payload }) => payload,
  },
);

export default weatherReduser;
