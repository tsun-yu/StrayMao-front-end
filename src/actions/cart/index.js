// import {
//   GET_RECOM,
//   GET_CARTLIST,
//   GET_ORDERLIST,
//   GOODS_LIKE,
//   GOODS_DISLIKE,
//   CART_CANCLE,
// } from "./actionTypes";

// //actionCreater

// export const getRecommand = (value) => {
//   return { type: GET_RECOM, value };
// };

// export const getRecommandAsync = (value) => {
//   return async function getRecommandCart(dispatch, getState) {
//     const url = "http://localhost:3001/straymao/cart/orderlist/1";

//     const request = new Request(url, {
//       method: "GET",
//       headers: new Headers({
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       }),
//     });
//     try {
//       const response = await fetch(request);
//       const data = await response.json();
//       // data會是一個物件值
//       console.log(data);

//       await dispatch(getRecommand(data.data[0]));
//     } catch (error) {
//       //setError(error)
//     }
//   };
// };

// export const getCartList = (value) => {
//   return { type: GET_CARTLIST, value };
// };

// export const getCartListAsync = (value) => {
//   return async function getRecommandCart(dispatch, getState) {
//     const url = "http://localhost:3001/straymao/cart/cartlist";

//     const request = new Request(url, {
//       method: "GET",
//       headers: new Headers({
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       }),
//     });
//     try {
//       const response = await fetch(request);
//       const data = await response.json();
//       // data會是一個物件值
//       console.log(data);

//       await dispatch(getRecommand(data.data));
//     } catch (error) {
//       //setError(error)
//     }
//   };
// };

// export const getOrderList = (value) => {
//   return { type: GET_ORDERLIST, value };
// };

// export const getOrderListAsync = (value) => {
//   return async function getRecommandCart(dispatch, getState) {
//     const url = "http://localhost:3001/straymao/cart/orderlist";

//     const request = new Request(url, {
//       method: "GET",
//       headers: new Headers({
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       }),
//     });
//     try {
//       const response = await fetch(request);
//       const data = await response.json();
//       // data會是一個物件值
//       console.log(data);

//       await dispatch(getRecommand(data.data));
//     } catch (error) {
//       //setError(error)
//     }
//   };
// };

// export const goodsLike = (value) => {
//   return { type: GOODS_LIKE, like: value };
// };

// export const goodsLikeAsync = (value) => {
//   return async function addGoodsHeart(dispatch, getState) {
//     const url = "http://localhost:3001/straymao/cart/goods_heart";
//     const goods = { goodsId: value, userId: 111 };
//     const request = new Request(url, {
//       method: "POST",
//       body: JSON.stringify(goods),
//       headers: new Headers({
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       }),
//     });
//     try {
//       const response = await fetch(request);
//       const data = await response.json();
//       // data會是一個物件值
//       console.log(data);

//       await dispatch(goodsLike(true));
//     } catch (error) {
//       //setError(error)
//     }
//   };
// };

// export const goodsDisLike = (value) => {
//   return { type: GOODS_DISLIKE, like: value };
// };

// export const goodsDisLikeAsync = (value) => {
//   return async function addPetHeart(dispatch, getState) {
//     const url = "http://localhost:3001/straymao/adoption/pet_heart";
//     const goods = { goodsId: value, userId: 111 };
//     const request = new Request(url, {
//       method: "DELETE",
//       body: JSON.stringify(goods),
//       headers: new Headers({
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       }),
//     });
//     try {
//       const response = await fetch(request);
//       const data = await response.json();
//       // data會是一個物件值
//       console.log(data);

//       await dispatch(goodsDisLike(false));
//     } catch (error) {
//       //setError(error)
//     }
//   };
// };

