import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCampers, getCampersAll } from 'api/campersAPI';

export const fetchCampers = createAsyncThunk(
  'adverts/fetch',
   async (_, { rejectWithValue }) => {
  try {
    const { data } = await getCampers();
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const loadMoreCampers = createAsyncThunk(
  'adverts/loadMore',
   async (page, { rejectWithValue }) => {
  try {
    const { data } = await getCampers(page);
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const fetchCamperAll = createAsyncThunk(
  'adverts/fetchAll',
   async (_, { rejectWithValue }) => {
  try {
    const { data } = await getCampersAll();
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});




