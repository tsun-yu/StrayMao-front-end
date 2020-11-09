import { combineReducers } from 'redux'

import {
  getStoreList,
  getDetail,
  getHot,
  getDiscount,
  getDogs,
  getCats,
  getPriceUp,
  getPriceDown,
} from './main'

// //combine all reducer to a big reducer
export const storeReducer = combineReducers({
  getStoreList,
  getDetail,
  getHot,
  getDiscount,
  getDogs,
  getCats,
  getPriceUp,
  getPriceDown,
})
