import { createSlice } from '@reduxjs/toolkit';
import { fetchCamperAll } from './operations';

const pendingAction = state => {
  state.isLoading = true;
  state.error = null;
};

const rejectedAction = (state, { payload }) => {
  state.error = payload.message; 
  state.isLoading = false;
};

const handleFulfilledGetAll = (state, { payload }) => {
  state.items = payload;
  state.length = payload.length;
  state.isLoading = false;
  state.error = null;

};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    items: [],
    length: 0,
    isLoading: false,
    error: null,
    filters: [],
  },
  reducers: {
    addFilters(state, { payload }) {
      state.filters = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCamperAll.pending, pendingAction)
      .addCase(fetchCamperAll.fulfilled, handleFulfilledGetAll)
      .addCase(fetchCamperAll.rejected, rejectedAction);
  },
});

export const { addFilters } = filtersSlice.actions;
export default filtersSlice.reducer;