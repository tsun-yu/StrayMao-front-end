import { combineReducers } from "redux";

import {
  getForumList,
  getArticleList,
  articleDetailId,
  getArticleDetail,
  forumDetailId,
  getForumDetail,
  addForumReply,
  getForumReply,
  addForumCard,
  articleHeart,
} from "./main";

// //combine all reducer to a big reducer
export const socialReducer = combineReducers({
  getForumList,
  getArticleList,
  articleDetailId,
  getArticleDetail,
  forumDetailId,
  getForumDetail,
  addForumReply,
  getForumReply,
  addForumCard,
  articleHeart,
});
