import React, { useState, useEffect } from 'react'
import "../../styles/cart/order.scss";
import OrderCardC from "./OrderCardC"
import OrderCardM from "./OrderCardM"
function Order(props) {
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
        <div className="orderC_boxBottom_An">
          <OrderCardC />
        </div>
        <div className="orderC_boxDown_An">
            <div className="orderC_boxStatus_An">
                <div className="orderC_titleBox_An d-flex justify-content-center">
                    <div className="orderC_borderSL_An"></div>
                    <span className="orderC_titel_An">訂單詳情</span>
                    <div className="orderC_borderSR_An"></div>
                </div>
                <div className="orderC_detailBox_An d-flex flex-column justify-content-center">
                    <span className="orderC_redSpan_An mb-1">訂單狀態：已出貨</span>
                    <span className="orderC_brownSpan_An mb-1">總計：10,896 元</span>
                    <span className="orderC_brownSpan_An mb-1">訂單日期：2020/07/13</span>
                </div>
            </div>
            <div className="orderC_borderL_An"></div>
            <div className="orderC_boxConsignee_An d-flex flex-column">
                <span>收件人：王小明</span>
                <span>取貨方式：超商取貨</span>
                <span>付款方式：貨到付款</span>
                <span>地址：台北市信義區信義路五段150巷401弄31號</span>
            </div>
        </div>
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
    <div className="orderM_boxBottom_An">
      <OrderCardM />
    </div>
    <div className="orderM_boxDown_An">
      <div className="orderM_boxStatus_An">
        <div className="orderM_titleBox_An m-0 d-flex justify-content-center">
          <div className="orderM_borderSL_An"></div>
            <span className="orderM_titel_An">訂單詳情</span>
            <div className="orderM_borderSR_An"></div>
          </div>
          <div className="orderM_detailBox_An d-flex flex-column justify-content-center">
            <span className="orderM_redSpan_An mb-1">訂單狀態：已出貨</span>
            <span className="orderM_brownSpan_An mb-1">總計：10,896 元</span>
            <span className="orderM_brownSpan_An mb-1">訂單日期：2020/07/13</span>
          </div>
        </div>
        <div className="orderM_borderL_An"></div>
        <div className="orderM_boxConsignee_An d-flex flex-column">
          <span>收件人：王小明</span>
          <span>取貨方式：超商取貨</span>
          <span>付款方式：貨到付款</span>
          <span>地址：台北市信義區信義路五段150巷401弄31號</span>
        </div>
      </div>
    </div>
</div>
</>
)}

export default Order