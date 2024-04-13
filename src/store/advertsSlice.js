import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchCampers } from './operations';


const status = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
};

const thunks = [fetchCampers];

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
};

//-----------------------

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    const { PENDING, FULFILLED, REJECTED } = status;
    builder
      .addCase(fetchCampers.fulfilled, handleFulfilledGet)
      .addMatcher(createStatus(PENDING), pendingAction)
      .addMatcher(createStatus(FULFILLED), fulfilledAction)
      .addMatcher(createStatus(REJECTED), rejectedAction);
  },
});

export default advertsSlice.reducer;
