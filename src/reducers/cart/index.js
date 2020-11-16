import { combineReducers } from "redux";

import { getRecom, getBuy, getOrderList, getOrder, updateOrder, deleteOrder, goodsHeart,getOrderId } from "./main";

// //combine all reducer to a big reducer
export const cartReducer = combineReducers({
    getRecom,
    getBuy,
    getOrderList,
    getOrder,
    updateOrder,
    deleteOrder,
    goodsHeart,
    getOrderId
});
