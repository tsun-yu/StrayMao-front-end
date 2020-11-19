import React, { useState, useEffect } from "react";
import SocialHomeTop from "./SocialHomeTop";
import SocialHomeNews from "./SocialHomeNews";
import SocialHomeRank from "./SocialHomeRank";
import SocialHomeforum from "./SocialHomeForum";
import SocialHomeArticle from "./SocialHomeArticle";
import SocialHomeActivity from "./SocialHomeActivity";
import { setTotalPage,setArticleTotalPage, } from '../../actions/common/index';
import {
  getForumListAsync,
  getArticleListAsync,
} from "../../actions/social_media/index";
import DonateButton from '../common/DonateButton'
import { connect } from "react-redux";

function SocialHomepage(props) {
  return (
    <>
    <DonateButton/>
      <SocialHomeTop />
      <SocialHomeNews />
      <SocialHomeRank />
      <SocialHomeforum />
      <SocialHomeArticle /> 
      {/* <SocialHomeActivity /> */}
    </>
  );
}

const mapStateToProps = (store) => {
  return {
    info: store.socialReducer.getForumList,
    info2: store.socialReducer.getArticleList,
    nowPage: store.nowPage,
    totalPage: store.totalPage,
    nowArticlePage: store.nowArticlePage,
    totalArticlePage: store.totalArticlePage,
  };
};
const mapDispatchToProps = null;

export default connect(mapStateToProps, {
  getArticleListAsync,
  getForumListAsync,
  setTotalPage,
  setArticleTotalPage,
})(SocialHomepage);
