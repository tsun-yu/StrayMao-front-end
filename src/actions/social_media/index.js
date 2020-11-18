import { GET_FORUMLIST } from "./actionTypes";
import { GET_FORUMHOT } from "./actionTypes";
import { GET_ARTICLELIST } from "./actionTypes";
import { GET_ARTICLE_DETAIL } from "./actionTypes";
import { SET_DETAIL_ARTICLE_ID } from "./actionTypes";
import { GET_FORUM_DETAIL } from "./actionTypes";
import { SET_DETAIL_FORUM_ID } from "./actionTypes";
import { ADD_FORUMREPLY } from "./actionTypes";
import { GET_FORUMREPLY } from "./actionTypes";
import { ADD_FORUMCARD } from "./actionTypes";
import { ARTICLE_LIKE } from "./actionTypes";
import { ARTICLE_DISLIKE } from "./actionTypes";
import { ARTICLE_INIT } from "./actionTypes";
import { GET_NEWFIVE } from "./actionTypes";
import { GET_HOTFIVE } from "./actionTypes";

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
      console.log("article : ",data);

      await dispatch(getForumList(data));
    } catch (error) {
      //setError(error)
    }
  };
};


// 取得論壇熱門
export const getForumHot = (value) => {
  return { type: GET_FORUMHOT, value };
};

export const getForumHotAsync = (value) => {
  return async function getForumHotaaa(dispatch, getState) {
    const url = "http://localhost:3001/straymao/social_media/get_forum_hot";
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
      console.log("hot : ",data);

      await dispatch(getForumHot(data));
    } catch (error) {
      // setError(error)
    }
  };
};


//取得最新五筆
export const getNewFive = (value) => {
  return { type: GET_NEWFIVE, value };
};

export const getNewFiveAsync = (value) => {
  return async function getNewdown(dispatch, getState) {
    const url = "http://localhost:3001/straymao/social_media/forum/news/all";

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
      console.log("article : ",data);

      await dispatch(getNewFive(data));
    } catch (error) {
      //setError(error)
    }
  };
};

//取得最熱五筆
export const getHotFive = (value) => {
  return { type: GET_HOTFIVE, value };
};

export const getHotFiveAsync = (value) => {
  return async function getHotdown(dispatch, getState) {
    const url = "http://localhost:3001/straymao/social_media/forum/hot/all";

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
      console.log("article : ",data);

      await dispatch(getHotFive(data));
    } catch (error) {
      //setError(error)
    }
  };
};



export const getForumReply = (value) => {
  return { type: GET_FORUMREPLY, value };
};

export const getForumReplyAsync = (value) => {
  return async function getForumReplyOK(dispatch, getState) {
    const url = `http://localhost:3001/straymao/social_media/get_forumUserTalkMessage/${value}`;

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
      // await console.log("ddd:",data);

      await dispatch(getForumReply(data));
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

//送出論壇文章留言
export const addForumReply = (value) => {
  return { type: ADD_FORUMREPLY, value };
};
export const addForumReplyAsync = (value) => {
  return async function addForumR(dispatch, getState) {
    const url = "http://localhost:3001/straymao/social_media/forumUserTalk";
    const request = new Request(url, {
      method: "POST",
      body: JSON.stringify(value),
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

      await dispatch(addForumReply(true));
    } catch (error) {
      //setError(error)
    }
  };
};


//新增論壇文章
export const addForumCard = (value) => {
  return { type: ADD_FORUMCARD, value };
};
export const addForumCardAsync = (value) => {
  return async function addForumC(dispatch, getState) {
    const url = "http://localhost:3001/straymao/social_media/addForumCard";
    const request = new Request(url, {
      method: "POST",
      body: JSON.stringify(value),
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

      await dispatch(addForumCard(true));
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

//-----------文章收藏
export const articleLike = (value) => {
  return { type: ARTICLE_LIKE, like: value };
};
export const articleDisLike = (value) => {
  return { type: ARTICLE_DISLIKE, like: value };
};

export const articleInitLike = (value) => {
  return { type: ARTICLE_INIT, like: value };
};

export const articleLikeAsync = (value) => {
  return async function addArticleHeart(dispatch, getState) {
    const url = "http://localhost:3001/straymao/social_media/article_heart";
    const article = { articleId: value, userId: 3 };
    const request = new Request(url, {
      method: "POST",
      body: JSON.stringify(article),
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

      await dispatch(articleLike(true));
    } catch (error) {
      //setError(error)
    }
  };
};

export const articleDisLikeAsync = (value) => {
  return async function addarticleHeart(dispatch, getState) {
    const url = "http://localhost:3001/straymao/social_media/article_heart";
    const article = { articleId: value, userId: 111 };
    const request = new Request(url, {
      method: "DELETE",
      body: JSON.stringify(article),
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

      await dispatch(articleDisLike(false));
    } catch (error) {
      //setError(error)
    }
  };
};

export const articleInitLikeAsync = (value) => {
  return async function addarticleHeart(dispatch, getState) {
    const url = "http://localhost:3001/straymao/social_media/article_heart_init";
    const article = { articleId: value, userId: 111 };
    const request = new Request(url, {
      method: "POST",
      body: JSON.stringify(article),
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
    });
    try {
      const response = await fetch(request);
      const data = await response.json();
      // data會是一個物件值
      // console.log("init:", data.data);
      let dataValue = false;
      if (data.data.length > 0) {
        console.log("like:", true);
        dataValue = true;
      }
      await dispatch(articleInitLike(dataValue));
    } catch (error) {
      //setError(error)
    }
  };
};