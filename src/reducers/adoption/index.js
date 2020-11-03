import { combineReducers } from "redux";

import { getRecom } from "./main";

// //combine all reducer to a big reducer
export const adoptReducer = combineReducers({
  getRecom,
});
