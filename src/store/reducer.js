import { combineReducers } from 'redux'
import  advertsReducer  from './advertsSlice';

export const reducer = combineReducers({
    adverts: advertsReducer,
  
});
