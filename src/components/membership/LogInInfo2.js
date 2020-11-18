import React, { useState, useEffect } from 'react'
import "../../styles/cart/orderlist.scss";

function LogInInfo(props) {
  const [isLogin, setIsLogin] = useState(false) // login = true 表示有登入
  const [member , setMember] = useState(localStorage.getItem("loginAccount") == null? null : JSON.parse(localStorage.getItem("loginAccount")));  //登入者資訊
  useEffect(() => {
    if(member == null) props.history.push("/signInForm");
    setIsLogin(true);
    props.setMember(member);
  },[]);

  async function doLogOut() {
    localStorage.removeItem("loginAccount");
    setIsLogin(false);
    props.setMember(null);
    props.history.push("/signInForm");
  }

return(
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
</>
)}

export default LogInInfo