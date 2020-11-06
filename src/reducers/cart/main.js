import { act } from "react-dom/test-utils";
import {
    GET_RECOM,
    GET_ORDERLIST,
    GOODS_LIKE,
    GOODS_DISLIKE,
    GOODS_INIT,
    CART_CANCLE,
} from "../../actions/cart/actionTypes";

function getRecom(state = 1, action) {
  switch (action.type) {
    case GET_RECOM:
      state = action.value;
      break;
    default:
      break;
  }
  return state;
}

function goodsHeart(state = false, action) {
  switch (action.type) {
    case GOODS_LIKE:
      state = true;
      break;
    case GOODS_DISLIKE:
      state = false;
      break;
    case GOODS_INIT:
      state = action.like;
      break;
    default:
      break;
  }
  return state;
}
export { getRecom, goodsHeart };
// export default totalPage;
