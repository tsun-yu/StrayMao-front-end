import {
  NEXT_PAGE,
  GOTO_PAGE,
  PERV_PAGE,
} from "../../actions/common/actionTypes";

//2nd write a reducer
function page_bar(state = 1, action) {
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

export default page_bar;
