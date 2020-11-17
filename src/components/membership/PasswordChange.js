import React, { useState, useEffect } from 'react'
import { withRouter} from 'react-router-dom';
//user used
import "../../styles/membership/custom.scss";
import {MEMBER_API_URL} from "../../actions/membership/actionTypes";
import LogInInfo from './LogInInfo';

function PasswordChange(props) {
  //檢查登入狀態 >> 取得要render畫面的內容
  const [member , setMember] = useState({});  //登入者資訊
  const [renderList , setRenderList] = useState([]);
  useEffect(()=>{
    if(member == null){
      props.history.push("/signInForm");
    }else{
      // if(member.memberId != null) getMyFavorite();
    }
  },[member]);
  
return(
<>
<div className="topicStyle">能給我個家嗎? 爸脫~</div>
<div className="memberInfoBackground">
  <div className="btn-group memberInfoTop2" role="group" aria-label="Basic example">
      <button type="button"
              className="btn btn-primary memberBtnLeft"
              onClick={() => {
                props.history.push('/memberInfo');
              }}
              >會員資料修改</button>
      <button type="button" className="btn btn-primary memberBtnRight">密碼修改</button>
  </div>


<form className="passwordChangeForm">
  <div className="passwordChangeSet">重新設定登入密碼</div>
  <div className="wrapFlex4">
    <div className="form-group fgFlex">
      <label for="exampleInputPassword1">輸&nbsp;&nbsp;入&nbsp;&nbsp;&nbsp;<span className="pointWord">舊</span>&nbsp;&nbsp;&nbsp;密&nbsp;&nbsp;碼&nbsp;：</label>
      <input type="password" className="form-control infoInput" id="exampleInputPassword1" placeholder="Password"/>
    </div>

    <div className="setNewPassword">
        <div className="form-group fgFlex">
        <label for="exampleInputPassword1">輸&nbsp;&nbsp;入&nbsp;&nbsp;&nbsp;<span className="pointWord">新</span>&nbsp;&nbsp;&nbsp;密&nbsp;&nbsp;碼&nbsp;：</label>
        <input type="password" className="form-control infoInput" id="exampleInputPassword1" placeholder="Password"/>
        </div>

        <div className="form-group fgFlex">
        <label for="exampleInputPassword1">輸入<span className="pointWord">新</span>密碼碼確認：</label>
         <input type="password" className="form-control infoInput" id="exampleInputPassword1" placeholder="Password"/>
        </div>
    </div>
  </div>

</form>
  <div className="btn-group memberInfoTop" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-primary memberBtnLeft">取消修改</button>
        <button type="button" className="btn btn-primary memberBtnRight">確認送出</button>
  </div>
</div>
</>
)}

export default withRouter(PasswordChange);