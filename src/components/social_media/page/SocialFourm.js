import React, { useState, useEffect } from "react";
import FourmArticlePage from "../commponents/SocialFourm/FourmArticlePage";
import FourmArticleBox from "../commponents/SocialFourm/FourmArticleBox";
import FourmReply from "../commponents/SocialFourm/FourmReply";

function SocialFourm(props) {
  return (
    <>
      <div className="">
        <div className="container">
          <div className="row">
            <span className="socialTitle header4">討論交流</span>
          </div>
          <div className="container fourmMain">
            <div className="fourmMainBg" />
            <div className="socialEditButtom paragraph2">
              <div className="fourmMyEdit">
                <span>建立話題</span>
                <img
                  className="pinkarrow"
                  src="./icomoon/SVG/_103-plus-white.svg"
                  alt=""
                />
              </div>
              <div className="fourmMyEdit">
                <span>我的話題</span>
                <img
                  className="pinkarrow"
                  src="./icomoon/SVG/_104-pencil-white.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="container fourmArticleMain">
              <div className="fourmArticleImgBox">
                <img
                  className="fourmArticleImg"
                  src="/image/homepage/homepage-1.jpg"
                />
              </div>
              <div className="fourmArticleContent">
                <div className="fourmArticleTopLine" />
                <span className="row fourmAutor paragraph2">
                  <img
                    className="fourmAutorImg"
                    src="/image/homepage/homepage-1.jpg"
                  />
                  <p>路人甲已</p>
                </span>
                <span className="fourmArticleDate enParagraph">
                  2020. 09/30
                </span>
                <div className="fourmArticleTItems">
                  <h3 className="fourmArticleTitle header6">
                    帶你家狗狗出來玩吧！
                  </h3>
                  <div className="fourmArticleText caption">
                    我家的狗最近有點笨，不知道是不是缺乏
                    玩伴，因此我想辦法帶他去各種地方玩，
                    但是這幾天實在是不知道能去哪了，求推
                    薦！我家的狗最近有點笨，不知道是不是缺乏
                    玩伴，因此我想辦法帶他去各種地方玩，
                    但是這幾天實在是不知道能去哪了，求推 薦！
                  </div>
                </div>
              <button className="fourmReplyHiden paragraph2" type="button" value="隱藏留言">隱藏留言</button>
              </div>
            </div>
            <span className="fourmArrowItems">
              <span className="arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17.636"
                  height="21.653"
                  viewBox="0 0 17.636 21.653"
                >
                  <path
                    id="Path_1866"
                    data-name="Path 1866"
                    d="M.584,8.77,11.69.391a1.5,1.5,0,0,1,2.5,1.025l.431,16.072c.117,1.039-1.176,1.427-2.006.83L.584,10.846A1.216,1.216,0,0,1,.584,8.77Z"
                    transform="translate(1.501 1.531)"
                    fill="none"
                    stroke="#ed8f8f"
                    stroke-miterlimit="10"
                    stroke-width="3"
                  />
                </svg>
              </span>
              <span className="arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18.381"
                  height="22.256"
                  viewBox="0 0 18.381 22.256"
                >
                  <path
                    id="Path_1865"
                    data-name="Path 1865"
                    d="M.584,8.77,11.69.391a1.5,1.5,0,0,1,2.5,1.025l.431,16.072c.117,1.039-1.176,1.427-2.006.83L.584,10.846A1.216,1.216,0,0,1,.584,8.77Z"
                    transform="matrix(-0.999, -0.035, 0.035, -0.999, 16.179, 20.673)"
                    fill="none"
                    stroke="#ed8f8f"
                    stroke-miterlimit="10"
                    stroke-width="3"
                  />
                </svg>
              </span>
            </span>
          </div>
        </div>
      </div>
      <FourmArticlePage />
      <FourmArticleBox />
      <FourmReply />
    </>
  );
}

export default SocialFourm;
