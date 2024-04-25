import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { combineReducers } from 'redux';
import persistedReducer from './campers/campersSlice';
import persistedFilterReducer from './filter/filterSlice';

const middleware = getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  });

const rootReducer = combineReducers({
  campers: persistedReducer,
  filter: persistedFilterReducer,
});

// Створення persistStore
export const store = configureStore({
  reducer: rootReducer,
  middleware,
});

export const persistor = persistStore(store);
