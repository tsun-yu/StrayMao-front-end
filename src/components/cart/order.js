import React, { useState, useEffect } from 'react'
import "../../styles/cart/order.scss";
import OrderCardC from "./orderCardC"
import OrderCardM from "./orderCardM"
function storepage(props) {
return(
<>
<div class="orderC_body_An">
<div class="container">
    <div class="orderC_classificationBox_An">
        <div class="orderC_classification_An">
            <a href="#">近三個月內的訂單</a>
            <span> / </span>
            <a href="#">全部訂單</a>
        </div>
        <div class="orderC_btn-filter_An">
            <button class="orderC_filterbtn_An">
                <span>排序 <i class="fas fa-caret-down"></i></span>
            </button>
            <div class="orderC_btn-filter-content_An">
              <a href="#">由新到舊</a>
              <a href="#">由舊到新</a>
            </div>
        </div>
    </div>
    <div class="orderC_box_An mx-5">
        <div class="orderC_boxBottom_An">
          <OrderCardC />
        </div>
        <div class="orderC_boxDown_An">
            <div class="orderC_boxStatus_An">
                <div class="orderC_titleBox_An d-flex justify-content-center">
                    <div class="orderC_borderSL_An"></div>
                    <span class="orderC_titel_An">訂單詳情</span>
                    <div class="orderC_borderSR_An"></div>
                </div>
                <div class="orderC_detailBox_An d-flex flex-column justify-content-center">
                    <span class="orderC_redSpan_An mb-1">訂單狀態：已出貨</span>
                    <span class="orderC_brownSpan_An mb-1">總計：10,896 元</span>
                    <span class="orderC_brownSpan_An mb-1">訂單日期：2020/07/13</span>
                </div>
            </div>
            <div class="orderC_borderL_An"></div>
            <div class="orderC_boxConsignee_An d-flex flex-column">
                <span>收件人：王小明</span>
                <span>取貨方式：超商取貨</span>
                <span>付款方式：貨到付款</span>
                <span>地址：台北市信義區信義路五段150巷401弄31號</span>
            </div>
        </div>
    </div>
</div>
</div>

<div class="orderM_body_An">
  <div class="orderM_box_An">
    <div class="orderM_classificationBox_An">
      <div class="orderM_classification_An">
        <a href="#">近三個月內的訂單</a>
        <span> / </span>
        <a href="#">全部訂單</a>
      </div>
      <div class="orderM_btn-filter_An">
        <button class="orderM_filterbtn_An">
          <span>排序 <i class="fas fa-caret-down"></i></span>
        </button>
        <div class="orderM_btn-filter-content_An">
          <a href="#">由新到舊</a>
          <a href="#">由舊到新</a>
        </div>
      </div>
    </div>
    <div class="orderM_boxBottom_An">
      <OrderCardM />
    </div>
    <div class="orderM_boxDown_An">
      <div class="orderM_boxStatus_An">
        <div class="orderM_titleBox_An m-0 d-flex justify-content-center">
          <div class="orderM_borderSL_An"></div>
            <span class="orderM_titel_An">訂單詳情</span>
            <div class="orderM_borderSR_An"></div>
          </div>
          <div class="orderM_detailBox_An d-flex flex-column justify-content-center">
            <span class="orderM_redSpan_An mb-1">訂單狀態：已出貨</span>
            <span class="orderM_brownSpan_An mb-1">總計：10,896 元</span>
            <span class="orderM_brownSpan_An mb-1">訂單日期：2020/07/13</span>
          </div>
        </div>
        <div class="orderM_borderL_An"></div>
        <div class="orderM_boxConsignee_An d-flex flex-column">
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

export default storepage