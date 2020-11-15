import {
  ARTICLE_NEXT_PAGE,
  ARTICLE_PERV_PAGE,
  TOTAL_ARTICLE_PAGE,
} from "../../actions/common/actionTypes";

function nowArticlePage(state = 1, action) {
  switch (action.type) {
    case ARTICLE_NEXT_PAGE:
    case ARTICLE_PERV_PAGE:
      state += action.value;
      break;
    default:
      break;
  }
  return state;
}

function totalArticlePage(state = 5, action) {
  switch (action.type) {
    case TOTAL_ARTICLE_PAGE:
      // console.log("set Total Page:", action.value);
      state = action.value;
      break;
    default:
      break;
  }
  return state;
}

export { nowArticlePage, totalArticlePage };
// export default totalPage;
