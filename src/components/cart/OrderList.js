import React, { useState, useEffect } from 'react'
import "../../styles/cart/orderlist.scss";
import OrderListCardBoxC from "./OrderListCardBoxC"
import OrderListCardBoxM from "./OrderListCardBoxM"
function OrderList(props) {
return(
<>
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
      <OrderListCardBoxC />
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

export default OrderList