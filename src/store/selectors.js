import { createSelector } from '@reduxjs/toolkit';

export const selectCampers = state => state.adverts.items;
export const selectIsLoading = state => state.adverts.isLoading;
export const selectError = state => state.adverts.error;

