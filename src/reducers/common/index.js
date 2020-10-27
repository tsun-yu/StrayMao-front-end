import { combineReducers } from "redux";

import { nowPage, totalPage } from "./pageBar";

// //combine all reducer to a big reducer
export const rootReducer = combineReducers({
  nowPage,
  totalPage,
});
