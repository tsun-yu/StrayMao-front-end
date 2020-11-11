import { combineReducers } from "redux";

import {
  getForumList,
  getArticleList,
  articleDetailId,
  getArticleDetail,
  forumDetailId,
  getForumDetail,
} from "./main";

// //combine all reducer to a big reducer
export const socialReducer = combineReducers({
  getForumList,
  getArticleList,
  articleDetailId,
  getArticleDetail,
  forumDetailId,
  getForumDetail,
});
