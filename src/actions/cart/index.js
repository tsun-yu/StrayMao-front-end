import {
  GET_RECOM,
  GET_ORDERLIST,
  GET_ORDER,
  GOODS_LIKE,
  GOODS_DISLIKE,
  GOODS_INIT,
  CART_CANCLE,
} from "./actionTypes";

//actionCreater

export const getRecommand = (value) => {
  return { type: GET_RECOM, value };
};

export const getRecommandAsync = (value) => {
  return async function getRecommandCart(dispatch, getState) {
    const url = "http://localhost:3001/straymao/cart/cartlist";
    const cartlist={ goodsId: value, memberId:100 };
    const request = new Request(url, {
      method: "POST",
      body: JSON.stringify(cartlist),
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
    });
    try {
      const response = await fetch(request);
      const data = await response.json();
      // data會是一個物件值
      console.log(data);

      await dispatch(getRecommand(data.data));
    } catch (error) {
      //setError(error)
    }
  };
};

export const getOrderList = (value) => {
  return { type: GET_ORDERLIST, value };
};

export const getOrderListAsync = (value) => {
  return async function getRecommandCart(dispatch, getState) {
    const url = "http://localhost:3001/straymao/cart/orderlist";
    const orderlist={ orderId: value, memberId:100 };
    const request = new Request(url, {
      method: "POST",
      body: JSON.stringify(orderlist),
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
    });
    try {
      const response = await fetch(request);
      const data = await response.json();
      // data會是一個物件值
      console.log('data:',data);
      console.log('data.data:',data.data);
      await dispatch(getOrderList(data.data));
    } catch (error) {
      //setError(error)
    }
  };
};

export const getOrder = (value) => {
  return { type: GET_ORDER, value };
};

export const getOrderAsync = (value) => {
  return async function getRecommandCart(dispatch, getState) {
    const url = "http://localhost:3001/straymao/cart/order";
    const order={ orderId: 111, memberId:value };
    const request = new Request(url, {
      method: "POST",
      body: JSON.stringify(order),
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
    });
    try {
      const response = await fetch(request);
      const data = await response.json();
      // data會是一個物件值
      console.log(data);

      await dispatch(getOrder(data.data));
    } catch (error) {
      //setError(error)
    }
  };
};

export const goodsLike = (value) => {
  return { type: GOODS_LIKE, like: value };
};

export const goodsLikeAsync = (value) => {
  return async function addGoodsHeart(dispatch, getState) {
    const url = "http://localhost:3001/straymao/cart/goods_heart";
    const goods = { goodsId: value, memberId: 100 };
    const request = new Request(url, {
      method: "POST",
      body: JSON.stringify(goods),
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
    });
    try {
      const response = await fetch(request);
      const data = await response.json();
      // data會是一個物件值
      console.log(data);

      await dispatch(goodsLike(true));
    } catch (error) {
      //setError(error)
    }
  };
};

export const goodsDisLike = (value) => {
  return { type: GOODS_DISLIKE, like: value };
};

export const goodsDisLikeAsync = (value) => {
  return async function addGoodsHeart(dispatch, getState) {
    const url = "http://localhost:3001/straymao/cart/goods_heart";
    const goods = { goodsId: value, memberId: 100 };
    const request = new Request(url, {
      method: "DELETE",
      body: JSON.stringify(goods),
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
    });
    try {
      const response = await fetch(request);
      const data = await response.json();
      // data會是一個物件值
      console.log(data);

      await dispatch(goodsDisLike(false));
    } catch (error) {
      //setError(error)
    }
  };
};

export const goodsInitLike = (value) => {
  return { type: GOODS_INIT, like: value };
};

export const goodsInitLikeAsync = (value) => {
  return async function addGoodsHeart(dispatch, getState) {
    const url = "http://localhost:3001/straymao/cart/goods_heart_init";
    const goods = { goodsId: value, memberId: 100 };
    const request = new Request(url, {
      method: "POST",
      body: JSON.stringify(goods),
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
    });
    try {
      const response = await fetch(request);
      const data = await response.json();
      // data會是一個物件值
      console.log("init:", data.data);
      let dataValue = false;
      if (data.data.length > 0) {
        dataValue = true;
      }
      await dispatch(goodsInitLike(dataValue));
    } catch (error) {
      //setError(error)
    }
  };
};

