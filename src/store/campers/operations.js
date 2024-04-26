import { createAsyncThunk } from '@reduxjs/toolkit';
import {instance} from '@/utils/api/api.js';

export const fetchCampers = createAsyncThunk(
  'campers/fetchCampers',
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get('/');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const fetchCamperById = createAsyncThunk(
  'campers/fetchCamperById',
  async (id, thunkAPI) => {
    try {
      const { data } = await api.get(`/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
