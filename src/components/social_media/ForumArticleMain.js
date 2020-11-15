import React, { useState, useEffect } from "react";
import ForumReplyMain from "./ForumReplyMain";
import { connect } from "react-redux";
import { getForumDetailAsync } from "../../actions/social_media/index";
let j = 0
function ForumArticleMain(props) {

  useEffect(() => {
    j++
    console.log("j = ",j," id = :",props.forumDetailId)
    let id = props.forumDetailId ?? 1;
    props.getForumDetailAsync(id);
  }, [props.forumDetailId]);

  return (
    <div className="container forumArticleMain d-flex">
      <div className="forumArticleImgBox">
        <span className="container forum_TypeBox">
          <p className="enHeader6 forum_BigType">Type.</p>
          <div className="socialforum_Type">
            <div className="row paragraph1 no-gutters">
              {props.test.petType} /
            </div>
            <div className="row paragraph1 socialSType no-gutters">
              {props.test.issueType}
            </div>
          </div>
          <span className="forum_TypeBg" />
        </span>
        <img
          className="forumArticleImg"
          src={
            props.test.talkPic===null?
            "/image/homepage/homepage-1.jpg"
            :props.test.talkPic
          }
        />
        <div className="forumArticleLinkBox header7">
          <div className="forumArticleLinkTitle">
            <p>喜歡這個話題嗎？</p>
            <p>你可以這樣做：</p>
          </div>
          <div className="forumArticleLinkText">
            <h3 className="header5">分享出去</h3>
            <div className="forumLinkLine" />
            <p className="caption">讓朋友加入討論</p>
          </div>
        </div>
      </div>
      <div className="forumArticleContent">
        <div className="forumArticleTopLine" />
        <div className="row forumAutor paragraph2 no-gutters">
          <img className="forumAutorImg" src="/image/homepage/homepage-1.jpg" />
          <p>{props.test.memberId}</p>
        </div>
        <span className="forumArticleDate enParagraph">
          {props.test.createAt}
        </span>
        <div className="forumArticleTItems">
          <h3 className="forumArticleTitle header6">
            {props.test.talkTitle}
          </h3>
          <div className="forumArticleText caption">
            {props.test.talkContent}
          </div>
        </div>
        <button
          className="forumReplyHiden paragraph2"
          type="button"
          value="隱藏留言"
        >
          隱藏留言
        </button>
        <ForumReplyMain id={props.test.talkId}/>
      </div>
    </div>
  );
}

const mapStateToProps = (store) => {
  return {
    getdetail2: store.socialReducer.getForumDetail,
    forumDetailId: store.socialReducer.forumDetailId,
  };
};
const mapDispatchToProps = null;

export default connect(mapStateToProps, {
  getForumDetailAsync,
})(ForumArticleMain);
