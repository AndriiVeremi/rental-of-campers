import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    items: [],
  },
  reducers: {
    addFilters(state, { payload }) {
      state.items.push(payload);
    },
    deleteFilters(state, { payload }) {
      state.items = state.items.filter(item => item._id !== payload._id);
    },
  },
});


export const { addFilters, deleteFilters } = filtersSlice.actions;
export default filtersSlice.reducer;



