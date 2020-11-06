import {
  NEXT_PAGE,
  GOTO_PAGE,
  PERV_PAGE,
  TOTAL_PAGE,
} from "../../actions/common/actionTypes";

function nowPage(state = 1, action) {
  switch (action.type) {
    case NEXT_PAGE:
    case PERV_PAGE:
      state += action.value;
      break;
    case GOTO_PAGE:
      state = action.value;
      break;
    default:
      break;
  }
  return state;
}

function totalPage(state = 5, action) {
  switch (action.type) {
    case TOTAL_PAGE:
      // console.log("set Total Page:", action.value);
      state = action.value;
      break;
    default:
      break;
  }
  return state;
}

export { nowPage, totalPage };
// export default totalPage;
