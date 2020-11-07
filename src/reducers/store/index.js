import { combineReducers } from 'redux'

import { getStoreList, getHot } from './main'

// //combine all reducer to a big reducer
export const storeReducer = combineReducers({ getStoreList, getHot })
