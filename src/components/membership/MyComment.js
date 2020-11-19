import React, { useState, useEffect } from 'react'
import { withRouter} from 'react-router-dom';

//user used
import "react-alert-confirm/dist/index.css";
import "../../styles/membership/custom.scss";
import {MEMBER_API_URL} from "../../actions/membership/actionTypes";
import MyComment_card from './MyComment_card';
import LogInInfo from './LogInInfo2';
import DonateButton from '../common/DonateButton'
import alertConfirm from 'react-alert-confirm';


function MyComment(props) {
  //檢查登入狀態 >> 取得要render畫面的內容
  const [member , setMember] = useState({});  //登入者資訊
  useEffect(()=>{
    if(member.memberId != null) getMyComment();
  },[member]);

  const [doSave , setDoSave] = useState(null);
  useEffect(() => {
    if(doSave != null) {
      console.log("收到新評價了!!" , doSave);
      addMyCommemt();
    }
  },[doSave]);

  const [doDelete , setDoDelete] = useState(null);
  useEffect(() => {
    if(doDelete != null) {
      console.log("即將刪除..." , doDelete);
      deleteMyCommemt();
    }
  },[doDelete]);

  const [reload , setReLoad] = useState(false);
  useEffect(() => {
    getMyComment();
  },[reload]);

  //=========================function====================================
  //拉取顯示列表
  const [renderList , setRenderList] = useState([]);
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

  //更新評價
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
    if(rsObj.success) {
      setReLoad(!reload);  //讓資訊刷新
      alertConfirm({ type: 'alert', content: '評價已送出~' })
    }
  }

  //刪除自己評價
  async function deleteMyCommemt() {
    const url = MEMBER_API_URL + "/delMyCommemtList";
    const condition = doDelete;
    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify(condition),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    });
    const response = await fetch(request)
    const rsObj = await response.json();
    if(rsObj.success) {
      window.location.reload(false);
    }
  }

return(
<>
  <LogInInfo
    setMember = {setMember}
    history = {props.history}
  />
  <DonateButton />

  {renderList.length > 0 && renderList.map((element, i) => {
    return <MyComment_card 
      info={element} 
      setDoSave = {setDoSave}
      setDoDelete = {setDoDelete}
    />;
  })}

</>
)}

export default withRouter(MyComment);