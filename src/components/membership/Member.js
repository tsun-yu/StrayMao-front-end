//used elemect
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
// import { BrowserRouter as Router , Route , Link , Switch , useHistory , Redirect } from "react-router-dom";
import { Route, withRouter, NavLink, Switch, matchPath , Redirect, Link } from 'react-router-dom'

//page
import MemberInfo from "./MemberInfo";
import PasswordChange from "./PasswordChange";
import MyComment from "./MyComment";
import PetArea1 from "./PetArea1";
import PetArea2 from "./PetArea2";
import MyFavorite1 from "./MyFavorite1";
import MyFavorite2 from "./MyFavorite2";
import RegisteredForm from "./RegisteredForm";
import SignInForm from "./SignInForm";

function Member(props) {
  // console.log("member props:" , props)
  const [memberPage, setMemberPage] = useState(<MemberInfo />)
  const [apiUrl , setApiUrl] = useState('http://localhost:3001/straymao/membership');
  const [isLogin, setIsLogin] = useState(false) // login = true 表示有登入
  const [member , setMember] = useState(localStorage.getItem("loginAccount") == null? null : JSON.parse(localStorage.getItem("loginAccount")));  //登入者資訊
  useEffect(() => {
    if(member !== null){
      setIsLogin(true);
    }else{
      props.history.push("/signInForm");
    }
  },[member]);
  
  const url = props.location.pathname;
  useEffect(()=>{
    switch (url){
      case '/memberInfo' :
        setMemberPage(<MemberInfo
          apiUrl = {apiUrl}  
        />)
        break;
      case '/signInForm' :
        setMemberPage(<SignInForm
          setIsLogin = {setIsLogin}
          setMember = {setMember}
          apiUrl = {apiUrl}
        />)
        break;
      case '/myComment' :
        setMemberPage(<MyComment />)
        break;
      case '/petArea1' :
        setMemberPage(<PetArea1 />)
        break;
      case '/petArea2' :
        setMemberPage(<PetArea2 />)
        break;
      case '/registeredForm' :
        setMemberPage(<RegisteredForm />)
        break;
      case '/myFavorite1' :
        setMemberPage(<MyFavorite1
          apiUrl = {apiUrl}
          member = {member}
        />)
        break;
      case '/myFavorite2' :
        setMemberPage(<MyFavorite2
          apiUrl = {apiUrl}
          member = {member}
        />)
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
