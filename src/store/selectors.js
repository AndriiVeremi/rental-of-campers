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

//===================================

// const multiFilter = (arr, filters) => {
//     return arr.filter(item => {
//       // Filter by form transmission
//       if (filters.transmission && item?.transmission !== 'automatic') {
//         return false;
//       }
  
//       // Filter by details
//       const details = filters.details;
//       if (Object.values(details).some(value => value)) {
//         for (const key in details) {
//           if (details[key] && !item.details[key]) {
//             return false;
//           }
//         }
//       }
  
//       // Filter by form
//       const form = filters.form;
//       if (Object.values(form).some(value => value)) {
//         return (
//           Object.keys(form)
//             .filter(el => form[el])
//             .indexOf(item.form) > -1
//         );
//       }
  
//       return true;
//     });
//   };

});
