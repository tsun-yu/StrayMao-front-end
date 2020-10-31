import React, { useState, useEffect } from "react";

function SocialHomeNews(props) {
  return (
    <>
      <div className="container d-flex socialNewsMain">
        <div className="row socialNewsItems no-gutters">
          <div className="row socailNewsTop no-gutters">
            <span className="socailHomeNewsTitile enHeader3">News</span>
            <div className="newsScrollingItems">
              <div className="socialNewsSTItems">
                <span className="socialNewsSTitle paragraph2">話題</span>
                <div className="scrollTextItems">
                  <span className="socialNewsScrollP paragraph1">
                    咪可思X福壽100 奔跑吧！毛小孩公益半程馬拉松
                  </span>
                  <span className="socialNewsScrollP paragraph1">
                    咪可思X福壽100 奔跑吧！毛小孩公益半程馬拉松
                  </span>
                  <span className="socialNewsScrollP paragraph1">
                    咪可思X福壽100 奔跑吧！毛小孩公益半程馬拉松
                  </span>
                </div>
              </div>
              <div className="socialNewsSTItems">
                <span className="socialNewsSTitle paragraph2">活動</span>
                <div className="scrollTextItems">
                  <span className="socialNewsScrollP paragraph1">
                    咪可思X福壽100 奔跑吧！毛小孩公益半程馬拉松
                  </span>
                  <span className="socialNewsScrollP paragraph1">
                    咪可思X福壽100 奔跑吧！毛小孩公益半程馬拉松
                  </span>
                  <span className="socialNewsScrollP paragraph1">
                    咪可思X福壽100 奔跑吧！毛小孩公益半程馬拉松
                  </span>
                </div>
              </div>
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

export default SocialHomeNews;
