import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchCampers, loadMoreCampers } from './operations';

const status = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
};

const thunks = [fetchCampers, loadMoreCampers];

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
  state.items = payload;
  state.length = payload.length;
};

const handleFulfilledLoad = (state, { payload }) => {
  state.items.push(...payload);
  state.length = payload.length;
};

//-----------------------

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: {
    items: [],
    length: 0,
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    const { PENDING, FULFILLED, REJECTED } = status;
    builder
      .addCase(fetchCampers.fulfilled, handleFulfilledGet)
      .addCase(loadMoreCampers.fulfilled, handleFulfilledLoad)
      .addMatcher(createStatus(PENDING), pendingAction)
      .addMatcher(createStatus(FULFILLED), fulfilledAction)
      .addMatcher(createStatus(REJECTED), rejectedAction);
  },
});

export default advertsSlice.reducer;
