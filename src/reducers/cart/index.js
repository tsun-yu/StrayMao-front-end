import { combineReducers } from "redux";

import { getRecom, getBuy, getOrderList, getOrderListOld, getOrder, updateOrder, deleteOrder, goodsHeart,getOrderId,getOrderListId,getId } from "./main";

// //combine all reducer to a big reducer
export const cartReducer = combineReducers({
    getRecom,
    getBuy,
    getOrderList,
    getOrderListOld,
    getOrder,
    updateOrder,
    deleteOrder,
    goodsHeart,
    getOrderId,
    getOrderListId,
    getId
});
