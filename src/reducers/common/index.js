import { combineReducers } from 'redux'

import { nowPage, totalPage } from './pageBar'
import { adoptReducer } from '../adoption/index'
import { cartReducer } from '../cart/index'
import { homepageReducer } from '../homapage/index'
import { membershipReducer } from '../membership/index'
import { socialReducer } from '../social_media/index'
import { storeReducer } from '../store/index'
// import { getRecom } from "../adoption/main";
// //combine all reducer to a big reducer
export const rootReducer = combineReducers({
  nowPage,
  totalPage,
  adoptReducer,
<<<<<<< HEAD
  // homepageReducer,
  // membershipReducer,
  // socialReducer,
  storeReducer,
  // cartReducer,
})
=======
  homepageReducer,
  membershipReducer,
  socialReducer,
  storeReducer,
  cartReducer,
});
>>>>>>> 6264cc9997f0a3182b1f9b7767d88642000ac679
