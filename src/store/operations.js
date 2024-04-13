import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllCampers } from 'api/campersAPI';

export const fetchCampers = createAsyncThunk('adverts/fetchAll', async (_, { rejectWithValue }) => {
  try {
    const { data } = await getAllCampers();
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const fetchCampersFilters = createAsyncThunk('adverts/fetchAll', async (_, { rejectWithValue }) => {
    try {
      const { data } = await getAllCampers();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  });
