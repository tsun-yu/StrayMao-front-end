import { combineReducers } from "redux";

import { nowPage, totalPage } from "./pageBar";
import { adoptReducer } from "../adoption/index";
import { cartReducer } from "../cart/index";
import { homepageReducer } from "../homapage/index";
import { membershipReducer } from "../membership/index";
import { socialReducer } from "../social_media/index";
import { storeReducer } from "../store/index";
// //combine all reducer to a big reducer
export const rootReducer = combineReducers({
  nowPage,
  totalPage,
  homepageReducer,
  membershipReducer,
  socialReducer,
  storeReducer,
  adoptReducer,
  cartReducer,
});
