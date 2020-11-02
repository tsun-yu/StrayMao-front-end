import React, { useState, useEffect } from "react";

function SocialHomeTop(props) {
  return (
    <>
      <div className="socialTitleMain">
        <div className="socialBTitle enHeader1">SOCIAL</div>
        <div className="socialTitleLine">
          <p className="socialSTitle paragraph2">社群活動一覽</p>
        </div>
      </div>
        <div className="container socialtopItems">
          <div className="row topCardItems no-gutters">
            <div className="topArticleItems">
              <div className="grayCover">
                <span className="header2 coverText">知識</span>
              </div>
              <div className="topCard">
                <img
                  className="topCardImg"
                  src="/image/homepage/homepage-1.jpg"
                />
                <div className="topCardText">
                  <p className="topCardTitle">知識</p>
                  <a className="topCardP">>了解更多</a>
                </div>
              </div>
            </div>
            <div className="topTalkItems">
              <div className="grayCover" style={{ visibility: "hidden" }}>
                <span className="header2 coverText">話題</span>
              </div>
              <div className="bigTopCard">
                <img
                  className="bigCardImg"
                  src="/image/homepage/homepage-1.jpg"
                />
                <div className="topCardText">
                  <p className="topCardTitle">話題</p>
                  <a className="topCardP">>了解更多</a>
                </div>
              </div>
            </div>
            <div className="topActivityItems">
              <div className="grayCover">
                <span className="header2 coverText">活動</span>
              </div>
              <div className="topCard">
                <img
                  className="topCardImg"
                  src="/image/homepage/homepage-1.jpg"
                />
                <div className="topCardText">
                  <p className="topCardTitle">活動</p>
                  <a className="topCardP">>了解更多</a>
                </div>
              </div>
            </div>
          </div>
          <span className="row grayarrowItems">
            <span className="toparrow-left">
              <img
                className="inlineArrow"
                src="./icomoon/SVG/_101-chevron-left-solid.svg"
                alt=""
              ></img>
            </span>
            <span className="toparrow-right">
              <img
                className="inlineArrow"
                src="./icomoon/SVG/_102-chevron-right-solid.svg"
                alt=""
              ></img>
            </span>
          </span>
        </div>
        <div className="row topBtnItems d-flex">
          <div className="topBtnBox">
            <button class="btn-green topBtnW" type="button" value="發起活動">
              發起活動
            </button>
            <button class="btn-brown topBtnW" type="button" value="加入討論">
              加入討論
            </button>
          </div>
        </div>
    </>
  );
}

export default SocialHomeTop;
