import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCampers } from 'api/campersAPI';

export const fetchCampers = createAsyncThunk(
  'adverts/fetchAll',
   async (page, { rejectWithValue }) => {
  try {
    const { data } = await getCampers(page);
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});





