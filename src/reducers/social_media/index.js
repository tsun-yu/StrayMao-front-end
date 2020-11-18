import { combineReducers } from "redux";

import {
  getForumList,
  getForumHot,
  getArticleList,
  articleDetailId,
  getArticleDetail,
  forumDetailId,
  getForumDetail,
  addForumReply,
  getForumReply,
  addForumCard,
  articleHeart,
  getHotFive, 
  getNewFive,
} from "./main";

// //combine all reducer to a big reducer
export const socialReducer = combineReducers({
  getForumList,
  getForumHot,
  getArticleList,
  articleDetailId,
  getArticleDetail,
  forumDetailId,
  getForumDetail,
  addForumReply,
  getForumReply,
  addForumCard,
  articleHeart,
  getHotFive, 
  getNewFive,
});
