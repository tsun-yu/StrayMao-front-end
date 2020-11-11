import React, { useState, useEffect } from "react";

function ForumNewsMain(props) {
  return (
    <div className="container forumNewsMain">
      <div className="forumNewsBT">
        <div className="row forumNewsTitle">
          <sapn className="forumTitleLine"></sapn>
          <h3 className="enHeader5">News</h3>
          <sapn className="forumTitleLine"></sapn>
        </div>
      </div>
      <div className="forum_NewsItems">
        <div className="row no-gutters">
          <p className="forumHotTitle">HOT</p>
          <span>咪可思X福壽100 奔跑吧！毛小孩公益半程馬拉松</span>
        </div>
      </div>
      <div className="forum_NewsItems">
        <div className="row no-gutters">
          <p className="forumNewTitle">NEW</p>
          <span className="forumNewColor">
            咪可思X福壽100 奔跑吧！毛小孩公益半程馬拉松
          </span>
        </div>
      </div>
      <div className="forumNewsLineBetween" />
    </div>
  );
}

export default ForumNewsMain;
