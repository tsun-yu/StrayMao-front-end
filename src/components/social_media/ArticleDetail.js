import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

function ArticleDetail(props) {
  return (
    <>
      <div className="bigArticleBox">
        <div className="row bigArticleTitleItems no-gutters">
          <h3 className="enHeader5 bigArticleBTitle">
            {props.getdetail.issueType}
          </h3>
          <p className="header7 bigArticleSTitle">
            {props.getdetail.articleTitle}
          </p>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21.388"
              height="20.524"
              viewBox="0 0 21.388 20.524"
            >
              <g id="愛心" transform="translate(0.251 0.25)">
                <path
                  id="Path_1296"
                  data-name="Path 1296"
                  d="M489.508,232.381a4.73,4.73,0,0,0-5.1-3.618c-2.61-.018-5.309,2.627-5.441,6.541-.125,3.664,2.524,8.514,10.189,13.439,7.994-4.816,10.564-9.629,10.689-13.294.133-3.914-2.387-6.595-5-6.613a5.025,5.025,0,0,0-5.341,3.546"
                  transform="translate(-478.964 -228.762)"
                  fill="#fff"
                  stroke="#707070"
                  strokeWidth="0.5"
                />
                <path
                  id="Path_1297"
                  data-name="Path 1297"
                  d="M489.508,232.381a4.73,4.73,0,0,0-5.1-3.618c-2.61-.018-5.309,2.627-5.441,6.541-.125,3.664,2.524,8.514,10.189,13.439,7.994-4.816,10.564-9.629,10.689-13.294.133-3.914-2.387-6.595-5-6.613A5.025,5.025,0,0,0,489.508,232.381Z"
                  transform="translate(-478.964 -228.762)"
                  fill="none"
                  stroke="#ed8f8f"
                  strokeMiterlimit="10"
                  strokeWidth="0.5"
                />
              </g>
            </svg>
          </div>
        </div>
        <span className="bigActicleLeftLine"></span>
        <p className="caption bigArticleSText">
          撰稿人/ {props.getdetail.author}
        </p>
        <div className="row bigArticleContent">
          <img
            className="bigArticleImg"
            src={
              props.getdetail.articlePic === null
                ? "/image/homepage/homepage-1.jpg"
                : props.getdetail.articlePic
            }
          />
          <div className="bigArticleMain caption">
            <p>{props.getdetail.articleContent}</p>
          </div>
        </div>
      </div>

      {/* <div className="adopRecommand">
        <div className="col p-1">
          <AdopMainCardPic info={props.info} />
        </div>
        <div className="col">
          <AdopMainInfo info={props.info} />
        </div>
      </div>
      <AdopDetailInfo info={props.info} />

      <button
        className="btn-green d-flex justify-content-center  align-items-center m-auto"
        type="button"
        value="123"
      >
        我要領養
      </button> */}
    </>
  );
}

const mapStateToProps = (store) => {
  return {};
};
const mapDispatchToProps = null;

export default connect(mapStateToProps, {})(ArticleDetail);
