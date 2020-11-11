import React, { useState, useEffect } from 'react'
import { connect } from "react-redux"
import "../../styles/cart/order.scss";
import OrderCardBoxC from "./OrderCardBoxC"
import OrderCardBoxM from "./OrderCardBoxM"
import OrderDetialBoxC from "./OrderDetialBoxC"
import OrderDetialBoxM from "./OrderDetialBoxM"

import { getOrder, getOrderAsync } 
from "../../actions/cart/index";
function Order(props) {
    const [test, setTest] = useState({});
    useEffect(() => {
      props.getOrderAsync();
    }, []);
return(
<>
<div className="orderC_body_An">
<div className="container">
    <div className="orderC_classificationBox_An">
        <div className="orderC_classification_An">
            <a href="#">近三個月內的訂單</a>
            <span> / </span>
            <a href="#">全部訂單</a>
        </div>
        <div className="orderC_btn-filter_An">
            <button className="orderC_filterbtn_An">
                <span>排序 <i className="fas fa-caret-down"></i></span>
            </button>
            <div className="orderC_btn-filter-content_An">
              <a href="#">由新到舊</a>
              <a href="#">由舊到新</a>
            </div>
        </div>
    </div>
    <div className="orderC_box_An mx-5">
        <OrderCardBoxC />
        <OrderDetialBoxC />
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
    return { info: store.cartReducer.getOrder };
  };
  const mapDispatchToProps = null;

export default  connect(
    mapStateToProps, {
        getOrder, getOrderAsync 
    })(Order)

//export default Order