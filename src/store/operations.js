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

// export const fetchCampersId = createAsyncThunk(
//   'adverts/fetchId',
//    async (id, { rejectWithValue }) => {
//   try {
//     const { data } = await getCampers(id);
//     return data;
//   } catch (error) {
//     return rejectWithValue(error.message);
//   }
// });

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




