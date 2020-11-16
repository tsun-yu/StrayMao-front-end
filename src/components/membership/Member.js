//used elemect
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
// import { BrowserRouter as Router , Route , Link , Switch , useHistory , Redirect } from "react-router-dom";
import { Route, withRouter, NavLink, Switch, matchPath , Redirect, Link } from 'react-router-dom'

//page
import MemberInfo from "./MemberInfo";
import PasswordChange from "./PasswordChange";
import MyComment from "./MyComment";
import PetArea from "./PetArea";
import MyFavorite from "./MyFavorite";
import RegisteredForm from "./RegisteredForm";
import SignInForm from "./SignInForm";

function Member(props) {
  console.log("member props:" , props)
  const [memberPage, setMemberPage] = useState(<MemberInfo />)
  const [apiUrl , setApiUrl] = useState('http://localhost:3001/straymao/membership/');

  const [isLogin, setIsLogin] = useState(false) // login = true 表示有登入
  // const [member , setMember] = useState(null);  //登入者資訊


  const [member , setMember] = useState(localStorage.getItem("loginAccount") == null? null : JSON.parse(localStorage.getItem("loginAccount")));  //登入者資訊
  useEffect(() => {
    if(member !== null){
      console.log("member yes")
      setIsLogin(true);
    }else{
      console.log("member is null")
      props.history.push("/signInForm");
    }
  },[member]);
  
  // const [memberLS, setMemberLS] = useState(localStorage.getItem("loginAccount") == null? null : JSON.parse(localStorage.getItem("loginAccount")))
  // console.log("memberLS:" , memberLS)
  // useEffect(() => {
  //   console.log("member effect1")
  //   // const member1 = localStorage.getItem("loginAccount") == null? null : JSON.parse(localStorage.getItem("loginAccount"));
  //   if(memberLS !== null){
  //     console.log("memberLS not null")
  //     setIsLogin(true);
  //     setMember(memberLS);
  //   }else{
  //     console.log("memberLS null")
  //     props.history.push("/signInForm");
  //   }
  // },[memberLS]);
  
  //這個不能用鉤子
  const url = props.location.pathname;
  console.log("url:", url)
  useEffect(()=>{
    console.log("member effect2")
    switch (url){
      case '/memberInfo' :
        console.log("info")
        setMemberPage(<MemberInfo
          apiUrl = {apiUrl}  
        />)
        break;
      case '/signInForm' :
        console.log("sign")
        setMemberPage(<SignInForm
          setIsLogin = {setIsLogin}
          setMember = {setMember}
          apiUrl = {apiUrl}
        />)
        break;
      case '/myComment' :
        setMemberPage(<MyComment />)
        break;
      case '/petArea' :
        setMemberPage(<PetArea />)
        break;
      case '/registeredForm' :
        setMemberPage(<RegisteredForm />)
        break;
      case '/myFavorite' :
        setMemberPage(<MyFavorite />)
        break;
      case '/passwordChange' :
        setMemberPage(<PasswordChange />)
        break;
    }
  },[props])
    
  async function doLogOut() {
    localStorage.removeItem("loginAccount");
    setIsLogin(false);
    setMember(null);
    props.history.push("/signInForm");
  }

  return (
    <>
      <div className="memberStatusGroup">
        <h3 className="memberStatus" id="memberStatusId">
          目前會員狀態：{isLogin ? member.memberName + "，歡迎回家~" : "登出" }
        </h3>
        {isLogin ? 
          <button className="memberStatusBtn" onClick={() => {
            doLogOut();
            }}>登出</button> :
          <button className="memberStatusBtn"
            onClick={() => {
              props.history.push("/signInForm");
            }}>登入</button>
        }
      </div>

      {memberPage}

    </>
  )
}

const mapStateToProps = (store) => {
  return {};
};
const mapDispatchToProps = null;

// export default withRouter(connect(mapStateToProps, {})(Member));
export default withRouter(connect(mapStateToProps, {})(Member));
