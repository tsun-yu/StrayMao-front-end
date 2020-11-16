import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import ForumListCard from "./ForumListCard";
import { getForumList } from "../../actions/social_media/index";
import { getForumListAsync } from "../../actions/social_media/index";
import { withRouter, useHistory } from "react-router-dom";

function SocialHomeforum(props) {
  // const content = [];
  // let totalCards = props.getForumList;

  return (
    <>
      <div className="container d-flex socialforumMain">
        <div className="row socialforumItems no-gutters">
          <div className="container socialforumMainItems">
            <div className="socialforumTop">
              <div className="header4">話題</div>
              <div className="socialforumTextBox">
                <span className="socialforumText">
                  大家都在討論什麼，都能在這裡找到。
                </span>
              </div>
            </div>
            <div className="row socialforumCardItems no-gutters">
              {/* <ForumListCard /> */}
              {/* 這邊要放卡片元件 */}
              {/* <div className="singleRankCard">
                <div className="socialforumCard">
                  <span className="forumTitleBox">
                    <div className="socialforumTitle">
                      <div className="enHeader6">2020.</div>
                      <div className="enParagraph">9.30</div>
                    </div>
                    <span className="socialforumBTitile paragraph1">
                      用可愛的臉騙吃騙喝
                    </span>
                  </span>
                  <span className="forumCardBg" />
                  <img
                    className="socialforumCardImg"
                    src="/image/homepage/homepage-1.jpg"
                    object-fit="cover"
                  />
                  <span className="forumTypeBox">
                    <div className="container socialforumType">
                      <div className="row paragraph1 no-gutters">貓 /</div>
                      <div className="row paragraph1 socialSType no-gutters">
                        日常
                      </div>
                    </div>
                    <span className="forumTypeBg" />
                  </span>
                </div>
              </div> */}
            </div>
            <div className="row socialforumBottom no-gutters">
              <div className="socialforumBottomline" />
              <button
                className="socialforumBottomBtn btn-green"
                type="button"
                value="加入討論"
              >
                加入討論
              </button>
              <div className="socialforumBottomline" />
            </div>
          </div>
          <span className="container-fluid socialforumArrowItems">
            <img
              className="socialfixArrow-left brownarrow-left"
              src="./icomoon/SVG/_011-brownarrow-left.svg"
              alt=""
            />
            <img
              className="socialfixArrow-right brownarrow-right"
              src="./icomoon/SVG/_012-brownarrow-right.svg"
              alt=""
            />
          </span>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (store) => {
  return { info: store.socialReducer.getForumList };
};
const mapDispatchToProps = null;

export default withRouter(
  connect(mapStateToProps, {
    getForumList,
    getForumListAsync,
  })(SocialHomeforum)
);
