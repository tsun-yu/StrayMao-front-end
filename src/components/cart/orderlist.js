import React, { useState, useEffect } from 'react'
import "../../styles/cart/orderlist.scss";
import OrderlistCardBoxC from "./orderlistCardBoxC"
import OrderlistCardBoxM from "./orderlistCardBoxM"
function storepage(props) {
return(
<>
  <div class="orderlistC_body_An">
    <div class="container">
      <div class="orderlistC_classificationBox_An">
        <div class="orderlistC_classification_An">
          <a href="#">近三個月內的訂單</a>
          <span> / </span>
          <a href="#">全部訂單</a>
        </div>
        <div class="orderlistC_btn-filter_An">
          <button class="orderlistC_filterbtn_An">
            <span>排序 <i class="fas fa-caret-down"></i></span>
          </button>
          <div class="orderlistC_btn-filter-content_An">
            <a href="#">由新到舊</a>
            <a href="#">由舊到新</a>
          </div>
        </div>
      </div>
      <OrderlistCardBoxC />
    </div>
  </div>

  <div class="orderlistM_body_An">
    <div class="orderlistM_classificationBox_An">
      <div class="orderlistM_classification_An">
        <a href="#">近三個月內的訂單</a>
        <span> / </span>
        <a href="#">全部訂單</a>
      </div>
      <div class="orderlistM_btn-filter_An">
        <button class="orderlistM_filterbtn_An">
          <span>排序 <i class="fas fa-caret-down"></i></span>
        </button>
        <div class="orderlistM_btn-filter-content_An">
          <a href="#">由新到舊</a>
          <a href="#">由舊到新</a>
        </div>
      </div>
    </div>
    <OrderlistCardBoxM />
  </div>
</>
)}

export default storepage