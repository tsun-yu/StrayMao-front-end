import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { forumDetailId } from "../../actions/social_media/index";
import { withRouter, useHistory } from "react-router-dom";

function ForumListCard(props) {
  // const {setForumInfoshow} = props;

  return (
    <>
      <div className="singleRankCard">
        <div
          className="socialforumCard"
          onClick={() => {
            props.forumDetailId(props.info.talkId);
            console.log(props.info.talkId);
            // setForumInfoshow(props.info.articleId);
          }}
        >
          <span className="container forumTitleBox">
            <div className="socialforumTitle">
              <div className="enHeader6">{props.info.createAt}</div>
              <div className="enParagraph">{props.info.createAt}</div>
            </div>
            <span className="socialforumBTitile paragraph1">
              {props.info.talkTitle}
            </span>
          </span>
          <span className="forumCardBg" />
          <img
            className="socialforumCardImg"
            src={
              props.info.talkPic === null
                ? "/image/homepage/homepage-1.jpg"
                : props.info.talkPic
            }
            object-fit="cover"
          />
          <span className="forumTypeBox">
            <div className="container socialforumType">
              <div className="row paragraph1 no-gutters">
                {props.info.petType + "\u00A0" + "/"}
              </div>
              <div className="row paragraph1 socialSType no-gutters">
                {props.info.issueType}
              </div>
            </div>
            <span className="forumTypeBg" />
          </span>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (store) => {
  return {detailId: store.socialReducer.forumDetailId,};
};
const mapDispatchToProps = null;

export default withRouter(
  connect(mapStateToProps, { forumDetailId })(ForumListCard)
);
