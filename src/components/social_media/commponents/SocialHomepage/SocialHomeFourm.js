import React, { useState, useEffect } from "react";

function SocialHomeFourm(props) {
  return (
    <>
      <div className="container-fluid d-flex socialFourmMain">
        <div className="row socialFourmItems no-gutters">
          <div className="socialFourmMainItems">
            <div className="conatiner socailFourmTop">
              <div className="header4">話題</div>
              <div className="socailFourmTextBox">
                <span className="socialFourmText">
                  大家都在討論什麼，都能在這裡找到。
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
                    <span className="socialFourmBTitile paragraph1">用可愛的臉騙吃騙喝</span>
                  </span>
                  <span className="fourmCardBg"></span>
                  <img
                    className="socailFourmCardImg"
                    src="/image/homepage/homepage-1.jpg"
                    object-fit="cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SocialHomeFourm;
