import { createSelector } from '@reduxjs/toolkit';

export const selectCampers = state => state.adverts.items;
export const selectRespLength = state => state.adverts.length;
export const selectIsLoading = state => state.adverts.isLoading;
export const selectError = state => state.adverts.error;

export const selectFavorites = state => state.favorites.items;

export const selectCampersFiltered = state => state.filters.items;

export const selectFilteredContacts = createSelector([selectCampers, selectCampersFiltered], (campers, filters) => {
  console.log('campers', campers);
  console.log('filters', filters);

  function flatObjects(campers) {
    function flatten(object) {
        const result = {};
        for (const key in object) {
            if (typeof object[key] === 'object' && object[key] !== null) {
                const flattenedValue = flatten(object[key]);
                for (const flattenedKey in flattenedValue) {
                    result[key + '.' + flattenedKey] = flattenedValue[flattenedKey];
                }
            } else {
                result[key] = object[key];
            }
        }
        return result;
    }

    return campers.map(obj => flatten({ ...obj }));
}

const flattenedArray = flatObjects(campers);

console.log('flattenedArray',flattenedArray);

});
