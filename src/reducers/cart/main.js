import { act } from "react-dom/test-utils";
import {
  GET_RECOM,
  GET_ORDERLIST,
  GET_ORDER,
  GET_BUY,
  GOODS_LIKE,
  GOODS_DISLIKE,
  GOODS_INIT,
  INSERT_RECOM,
  UPDATE_RECOM,
  DELETE_RECOM,
  INSERT_ORDER,
  UPDATE_ORDER,
  GET_ORDERID,
  DELETE_ORDER
} from "../../actions/cart/actionTypes";

function getOrderId(state = [{memberName:"",mobile:"",address:""}], action) {
  switch (action.type) {
    case UPDATE_RECOM:
      console.log('hi UPDATE_RECOM')
      state = action.value;
      break;
    default:
      break;
  }
  return state;
}
function getRecom(state = 1, action) {
  switch (action.type) {
    case GET_RECOM:
      console.log('hi GET_RECOM')
      state = action.value;
      break;
    default:
      break;
  }
  return state;
}

function getBuy(state = [{memberName:"",mobile:"",address:""}], action) {
  switch (action.type) {
    case GET_BUY:
      state = action.value;
      break;
    default:
      break;
  }
  return state;
}

function getOrderList(state = 1, action) {
  switch (action.type) {
    case GET_ORDERLIST:
      console.log("reducer: ",action.value)
      state = action.value;
      break;
    default:
      break;
  }
  return state;
}

function getOrderListId(state = 1, action) {
  switch (action.type) {
    case GET_ORDERLIST:
      console.log("reducer: ",action.value)
      state = action.value;
      break;
    default:
      break;
  }
  return state;
}

function getOrder(state = 1, action) {
  switch (action.type) {
    case GET_ORDER:
      console.log("reducer: ",action.value)
      state = action.value;
      break;
    default:
      break;
  }
  return state;
}

function getId(state = 1, action) {
  switch (action.type) {
    case GET_ORDERID:
      console.log("reducer: ",action.value)
      state = action.value;
      break;
    default:
      break;
  }
  return state;
}
function deleteOrder(state = 1, action) {
  switch (action.type) {
    case DELETE_ORDER:
      console.log("reducer: ",action.value)
      state = action.value;
      break;
    default:
      break;
  }
  return state;
}

function updateOrder(state = 1, action) {
  switch (action.type) {
    case UPDATE_ORDER:
      console.log("reducer: ",action.value)
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
export { getRecom, getOrderList, getOrder, deleteOrder, updateOrder, goodsHeart,getBuy ,getOrderId,getOrderListId ,getId};
// export default totalPage;
