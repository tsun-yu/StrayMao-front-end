import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import ForumNewsFive from "./ForumNewsFive"
import ForumHotFive from "./ForumHotFive"
import {
  getNewFiveAsync,getHotFiveAsync,
} from "../../actions/social_media/index";


function SocialHomeNews(props) {

  const [newDisplay,setNewDisplay]=useState(<></>)
  const [hotDisplay,setHotDisplay]=useState(<></>)
  const newContent =[];
  const hotContent =[];

  useEffect(() => {
    props.getNewFiveAsync();
    props.getHotFiveAsync();
  }, [])

  useEffect(() => {
    let totalNews = props.new
    if (totalNews.length > 0) {
      console.log(props.new);
      for (let i = 0; i < totalNews.length; i++) {
        newContent.push(
        <span className="socialNewsScrollP paragraph1" new={totalNews[i]}>
        {props.new[i].talkTitle}
        </span>
        );
      }
  } 
  setNewDisplay(newContent)
}, [props.new])

useEffect(() => {
  let totalHot = props.hot
  if (totalHot.length > 0) {
    console.log(props.hot);
    for (let i = 0; i < totalHot.length; i++) {
      hotContent.push(
        <span className="socialNewsScrollP paragraph1" hot={totalHot[i]}>
        {props.hot[i].talkTitle}
        </span>
      );
    }
} 
setHotDisplay(hotContent)
}, [props.hot])


  return (
    <>
      <div className="container d-flex socialNewsMain">
        <div className="row socialNewsItems no-gutters">
          <div className="row socialNewsTop no-gutters">
            <span className="socialHomeNewsTitile enHeader3">News</span>
            <div className="newsScrollingItems">
              <div className="socialNewsSTItems">
                <span className="socialHotSTitle paragraph2">HOT</span>
                <div className="scrollTextItems">
                <marquee id="affiche" align="left" behavior="scroll" direction="left" height="300" width="880" vspace="20" loop="-1" scrollamount="15" scrolldelay="100" onMouseOut="this.start()" onMouseOver="this.stop()">
                {hotDisplay}
                </marquee>
                </div>
              </div>
              <div className="socialNewsSTItems">
                <span className="socialNewsSTitle paragraph2">NEW</span>
                <div className="scrollTextItems">
                <marquee id="affiche" align="middle" behavior="scroll" direction="left" height="300" width="880" vspace="20" loop="-1" scrollamount="14" scrolldelay="10" onMouseOut="this.start()" onMouseOver="this.stop()">
                {newDisplay}
                </marquee>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="newsSearchBox">
            <div className="talkSearchBox d-flex no-gutters">
              <div className="talkSearchBoxItems">
                <div className="talkSearchTitle">討論主題</div>
                <div className="talkSearchType">
                  <div className="talkPetType">
                    <button
                      className="btn-orange newsBtnW"
                      type="button"
                      value="全部"
                    >
                      全部
                    </button>
                    <button
                      className="btn-orange newsBtnW"
                      type="button"
                      value="Cat"
                    >
                      Cat
                    </button>
                    <button
                      className="btn-orange newsBtnW"
                      type="button"
                      value="Dog"
                    >
                      Dog
                    </button>
                  </div>
                  <div className="talkContentType">
                    <button
                      className="btn-orange newsBtnW"
                      type="button"
                      value="美容"
                    >
                      美容
                    </button>
                    <button
                      className="btn-orange newsBtnW"
                      type="button"
                      value="照護"
                    >
                      照護
                    </button>
                    <button
                      className="btn-orange newsBtnW"
                      type="button"
                      value="日常"
                    >
                      日常
                    </button>
                    <button
                      className="btn-orange newsBtnW"
                      type="button"
                      value="行為"
                    >
                      行為
                    </button>
                  </div>
                </div>
                <div className="talkSearchGoBtn">
                  <button
                    className="btn-green searchgoBtnW"
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
                      className="btn-orange newsBtnW"
                      type="button"
                      value="北部"
                    >
                      北部
                    </button>
                    <button
                      className="btn-orange newsBtnW"
                      type="button"
                      value="中部"
                    >
                      中部
                    </button>
                  </div>
                  <div className="activityAreaR">
                    <button
                      className="btn-orange newsBtnW"
                      type="button"
                      value="南部"
                    >
                      南部
                    </button>
                    <button
                      className="btn-orange newsBtnW"
                      type="button"
                      value="東部"
                    >
                      東部
                    </button>
                  </div>
                </div>
                <div className="talkSearchGoBtn">
                  <button
                    className="btn-green searchgoBtnW"
                    type="button"
                    value="查詢"
                  >
                    查詢
                  </button>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (store) => {
  return {
    new: store.socialReducer.getNewFive,
    hot: store.socialReducer.getHotFive,
  };
};
const mapDispatchToProps = null;

export default connect(mapStateToProps, {
  getNewFiveAsync,
  getHotFiveAsync,
})(SocialHomeNews);