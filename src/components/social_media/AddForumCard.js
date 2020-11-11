import React, { useState, useEffect } from "react";

function AddForumCard(props) {
  return (
    <>
      <div className="addForumBox">
        <h3>建立話題</h3>
        <div className="row">
          <div class="btn-filter">
            <button class="filterbtn">
              全部 <i class="fas fa-caret-down"></i>
            </button>
            <div class="btn-filter-content">
              <a href="#">全部</a>
              <a href="#">貓</a>
              <a href="#">狗</a>
            </div>
          </div>
          <div class="btn-filter">
            <button class="filterbtn">
              日常 <i class="fas fa-caret-down"></i>
            </button>
            <div class="btn-filter-content">
              <a href="#">飲食</a>
              <a href="#">行為</a>
              <a href="#">照護</a>
            </div>
          </div>
        </div>
        <div className="addContentBox">
          <div className="addContentTop">
            <span>
              <div className="addAutorImg"></div>
              <p className="addAutorName"></p>
            </span>
          </div>
          <div className="addIssueItems addfontItems">
            <label for="addIssue">討論主題</label>
            <input type="text" className="addIssueStyle" id="addIssue" />
          </div>
          <div>
            <textarea
              className="articleContent"
              id="articleContent"
              rows="5"
            ></textarea>
          </div>

          <div className="addContentItems"></div>
        </div>
        <button class="btn-green" type="button" value="確認新增">
          確認新增
        </button>
      </div>
      <form>
        <input
          name=""
          type=""
          onChange=""
          value=""
        />
        <input
          name=""
          type=""
          onChange=""
          value=""
        />
        <input/>
      </form>
    </>
  );
}

export default AddForumCard;
