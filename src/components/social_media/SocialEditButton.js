import React, { useState, useEffect } from "react";

function SocialEditButton(props) {
  return (
    <div className="socialEditButton paragraph2">
      <div className="forumMyEdit">
        <span>建立話題</span>
        <img
          className="pinkarrow"
          src="./icomoon/SVG/_103-plus-white.svg"
          alt=""
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

export default SocialEditButton;
