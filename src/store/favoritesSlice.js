import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    items: [],
  },
  reducers: {
    addFavorite(state, { payload }) {
      state.items.push(payload);
    },
    deleteFavorite(state, { payload }) {
      state.items = state.items.filter(item => item._id !== payload._id);
    },
  },
});

const persistConfig = {
  key: 'favorites',
  storage,
};

export const { addFavorite, deleteFavorite } = favoritesSlice.actions;
export const persistedReducer = persistReducer(persistConfig, favoritesSlice.reducer);
