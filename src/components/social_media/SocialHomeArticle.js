import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import ArticleListCard from "./ArticleListCard";
import ArticleHomeCardPagebar from "./ArticleHomeCardPagebar";
import { getArticleListAsync } from "../../actions/social_media/index";
import { gotoPage, setArticleTotalPage, } from '../../actions/common/index';
import { withRouter, useHistory } from "react-router-dom";

function SocialHomeArticle(props) {
  const [display2, setDisplay2] = useState(<></>);
  const content2=[];

  let nowArticlePage = props.nowArticlePage;
  let totalArticles = props.info2;
  let totalArticlePages = Math.ceil(totalArticles.length / 3);

  useEffect(() => {
    props.getArticleListAsync();
  }, [])

  useEffect(() => {
    let totalArticles = props.info2;
    let totalArticlePages = Math.ceil(totalArticles.length / 3);
    if(totalArticles.length > 0) {
      props.setArticleTotalPage(totalArticlePages);
      
      for (let i = 3 * (nowArticlePage - 1);
      nowArticlePage === totalArticlePages ? i < totalArticles.length : i < 3 * nowArticlePage;
      i++) {
        if (totalArticles.length > 0) {
          console.log(":", totalArticles[i]);
          content2.push(<ArticleListCard info2={totalArticles[i]} />);
        }
      }   
    }
    setDisplay2(content2);},[props.info2,nowArticlePage]);

  return (
    <>
      <div className="container d-flex socialArticleMain">
        <div className="row socialforumItems no-gutters">
          <div className="container socialforumMainItems">
            <div className="socialforumTop">
              <div className="header4">知識</div>
              <div className="socialArticleTextBox">
                <span className="socialforumText">
                  想知道的一切，都能在這裡找到。
                </span>
              </div>
            </div>
            <div className="row socialArticleCardItems no-gutters">
              {display2}
            </div>
            <div className="row socialforumBottom no-gutters">
              <div className="socialArticleBottomline" />
              <button
                className="socialforumBottomBtn btn-brown"
                type="button"
                value="查看更多"
                onClick={() => {
                    console.log(props)
                    props.history.push('/socialForum');
                  }}
              >
                查看更多
              </button>
              <div className="socialArticleBottomline" />
            </div>
          </div>
          <ArticleHomeCardPagebar/>
        </div>
      </div>
    </>
  );
}


const mapStateToProps = (store) => {
  return { 
    info2: store.socialReducer.getArticleList,
    nowArticlePage: store.nowArticlePage,
    totalArticlePage: store.totalArticlePage,};
};
const mapDispatchToProps = null;

export default withRouter(
  connect(mapStateToProps, {
    getArticleListAsync,
    gotoPage,
    setArticleTotalPage,
  })(SocialHomeArticle)
);
