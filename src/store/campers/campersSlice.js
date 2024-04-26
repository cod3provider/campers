import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers } from './operations';
import {
  fulfilledReducer,
  pendingReducer,
  rejectedReducer,
} from '../generalReducers';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    items: [],
    favorites: [],
    page: 1,
    isLoading: false,
    error: null,
  },

  reducers: {
    toggleFavorite: (state, { payload }) => {
      const favorites = state.favorites.slice();
      const favoriteIndex = favorites.indexOf(payload);

      if (favoriteIndex > -1) {
        favorites.splice(favoriteIndex, 1);
      } else {
        favorites.push(payload);
      }

      state.favorites = favorites;
    },

    setPage: (state, { payload }) => {
      state.page = payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchCampers.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.isLoading = false;
      })
      .addMatcher(action => action.type.endsWith('/pending'), pendingReducer)
      .addMatcher(
        action => action.type.endsWith('/fulfilled'),
        fulfilledReducer
      )
      .addMatcher(action => action.type.endsWith('/rejected'), rejectedReducer);
  },
});

export const { setPage, toggleFavorite } = campersSlice.actions;

const persistedReducer = persistReducer(
  { key: 'campers', storage },
  campersSlice.reducer
);

export default persistedReducer;
