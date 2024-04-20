import { createSlice,  } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import { fetchCampersId, loadMoreCampers } from './operations';

// const status = {
//   PENDING: 'pending',
//   FULFILLED: 'fulfilled',
//   REJECTED: 'rejected',
// };

// const thunks = [fetchCampersId, loadMoreCampers];

// const createStatus = status => isAnyOf(...thunks.map(el => el[status]));

//-------------------

// const pendingAction = state => {
//   state.isLoading = true;
//   state.error = null;
// };

// const fulfilledAction = state => {
//   state.isLoading = false;
//   state.error = null;
// };

// const rejectedAction = (state, { payload }) => {
//   state.error = payload.message;
//   state.isLoading = false;
// };

//-------------------

// const handleFulfilledGet = (state, { payload }) => {
//   state.items.push(payload);
// };

// const handleFulfilledDelete = (state, { payload }) => {
//   state.items = state.items.filter(item => item !== payload);
// };

//-----------------------

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: { 
    items: [], 
    isLoading: false,
    error: null 
  },
  reducers: {
    addToFavorite(state, { payload }) {
      state.items.push(payload);
    },
    deleteFavorite(state, { payload }) {
      state.items = state.items.filter(item => item !== payload);
    },
  },
  // extraReducers: builder => {
  //   const { PENDING, FULFILLED, REJECTED } = status;
  //   builder
  //     .addCase(fetchCampersId.fulfilled, handleFulfilledGet)
  //     .addCase(loadMoreCampers.fulfilled, handleFulfilledDelete)
  //     .addMatcher(createStatus(PENDING), pendingAction)
  //     .addMatcher(createStatus(FULFILLED), fulfilledAction)
  //     .addMatcher(createStatus(REJECTED), rejectedAction);
  // },
});

const persistConfig = {
  key: 'favorites',
  storage,
};

export const { addToFavorite, deleteFavorite } = favoritesSlice.actions;
export const persistedReducer = persistReducer(persistConfig, favoritesSlice.reducer);
