import React, { useState, useEffect, useCallback } from "react";

import { connect } from 'react-redux';
import { withRouter, useHistory } from 'react-router-dom';

import { addForumCardAsync,getForumReplyAsync } from "../../actions/social_media/index";
import { faWindows } from "@fortawesome/free-brands-svg-icons";
import { doc } from "prettier";


function AddForumCard(props) {

  const {current:formDatas}=React.useRef({});
  const [save,setSave]=useState("");
  const handleOnChange = React.useCallback(event=>{
    formDatas[event.target.name]=event.target.value;
    formDatas.memberId=3;
  },[]);

const handleOnSubmit = (()=>{
      
      formDatas.talkPic="/image/socialmedia/forumimg/"+ save
      // formDatas.talkPic=formDatas.talkPic.split("\\")[2]
      console.log('formDatas:',formDatas.talkPic);
      props.addForumCardAsync(formDatas);
          
  })
  

  function validate(event) { 
    if(window.confirm(`確認送出嗎?`)) {
      handleOnSubmit()
      setTimeout(props.history.push('/socialForum'),1000)
    }else{
      event.preventDefault();
    }
} 
  function addGiveUp() { 
    if(window.confirm("是否放棄離開?")){
      props.history.push('/socialForum')
    }
} 

function changeName(){
  let file = document.getElementById("addFileDefault").files[0].name;
  document.getElementById("addImgText").innerHTML=file;
  setSave(file)
  console.log(file)
}
  

  return (
    <>
      <div className="addForumBox">
      <span className="addBigEXit" onClick={()=>{addGiveUp()}}>
        <img src="./icomoon/SVG/_014-cancel.svg" alt=""/></span>
      <h3 className="addForumTitle">建立話題</h3>
        <form onChange={handleOnChange} onSubmit={validate}
        >
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
              <div><img className="addAutorImg" src="./image/membership/AvataM1.jpg"/></div>
              <p className="addAutorName">東尼‧史塔克</p>
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
            <input type="file" className="addInput" name="talkPic" id="addFileDefault" onChange={changeName}/>
            <label for="file" style={{display:"flex"}}>
              <img className="pinkIcon" src="./icomoon/SVG/_084-image.svg" alt="" />
            </label>
            <label for="fileName">
            <p className="addImgText" id="addImgText">未上傳檔案</p>
            </label>
            </div>
            {/* <div className="row">
            <img className="pinkIconExit" src="./icomoon/SVG/_059-logout.svg" alt="" />
            </div> */}
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

export default withRouter(connect(mapStateToProps, {addForumCardAsync,getForumReplyAsync})(AddForumCard));
