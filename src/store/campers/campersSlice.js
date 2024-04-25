import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "../operations.js";
import {
  handleFulfilledCampers,
  handlePendingCampers,
  handleRejectedCampers,
} from "./campersHandlers.js";
import {persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage';

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    favorites: [],
    isLoading: false,
    error: null,
    page: 1,
  },

  reducers: {
    toggleFavorites: (state, { payload }) => {
      const isFavorite = state.favorites.includes(payload);
      state.favorites = isFavorite
        ? state.favorites.filter((favorite) => favorite !== payload)
        : [...state.favorites, payload];
    },

    setPage: (state, { payload }) => {
      state.page = payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.isLoading = false;
      })
      .addMatcher(
        (action) => action.type.endsWith("pending"),
        handlePendingCampers,
      )
      .addMatcher(
        (action) => action.type.endsWith("fulfilled"),
        handleFulfilledCampers,
      )
      .addMatcher(
        (action) => action.type.endsWith("rejected"),
        handleRejectedCampers,
      );
  },
});

const persistedReducer = persistReducer(
  {key: 'campers', storage},
  campersSlice.reducer
);
export const { toggleFavorites, setPage } = campersSlice.actions;

export default persistedReducer;
