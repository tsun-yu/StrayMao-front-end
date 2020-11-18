import React, { useState, useEffect, cloneElement } from "react";
import ForumUserReply from "./ForumUserReply";
import { connect } from "react-redux";
import { withRouter, useHistory } from 'react-router-dom';
import { addForumReplyAsync,getForumReplyAsync } from "../../actions/social_media/index";

let i = 0

function ForumReplyMain(props) {

    const [messageContent,setMessageContent]=useState('');
    const [saveMessage,setSaveMessage]=useState(<></>);
    let totalReply = props.reply;
    const [display4,setDisplay4] = useState(<></>);
    // const [test,setTest] = useState(0);
    const content4 = [];

    const [replyDetail,setReplyDetail] = useState("") 
    async function getForumReplyOK(value) {
      const url = `http://localhost:3001/straymao/social_media/get_forumUserTalkMessage/${value}`;
  
      const request = new Request(url, {
        method: "GET",
        headers: new Headers({
          Accept: "application/json",
          "Content-Type": "application/json",
        }),
      });
      try {
        const response = await fetch(request);
        const data = await response.json();
        // data會是一個物件值
        await console.log("xxx:",data);
  
        setReplyDetail( data)
      } catch (error) {
        //setError(error)
      }
    };
    
    useEffect(()=>{
        // props.getForumReplyAsync(props.id)    
       getForumReplyOK(props.id)  
    },[])

    useEffect(()=>{    
      i++
      console.log(i," : ",replyDetail);
      // const content4 = [];
      totalReply = replyDetail;
        if (totalReply.length > 0 ) {
            for (let i = 0; i < totalReply.length; i++) {
              content4.push(
                <ForumUserReply
                  info3={totalReply[i]}
                  key={i}
                />
              )
            }
            console.log("content4 : ",props.reply)
            setDisplay4(content4);   
          }
        },[replyDetail])


  return (
    <div className="conatiner forumReplyMain">
    {/* 留言框 */}
    <div className="row forumUserTalk no-gutters justify-content-center">
      <span className="forumReplyTopLine" />
      <textarea value={messageContent} onChange={(e) => {
              console.log(e.target.value)
              setMessageContent(e.target.value)
            }}
            className="forumReplyBox"
                name="addContent"
            />
      <button className="forumUserTalkBtn" type="button" value="送出" onClick={() => {
                const newMessage = {
                  content: messageContent,
                  memberId: '3',
                  talkId:props.id
                }
                console.log(newMessage)
                props.addForumReplyAsync(newMessage);
                               
                // document.querySelector(".forumReplyBox").value = "";   
                setTimeout(()=>{
                  setMessageContent(''); 
                  getForumReplyOK(props.id) 
                  },100)
                
              }}>
        送出
      </button>
    </div>
    <div className="container">
      <div className="forumReplyContent">
        {/* 留言區 */}
        {display4}

        {/* <div className="singleforumAutorReply">
          <div className="forumAutorReply">
            <div className="forumAutorReplyItems">
              <span className="row paragraph2">
                <img
                  className="forumUserImg"
                  src="/image/homepage/homepage-1.jpg"
                />
                <p>路人甲已</p>
              </span>
            </div>
            <div className="forumAutorReplyText caption">
              <p>直接送去寵物旅館吧，包吃直接送去寵物旅館吧</p>
              <p>2020. 09/30. 10:30</p>
            </div>
          </div>
        </div> */}
        {/* 留言結束 */}

      </div>
    </div>
  </div>
  );
}

const mapStateToProps = (store) => {
  return {
      reply: store.socialReducer.getForumReply,
    };
};
const mapDispatchToProps = null;

export default withRouter(connect(mapStateToProps, {addForumReplyAsync,getForumReplyAsync})(ForumReplyMain));