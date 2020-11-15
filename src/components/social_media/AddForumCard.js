import React, { useState, useEffect } from "react";

import { connect } from 'react-redux';
import { withRouter, useHistory } from 'react-router-dom';

import { addForumCardAsync } from "../../actions/social_media/index";

function AddForumCard(props) {
  const {current:formDatas}=React.useRef({});
  const handleOnChange = React.useCallback(event=>{
    formDatas[event.target.name]=event.target.value;
    formDatas.memberId=1;
  },[]);

  const handleOnSubmit = React.useCallback(event=>{
    console.log('formDatas:',formDatas);
    props.addForumCardAsync(formDatas);
    event.preventDefault();
    props.history.push('/socialForum');
  })

  return (
    <>
      <div className="addForumBox">
      <span className="addBigEXit"><img src="./icomoon/SVG/_014-cancel.svg" alt=""/></span>
      <h3 className="addForumTitle">建立話題</h3>
        <form onChange={handleOnChange} onSubmit={handleOnSubmit}>
          <div className="row addForumBtnControl">
          <div className="btn-filter addforumright">
            <select className="filterbtn" name="petType" required>
              <option value='' selected disabled>選擇類型</option>
              <option value="1">全部</option>
              <option value="2">貓</option>
              <option value="3">狗</option>
            </select>
          </div>
          <div className="btn-filter addforumright">
            <select className="filterbtn" name="issueType" required>
              <option value='' selected disabled>選擇主題</option>
              <option value="1">日常</option>
              <option value="2">行為</option>
              <option value="3">照護</option>
              <option value="4">飲食</option>
            </select>
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
            <label htmlFor="addIssue" className="addIssueT">討論主題</label>
            <input type="text" name="talkTitle" className="addIssueStyle" id="addIssue" placeholder="請輸入標題" required />
          </div>
          <div>
            <textarea
              className="articleContent"
              name="talkContent"
              id="articleContent" placeholder="請輸入文字" required></textarea>
          </div>
          <div className="row addControlelse">
            <div className="row addImg">
            <input type="file" className="addInput" name="talkPic" id="file" />
            <label for="file" style={{display:"flex"}}>
              <img className="pinkIcon" src="./icomoon/SVG/_084-image.svg" alt="" />
            </label>
            <label for="fileName">
            <p className="addImgText">未上傳檔案</p>
            </label>
            </div>
            <div className="row">
            <img className="pinkIconExit" src="./icomoon/SVG/_059-logout.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="addbtnControl">
          <button className="btn-green" type="submit" value="確認新增">
          確認新增
          </button>
          </div> 
        </form>
      </div>
    </>
  );
}


const mapStateToProps = (store) => {
  return {};
};
const mapDispatchToProps = null;

export default withRouter(connect(mapStateToProps, {addForumCardAsync})(AddForumCard));
