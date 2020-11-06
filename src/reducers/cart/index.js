import { combineReducers } from "redux";

import { getRecom, goodsHeart } from "./main";

// //combine all reducer to a big reducer
export const cartReducer = combineReducers({
    getRecom,
    goodsHeart,
});
