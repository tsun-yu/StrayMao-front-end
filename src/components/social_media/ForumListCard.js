import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { forumDetailId,getForumReplyAsync } from "../../actions/social_media/index";
import { withRouter, useHistory } from "react-router-dom";


function ForumListCard(props) {
  // const {setForumInfoshow} = props;
  // const {content4,setContent4}=props;

  // const forumInfoshow;
  // const isForumInfoshow = (e) => e.talkId = props.test.talkId;
  // console.log(forumInfoshow.findIndex(isForumInfoshow));

  return (
    <>
      <div className="singleRankCard">
        <div
          className="socialforumCard"
          onClick={() => {
            // props.forumDetailId(props.test.talkId);
            console.log(props.test);
            console.log(props.i);
            // console.log("test1:",content4);
            // setContent4([content4[0]=[props.test]);
            
            }
            // setForumInfoshow(props.test.talkId);
            // props.getForumReplyAsync(props.test.talkId);
          }
        >
          <span className="container forumTitleBox">
            <div className="socialforumTitle">
              <div className="enHeader6">{props.test.createAt}</div>
              <div className="enParagraph">{props.test.createAt}</div>
            </div>
            <span className="socialforumBTitile paragraph1">
              {props.test.talkTitle}
            </span>
          </span>
          <span className="forumCardBg" />
          <img
            className="socialforumCardImg"
            src={
              props.test.talkPic === null
                ? "/image/homepage/homepage-1.jpg"
                : props.test.talkPic
            }
            objectFit="cover"
          />
          <span className="forumTypeBox">
            <div className="container socialforumType">
              <div className="row paragraph1 no-gutters">
                {props.test.petType + "\u00A0" + "/"}
              </div>
              <div className="row paragraph1 socialSType no-gutters">
                {props.test.issueType}
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
  return {
    detailId: store.socialReducer.forumDetailId,};
};
const mapDispatchToProps = null;

export default withRouter(
  connect(mapStateToProps, { forumDetailId,getForumReplyAsync })(ForumListCard)
);
