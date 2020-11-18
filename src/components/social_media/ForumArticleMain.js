import React, { useState, useEffect } from "react";
import ForumReplyMain from "./ForumReplyMain";
import { connect } from "react-redux";
import { getForumDetailAsync } from "../../actions/social_media/index";
let j = 0
function ForumArticleMain(props) {
  const [topviewsize,setTopviewsize]=useState(1);

  function smallView(){
    let el = document.querySelectorAll(".forumArticleLinkBox");
    let e2 = document.querySelectorAll(".forumReplyMain");
    let e3 = document.querySelectorAll(".forumArticleContent");
    let e4 = document.querySelectorAll(".forumReplyHiden");
    let elLen = el.length;
    let e2Len = e2.length;
    let e3Len = e3.length;
    let e4Len = e4.length;
    for( let i=0 ; i < elLen ; i++){el[i].style.display="none";}
    for( let i=0 ; i < e2Len ; i++){e2[i].style.display="none";}
    for( let i=0 ; i < e3Len ; i++){e3[i].style.height="425px";}
    for( let i=0 ; i < e4Len ; i++){e4[i].innerHTML="顯示留言";}
    
    document.querySelector(".forumMainBg").style.height="500px";
    document.querySelector(".forumMain").style.height="700px";
    
    setTopviewsize(0);
  }

  function bigView(){
    let el = document.querySelectorAll(".forumArticleLinkBox");
    let e2 = document.querySelectorAll(".forumReplyMain");
    let e3 = document.querySelectorAll(".forumArticleContent");
    let e4 = document.querySelectorAll(".forumReplyHiden");
    let elLen = el.length;
    let e2Len = e2.length;
    let e3Len = e3.length;
    let e4Len = e4.length;
    for( let i=0 ; i < elLen ; i++){el[i].style.display="";}
    for( let i=0 ; i < e2Len ; i++){e2[i].style.display="";}
    for( let i=0 ; i < e3Len ; i++){e3[i].style.height="";}
    for( let i=0 ; i < e4Len ; i++){e4[i].innerHTML="隱藏留言";}
    
    document.querySelector(".forumMainBg").style.height="";
    document.querySelector(".forumMain").style.height="";
    
    setTopviewsize(1);
  }

  let fbhtml_url=document.location.href

  useEffect(() => {
    j++
    console.log("j = ",j," id = :",props.forumDetailId)
    let id = props.forumDetailId ?? 1;
    props.getForumDetailAsync(id);
  }, [props.forumDetailId]);

  return (
    <div className="container forumArticleMain d-flex">
      <div className="forumArticleImgBox">
        <span className="container forum_TypeBox">
          <p className="enHeader6 forum_BigType">Type.</p>
          <div className="socialforum_Type">
            <div className="row paragraph1 no-gutters">
              {props.test.petType} /
            </div>
            <div className="row paragraph1 socialSType no-gutters">
              {props.test.issueType}
            </div>
          </div>
          <span className="forum_TypeBg" />
        </span>
        <img
          className="forumArticleImg"
          src={
            props.test.talkPic===null?
            "/image/homepage/homepage-1.jpg"
            :props.test.talkPic
          }
        />
        <div className="forumArticleLinkBox header7">
          <div className="forumArticleLinkTitle">
            <p>喜歡這個話題嗎？</p>
            <p>你可以這樣做：</p>
          </div>
          <div className="forumArticleLinkText">
            <h3 className="header5"><a href={{javascript:void(0)}} onClick={()=>{window.open('http://www.facebook.com/sharer/sharer.php?u='+fbhtml_url);return false;}}>分享出去</a></h3>
            <div className="forumLinkLine" />
            <p className="caption">讓朋友加入討論</p>
          </div>
        </div>
      </div>
      <div className="forumArticleContent">
        <div className="forumArticleTopLine" />
        <div className="row forumAutor paragraph2 no-gutters">
          <img className="forumAutorImg" src="/image/homepage/homepage-1.jpg" />
          <p>{props.test.memberId}</p>
        </div>
        <span className="forumArticleDate enParagraph">
          {props.test.createAt}
        </span>
        <div className="forumArticleTItems">
          <h3 className="forumArticleTitle header6">
            {props.test.talkTitle}
          </h3>
          <div className="forumArticleText caption">
            {props.test.talkContent}
          </div>
        </div>
        <button
          className="forumReplyHiden paragraph2"
          type="button"
          onClick={()=>{
            topviewsize === 1
            ? smallView() 
            : bigView();
          }}
        >
          隱藏留言
        </button>
        <ForumReplyMain id={props.test.talkId}/>
      </div>
    </div>
  );
}

const mapStateToProps = (store) => {
  return {
    getdetail2: store.socialReducer.getForumDetail,
    forumDetailId: store.socialReducer.forumDetailId,
  };
};
const mapDispatchToProps = null;

export default connect(mapStateToProps, {
  getForumDetailAsync,
})(ForumArticleMain);
