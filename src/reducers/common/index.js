import { combineReducers } from "redux";

import { nowPage, totalPage } from "./pageBar";
import { getRecom } from "../adoption/main";

// //combine all reducer to a big reducer
export const rootReducer = combineReducers({
  nowPage,
  totalPage,
  getRecom,
});
