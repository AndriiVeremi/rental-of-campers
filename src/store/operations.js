import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCampers } from 'api/campersAPI';

export const fetchCampers = createAsyncThunk(
  'adverts/fetchAll',
   async (_, { rejectWithValue }) => {
  try {
    const { data } = await getCampers();
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});





