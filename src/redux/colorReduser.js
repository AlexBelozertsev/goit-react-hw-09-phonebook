import { createReducer } from '@reduxjs/toolkit';
import { addColor } from './colorActions';

const colorReduser = createReducer('', {
  [addColor]: (_, { payload }) => payload,
});

export default colorReduser;
