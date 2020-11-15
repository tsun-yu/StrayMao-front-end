import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { pervPage, gotoPage, nextPage } from "../../actions/common/index";
import { nowPage, totalPage } from "../../reducers/common/pageBar";

function ForumCardPagebar(props) {

    const startPage = props.nowPage - 2 > 0 ? props.nowPage - 2 : -1;
    const endPage = props.nowPage + 2 <= props.totalPage ? props.nowPage + 2 : -1;
  
    const content = [];
    if (props.totalPage > 5) {
      if (endPage == -1) {
        contentManger(props.totalPage - 4, props.nowPage, 4, content, props);
      } else if (startPage == -1) {
        contentManger(1, props.nowPage, 4, content, props);
      } else {
        contentManger(startPage, props.nowPage, 4, content, props);
      }
    } else {
      contentManger(1, props.nowPage, props.totalPage - 1, content, props);
    }


  return (
    <>
      <span className="container-fluid forumAllCardArrowItems">
        {content}
      </span>
    </>
  );
}
const contentManger = (start, nowPage, length, content, props) => {
  content.push(
    nowPage == 1 ? (
      <li key="start" style={{listStyle:"none"}}>
        <a href="#" onClick={(event) => {event.preventDefault()}}></a>
      </li>
    ) : (
      <li key="start">
        <a href="#" onClick={event =>{props.pervPage();event.preventDefault();}}>
        <img
            className="socialfixArrow-left brownarrow-left"
            src="./icomoon/SVG/_011-brownarrow-left.svg"
            alt=""
            />
        </a>
      </li>
    )
  );
  
  content.push(
    nowPage == props.totalPage ? (
      <li key="end" style={{listStyle:"none"}}>
        <a href="#" onClick={(event) => {event.preventDefault()}}></a>
      </li>
    ) : (
      <li key="end">
        <a href="#" onClick={event => {props.nextPage();event.preventDefault();console.log("nowPrge:",nowPage)}}>
        <img
            className="socialfixArrow-right brownarrow-right"
            src="./icomoon/SVG/_012-brownarrow-right.svg"
            alt=""
            />
        </a>
      </li>
    )
  );
};


const mapStateToProps = (store) => {
  return { nowPage: store.nowPage, totalPage: store.totalPage };
};
const mapDispatchToProps = null;

export default connect(mapStateToProps, {
  pervPage,
  nextPage,
})(ForumCardPagebar);
