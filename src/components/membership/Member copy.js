//used elemect
import React, { useEffect, useState } from "react";
import { connect } from 'react-redux'
import { BrowserRouter as Router , Route , Link , Switch , useHistory } from "react-router-dom";
import { withRouter }  from "react-router-dom";

//page
import MemberInfo from "./MemberInfo";
import PasswordChange from "./PasswordChange";
import MyComment from "./MyComment";
import PetArea from "./PetArea";
import MyFavorite from "./MyFavorite";
import RegisteredForm from "./RegisteredForm";
import SignInForm from "./SignInForm";

function Member(props){
  console.log("props:" , props)
  let isAuth = false;
  let account = "";

  const saveAcc = localStorage.getItem("loginAccount");
  console.log("saveAcc:", saveAcc);
  if (saveAcc != null && saveAcc.length > 0) {
    //已登入
    isAuth = true;
    account = saveAcc;

    //轉址會員中心
    props.history.push('/member/memberInfo');
  } else {
    //轉址會員登入
    props.history.push('/member/signInForm');
  }

  return (
    <>
    <div className="memberStatusGroup">
      <h3 className="memberStatus" id="memberStatusId">
        目前會員狀態：{isAuth ? "歡迎回家~" : "登出" }
      </h3>
      {isAuth ? 
        <button className="memberStatusBtn" onClick={() => {
            props.history.push('/member/signInForm');
          }}>登出</button> : 
        <button 
          className="memberStatusBtn"
          onClick={() => {
            props.history.push('/member/signInForm');
          }}>登入</button>
      }
    </div>
    
    <Router>
      <Switch>
        {/* 注意：要加上網址參數 */}
        <Route exact path="/member" >
          <SignInForm />
        </Route>
        <Route path="/memberInfo">
          {/*要連線的網頁*/}
          <MemberInfo />
        </Route>
        <Route path="/petArea">
          {/*要連線的網頁*/}
          <PetArea />
        </Route>
        <Route path="/member/myComment">
          {/*要連線的網頁*/}
          <MyComment />
        </Route>
        <Route path="/member/myFavorite">
          {/*要連線的網頁*/}
          <MyFavorite />
        </Route>
        <Route path="/member/passwordChange">
          {/*要連線的網頁*/}
          <PasswordChange />
        </Route>
        <Route path="/member/registeredForm">
          {/*要連線的網頁*/}
          <RegisteredForm />
        </Route>
        <Route path="/member/signInForm">
          {/*要連線的網頁*/}
          <SignInForm />
        </Route>
      </Switch>
    </Router>
    </>
  )
}

const mapStateToProps = (store) => {
  return {}
}
const mapDispatchToProps = null

export default withRouter(connect(mapStateToProps, {})(Member));