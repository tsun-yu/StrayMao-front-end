import React, { useState, useEffect } from "react";

function SocialHomeFourm(props) {
  return (
    <>
      <div className="container d-flex socialFourmMain">
        <div className="row socialFourmItems no-gutters">
          <div className="container socialFourmMainItems">
            <div className="socialFourmTop">
              <div className="header4">話題</div>
              <div className="socialFourmTextBox">
                <span className="socialFourmText">
                  大家都在討論什麼，都能在這裡找到。
                </span>
              </div>
            </div>
            <div className="row socialFourmCardItems no-gutters">
              <div className="singleRankCard">
                <div className="socialFourmCard">
                  <span className="container fourmTitleBox">
                    <div className="socialFourmTitle">
                      <div className="enHeader6">2020.</div>
                      <div className="enParagraph">9.30</div>
                    </div>
                    <span className="socialFourmBTitile paragraph1">
                      用可愛的臉騙吃騙喝
                    </span>
                  </span>
                  <span className="fourmCardBg" />
                  <img
                    className="socialFourmCardImg"
                    src="/image/homepage/homepage-1.jpg"
                    object-fit="cover"
                  />
                  <span className="fourmTypeBox">
                    <div className="container socialFourmType">
                      <div className="row paragraph1 no-gutters">貓 /</div>
                      <div className="row paragraph1 socialSType no-gutters">
                        日常
                      </div>
                    </div>
                    <span className="fourmTypeBg" />
                  </span>
                </div>
              </div>
              <div className="singleRankCard">
                <div className="socialFourmCard">
                  <span className="fourmTitleBox">
                    <div className="socialFourmTitle">
                      <div className="enHeader6">2020.</div>
                      <div className="enParagraph">9.30</div>
                    </div>
                    <span className="socialFourmBTitile paragraph1">
                      用可愛的臉騙吃騙喝
                    </span>
                  </span>
                  <span className="fourmCardBg" />
                  <img
                    className="socialFourmCardImg"
                    src="/image/homepage/homepage-1.jpg"
                    object-fit="cover"
                  />
                  <span className="fourmTypeBox">
                    <div className="container socialFourmType">
                      <div className="row paragraph1 no-gutters">貓 /</div>
                      <div className="row paragraph1 socialSType no-gutters">
                        日常
                      </div>
                    </div>
                    <span className="fourmTypeBg" />
                  </span>
                </div>
              </div>
              <div className="singleRankCard">
                <div className="socialFourmCard">
                  <span className="container fourmTitleBox">
                    <div className="socialFourmTitle">
                      <div className="enHeader6">2020.</div>
                      <div className="enParagraph">9.30</div>
                    </div>
                    <span className="socialFourmBTitile paragraph1">
                      用可愛的臉騙吃騙喝
                    </span>
                  </span>
                  <span className="fourmCardBg" />
                  <img
                    className="socialFourmCardImg"
                    src="/image/homepage/homepage-1.jpg"
                    object-fit="cover"
                  />
                  <span className="fourmTypeBox">
                    <div className="container socialFourmType">
                      <div className="row paragraph1 no-gutters">貓 /</div>
                      <div className="row paragraph1 socialSType no-gutters">
                        日常
                      </div>
                    </div>
                    <span className="fourmTypeBg" />
                  </span>
                </div>
              </div>
              <div className="singleRankCard">
                <div className="socialFourmCard">
                  <span className="container fourmTitleBox">
                    <div className="socialFourmTitle">
                      <div className="enHeader6">2020.</div>
                      <div className="enParagraph">9.30</div>
                    </div>
                    <span className="socialFourmBTitile paragraph1">
                      用可愛的臉騙吃騙喝
                    </span>
                  </span>
                  <span className="fourmCardBg" />
                  <img
                    className="socialFourmCardImg"
                    src="/image/homepage/homepage-1.jpg"
                    object-fit="cover"
                  />
                  <span className="fourmTypeBox">
                    <div className="container socialFourmType">
                      <div className="row paragraph1 no-gutters">貓 /</div>
                      <div className="row paragraph1 socialSType no-gutters">
                        日常
                      </div>
                    </div>
                    <span className="fourmTypeBg" />
                  </span>
                </div>
              </div>
            </div>
            <div className="row socialFourmBottom no-gutters">
              <div className="socialFourmBottomline" />
              <button
                className="socialfourmBottomBtn btn-green"
                type="button"
                value="加入討論"
              >
                加入討論
              </button>
              <div className="socialFourmBottomline" />
            </div>
          </div>
          <span className="container-fluid socialFourmArrowItems">
            <img
              class="socialfixArrow-left brownarrow-left"
              src="./icomoon/SVG/_011-brownarrow-left.svg"
              alt=""
            />
            <img
              class="socialfixArrow-right brownarrow-right"
              src="./icomoon/SVG/_012-brownarrow-right.svg"
              alt=""
            />
          </span>
        </div>
      </div>
    </>
  );
}

export default SocialHomeFourm;
