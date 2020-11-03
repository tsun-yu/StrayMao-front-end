import { GET_RECOM } from "./actionTypes";

//actionCreater

export const getRecommand = (value) => {
  return { type: GET_RECOM, value };
};

export const getRecommandAsync = (value) => {
  return async function updateTotalToServer(dispatch, getState) {
    // 開啟載入的指示圖示
    //setDataLoading(true)

    // console.log(getState());

    const url = "http://localhost:3001/straymao/adoption/get_pet_list/1";

    const request = new Request(url, {
      method: "GET",
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

      await dispatch(getRecommand(data.data[0]));
    } catch (error) {
      //setError(error)
    }
  };
};

// export const initValue = (value) => {
//   return { type: INIT_VALUE, value };
// };

// export const minusValue = (value) => {
//   return { type: MINUS_VALUE, value };
// };
