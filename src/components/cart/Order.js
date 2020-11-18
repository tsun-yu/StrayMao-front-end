import React, { useState, useEffect } from 'react'
import { connect } from "react-redux"
import "../../styles/cart/order.scss";
import OrderCardBoxC from "./OrderCardBoxC"
import OrderCardBoxM from "./OrderCardBoxM"
import OrderDetialBoxC from "./OrderDetialBoxC"
import OrderDetialBoxM from "./OrderDetialBoxM"
import { withRouter, useHistory } from 'react-router-dom';

import { getOrderId } 
from "../../actions/cart/index";
function Order(props) {
    const [test, setTest] = useState({});
    useEffect(() => {
      console.log("Order Order id :", props.info)
      props.getOrderId(props.info);
    }, []);

    const btnBuyClick1 = ()=>{
      props.history.push('/OrderList');
    }
    const btnBuyClick2 = ()=>{
      props.history.push('/OrderList');
    }
    const btnBuyClick3 = ()=>{
      props.history.push('/OrderList');
    }
    const btnBuyClick4 = ()=>{
      props.history.push('/OrderListAsc');
    }
return(
<>
<div className="orderC_body_An">
<div className="container">
    <div className="orderC_classificationBox_An">
        <div className="orderC_classification_An">
            <a href="" onClick={() => btnBuyClick1()}>近三個月內的訂單</a>
            <span> / </span>
            <a href="" onClick={() => btnBuyClick2()}>全部訂單</a>
        </div>
        <div className="orderC_btn-filter_An">
            <button className="orderC_filterbtn_An">
                <span>排序 <i className="fas fa-caret-down"></i></span>
            </button>
            <div className="orderC_btn-filter-content_An">
              <a href="" onClick={() => btnBuyClick3()}>由新到舊</a>
              <a href="" onClick={() => btnBuyClick4()}>由舊到新</a>
            </div>
        </div>
    </div>
    <div className="orderC_box_An mx-5">
        <OrderCardBoxC info={props.info}/>
        <OrderDetialBoxC  info={props.info}/>
    </div>
</div>
</div>

<div className="orderM_body_An">
  <div className="orderM_box_An">
    <div className="orderM_classificationBox_An">
      <div className="orderM_classification_An">
        <a href="#">近三個月內的訂單</a>
        <span> / </span>
        <a href="#">全部訂單</a>
      </div>
      <div className="orderM_btn-filter_An">
        <button className="orderM_filterbtn_An">
          <span>排序 <i className="fas fa-caret-down"></i></span>
        </button>
        <div className="orderM_btn-filter-content_An">
          <a href="#">由新到舊</a>
          <a href="#">由舊到新</a>
        </div>
      </div>
    </div>
    <OrderCardBoxM />
    <OrderDetialBoxM />
  </div>
</div>
</>
)}

const mapStateToProps = (store) => {
    return { info: store.cartReducer.getId  };
  };
  const mapDispatchToProps = null;

export default withRouter( connect(
    mapStateToProps, {
      getOrderId 
    })(Order))

//export default Order