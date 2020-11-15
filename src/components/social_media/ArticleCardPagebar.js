import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { articlePervPage, articleNextPage } from "../../actions/common/index";
import { nowArticlePage, totalArticlePage } from "../../reducers/common/pageBar2";

function ArticleCardPagebar(props) {

    const startPage = props.nowArticlePage - 1 > 0 ? props.nowArticlePage - 1 : -1;
    const endPage = props.nowArticlePage + 1 <= props.totalArticlePage ? props.nowArticlePage + 1 : -1;
  
    const content = [];
    if (props.totalArticlePage > 5) {
      if (endPage == -1) {
        contentManger(props.totalArticlePage - 2, props.nowArticlePage, 2, content, props);
      } else if (startPage == -1) {
        contentManger(1, props.nowArticlePage, 2, content, props);
      } else {
        contentManger(startPage, props.nowArticlePage, 2, content, props);
      }
    } else {
      contentManger(1, props.nowArticlePage, props.totalArticlePage - 1, content, props);
    }


  return (
    <>
    <span className="container-fluid bigArticleArrowItems">
      {content}
      </span>
    </>
  );
}
const contentManger = (start, nowArticlePage, length, content, props) => {
  content.push(
    nowArticlePage == 1 ? (
      <li key="start" style={{listStyle:"none"}}>
        <a href="#" onClick={(event) => {event.preventDefault()}}></a>
      </li>
    ) : (
      <li key="start">
        <a href="#" onClick={event =>{props.articlePervPage();event.preventDefault();}}>
        <img
              className="socialfixArrow-left greenarrow-left"
              src="./icomoon/SVG/_017-greenarrow-left.svg"
              alt=""
            />
        </a>
      </li>
    )
  );
  
  content.push(
    nowArticlePage == props.totalArticlePage ? (
      <li key="end" style={{listStyle:"none"}}>
        <a href="#" onClick={(event) => {event.preventDefault()}}></a>
      </li>
    ) : (
      <li key="end">
        <a href="#" onClick={event => {props.articleNextPage();event.preventDefault();console.log("nowPrge:",nowArticlePage)}}>
        <img
              className="socialfixArrow-right greenarrow-right"
              src="./icomoon/SVG/_018-greenarrow-right.svg"
              alt=""
            />
        </a>
      </li>
    )
  );
};


const mapStateToProps = (store) => {
  return { nowArticlePage: store.nowArticlePage, totalArticlePage: store.totalArticlePage };
};
const mapDispatchToProps = null;

export default connect(mapStateToProps, {
  articlePervPage,
  articleNextPage,
})(ArticleCardPagebar);
