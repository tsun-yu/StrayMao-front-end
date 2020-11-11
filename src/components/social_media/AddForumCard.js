import React, { useState, useEffect } from "react";

function AddForumCard(props) {
  return (
    <>
      <div className="addForumBox">
      <span className="addBigEXit"><img
          src="./icomoon/SVG/_014-cancel.svg"
          alt=""
        /></span>
        <h3 className="addForumTitle">建立話題</h3>
        <div className="row addForumBtnControl">
          <div className="btn-filter addforumright">
            <button className="filterbtn">
              全部 <i className="fas fa-caret-down"></i>
            </button>
            <div className="btn-filter-content">
              <a href="#">全部</a>
              <a href="#">貓</a>
              <a href="#">狗</a>
            </div>
          </div>
          <div className="btn-filter addforumright">
            <button className="filterbtn">
              日常 <i className="fas fa-caret-down"></i>
            </button>
            <div className="btn-filter-content">
              <a href="#">飲食</a>
              <a href="#">行為</a>
              <a href="#">照護</a>
            </div>
          </div>
        </div>
        <div className="container addContentBox">
          <div className="row addContentTop">
            <span className="addAutorItems">
              <div className="addAutorImg" />
              <p className="addAutorName">路人甲乙</p>
            </span>
          </div>
          <div className="addIssueItems">
            <label for="addIssue" className="addIssueT">討論主題</label>
            <input type="text" className="addIssueStyle" id="addIssue" />
          </div>
          <div>
            <textarea
              className="articleContent"
              id="articleContent"
            ></textarea>
          </div>
          <div className="row addControlelse">
            <div className="row addImg">
            <img
          className="pinkIcon"
          src="./icomoon/SVG/_084-image.svg"
          alt=""
        />
        <p className="addImgText">未上傳圖片</p>
            </div>
        <div className="row c">
            <img
          className="pinkIcon"
          src="./icomoon/SVG/_059-logout.svg"
          alt=""
        />
            </div>
          </div>
        </div>
        <div className="addbtnControl">
          <button className="btn-green" type="button" value="確認新增">
          確認新增
        </button>
        </div> 
      </div>
    </>
  );
}

export default AddForumCard;
