import React, { useState, useEffect } from 'react'
import "../../styles/membership/custom.scss";

function Page1(props) {
return(
<>
<div className="topicStyle">登入會員</div>
<div className="memberInfoBackground signInBackground">
  <form className="signInForm">
      <div className="wrapFlex4">
        <div className="form-group fgFlex">
          <label for="exampleInputPassword1">帳號：</label>
          <input type="password" className="form-control infoInput" id="exampleInputPassword1" placeholder="Password"/>
        </div>

        <div className="setNewPassword">
          <div className="form-group fgFlex">
            <label for="exampleInputPassword1">密碼：</label>
            <input type="password" className="form-control infoInput" id="exampleInputPassword1" placeholder="Password"/>
          </div>
        </div>
      </div>
  </form>
  <div className="btn-group memberInfoTop" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-primary memberBtnLeft">取消登入</button>
        <button type="button" className="btn btn-primary memberBtnRight">確認送出</button>
  </div>
</div>
</>
)}

export default Page1