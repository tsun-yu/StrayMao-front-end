import React, { useState, useEffect } from 'react'
import "../../styles/membership/custom.scss";

function SignInForm(props) {
  const { isAuth, setIsAuth } = props;
  // const handleLoginToggle

return(
  <>
    <h3>目前會員狀態：{isAuth ? '登入' : '登出'}</h3>
    <button onClick={() => setIsAuth(true)}>登入</button>
    <button onClick={() => setIsAuth(false)}>登出</button>

    <div className="topicStyle">登入會員</div>
    <div className="memberInfoBackground signInBackground">
      <form className="signInForm">
        <div className="wrapFlex4">
          <div className="form-group fgFlex signInInputEmail">
            <label for="inputEmail1">帳號：</label>
            <input 
              type="email" 
              className="form-control infoInput" 
              id="exampleInputEmail1"
              aria-describedby="emailHelp" 
              placeholder="Enter email"
            />
          </div>
          <small id="emailHelp" className="form-text text-muted inputTip">
            帳號為您註冊時登錄的Email。
          </small>

          <div className="setNewPassword">
            <div className="form-group fgFlex">
              <label for="exampleInputPassword1">密碼：</label>
              <input 
                type="password" 
                className="form-control infoInput" 
                id="exampleInputPassword1" 
                placeholder="Password"/>
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

export default SignInForm