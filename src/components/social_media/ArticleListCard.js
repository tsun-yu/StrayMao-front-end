import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { articleDetailId } from "../../actions/social_media/index";
import { withRouter, useHistory } from "react-router-dom";

function ArticleListCard(props) {
  const { setArticleInfoshow } = props;
  return (
    <>
      <div className="singleArticleCard">
        <div className="socialArticleCard">
          <img
            className="socialArticleCardImg"
            src={
              props.info2.articlePic === null
                ? "/image/homepage/homepage-1.jpg"
                : props.info2.articlePic
            }
            object-fit="cover"
          />
          <div className="container">
            <div className="row socialArticleTitle">
              <span className="socialArticleBT enHeader5">
                {props.info2.issueType}
              </span>
              <span
                className="socialArticleST header6"
                style={{ WebkitBoxOrient: "vertical" }}
              >
                {props.info2.articleTitle}
              </span>
            </div>
            <div className="socialArticleContent caption">
              {props.info2.articleContent}
            </div>
            <a
              className="socialArticleLink caption"
              onClick={() => {
                props.articleDetailId(props.info2.articleId)
                setArticleInfoshow(props.info2.articleId);
                document.getElementById("petknowledgeTitle").scrollIntoView();
              }}
            >
              more+
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (store) => {
  return {
    detailId: store.socialReducer.articleDetailId,
  };
};
const mapDispatchToProps = null;

export default withRouter(
  connect(mapStateToProps, { articleDetailId })(ArticleListCard)
);
