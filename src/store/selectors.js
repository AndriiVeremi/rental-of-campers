import { createSelector } from '@reduxjs/toolkit';

export const selectCampers = state => state.adverts.items;
export const selectRespLength = state => state.adverts.length;
export const selectIsLoading = state => state.adverts.isLoading;
export const selectError = state => state.adverts.error;

export const selectFavorites = state => state.favorites.items;

export const selectAllCampers = state => state.filters.items;
export const selectFiltered = state => state.filters.filters;

export const selectFilteredCampers = createSelector([selectAllCampers, selectFiltered], (campers, filters) => {
  console.log('selectCampers', campers);
  console.log('selectFilters', filters);

return campers.filter(item => {
    for (const key in filters) {
      if (filters[key] && item.hasOwnProperty(key) && filters[key] === true) {
        return true;
      }
      if (typeof filters[key] === 'object' && filters[key] !== null) {
        for (const subKey in filters[key]) {
          if (filters[key][subKey] && item[key] && item[key].hasOwnProperty(subKey) && filters[key][subKey] === true) {
            return true;
          }
        }
      }
    }
    return false;
  });

});


