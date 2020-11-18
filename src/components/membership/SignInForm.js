import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import $ from 'jquery'
//user used
import "../../styles/membership/custom.scss";
import { MEMBER_API_URL } from "../../actions/membership/actionTypes";


function SignInForm(props) {
  const $account = document.querySelector("#account");
  const $password = document.querySelector("#password");
  const r_fields = [$account, $password];
  const infobar = $("#infobar");
  const submitBtn = document.querySelector("button[type=submit]");
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')
  const [dataLoading, setDataLoading] = useState(false)

  async function checkToLogin() {
    let isPass = true;

    r_fields.forEach((el) => {
      el.style.borderColor = "#CCCCCC";
      el.nextElementSibling.innerHTML = "";
    });

    // TODO: 檢查資料格式
    if ($account.value.length < 2) {
      isPass = false;
      $account.style.borderColor = "red";
      $account.nextElementSibling.innerHTML = "請填寫正確的姓名";
    }

    if ($password.value.length < 2) {
      isPass = false;
      $password.style.borderColor = "red";
      $password.nextElementSibling.innerHTML = "請填寫密碼";
    }

    if (isPass) {
      const url = MEMBER_API_URL + "/login";
      const Data = { account, password}
      const request = new Request(url, {
        method: 'POST',
        body: JSON.stringify(Data),
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      })
  
      const response = await fetch(request)
      const rsObj = await response.json()
      if(rsObj.success){
        const data = { ...rsObj.data };
        localStorage.setItem("loginAccount", JSON.stringify(data));
        // props.setMember(data);
        // props.setIsLogin(true);
        props.history.push("/memberInfo");
      }else{
        alert("帳號或密碼錯誤");
      }
    } else {
      submitBtn.style.display = "block";
    }
  }


return(
  <>
    <div className="topicStyle">登入會員</div>
    <div className="memberInfoBackground signInBackground">
      <form className="signInForm" onSubmit={checkToLogin}>
        <div className="wrapFlex4">
          <div className="form-group fgFlex signInInputEmail" name="form1"  novalidate>
            <label for="account">帳號：</label>
            <input 
              type="account" 
              className="form-control infoInput" 
              id="account"
              name="account"
              aria-describedby="emailHelp" 
              placeholder="Enter email"
              onChange={(event) => {
                  setAccount(event.target.value)
              }}
            />
            <small class="form-text error-msg"></small>
          </div>
          <small id="emailHelp" className="form-text text-muted inputTip">
            帳號為您註冊時登錄的Email。
          </small>
          

          <div className="setNewPassword">
            <div className="form-group fgFlex">
              <label for="password">密碼：</label>
              <input 
                type="password" 
                className="form-control infoInput" 
                id="password" 
                name="password"
                placeholder="Password"
                onChange={(event) => {
                  setPassword(event.target.value)
              }}
                />
              <small class="form-text error-msg"></small>
            </div>
          </div>
        </div>
      </form>
      <div className="btn-group memberInfoTop" role="group" aria-label="Basic example">
        <button type="button" 
                className="btn btn-primary memberBtnLeft"
                onClick={() => {
                  props.history.push('/registeredForm')
                }}>註冊會員</button>
        <button type="submit" 
                className="btn btn-primary memberBtnRight" 
                onClick={() => {
                  // checkUserToSever()
                  checkToLogin()
                  }}
                  >確認送出</button>
      </div>
    </div>
  </>
)}

export default withRouter(SignInForm)

