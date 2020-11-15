import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter, useHistory } from 'react-router-dom';

function SocialEditButton(props) {
  return (
    <div className="socialEditButton paragraph2">
      <div className="forumMyEdit">
        <span>建立話題</span>
        <img
          className="pinkarrow"
          src="./icomoon/SVG/_103-plus-white.svg"
          alt=""
          onClick={() => {
            props.history.push("/addForum");}}
        />
      </div>
      <div className="forumMyEdit">
        <span>我的話題</span>
        <img
          className="pinkarrow"
          src="./icomoon/SVG/_104-pencil-white.svg"
          alt=""
        />
      </div>
    </div>
  );
}

const mapStateToProps = (store) => {
  return {};
};
const mapDispatchToProps = null;

export default withRouter(connect(mapStateToProps, {})(SocialEditButton));