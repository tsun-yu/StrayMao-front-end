import React, { useState, useEffect } from "react";

function SocialHomeArticle(props) {
  return (
    <>
      <div className="container d-flex socialArticleMain">
        <div className="row socialforumItems no-gutters">
          <div className="container socialforumMainItems">
            <div className="socialforumTop">
              <div className="header4">知識</div>
              <div className="socialArticleTextBox">
                <span className="socialforumText">
                  想知道的一切，都能在這裡找到。
                </span>
              </div>
            </div>
            <div className="row socialArticleCardItems no-gutters">
              <div className="singleArticleCard">
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
              <div className="singleArticleCard">
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
              <div className="singleArticleCard">
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
            <div className="row socialforumBottom no-gutters">
              <div className="socialArticleBottomline" />
              <button
                className="socialforumBottomBtn btn-brown"
                type="button"
                value="查看更多"
              >
                查看更多
              </button>
              <div className="socialArticleBottomline" />
            </div>
          </div>
          <span className="container-fluid socialforumArrowItems">
            <img
              className="socialfixArrow-left greenarrow-left"
              src="./icomoon/SVG/_017-greenarrow-left.svg"
              alt=""
            />
            <img
              className="socialfixArrow-right greenarrow-right"
              src="./icomoon/SVG/_018-greenarrow-right.svg"
              alt=""
            />
          </span>
        </div>
      </div>
    </>
  );
}

export default SocialHomeArticle;
