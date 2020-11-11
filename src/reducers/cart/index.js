import { combineReducers } from "redux";

import { getRecom, getOrderList, getOrder, goodsHeart } from "./main";

// //combine all reducer to a big reducer
export const cartReducer = combineReducers({
    getRecom,
    getOrderList,
    getOrder,
    goodsHeart,
});
