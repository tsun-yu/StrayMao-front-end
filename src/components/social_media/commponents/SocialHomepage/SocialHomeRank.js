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
          <div className="newsSearchBox">
            <div className="talkSearchBox d-flex no-gutters">
              <div className="talkSearchBoxItems">
                <div className="talkSearchTitle">討論主題</div>
                <div className="talkSearchType">
                  <div className="talkPetType">
                    <button
                      class="btn-orange newsBtnW"
                      type="button"
                      value="全部"
                    >
                      全部
                    </button>
                    <button
                      class="btn-orange newsBtnW"
                      type="button"
                      value="Cat"
                    >
                      Cat
                    </button>
                    <button
                      class="btn-orange newsBtnW"
                      type="button"
                      value="Dog"
                    >
                      Dog
                    </button>
                  </div>
                  <div className="talkContentType">
                    <button
                      class="btn-orange newsBtnW"
                      type="button"
                      value="美容"
                    >
                      美容
                    </button>
                    <button
                      class="btn-orange newsBtnW"
                      type="button"
                      value="照護"
                    >
                      照護
                    </button>
                    <button
                      class="btn-orange newsBtnW"
                      type="button"
                      value="日常"
                    >
                      日常
                    </button>
                    <button
                      class="btn-orange newsBtnW"
                      type="button"
                      value="行為"
                    >
                      行為
                    </button>
                  </div>
                </div>
                <div className="talkSearchGoBtn">
                  <button
                    class="btn-green searchgoBtnW"
                    type="button"
                    value="查詢"
                  >
                    查詢
                  </button>
                </div>
              </div>
            </div>
            <div className="actitivySearchBox d-flex no-gutters">
              <div className="activitySearchBoxItems">
                <div className="talkSearchTitle">活動分類</div>
                <div className="activitySearchType">
                  <div className="activityArea">
                    <button
                      class="btn-orange newsBtnW"
                      type="button"
                      value="北部"
                    >
                      北部
                    </button>
                    <button
                      class="btn-orange newsBtnW"
                      type="button"
                      value="中部"
                    >
                      中部
                    </button>
                  </div>
                  <div className="activityAreaR">
                    <button
                      class="btn-orange newsBtnW"
                      type="button"
                      value="南部"
                    >
                      南部
                    </button>
                    <button
                      class="btn-orange newsBtnW"
                      type="button"
                      value="東部"
                    >
                      東部
                    </button>
                  </div>
                </div>
                <div className="talkSearchGoBtn">
                  <button
                    class="btn-green searchgoBtnW"
                    type="button"
                    value="查詢"
                  >
                    查詢
                  </button>
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
