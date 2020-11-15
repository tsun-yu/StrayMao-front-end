import { GET_FORUMLIST } from "../../actions/social_media/actionTypes";
import { GET_ARTICLELIST } from "../../actions/social_media/actionTypes";
import { GET_ARTICLE_DETAIL } from "../../actions/social_media/actionTypes";
import { SET_DETAIL_ARTICLE_ID } from "../../actions/social_media/actionTypes";
import { GET_FORUM_DETAIL } from "../../actions/social_media/actionTypes";
import { SET_DETAIL_FORUM_ID } from "../../actions/social_media/actionTypes";
import { ADD_FORUMREPLY } from "../../actions/social_media/actionTypes";
import { GET_FORUMREPLY } from "../../actions/social_media/actionTypes";
import { ADD_FORUMCARD } from "../../actions/social_media/actionTypes";
import { ARTICLE_LIKE } from "../../actions/social_media/actionTypes";
import { ARTICLE_DISLIKE } from "../../actions/social_media/actionTypes";
import { ARTICLE_INIT } from "../../actions/social_media/actionTypes";


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
function getForumReply(state = 1, action) {
  switch (action.type) {
    case GET_FORUMREPLY:
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
function addForumCard(state = 1, action) {
  switch (action.type) {
    case ADD_FORUMCARD:
      // console.log("set:", action.id);
      state = action.value;
      break;
    default:
      break;
  }
  return state;
}
function addForumReply(state = 1, action) {
  switch (action.type) {
    case ADD_FORUMREPLY:
      // console.log("set:", action.id);
      state = action.value;
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

function articleHeart(state = false, action) {
  switch (action.type) {
    case ARTICLE_LIKE:
      state = true;
      break;
    case ARTICLE_DISLIKE:
      state = false;
      break;
    case ARTICLE_INIT:
      state = action.like;
      break;
    default:
      break;
  }
  return state;
}

export { getForumList, getArticleList, articleDetailId, getArticleDetail,forumDetailId, getForumDetail,addForumReply,getForumReply,addForumCard,articleHeart };
