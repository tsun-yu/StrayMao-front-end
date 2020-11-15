import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  articleDisLikeAsync,
  articleLikeAsync,
  articleInitLikeAsync,
} from '../../actions/social_media/index';

function ArticleDetail(props) {
  const [likeIcon, setLikeIcon] = useState(<></>);

  useEffect(() => {
    setLikeIcon(
      props.getdetail.heart ? (
        <svg className="icon-003-heart">
          <path d="M23.13,9.68l-.68-5.56a.93.93,0,0,0-.35-.61L17.77.19a.89.89,0,0,0-1-.06L11.57,3.28,6.38.13a.91.91,0,0,0-1,.06L1,3.51a.93.93,0,0,0-.35.61L0,9.68a.91.91,0,0,0,.31.8l10.67,9a.91.91,0,0,0,1.16,0l10.66-9A.94.94,0,0,0,23.13,9.68Z"></path>
        </svg>
      ) : (
        <svg className="icon-002-heart">
          <path d="M23.13,9.68l-.68-5.56a.93.93,0,0,0-.35-.61L17.77.19a.89.89,0,0,0-1-.06L11.57,3.28,6.38.13a.91.91,0,0,0-1,.06L1,3.51a.93.93,0,0,0-.35.61L0,9.68a.91.91,0,0,0,.31.8l10.67,9a.91.91,0,0,0,1.16,0l10.66-9A.94.94,0,0,0,23.13,9.68ZM11.57,17.57,1.86,9.41l.57-4.69L6,2,11.1,5.11a.93.93,0,0,0,.94,0L17.16,2,20.7,4.72l.57,4.69Z"></path>
        </svg>
      )
    );
  }, []);


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
          <a
            href="##"
            className="articleHeartBox"
            onClick={() => {
              if (props.getdetail.heart) {
                props.articleDisLikeAsync(props.getdetail.articleId);
                props.getdetail.heart = false;
                setLikeIcon(
                  <svg className="icon-002-heart">
                    <path d="M23.13,9.68l-.68-5.56a.93.93,0,0,0-.35-.61L17.77.19a.89.89,0,0,0-1-.06L11.57,3.28,6.38.13a.91.91,0,0,0-1,.06L1,3.51a.93.93,0,0,0-.35.61L0,9.68a.91.91,0,0,0,.31.8l10.67,9a.91.91,0,0,0,1.16,0l10.66-9A.94.94,0,0,0,23.13,9.68ZM11.57,17.57,1.86,9.41l.57-4.69L6,2,11.1,5.11a.93.93,0,0,0,.94,0L17.16,2,20.7,4.72l.57,4.69Z"></path>
                  </svg>
                );
                console.log('dislike!!!');
              } else {
                props.articleLikeAsync(props.getdetail.articleId);
                props.getdetail.heart = true;
                setLikeIcon(
                  <svg className="icon-003-heart">
                    <path d="M23.13,9.68l-.68-5.56a.93.93,0,0,0-.35-.61L17.77.19a.89.89,0,0,0-1-.06L11.57,3.28,6.38.13a.91.91,0,0,0-1,.06L1,3.51a.93.93,0,0,0-.35.61L0,9.68a.91.91,0,0,0,.31.8l10.67,9a.91.91,0,0,0,1.16,0l10.66-9A.94.94,0,0,0,23.13,9.68Z"></path>
                  </svg>
                );
                console.log('like!!!');
              }
            }}
          >
            {likeIcon}
          </a>
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
  return {like: store.socialReducer.articleHeart,};
};
const mapDispatchToProps = null;

export default connect(mapStateToProps, {articleDisLikeAsync,
  articleLikeAsync,
  articleInitLikeAsync,})(ArticleDetail);
