import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../utils/api/api.js";

export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async (page = 1, thunkAPI) => {
    try {
      const { data } = await instance.get("/", {
        params: {
          page: page,
          limit: 4,
        },
      });
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  },
);

export const fetchCamperById = createAsyncThunk(
  "campers/fetchCamperById",
  async (id, thunkAPI) => {
    try {
      const { data } = await instance.get(`/${id}`);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  },
);
