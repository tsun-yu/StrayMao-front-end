import React, { useState, useEffect } from 'react'
import "../../styles/membership/custom.scss";

function MemberInfo(props) {
return(
<>
<div className="topicStyle">MEMBER</div>
<div className="memberInfoBackground">
    <div className="btn-group memberInfoTop" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-primary memberBtnLeft">會員資料修改</button>
        <button type="button" className="btn btn-primary memberBtnRight">密碼修改</button>
    </div>


<form className="infoForm">
<div className="wrapFlex1">
  <div className="form-group">
    <label for="infoFormControlFile1" className="viewImg">請上傳個人照片</label>
    <input type="file" className="form-control-file uploadImg" id="infoFormControlFile1"/>
  </div>

  
    <div className="wrapFlex2">
      <div className="form-group fgFlex">
        <label for="infoInputName">姓&emsp;&emsp;&emsp;名：</label>
        <input type="text" className="form-control infoInput1" id="infoInputName" placeholder="Enter name"/>
      </div>
    
      <div className="form-group fgFlex">
        <label for="infoInputBirthday">出生年月日：</label>
        <input type="date" className="form-control infoInput1" id="infoInputBirthday" placeholder="Enter birthday"/>
      </div>
  
      <div className="form-group fgFlex">
        <label for="infoInputMobile">行&nbsp;動&nbsp;電&nbsp;話：</label>
        <input type="text" className="form-control infoInput1" id="infoInputMobile" placeholder="Enter mobile"/>
      </div>
      <div className="form-group fgFlex">
        <label for="infoInputTelephone">連&nbsp;絡&nbsp;電&nbsp;話：</label>
        <input type="text" className="form-control infoInput1" id="infoInputTelephone" placeholder="Enter telephone"/>
      </div>
    </div>
  </div>

  <div className="wrapFlex2">
    <div className="form-group fgFlex">
      <label for="infoInputEmail1">電&nbsp;子&nbsp;信&nbsp;箱：</label>
      <input type="email" className="form-control infoInput2" id="infoInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
      
    </div>

    <div className="form-group fgFlex">
      <label for="infoInputAddress">地&emsp;&emsp;&emsp;址：</label>
      <textarea className="form-control infoInput2" id="infoInputAddress" rows="3"></textarea>
    </div>
  </div>

  <div className="infoChangeConfirm">資料修改確認</div>
  <div className="wrapFlex3">
    <div className="form-group fgFlex">
      <label for="exampleInputPassword1">請輸入密碼：</label>
      <input type="password" className="form-control infoInput" id="exampleInputPassword1" placeholder="Password"/>
    </div>

    <div className="form-group fgFlex">
      <label for="exampleInputPassword1">請輸入驗證碼：</label>
      <input type="password" className="form-control infoInput" id="exampleInputPassword1" placeholder="Password"/>
    </div>
    <div className="confirmCode">123456</div>
  </div>

</form>
  <div className="btn-group memberInfoTop" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-primary memberBtnLeft">取消修改</button>
        <button type="button" className="btn btn-primary memberBtnRight">確認送出</button>
  </div>
</div>
</>
)}

export default MemberInfo