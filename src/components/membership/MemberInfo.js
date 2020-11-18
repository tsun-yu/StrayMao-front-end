import React, { useState, useEffect } from 'react'
import { withRouter} from 'react-router-dom';
//user used
import "../../styles/membership/custom.scss";
import {MEMBER_API_URL} from "../../actions/membership/actionTypes";
import LogInInfo from './LogInInfo2';
import DonateButton from '../common/DonateButton'


function MemberInfo(props) {
  //檢查登入狀態 >> 取得要render畫面的內容
  const [member , setMember] = useState({});  //登入者資訊
  useEffect(()=>{
    if(member.memberId != null) getMyMemberInfo();
  },[member]);

  //form
  const [memberName , setMemberName] = useState("");
  const [birthday , setBirthday] = useState("");
  const [mobile , setMobile] = useState("");
  const [telephone , setTelephone] = useState("");
  const [email , setEmail] = useState("");
  const [address , setAddress] = useState("");
  const [memberPic , setMemberPic] = useState("");
  const [password , setPassword] = useState("");
  

  //預覽上傳照片
  const [file, setFile] = useState(null);
  const fileHandler = event => {
        console.log(event.target.files[0]);
      let reader = new FileReader();
        reader.onload = function(e) {
          setFile(e.target.result);
        };
        reader.readAsDataURL(event.target.files[0]);
      };

  
  //預設會員資料
  const [renderData , setRenderData] = useState([]);
  async function getMyMemberInfo() {
    const url = MEMBER_API_URL + "/member/get/" + member.memberId;
    const request = new Request(url, {
      method: 'GET',
      // body: JSON.stringify(condition),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    });
    const response = await fetch(request)
    const rsObj = await response.json();  //轉成物件
    setMemberName(rsObj.data[0].memberName)
    setBirthday(rsObj.data[0].birthday)
    setMobile(rsObj.data[0].mobile)
    setTelephone(rsObj.data[0].telephone)
    setEmail(rsObj.data[0].email)
    setAddress(rsObj.data[0].address)
    setMemberPic(rsObj.data[0].memberPic)
  }

  async function updMyMemberInfo() {
    const url = MEMBER_API_URL + "/member/edit";
    const condition = { memberName , birthday , mobile , telephone , email , address , memberId: member.memberId , password };
    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify(condition),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    });
    const response = await fetch(request)
    const rsObj = await response.json();  //轉成物件
    if(rsObj.success) {
      if(rsObj.data.changedRows === 1) {
        alert("喵~ 會員資料已更新!!");
      } else if (rsObj.data.affectedRows === 0){
        alert("喵嗚~ 會員密碼好像錯了唷!!!");
      }
    } else{
      alert("喵嗚~ 有點小問題捏，請與我們聯繫好嗎?");
    }
  }


return(
<>
  <LogInInfo
    setMember = {setMember}
    history = {props.history}
  />
  <DonateButton />
  
  <div className="memberInfoTopicGroup">
    <img className="memberInfoPetImg" src="../image/membership/catpls.png" alt="pet image" />
    <div className="topicStyle">能給我個家嗎? 爸脫~</div>
  </div>
  <div className="memberInfoBackground">
    <div className="btn-group memberInfoTop" role="group" aria-label="Basic example">
      <button type="button" 
        className="btn btn-primary memberBtnLeft"
        >會員資料修改</button>
      <button type="button" 
        className="btn btn-primary memberBtnRight"
        onClick={() => {
          props.history.push('/passwordChange')}}
        >密碼修改</button>
    </div>

    <form className="infoForm">
    <div className="wrapFlex1">
      <div className="form-group">
        <label for="memberUpLoadImg" >請上傳個人照片</label>
          <div className="addNew">
            <div className="viewImg">
              <img src={file} alt={""} />
            </div>
            <input type="file" className="upLoadImg" onChange={fileHandler} />
          </div>
      </div>
      
      <div className="wrapFlex2">
        <div className="form-group fgFlex">
          <label for="infoInputName">姓&emsp;&emsp;&emsp;名：</label>
          <input type="text" className="form-control infoInput1" id="infoInputName" placeholder="Enter name"
            value={memberName}
            onChange={(event) => {
              setMemberName(event.target.value)
            }}
          />
        </div>
      
        <div className="form-group fgFlex">
          <label for="infoInputBirthday">出生年月日：</label>
          <input type="date" className="form-control infoInput1" id="infoInputBirthday" placeholder="Enter birthday" 
            value={birthday}
            onChange={(event) => {
              setBirthday(event.target.value)
            }}
          />
        </div>
    
        <div className="form-group fgFlex">
          <label for="infoInputMobile">行&nbsp;動&nbsp;電&nbsp;話：</label>
          <input type="text" className="form-control infoInput1" id="infoInputMobile" placeholder="Enter mobile" 
            value={mobile}
            onChange={(event) => {
              setMobile(event.target.value)
            }}
          />
        </div>
        <div className="form-group fgFlex">
          <label for="infoInputTelephone">連&nbsp;絡&nbsp;電&nbsp;話：</label>
          <input type="text" className="form-control infoInput1" id="infoInputTelephone" placeholder="Enter telephone"
            value={telephone}
            onChange={(event) => {
              setTelephone(event.target.value)
            }}
          />
        </div>
      </div>
    </div>

    <div c  lassName="wrapFlex2">
      <div className="form-group fgFlex">
        <label for="infoInputEmail1">電&nbsp;子&nbsp;信&nbsp;箱：</label>
        <input type="email" className="form-control infoInput2" id="infoInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" readOnly
          value={email}
          // onChange={(event) => {
          //   setEmail(event.target.value)
          // }}
        />
        
      </div>

      <div className="form-group fgFlex">
        <label for="infoInputAddress">地&emsp;&emsp;&emsp;址：</label>
        <input type="text" className="form-control infoInput1" id="infoInputAddress" rows="3" 
          value={address}
          onChange={(event) => {
            setAddress(event.target.value)
          }}
        />
      </div>
    </div>

    <div className="infoChangeConfirm">資料修改確認</div>
    <div className="wrapFlex3">
      <div className="form-group fgFlex">
        <label for="exampleInputPassword1">請輸入密碼：</label>
        <input type="password" className="form-control infoInput" id="checkPassword1" placeholder="Enter Password"
          onChange={(event) => {
            setPassword(event.target.value)
          }}
        />
      </div>

      <div className="form-group fgFlex">
        <label for="exampleInputPassword1">請輸入驗證碼：</label>
        <input type="password" className="form-control infoInput" id="checkCode1" placeholder="Enter Code"/>
      </div>
      <div className="confirmCode">192388</div>
    </div>
    </form>
    <div className="btn-group memberInfoTop" role="group" aria-label="Basic example">
          <button 
            type="reset" 
            className="btn btn-primary memberBtnLeft"
            onClick={() => {
              props.history.push('/homeTest');
            }}
          >回首頁</button>
          <button 
            type="button" 
            className="btn btn-primary memberBtnRight"
            onClick={() => {
              updMyMemberInfo();
            }}
            >儲存會員資料</button>
    </div>
  </div>
</>
)}

export default withRouter(MemberInfo);