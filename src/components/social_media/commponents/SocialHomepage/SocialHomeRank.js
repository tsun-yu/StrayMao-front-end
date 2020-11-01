import React, { useState, useEffect } from "react";

function SocialHomeRank(props) {
  return (
    <>
      <div className="container d-flex socialRankMain">
        <span className="row socialRankBg" />
        <div className="row socialNewsItems no-gutters">
          <div className="row socailNewsTop no-gutters">
            <span className="socailHomeNewsTitile enHeader3">RANKING</span>
          </div>
          <div classNmae="row socialRankType">
            <div className="rankTypeItems">
              <button className="btn-rankType" type="button" value="All">
                All
              </button>
              <button className="btn-rankType" type="button" value="Cat">
                Cat
              </button>
              <button className="btn-rankType" type="button" value="Dog">
                Dog
              </button>
            </div>
          </div>
          <div className="socialRankBox">
            <div className="row socialRankItems no-gutters">
              <div className="singleRankCard">
                <span className="socialRankNumber enHeader2">1</span>
                <div className="socailRankCard">
                  <img
                    className="socailRankCardImg"
                    src="/image/homepage/homepage-1.jpg"
                  />
                  <div className="topCardText">
                    <div className="rankTitleBox">
                      <div className="socailRankTitle">
                        <div>2020.</div>
                        <div className="socialRankDay">9.30</div>
                      </div>
                    </div>
                    <div className="rankTextBox">
                      <div className="socialNewsSTitle paragraph2">行為</div>
                      <p className="rankTitleText paragraph2">
                        我家貓咪不開心會...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="singleRankCard">
                <span className="socialRankNumber enHeader2">2</span>
                <div className="socailRankCard">
                  <img
                    className="socailRankCardImg"
                    src="/image/homepage/homepage-1.jpg"
                  />
                  <div className="topCardText">
                    <div className="rankTitleBox">
                      <div className="socailRankTitle">
                        <div>2020.</div>
                        <div className="socialRankDay">9.30</div>
                      </div>
                    </div>
                    <div className="rankTextBox">
                      <div className="socialNewsSTitle paragraph2">行為</div>
                      <p className="rankTitleText paragraph2">
                        我家貓咪不開心會...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="singleRankCard">
                <span className="socialRankNumber enHeader2">3</span>
                <div className="socailRankCard">
                  <img
                    className="socailRankCardImg"
                    src="/image/homepage/homepage-1.jpg"
                  />
                  <div className="topCardText">
                    <div className="rankTitleBox">
                      <div className="socailRankTitle">
                        <div>2020.</div>
                        <div className="socialRankDay">9.30</div>
                      </div>
                    </div>
                    <div className="rankTextBox">
                      <div className="socialNewsSTitle paragraph2">行為</div>
                      <p className="rankTitleText paragraph2">
                        我家貓咪不開心會...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SocialHomeRank;
