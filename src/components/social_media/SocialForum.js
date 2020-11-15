import React, { useState, useEffect } from "react";
import SocialEditButton from "./SocialEditButton";
import ForumArticleMain from "./ForumArticleMain";
import ForumArrowItems from "./ForumArrowItems";
import ForumListCard from "./ForumListCard";
import ForumNewsMain from "./ForumNewsMain";
import ArticleListCard from "./ArticleListCard";
import ForumCardPagebar from "./ForumCardPagebar";
import ArticleCardPagebar from "./ArticleCardPagebar";
import ArticleDetailPage from "./ArticleDetailPage";
import { gotoPage, setTotalPage,setArticleTotalPage, } from '../../actions/common/index';
import { connect } from "react-redux";

import {
  getForumListAsync,
  getArticleListAsync,
} from "../../actions/social_media/index";

function SocialForum(props) {
  const [display, setDisplay] = useState(<></>);
  const [display2, setDisplay2] = useState(<></>);
  const [display3, setDisplay3] = useState(<></>);
  const [articleInfoshow, setArticleInfoshow] = useState(<></>);
  // const [forumInfoshow, setForumInfoshow] = useState();
  // const [content4, setContent4] = useState();

  const content = [];
  const content2 = [];
  const content3 =[];
  let totalCards = props.info;
  let totalPages = Math.ceil(totalCards.length / 4);
  let nowPage = props.nowPage;
  let nowArticlePage = props.nowArticlePage;

  let totalArticles = props.info2;
  let totalArticlePages = Math.ceil(totalArticles.length / 3);

  useEffect(() => {
    props.getForumListAsync();
    props.getArticleListAsync();
  }, []);

  useEffect(() => {
    totalCards = props.info;
    totalPages = Math.ceil(totalCards.length / 4);
    if (totalCards.length > 0) {
    props.setTotalPage(totalPages);
    for (
      let i = 4 * (nowPage - 1);
      nowPage === totalPages ? i < totalCards.length : i < 4 * nowPage;
      i++
    ) {
      if (totalCards.length > 0) {
        // console.log(":", totalCards[i]);
        content.push(<ForumListCard test={totalCards[i]} i={i} />);
      }
    }
  }
    if (totalCards.length > 0) {
      console.log(props.info);
      for (let i = 0; i < totalCards.length; i++) {
        content3.push(
          <ForumArticleMain
            test={totalCards[i]}
          />
        );
      }
      // console.log("content3:",content3)
      // content3.push(
      //     <ForumArticleMain
      //       test={totalCards[0]}
      //       forumDetailId={forumInfoshow}
      //     />
      //   );
    }
    // setContent4(content3.slice())
    // console.log("content4:",content4)

    setDisplay(<div className="row forumCard_Items no-gutters">{content}</div>);

    setDisplay3(content3);

    totalArticles = props.info2;
    totalArticlePages = Math.ceil(totalArticles.length / 3);
    if (totalArticles.length > 0) {
      // console.log(props.info2);
      props.setArticleTotalPage(totalArticlePages);
      for (
        let i = 3 * (nowArticlePage - 1);
        nowArticlePage === totalArticlePages ? i < totalArticles.length : i < 3 * nowArticlePage;
        i++
      ) {
        if (totalArticles.length > 0) {
          // console.log(":", totalCards[i]);
          content2.push(<ArticleListCard
            info2={totalArticles[i]}
            setArticleInfoshow={setArticleInfoshow}
          />);
        }
      }
    }
    // if (totalArticles.length > 0) {
    //   console.log(props.info2);
    //   for (let i = 0; i < totalArticles.length; i++) {
    //     content2.push(
    //       <ArticleListCard
    //         info2={totalArticles[i]}
    //         setArticleInfoshow={setArticleInfoshow}
    //       />
    //     );
    //   }
    // }

    setDisplay2(
      <div className="row socialArticleCardItems no-gutters">{content2}</div>
    );
  }, [props.info, props.info2,nowPage,nowArticlePage]);

  return (
    <>
      <div className="container">
        <div className="row">
          <span className="socialTitle header4">討論交流</span>
        </div>
        <div className="container forumMain d-flex">
        <SocialEditButton/> 
        <div className="forumMainBg">
          <div className="forumBCItemsControl">
            <div className="forumTopBigCard">{display3}</div>
          </div>
        </div>
          <ForumArrowItems />
        </div>
      </div>
      <div className="container-fluid forumMiddle">
        <div className="container">
          <div className="row forumMiddleItems">
            <span className="row forumMiddleBox">
              <div>
                <h3 className="header5">更多話題</h3>
                <div className="forumMiddleLine" />
                <p className="caption">看看現在在討論什麼</p>
              </div>
              <button
                className="btn-orange forumMiddleBtn"
                type="button"
                value="前往列表"
              >
                前往列表
              </button>
            </span>
            <span className="row forumMiddleBox">
              <div>
                <h3 className="header5">寵物知識</h3>
                <div className="forumMiddleLine" />
                <p className="caption">有些小事告訴你</p>
              </div>
              <button
                className="btn-orange forumMiddleBtn"
                type="button"
                value="前往知識"
              >
                前往知識
              </button>
            </span>
          </div>
        </div>
      </div>
      <ForumNewsMain />

      <div className="container forumAllCardList">
        <div className="forumAllCardBT">
          <div className="row forumNewsTitle">
            <span className="forumTitleLine"></span>
            <h3 className="forum_BTitle">討論話題</h3>
            <span className="forumTitleLine"></span>
          </div>
        </div>
        <div className="container-fluid forum_AllCardItems">
          <div className="row forumAllCardBtnItems">
            <div className="allCardBtnLeft">
              <div className="allCardBtn_Type btn-filter">
                <button className="filterbtn">
                  全部 <i className="fas fa-caret-down"></i>
                </button>
                <div className="btn-filter-content">
                  <a href="#">全部</a>
                  <a href="#">貓</a>
                  <a href="#">狗</a>
                </div>
              </div>
              <div className="allCardBtn_Issue btn-filter">
                <button className="filterbtn">
                  日常 <i className="fas fa-caret-down"></i>
                </button>
                <div className="btn-filter-content">
                  <a href="#">日常</a>
                  <a href="#">行為</a>
                  <a href="#">照護</a>
                </div>
              </div>
            </div>
            <div className="allCardBtnRight">
              <div className="allCardBtn_Rank btn-filter">
                <button className="filterbtn">
                  由新到舊 <i className="fas fa-caret-down"></i>
                </button>
                <div className="btn-filter-content">
                  <a href="#">由新到舊</a>
                  <a href="#">由舊到新</a>
                </div>
              </div>
            </div>
          </div>
          {/* forum列表 */}
          {display}
          {/* 從首頁拿來的arrow */}
          <ForumCardPagebar />
        </div>

        <div className="forumNewsLineBetween" />
      </div>
      <div className="container forumSaySomething">
        <h3 className="enHeader2 forumSayBigText">or -</h3>
        <p className="header5 forumSaySText">從文章中找到新話題。</p>
      </div>

      <div className="container petknowledgeMain">
        <div className="row socialforumItems no-gutters">
          <div className="container bigArticleRange">
            <div>
              <div className="row petknowledgeTitle">
                <span className="forumTitleLine"></span>
                <h3 className="forum_BTitle">寵物知識</h3>
                <span className="forumTitleLine"></span>
              </div>
            </div>
            <ArticleDetailPage articleDetailId={articleInfoshow} />
            <div className="petknowledgeRight">
              <div className="petknowledgeType">
                <h3 className="header5">善用分類篩選</h3>
                <div className="petknowledgeSLine" />
                <p className="caption">幫助您找到更多寶貝知識</p>
              </div>
              <div className="allCardBtn_Issue btn-filter">
                <button className="filterbtn">
                  全部 <i className="fas fa-caret-down"></i>
                </button>
                <div className="btn-filter-content">
                  <a href="#">全部</a>
                  <a href="#">貓</a>
                  <a href="#">狗</a>
                </div>
              </div>
            </div>
            {/* 文章清單 */}
            {display2}
          </div>
          <ArticleCardPagebar />
        </div>
      </div>
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
  gotoPage,
  setTotalPage,
  setArticleTotalPage,
})(SocialForum);
