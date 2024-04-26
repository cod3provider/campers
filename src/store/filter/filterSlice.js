import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    location: '',
    type: '',
    details: [],
  },
  reducers: {
    changeFilter(_, { payload }) {
      return payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;

const persistedFilterReducer = persistReducer(
  { key: 'filter', storage },
  filterSlice.reducer
);

export default persistedFilterReducer;
