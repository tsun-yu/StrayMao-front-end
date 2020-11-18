import React, { useState, useEffect } from 'react'
import { connect } from "react-redux"
import "../../styles/cart/orderlist.scss";
import OrderListCardBoxC from "./OrderListCardBoxC"
import OrderListCardBoxM from "./OrderListCardBoxM"
import { withRouter, useHistory } from 'react-router-dom';
import LogInInfo from '../membership/LogInInfo2';

import { getOrderList, getOrderListAsync } 
from "../../actions/cart/index";
function OrderList(props) {
  //檢查登入狀態 >> 取得要render畫面的內容
  const [member , setMember] = useState({});  //登入者資訊
  useEffect(()=>{
    // if(member.memberId != null) getMyMemberInfo();
  },[member]);

    const [dataLoading, setDataLoading] = useState(true);
    const [display, setDisplay] = useState([]);
    console.log('display',display)
    const content = [];
    let totalCards = props.info;
    useEffect(() => {
      console.log('hello there')
      // let memberId = member.memberId;
      props.getOrderListAsync( member.memberId)
    }, []);
    useEffect(() => {
        totalCards = props.info;
        console.log("info2: ",props.info)
        console.log("totalcards:",totalCards)
        // if (totalCards.length > 0) {
         if(totalCards[0]){
            console.log("totalCards[0]: ", totalCards[0]);
          console.log("totalCards[0].data[0]: ", totalCards[0].data[0]);
         }
          

        console.log("content :　",content)
        setDisplay(totalCards)


setTimeout(() => setDataLoading(false), 1000)
        console.log("content2:",content)
    },[props.info])
    const loading = <div></div>
return(
<>
  <LogInInfo
    setMember = {setMember}
    history = {props.history}
  />
  <div className="orderlistC_body_An">
    <div className="container">
      <div className="orderlistC_classificationBox_An">
        <div className="orderlistC_classification_An">
          <a href="#">近三個月內的訂單</a>
          <span> / </span>
          <a href="#">全部訂單</a>
        </div>
        <div className="orderlistC_btn-filter_An">
          <button className="orderlistC_filterbtn_An">
            <span>排序 <i className="fas fa-caret-down"></i></span>
          </button>
          <div className="orderlistC_btn-filter-content_An">
            <a href="#">由新到舊</a>
            <a href="#">由舊到新</a>
          </div>
        </div>
      </div>
      {/* <OrderListCardBoxC /> */}
      { display.length > 0 && display.map((value,i)=>{return <OrderListCardBoxC info={value} />})}
      {/* <OrderListCardBoxC /> */}
    </div>
  </div>

  <div className="orderlistM_body_An">
    <div className="orderlistM_classificationBox_An">
      <div className="orderlistM_classification_An">
        <a href="#">近三個月內的訂單</a>
        <span> / </span>
        <a href="#">全部訂單</a>
      </div>
      <div className="orderlistM_btn-filter_An">
        <button className="orderlistM_filterbtn_An">
          <span>排序 <i className="fas fa-caret-down"></i></span>
        </button>
        <div className="orderlistM_btn-filter-content_An">
          <a href="#">由新到舊</a>
          <a href="#">由舊到新</a>
        </div>
      </div>
    </div>
    <OrderListCardBoxM />
    
  </div>
</>
)}

const mapStateToProps = (store) => {
    return { info: store.cartReducer.getOrderList };
  };
  const mapDispatchToProps = null;

export default withRouter( connect(
    mapStateToProps, {
        getOrderList, getOrderListAsync 
    })(OrderList))

// export default OrderList