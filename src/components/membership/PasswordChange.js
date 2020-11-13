import React, { useState, useEffect } from 'react'
import "../../styles/membership/custom.scss";

function PasswordChange(props) {
return(
<>
<div className="topicStyle">MEMBER</div>
<div className="memberInfoBackground">
    <div className="btn-group memberInfoTop2" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-primary memberBtnLeft">會員資料修改</button>
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

export default PasswordChange