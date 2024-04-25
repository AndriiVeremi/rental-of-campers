import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchCampers, loadMoreCampers, fetchCamperAll } from './operations';

const status = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
};

const thunks = [fetchCampers, loadMoreCampers, fetchCamperAll];

const createStatus = status => isAnyOf(...thunks.map(el => el[status]));

//-------------------

const pendingAction = state => {
  state.isLoading = true;
  state.error = null;
};

const fulfilledAction = state => {
  state.isLoading = false;
  state.error = null;
};

const rejectedAction = (state, { payload }) => {
  state.error = payload.message;
  state.isLoading = false;
};

//-------------------

const handleFulfilledGet = (state, { payload }) => {
  state.advert.campers = payload;
  state.advert.length = payload.length;
};

const handleFulfilledLoad = (state, { payload }) => {
  state.advert.campers.push(...payload);
  state.advert.length = payload.length;
};

const handleFulfilledGetAll = (state, { payload }) => {
  state.filters.items = payload;
  state.advert.length = payload.length;
};

//-----------------------

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: {
    advert: {
      campers: [],
      length: 0,
    },
    filters: {
      items: [],
      filters: [],
    },
    isLoading: false,
    error: null,
  },
  reducers: {
    addFilters(state, { payload }) {
      state.filters.filters = payload;
    },
  },
  extraReducers: builder => {
    const { PENDING, FULFILLED, REJECTED } = status;
    builder
      .addCase(fetchCampers.fulfilled, handleFulfilledGet)
      .addCase(loadMoreCampers.fulfilled, handleFulfilledLoad)
      .addCase(fetchCamperAll.fulfilled, handleFulfilledGetAll)
      .addMatcher(createStatus(PENDING), pendingAction)
      .addMatcher(createStatus(FULFILLED), fulfilledAction)
      .addMatcher(createStatus(REJECTED), rejectedAction);
  },
});

export const { addFilters } = advertsSlice.actions;
export default advertsSlice.reducer;
