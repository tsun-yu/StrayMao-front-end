//used elemect
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
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

function Test(props) {
  // const history = useHistory();
  
  const saveAcc = localStorage.getItem("loginAccount");
  console.log("saveAcc:", saveAcc);
  if (saveAcc != null && saveAcc.length > 0) {
    //已登入
    props.setIsAuth(true);
    console.log("isAuth:" , props.isAuth)
    console.log("Acc:" , props.account)

    //轉去會員中心
    // history.push("/memberTest/memberInfo");
    // props.history.push('/memberTest/memberInfo');
  } else {
    //轉去會員登入
    // history.push("/memberTest/signInForm");
    // props.history.push('/memberTest/signInForm');
  }
  

  return (
    <>
      <div className="memberStatusGroup">
        <h3 className="memberStatus" id="memberStatusId">
          目前會員狀態：{props.isAuth ? "歡迎回家~" : "登出" }
        </h3>
        {props.isAuth ? 
          <button className="memberStatusBtn" onClick={() => {
              // setIsAuth(false); 
              // history.push("/memberTest/signInForm"); 
              // props.history.push('/memberTest/signInForm');
            }}>登出</button> :
          <button 
            className="memberStatusBtn"
            onClick={() => {
              // props.history.push('/memberTest/signInForm');
            }}>登入</button>
        }
      </div>

      <Router>
        <div className="linkGroup">
          <Link to="/memberTest/memberInfo" id="goInfo" className="linkBtn">
            基本資料
          </Link>
          <Link to="/memberTest/petArea" className="linkBtn">
            寵物專區
          </Link>
          <Link to="/memberTest/myComment" className="linkBtn">
            我的評價
          </Link>
          <Link to="/memberTest/myFavorite" className="linkBtn">
            我的最愛
          </Link>
          <Link to="/memberTest/registeredForm" className="linkBtn">
            會員註冊
          </Link>
        </div>

        <Switch>
          {/* 注意：要加上網址參數 */}
          <Route exact path="/memberTest" >
            <SignInForm />
          </Route>
          <Route path="/memberTest/memberInfo">
            {/*要連線的網頁*/}
            <MemberInfo />
          </Route>
          <Route path="/memberTest/petArea">
            {/*要連線的網頁*/}
            <PetArea />
          </Route>
          <Route path="/memberTest/myComment">
            {/*要連線的網頁*/}
            <MyComment />
          </Route>
          <Route path="/memberTest/myFavorite">
            {/*要連線的網頁*/}
            <MyFavorite />
          </Route>
          <Route path="/memberTest/passwordChange">
            {/*要連線的網頁*/}
            <PasswordChange />
          </Route>
          <Route path="/memberTest/registeredForm">
            {/*要連線的網頁*/}
            <RegisteredForm />
          </Route>
          <Route path="/memberTest/signInForm">
            {/*要連線的網頁*/}
            <SignInForm />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

const mapStateToProps = (store) => {
  return {};
};
const mapDispatchToProps = null;

// export default connect(mapStateToProps, {})(Test);

export default withRouter(connect(mapStateToProps, {})(Test));
