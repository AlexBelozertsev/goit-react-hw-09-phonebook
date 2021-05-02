import { createReducer } from '@reduxjs/toolkit';
import { addColor } from './colorActions';

const colorReduser = createReducer(
  { color: '008080' },
  {
    [addColor]: (_, { payload }) => payload,
  },
);

export default colorReduser;
