import React, { useState, useEffect } from "react";
import SocialEditButton from "./SocialEditButton";
import ForumArticleMain from "./ForumArticleMain";
import ForumArrowItems from "./ForumArrowItems";
import ForumListCard from "./ForumListCard";
import ForumNewsMain from "./ForumNewsMain";
import ArticleListCard from "./ArticleListCard";
import ArticleDetailPage from "./ArticleDetailPage";
import { connect } from "react-redux";

import {
  getForumListAsync,
  getArticleListAsync,
} from "../../actions/social_media/index";

function SocialForum(props) {
  const [display, setDisplay] = useState(<></>);
  const [display2, setDisplay2] = useState(<></>);
  const [articleInfoshow, setArticleInfoshow] = useState(<></>);
  const [forumInfoshow, setForumInfoshow] = useState(<></>);

  const content = [];
  const content2 = [];
  let totalCards = props.info;
  let totalArticles = props.info2;
  useEffect(() => {
    props.getForumListAsync();
    props.getArticleListAsync();
  }, []);

  useEffect(() => {
    if (totalCards.length > 0) {
      console.log(props.info);
      for (let i = 0; i < totalCards.length; i++) {
        content.push(
          <ForumListCard
            info={totalCards[i]}
            setForumInfoshow={setForumInfoshow}
          />
        );
      }
    }

    setDisplay(<div className="row forumCard_Items no-gutters">{content}</div>);

    if (totalArticles.length > 0) {
      console.log(props.info2);
      for (let i = 0; i < totalArticles.length; i++) {
        content2.push(
          <ArticleListCard
            info2={totalArticles[i]}
            setArticleInfoshow={setArticleInfoshow}
          />
        );
      }
    }

    setDisplay2(
      <div className="row socialArticleCardItems no-gutters">{content2}</div>
    );
  }, [props.info, props.info2]);

  return (
    <>
      <div className="container">
        <div className="row">
          <span className="socialTitle header4">討論交流</span>
        </div>
        <div className="container forumMain">
          <div className="forumMainBg" />
          <SocialEditButton />
          <ForumArticleMain forumDetailId={forumInfoshow}/>
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
          <span className="container-fluid forumAllCardArrowItems">
            <img
              className="socialfixArrow-left brownarrow-left"
              src="./icomoon/SVG/_011-brownarrow-left.svg"
              alt=""
            />
            <img
              className="socialfixArrow-right brownarrow-right"
              src="./icomoon/SVG/_012-brownarrow-right.svg"
              alt=""
            />
          </span>
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
          <span className="container-fluid bigArticleArrowItems">
            <img
              className="socialfixArrow-left greenarrow-left"
              src="./icomoon/SVG/_017-greenarrow-left.svg"
              alt=""
            />
            <img
              className="socialfixArrow-right greenarrow-right"
              src="./icomoon/SVG/_018-greenarrow-right.svg"
              alt=""
            />
          </span>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (store) => {
  return {
    info: store.socialReducer.getForumList,
    info2: store.socialReducer.getArticleList,
  };
};
const mapDispatchToProps = null;

export default connect(mapStateToProps, {
  getArticleListAsync,
  getForumListAsync,
})(SocialForum);
