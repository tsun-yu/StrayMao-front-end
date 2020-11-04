import { NEXT_PAGE, GOTO_PAGE, PERV_PAGE, TOTAL_PAGE } from "./actionTypes";

//actionCreater
export const pervPage = () => {
  return { type: PERV_PAGE, value: -1 };
};

export const gotoPage = (value) => {
  return { type: GOTO_PAGE, value: value };
};

export const nextPage = () => {
  return { type: NEXT_PAGE, value: 1 };
};
export const setTotalPage = (value) => {
  return { type: TOTAL_PAGE, value };
};
// export const addValueAsync = (value) => {
//   return async function updateTotalToServer(dispatch, getState) {
//     // 開啟載入的指示圖示
//     //setDataLoading(true)

//     // https://redux.js.org/api/store#getstate
//     console.log(getState());

//     const newTotal = { total: getState().counter + value };

//     const url = "http://localhost:5555/counter/1";

//     const request = new Request(url, {
//       method: "PUT",
//       body: JSON.stringify(newTotal),
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

//       // 驗証成功後再設定…
//       //setTotal(total + value)
//       dispatch(addValue(value));
//     } catch (error) {
//       //setError(error)
//     }
//   };
// };

// export const initValue = (value) => {
//   return { type: INIT_VALUE, value };
// };

// export const minusValue = (value) => {
//   return { type: MINUS_VALUE, value };
// };
