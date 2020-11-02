import React, { useState, useEffect } from "react";

function SocialHomeArticle(props) {
  return (
    <>
      <div className="container d-flex socialArticleMain">
        <div className="row socialFourmItems no-gutters">
          <div className="container socialFourmMainItems">
            <div className="socailFourmTop">
              <div className="header4">知識</div>
              <div className="socailFourmTextBox">
                <span className="socialFourmText">
                  想知道的一切，都能在這裡找到。
                </span>
              </div>
            </div>
            <div className="row socialFourmCardItems no-gutters">
              <div className="singleRankCard">
                <div className="socailFourmCard">
                  <span className="container fourmTitleBox">
                    <div className="socailFourmTitle">
                      <div className="enHeader6">2020.</div>
                      <div className="enParagraph">9.30</div>
                    </div>
                    <span className="socialFourmBTitile paragraph1">
                      用可愛的臉騙吃騙喝
                    </span>
                  </span>
                  <span className="fourmCardBg" />
                  <img
                    className="socailFourmCardImg"
                    src="/image/homepage/homepage-1.jpg"
                    object-fit="cover"
                  />
                  <span className="fourmTypeBox">
                    <div className="container socailFourmType">
                      <div className="row paragraph1 no-gutters">貓 /</div>
                      <div className="row paragraph1 socailSType no-gutters">
                        日常
                      </div>
                    </div>
                    <span className="fourmTypeBg" />
                  </span>
                </div>
              </div>
              <div className="singleRankCard">
                <div className="socailFourmCard">
                  <span className="fourmTitleBox">
                    <div className="socailFourmTitle">
                      <div className="enHeader6">2020.</div>
                      <div className="enParagraph">9.30</div>
                    </div>
                    <span className="socialFourmBTitile paragraph1">
                      用可愛的臉騙吃騙喝
                    </span>
                  </span>
                  <span className="fourmCardBg" />
                  <img
                    className="socailFourmCardImg"
                    src="/image/homepage/homepage-1.jpg"
                    object-fit="cover"
                  />
                  <span className="fourmTypeBox">
                    <div className="container socailFourmType">
                      <div className="row paragraph1 no-gutters">貓 /</div>
                      <div className="row paragraph1 socailSType no-gutters">
                        日常
                      </div>
                    </div>
                    <span className="fourmTypeBg" />
                  </span>
                </div>
              </div>
              <div className="singleRankCard">
                <div className="socailFourmCard">
                  <span className="container fourmTitleBox">
                    <div className="socailFourmTitle">
                      <div className="enHeader6">2020.</div>
                      <div className="enParagraph">9.30</div>
                    </div>
                    <span className="socialFourmBTitile paragraph1">
                      用可愛的臉騙吃騙喝
                    </span>
                  </span>
                  <span className="fourmCardBg" />
                  <img
                    className="socailFourmCardImg"
                    src="/image/homepage/homepage-1.jpg"
                    object-fit="cover"
                  />
                  <span className="fourmTypeBox">
                    <div className="container socailFourmType">
                      <div className="row paragraph1 no-gutters">貓 /</div>
                      <div className="row paragraph1 socailSType no-gutters">
                        日常
                      </div>
                    </div>
                    <span className="fourmTypeBg" />
                  </span>
                </div>
              </div>
              <div className="singleRankCard">
                <div className="socailFourmCard">
                  <span className="container fourmTitleBox">
                    <div className="socailFourmTitle">
                      <div className="enHeader6">2020.</div>
                      <div className="enParagraph">9.30</div>
                    </div>
                    <span className="socialFourmBTitile paragraph1">
                      用可愛的臉騙吃騙喝
                    </span>
                  </span>
                  <span className="fourmCardBg" />
                  <img
                    className="socailFourmCardImg"
                    src="/image/homepage/homepage-1.jpg"
                    object-fit="cover"
                  />
                  <span className="fourmTypeBox">
                    <div className="container socailFourmType">
                      <div className="row paragraph1 no-gutters">貓 /</div>
                      <div className="row paragraph1 socailSType no-gutters">
                        日常
                      </div>
                    </div>
                    <span className="fourmTypeBg" />
                  </span>
                </div>
              </div>
            </div>
            <div className="row socailFourmBottom no-gutters">
              <div className="socialFourmBottomline" />
              <button
                className="socialfourmBottomBtn btn-green"
                type="button"
                value="查看更多"
              >
                查看更多
              </button>
              <div className="socialFourmBottomline" />
            </div>
          </div>
          <span className="container-fluid socialFourmArrowItems">
            <img
              class="greenarrow-left"
              src="./icomoon/SVG/_017-greenarrow-left.svg"
              alt=""
            />
            <img
              class="greenarrow-right"
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
