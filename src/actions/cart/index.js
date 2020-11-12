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
  DELETE_ORDER,
  UPDATE_BUY,
} from "./actionTypes";

//actionCreater

export const insertRecommand = (value) => {
  return { type: INSERT_RECOM, value };
};
//加入購物車
export const insertRecommandAsync = (value) => {
  return async function getRecommandCart(dispatch, getState) {
    const url = "http://localhost:3001/straymao/cart/cartinsert";
    const cartinsert={ goodsId: value, memberId:100 ,name:'寵物食品 幼犬 小顆粒 羊肉與糙米特調食譜' ,price:1000 ,quantity:22 };
    const request = new Request(url, {
      method: "POST",
      body: JSON.stringify(cartinsert),
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

      await dispatch(insertRecommand(data.data));
    } catch (error) {
      //setError(error)
    }
  };
};


export const changeRecommand = (value) => {
  return { type: GET_RECOM, value };
};

export const changeRecommandAsync = (value) => {
  return async (dispatch, getState) => {
    dispatch(changeRecommand([...value]))
  };
};

export const updateRecommand = (value) => {
  return { type: UPDATE_RECOM, value };
};
//更新購物車
export const updateRecommandAsync = (value,cartId) => {
  return async function getRecommandCart(dispatch, getState) {
    console.log("cart : ", cartId)
    const url = "http://localhost:3001/straymao/cart/cartupdate";
    const request = new Request(url, {
      method: "POST",
      body: JSON.stringify({value,cartId}),
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

      // await dispatch(updateRecommand(data.data));
    } catch (error) {
      //setError(error)
    }
  };
};


export const deleteRecommand = (value) => {
  return { type: DELETE_RECOM, like: value };
};
//刪除購物車
export const deleteRecommandAsync = (value) => {
  return async function deleteCart(dispatch, getState) {
    const url = "http://localhost:3001/straymao/cart/cartlist";
    const goods = { cartId: value };
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

      await dispatch(deleteRecommand(false));
    } catch (error) {
      //setError(error)
    }
  };
};


export const getRecommand = (value) => {
  return { type: GET_RECOM, value };
};
//購物車列表
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


export const insertOrder = (value) => {
  return { type: INSERT_ORDER, value };
};
//加入訂單
export const insertOrderAsync = (value) => {
  return async function getRecommandCart(dispatch, getState) {
    const url = "http://localhost:3001/straymao/cart/orderinsert";
    const request = new Request(url, {
      method: "POST",
      body: JSON.stringify(value),
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

      await dispatch(insertOrder(data.data));
    } catch (error) {
      //setError(error)
    }
  };
};


export const getBuy = (value) => {
  return { type: GET_BUY, value };
};
//購買
export const getBuyAsync = (value) => {
  return async function getRecommandCart(dispatch, getState) {
    const url = "http://localhost:3001/straymao/cart/buy";
    const order={ orderId: 110 };
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

      await dispatch(getBuy(data.data));
    } catch (error) {
      //setError(error)
    }
  };
};

export const changeBuy = (value) => {
  return { type: GET_BUY, value };
};

export const changeBuyAsync = (value) => {
  return async (dispatch, getState) => {
    dispatch(changeBuy([...value]))
  };
};

export const updateBuy = (value) => {
  return { type: UPDATE_BUY, value };
};
//更新cartlist
export const updateBuyAsync = (value) => {
  return async function getRecommandCart(dispatch, getState) {
    const url = "http://localhost:3001/straymao/cart/buyupdate";
    // const order={ orderId: 110 };
    const request = new Request(url, {
      method: "POST",
      body: JSON.stringify(value),
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

      // await dispatch(updateBuy(data.data));
    } catch (error) {
      //setError(error)
    }
  };
};


export const updateOrder = (value) => {
  return { type: UPDATE_ORDER, value };
};
//更新cartlist
export const updateOrderAsync = (value) => {
  return async function getRecommandCart(dispatch, getState) {
    const url = "http://localhost:3001/straymao/cart/orderupdate";
    // const order={ cartId: 110, price:110, quantity:11 };
    const request = new Request(url, {
      method: "POST",
      body: JSON.stringify(value),
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

      await dispatch(updateOrder(data.data));
    } catch (error) {
      //setError(error)
    }
  };
};


export const deleteOrder = (value) => {
  return { type: DELETE_ORDER, value };
};
//更新cartlist
export const deleteOrderAsync = (value) => {
  return async function getRecommandCart(dispatch, getState) {
    const url = "http://localhost:3001/straymao/cart/orderdelete";
    const order={ cartId: value };
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

      await dispatch(deleteOrder(data.data));
    } catch (error) {
      //setError(error)
    }
  };
};


export const getOrderList = (value) => {
  return { type: GET_ORDERLIST, value };
};
//訂單列表
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
//某一筆訂單
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

