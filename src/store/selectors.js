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

// напиши функцію яка приймає масив обєктів таких campers і порівнює кожен обєкт на присутність таких самих властивостей які в filters але порівнювати ті властивості які в filters дорівнює true або не пустому рядку. і повернути новий масив обєктів в якіх збігається хоть одна властивість


// напиши функцію яка приймає обєкт filters і масив обєктів таких як campers. і перевіряю кожен обєкт з масиву (campers) чи містить він такі всластивості які є в filters але перевіряти ті властивості які в обєкті filters  не дорівнюють пустому рядку чи false вернути новий масивз обєктів в  якіх збігаються властивості

// const filters = {
// details : {ac: true, transmision: false, kitchen: false, tv: true, shovers: false}
// location : "asdds"
// type: {van: true, integ: false, alcove: false}
// }

// const campers = {
//   0
//   :
//   adults
//   :
//   3
//   children
//   :
//   2
//   consumption
//   :
//   "30l/100km"
//   description
//   :
//   "Embark on an unforgettable journey with the Road Bear C 23-25, an epitome of comfort and convenience on wheels. This alcove-style motorhome is meticulously designed to cater to the needs of families and small groups, ensuring a seamless and enjoyable road trip experience. The sleek exterior houses a spacious and thoughtfully laid out interior, making it your home away from home. The Road Bear C 23-25 boasts a stylish and modern design, coupled with top-notch amenities to enhance your travel adventures. The interior is not only aesthetically pleasing but also functional, providing ample living and sleeping space. Whether you're cruising along scenic highways or parked in a picturesque campsite, this RV offers the perfect blend of functionality and comfort. Inside, you'll find a fully equipped kitchen, complete with a refrigerator, microwave, and a three-burner hob, allowing you to prepare delicious meals on the go. The bathroom is fitted with a shower and toilet, ensuring you have the convenience of home wherever your travels take you. The sleeping quarters are designed for relaxation, with three comfortable beds to accommodate both adults and children. Additional features include air conditioning, a TV, CD player, radio, and ample storage space for all your travel essentials. The Road Bear C 23-25 is equipped with a 35kg gas supply for cooking, and a water tank with a capacity of 151 liters to meet your daily needs. Fuelled by petrol and featuring an automatic transmission, this motorhome is not only easy to drive but also fuel-efficient, allowing you to focus on enjoying the journey rather than worrying about logistics. Create lasting memories with your loved ones as you navigate the roads in the Road Bear C 23-25. It's not just an RV; it's a mobile sanctuary for your adventures, promising comfort, style, and the freedom to explore at your own pace."
//   details
//   :
//   {airConditioner: 1, bathroom: 1, kitchen: 1, beds: 3, TV: 1, …}
//   engine
//   :
//   "petrol"
//   form
//   :
//   "alcove"
//   gallery
//   :
//   (3) ['https://ftp.goit.study/img/campers-test-task/1-1.webp', 'https://ftp.goit.study/img/campers-test-task/1-2.webp', 'https://ftp.goit.study/img/campers-test-task/1-3.webp']
//   height
//   :
//   "3.65m"
//   length
//   :
//   "7.3m"
//   location
//   :
//   "Ukraine, Kyiv"
//   name
//   :
//   "Road Bear C 23-25"
//   price
//   :
//   10000
//   rating
//   :
//   4.5
//   reviews
//   :
//   (2) [{…}, {…}]
//   tank
//   :
//   "208l"
//   transmission
//   :
//   "automatic"
//   width
//   :
//   "2.65m"
//   _id
//   :
//   "1"}
