import { GET_FORUMLIST } from "../../actions/social_media/actionTypes";
import { GET_ARTICLELIST } from "../../actions/social_media/actionTypes";
import { GET_ARTICLE_DETAIL } from "../../actions/social_media/actionTypes";
import { SET_DETAIL_ARTICLE_ID } from "../../actions/social_media/actionTypes";
import { GET_FORUM_DETAIL } from "../../actions/social_media/actionTypes";
import { SET_DETAIL_FORUM_ID } from "../../actions/social_media/actionTypes";


function getForumList(state = 1, action) {
  switch (action.type) {
    case GET_FORUMLIST:
      state = action.value;
      break;
    default:
      break;
  }
  return state;
}

function forumDetailId(state = 1, action) {
  switch (action.type) {
    case SET_DETAIL_FORUM_ID:
      // console.log("set:", action.id);
      state = action.id;
      break;
    default:
      break;
  }
  return state;
}

function getForumDetail(state = 1, action) {
  switch (action.type) {
    case GET_FORUM_DETAIL:
      state = action.value;
      break;
    default:
      break;
  }
  return state;
}


function getArticleList(state = 1, action) {
  switch (action.type) {
    case GET_ARTICLELIST:
      state = action.value;
      break;
    default:
      break;
  }
  return state;
}

function articleDetailId(state = 1, action) {
  switch (action.type) {
    case SET_DETAIL_ARTICLE_ID:
      // console.log("set:", action.id);
      state = action.id;
      break;
    default:
      break;
  }
  return state;
}

function getArticleDetail(state = 1, action) {
  switch (action.type) {
    case GET_ARTICLE_DETAIL:
      state = action.value;
      break;
    default:
      break;
  }
  return state;
}

export { getForumList, getArticleList, articleDetailId, getArticleDetail,forumDetailId, getForumDetail };
