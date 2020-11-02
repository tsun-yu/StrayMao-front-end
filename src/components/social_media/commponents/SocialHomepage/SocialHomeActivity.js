import React, { useState, useEffect } from "react";

function SocialHomeActivity(props) {
  return (
    <>
      <div className="container d-flex socialActivityMain">
      <span className="container socialActivityBg"/>
        <div className="row socialFourmItems no-gutters">
          <div className="container socialFourmMainItems">
            <div className="socialFourmTop">
              <div className="header4">活動</div>
              <div className="socialArticleTextBox">
                <span className="socialFourmText">
                  跟著感興趣的活動，出去走走吧！
                </span>
              </div>
            </div>
            <div className="row socialArticleCardItems no-gutters">
              <div className="singleActivityCard">
                <div className="socialArticleCard">
                  <img
                    className="socialArticleCardImg"
                    src="/image/homepage/homepage-1.jpg"
                    object-fit="cover"
                  />
                  <div className="container">
                    <div className="row socialArticleTitle">
                      <span className="socialArticleBT enHeader5">All</span>
                      <span className="socialArticleST header6">
                        貓咪們都會這樣，你知道嗎？
                      </span>
                    </div>
                    <div className="socialArticleContent caption">
                      貓咪們都會這樣，你知道嗎？
                      <br />
                      貓咪們都會這樣，你知道嗎？
                    </div>
                    <a className="socialArticleLink caption">more+</a>
                  </div>
                </div>
              </div>
              
              
            </div>
            <div className="row socialFourmBottom no-gutters">
              <div className="socialArticleBottomline" />
              <button
                className="socialfourmBottomBtn btn-green"
                type="button"
                value="發起活動"
              >
                發起活動
              </button>
              <div className="socialArticleBottomline" />
            </div>
          </div>
          <span className="container-fluid socialFourmArrowItems">
            <img
              class="socialfixArrow-left greenarrow-left"
              src="./icomoon/SVG/_017-greenarrow-left.svg"
              alt=""
            />
            <img
              class="socialfixArrow-right greenarrow-right"
              src="./icomoon/SVG/_018-greenarrow-right.svg"
              alt=""
            />
          </span>
        </div>
      </div>
    </>
  );
}

export default SocialHomeActivity;
