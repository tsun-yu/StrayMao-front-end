import React, { useState, useEffect } from 'react'
import { withRouter} from 'react-router-dom';
//user used
import "../../styles/membership/custom.scss";
import { MEMBER_API_URL } from "../../actions/membership/actionTypes";
import MyFavorite1_card from './MyFavorite1_card';
import LogInInfo from './LogInInfo';
import DonateButton from '../common/DonateButton'

function MyFavorite1(props) {
  //檢查登入狀態
  // const [toSignOn , setToSignOn] = useState(false);
  // useEffect(() => {
  //   if(toSignOn) props.history.push("/signInForm");
  // },[toSignOn])

  //檢查登入狀態 >> 取得要render畫面的內容
  const [member , setMember] = useState({});  //登入者資訊
  const [renderList , setRenderList] = useState([]);
  useEffect(()=>{
    if(member == null){
      props.history.push("/signInForm");
    }else{
      if(member.memberId != null) getMyFavorite();
    }
    //or
    // if(member !== null) {
    //   getMyFavorite();
    // } else {
    //   props.history.push("/signInForm");
    // }
  },[member])

  
  //拉取喜歡的文章
  async function getMyFavorite() {
    const url = MEMBER_API_URL + "/getHeartList";
    const condition = {
      typeCode: '2',
      memberId: member.memberId
    };
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
    setRenderList(rsObj.data);
  }

return(
<>
  <LogInInfo
    setMember = {setMember}
  />
  <DonateButton />

  <div className="myFavoriteWrap">
      <nav className="nav nav-pills flex-sm-row petAreaNavGroup">
          <a className="flex-sm-fill text-sm-center nav-link petAreaNav active" href="#">喜歡的文章</a>
          <a className="flex-sm-fill text-sm-center nav-link petAreaNav" onClick={() => {props.history.push('/myFavorite2')}}>追蹤的商品</a>
          <a className="flex-sm-fill text-sm-center nav-link disabled" href="#" tabIndex="-1" aria-disabled="true"></a>
          <a className="flex-sm-fill text-sm-center nav-link disabled" href="#" tabIndex="-1" aria-disabled="true"></a>
          <a className="flex-sm-fill text-sm-center nav-link disabled" href="#" tabIndex="-1" aria-disabled="true"></a>
          <a className="flex-sm-fill text-sm-center nav-link disabled" href="#" tabIndex="-1" aria-disabled="true"></a>
      </nav>
      <div className="container petAreaBackgroud">
        {renderList.length > 0 && renderList.map((element, i) => {
          return <MyFavorite1_card info={element} />;
        })}
      </div>
  </div>
</>
)}

export default withRouter(MyFavorite1);