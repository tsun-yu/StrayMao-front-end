import React, { useState, useEffect } from 'react'
import { withRouter} from 'react-router-dom';
//user used
import "../../styles/membership/custom.scss";
import {MEMBER_API_URL} from "../../actions/membership/actionTypes";
import MyComment_card from './MyComment_card';
import LogInInfo from './LogInInfo2';

function MyComment(props) {
  //檢查登入狀態 >> 取得要render畫面的內容
  const [member , setMember] = useState({});  //登入者資訊
  useEffect(()=>{
    if(member.memberId != null) getMyComment();
  },[member]);

  const [doSave , setDoSave] = useState(null);
  useEffect(() => {
    if(doSave != null) {
      console.log("收到更新訊息了!!" , doSave);
      addMyCommemt();
    }
  },[doSave]);

  //更新評價
  const [renderList , setRenderList] = useState([]);
  async function addMyCommemt() {
    const url = MEMBER_API_URL + "/addMyCommemtList";
    const condition = doSave;
    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify(condition),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    });
    const response = await fetch(request)
    const rsObj = await response.json();  //轉成物件
    if(rsObj.success) alert("評價已送出!!");
  }

  //拉取顯示列表
  async function getMyComment() {
    const url = MEMBER_API_URL + "/getMyCommemtList";
    const condition = {
      memberId: member.memberId
    };
    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify(condition),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    });
    const response = await fetch(request)
    const rsObj = await response.json();  //轉成物件
    setRenderList(rsObj.data);
  }

return(
<>
  <LogInInfo
    setMember = {setMember}
    history = {props.history}
  />

  {renderList.length > 0 && renderList.map((element, i) => {
    return <MyComment_card 
      info={element} 
      setDoSave = {setDoSave} 
    />;
  })}

</>
)}

export default withRouter(MyComment);