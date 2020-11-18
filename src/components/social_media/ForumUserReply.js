import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter, useHistory } from 'react-router-dom';

function ForumUserReply(props) {
  return (
    <div className="singleforumUserReply">
          <div className="forumUserReply">
            <div className="forumUserReplyItems">
              <span className="row paragraph2">
                <img
                  className="forumUserImg"
                  src={props.info3.memberPic}
                />
                <p className="forum_Name">{props.info3.memberName}</p>
                <span className="forumUserRBtn">
                  <button className="btn-brown" type="button" value="回覆">
                    回覆
                  </button>
                </span>
              </span>
            </div>
            <div className="forumUserReplyText caption">
              <p>
              {props.info3.content}
              </p>
              <p>{props.info3.createAt}</p>
            </div>
          </div>
        </div>
  );
}

const mapStateToProps = (store) => {
  return {};
};
const mapDispatchToProps = null;

export default withRouter(connect(mapStateToProps, {})(ForumUserReply));