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

//   const isEmpty = (obj) => {
//     return Object.keys(obj).length === 0 && obj.constructor === Object;
//   };

//     return campers.filter(item => {
//       for (const key in filters) {
//         if ((filters[key] === true || (typeof filters[key] === 'string' && filters[key].trim() !== '')) && (typeof item[key] === 'object' ? !isEmpty(item[key]) : item.hasOwnProperty(key))) {
//           return true;
//         }
//         if (typeof filters[key] === 'object' && filters[key] !== null) {
//           for (const subKey in filters[key]) {
//             if ((filters[key][subKey] === true || (typeof filters[key][subKey] === 'string' && filters[key][subKey].trim() !== '')) && (item[key] && typeof item[key] === 'object' ? !isEmpty(item[key]) && item[key].hasOwnProperty(subKey) : item.hasOwnProperty(subKey))) {
//               return true;
//             }
//           }
//         }
//       }
//       return false;
//     });


if (!filters || Object.keys(filters).length === 0 || !Array.isArray(campers) || campers.length === 0) {
    return [];
  }

  const isMatching = (obj1, obj2) => {
    for (let key in obj1) {
      if (typeof obj1[key] === 'object') {
        if (!isMatching(obj1[key], obj2[key])) {
          return false;
        }
      } else if (obj1[key] && !obj2[key]) {
        return false;
      }
    }
    return true;
  };

  return campers.filter(camper => {
    return Object.keys(filters).some(key => {
      if (typeof filters[key] === 'object' && filters[key] !== null) {
        return isMatching(filters[key], camper[key]);
      } else {
        return filters[key] && camper[key];
      }
    });
  });




//   return campers.filter(item => {
//       for (const key in filters) {
//         if ((filters[key] === true || (typeof filters[key] === 'string' && filters[key].trim() !== '')) && item.hasOwnProperty(key)) {
//           return true;
//         }
//         if (typeof filters[key] === 'object' && filters[key] !== null) {
//           for (const subKey in filters[key]) {
//             if ((filters[key][subKey] === true || (typeof filters[key][subKey] === 'string' && filters[key][subKey].trim() !== '')) && item[key] && item[key].hasOwnProperty(subKey)) {
//               return true;
//             }
//           }
//         }
//       }
//       return false;
//     });


});

//---------------------------------------------------------------------
