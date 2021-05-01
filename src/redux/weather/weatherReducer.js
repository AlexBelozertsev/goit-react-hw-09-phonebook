import { createReducer } from '@reduxjs/toolkit';
import { addCity } from './weatherActions';

const weatherReduser = createReducer(
  { name: null, main: null },
  {
    [addCity]: (_, { payload }) => {
      console.log(payload);
      return payload;
    },
  },
);

export default weatherReduser;
