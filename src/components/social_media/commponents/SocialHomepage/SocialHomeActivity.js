import React, { useState, useEffect } from "react";

function SocialHomeActivity(props) {
  return (
    <>
      <div className="container d-flex socialActivityMain">
        <span className="container socialActivityBg" />
        <div className="row socialActivityItems no-gutters">
          <div className="container socialActivityMainItems">
            <div className="socialFourmTop">
              <div className="header4">活動</div>
              <div className="socialArticleTextBox">
                <span className="socialFourmText">
                  跟著感興趣的活動，出去走走吧！
                </span>
              </div>
            </div>
            <div className="row socialActivityCardItems no-gutters">
              <div className="singleActivityCard">
                <span className="activityCardTopBg" />
                <div className="row activityCardTopItems">
                  <span className="activityCardTop_left">
                    <ul className="enHeader6">
                      <span className="enHeader5 activityCardTop_leftT">
                        2020.
                      </span>
                      <li>9/30</li>
                      <li>
                        <div className="activityCardTop_leftLine" />
                      </li>
                      <li>10/30</li>
                    </ul>
                  </span>
                  <div className="activityCardTop_right header6">
                    <p>帶你家狗狗出來玩吧！</p>
                  </div>
                </div>
                <div className="row activityCardBottomItmes">
                  <div className="activityPeopleBox">
                    <div className="activityPeopleImg">
                      <img
                        src="/image/homepage/homepage-1.jpg"
                        alt="會員名字"
                      />
                    </div>
                    <p className="caption activityPeopleName">路人甲已</p>
                  </div>
                  <div className="activityTextBox">
                    <div className="socialActivitySTitle paragraph2">台北</div>
                    <div className="caption socialActivitySText">
                      <p>
                        最近天氣不錯，家裡毛小孩一直想出門。所以想說不如約…
                      </p>
                    </div>
                    <a className="socialArticleLink caption">more+</a>
                  </div>
                </div>
              </div>
           
              <div className="singleActivityCard">
                <span className="activityCardTopBg" />
                <div className="row activityCardTopItems">
                  <span className="activityCardTop_left">
                    <ul className="enHeader6">
                      <span className="enHeader5 activityCardTop_leftT">
                        2020.
                      </span>
                      <li>9/30</li>
                      <li>
                        <div className="activityCardTop_leftLine" />
                      </li>
                      <li>10/30</li>
                    </ul>
                  </span>
                  <div className="activityCardTop_right header6">
                    <p>帶你家狗狗出來玩吧！</p>
                  </div>
                </div>
                <div className="row activityCardBottomItmes">
                  <div className="activityPeopleBox">
                    <div className="activityPeopleImg">
                      <img
                        src="/image/homepage/homepage-1.jpg"
                        alt="會員名字"
                      />
                    </div>
                    <p className="caption activityPeopleName">路人甲已</p>
                  </div>
                  <div className="activityTextBox">
                    <div className="socialActivitySTitle paragraph2">台北</div>
                    <div className="caption socialActivitySText">
                      <p>
                        最近天氣不錯，家裡毛小孩一直想出門。所以想說不如約…
                      </p>
                    </div>
                    <a className="socialArticleLink caption">more+</a>
                  </div>
                </div>
              </div>

              <div className="singleActivityCard">
                <span className="activityCardTopBg" />
                <div className="row activityCardTopItems">
                  <span className="activityCardTop_left">
                    <ul className="enHeader6">
                      <span className="enHeader5 activityCardTop_leftT">
                        2020.
                      </span>
                      <li>9/30</li>
                      <li>
                        <div className="activityCardTop_leftLine" />
                      </li>
                      <li>10/30</li>
                    </ul>
                  </span>
                  <div className="activityCardTop_right header6">
                    <p>帶你家狗狗出來玩吧！</p>
                  </div>
                </div>
                <div className="row activityCardBottomItmes">
                  <div className="activityPeopleBox">
                    <div className="activityPeopleImg">
                      <img
                        src="/image/homepage/homepage-1.jpg"
                        alt="會員名字"
                      />
                    </div>
                    <p className="caption activityPeopleName">路人甲已</p>
                  </div>
                  <div className="activityTextBox">
                    <div className="socialActivitySTitle paragraph2">台北</div>
                    <div className="caption socialActivitySText">
                      <p>
                        最近天氣不錯，家裡毛小孩一直想出門。所以想說不如約…
                      </p>
                    </div>
                    <a className="socialArticleLink caption">more+</a>
                  </div>
                </div>
              </div>

              <div className="singleActivityCard">
                <span className="activityCardTopBg" />
                <div className="row activityCardTopItems">
                  <span className="activityCardTop_left">
                    <ul className="enHeader6">
                      <span className="enHeader5 activityCardTop_leftT">
                        2020.
                      </span>
                      <li>9/30</li>
                      <li>
                        <div className="activityCardTop_leftLine" />
                      </li>
                      <li>10/30</li>
                    </ul>
                  </span>
                  <div className="activityCardTop_right header6">
                    <p>帶你家狗狗出來玩吧！</p>
                  </div>
                </div>
                <div className="row activityCardBottomItmes">
                  <div className="activityPeopleBox">
                    <div className="activityPeopleImg">
                      <img
                        src="/image/homepage/homepage-1.jpg"
                        alt="會員名字"
                      />
                    </div>
                    <p className="caption activityPeopleName">路人甲已</p>
                  </div>
                  <div className="activityTextBox">
                    <div className="socialActivitySTitle paragraph2">台北</div>
                    <div className="caption socialActivitySText">
                      <p>
                        最近天氣不錯，家裡毛小孩一直想出門。所以想說不如約…
                      </p>
                    </div>
                    <a className="socialArticleLink caption">more+</a>
                  </div>
                </div>
              </div>

              <div className="singleActivityCard">
                <span className="activityCardTopBg" />
                <div className="row activityCardTopItems">
                  <span className="activityCardTop_left">
                    <ul className="enHeader6">
                      <span className="enHeader5 activityCardTop_leftT">
                        2020.
                      </span>
                      <li>9/30</li>
                      <li>
                        <div className="activityCardTop_leftLine" />
                      </li>
                      <li>10/30</li>
                    </ul>
                  </span>
                  <div className="activityCardTop_right header6">
                    <p>帶你家狗狗出來玩吧！</p>
                  </div>
                </div>
                <div className="row activityCardBottomItmes">
                  <div className="activityPeopleBox">
                    <div className="activityPeopleImg">
                      <img
                        src="/image/homepage/homepage-1.jpg"
                        alt="會員名字"
                      />
                    </div>
                    <p className="caption activityPeopleName">路人甲已</p>
                  </div>
                  <div className="activityTextBox">
                    <div className="socialActivitySTitle paragraph2">台北</div>
                    <div className="caption socialActivitySText">
                      <p>
                        最近天氣不錯，家裡毛小孩一直想出門。所以想說不如約…
                      </p>
                    </div>
                    <a className="socialArticleLink caption">more+</a>
                  </div>
                </div>
              </div>

              <div className="singleActivityCard">
                <span className="activityCardTopBg" />
                <div className="row activityCardTopItems">
                  <span className="activityCardTop_left">
                    <ul className="enHeader6">
                      <span className="enHeader5 activityCardTop_leftT">
                        2020.
                      </span>
                      <li>9/30</li>
                      <li>
                        <div className="activityCardTop_leftLine" />
                      </li>
                      <li>10/30</li>
                    </ul>
                  </span>
                  <div className="activityCardTop_right header6">
                    <p>帶你家狗狗出來玩吧！</p>
                  </div>
                </div>
                <div className="row activityCardBottomItmes">
                  <div className="activityPeopleBox">
                    <div className="activityPeopleImg">
                      <img
                        src="/image/homepage/homepage-1.jpg"
                        alt="會員名字"
                      />
                    </div>
                    <p className="caption activityPeopleName">路人甲已</p>
                  </div>
                  <div className="activityTextBox">
                    <div className="socialActivitySTitle paragraph2">台北</div>
                    <div className="caption socialActivitySText">
                      <p>
                        最近天氣不錯，家裡毛小孩一直想出門。所以想說不如約…
                      </p>
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
          <span className="container-fluid socialActivityArrowItems">
            <img
              className="socialfixArrow-left grayarrow-left"
              src="./icomoon/SVG/_024-grayarrow-left.svg"
              alt=""
            />
            <img
              className="socialfixArrow-right grayarrow-right"
              src="./icomoon/SVG/_025-grayarrow-right.svg"
              alt=""
            />
          </span>
        </div>
      </div>
    </>
  );
}

export default SocialHomeActivity;
