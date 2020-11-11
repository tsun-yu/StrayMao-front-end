import { GET_FORUMLIST } from "./actionTypes";
import { GET_ARTICLELIST } from "./actionTypes";
import { GET_ARTICLE_DETAIL } from "./actionTypes";
import { SET_DETAIL_ARTICLE_ID } from "./actionTypes";
import { GET_FORUM_DETAIL } from "./actionTypes";
import { SET_DETAIL_FORUM_ID } from "./actionTypes";

// 取得論壇清單
export const getForumList = (value) => {
  return { type: GET_FORUMLIST, value };
};

export const getForumListAsync = (value) => {
  return async function getForumArticle(dispatch, getState) {
    const url = "http://localhost:3001/straymao/social_media/get_forum_list";

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
      // console.log(data);

      await dispatch(getForumList(data));
    } catch (error) {
      //setError(error)
    }
  };
};

//取得論壇文章id
export const forumDetailIdAsync = (value) => {
  return async function getArticleItems(dispatch, getState) {
    try {
      await dispatch(forumDetailId(value));
    } catch (error) {
      //setError(error)
    }
  };
};
export const forumDetailId = (value) => {
  // console.log("value:", value);
  return { type: SET_DETAIL_FORUM_ID, id: value };
};

//取得論壇文章細節
export const getForumDetail = (value) => {
  return { type: GET_FORUM_DETAIL, value };
};

export const getForumDetailAsync = (value) => {
  return async function getArticleItems(dispatch, getState) {
    const url = `http://localhost:3001/straymao/social_media/get_forum_list/${value}`;

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
      // console.log(data.data[0]);
      await dispatch(getForumDetail(data[0]));
    } catch (error) {
      //setError(error)
    }
  };
};


//--------------------------------------
//取得文章清單
export const getArticleList = (value) => {
  return { type: GET_ARTICLELIST, value };
};

export const getArticleListAsync = (value) => {
  return async function getArticlArticle(dispatch, getState) {
    const url = "http://localhost:3001/straymao/social_media/get_article_list";

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
      // console.log(data);

      await dispatch(getArticleList(data));
    } catch (error) {
      //setError(error)
    }
  };
};

//取得文章id
export const articleDetailIdAsync = (value) => {
  return async function getRecommandPet(dispatch, getState) {
    try {
      await dispatch(articleDetailId(value));
    } catch (error) {
      //setError(error)
    }
  };
};
export const articleDetailId = (value) => {
  // console.log("value:", value);
  return { type: SET_DETAIL_ARTICLE_ID, id: value };
};

//取得文章細節
export const getArticleDetail = (value) => {
  return { type: GET_ARTICLE_DETAIL, value };
};

export const getArticleDetailAsync = (value) => {
  return async function getArticleItems(dispatch, getState) {
    const url = `http://localhost:3001/straymao/social_media/get_article_list/${value}`;

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
      // console.log(data.data[0]);
      await dispatch(getArticleDetail(data[0]));
    } catch (error) {
      //setError(error)
    }
  };
};