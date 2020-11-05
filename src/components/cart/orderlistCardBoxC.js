import React, { useState, useEffect } from 'react'
import "../../styles/cart/orderlist.scss";
import OrderlistCardC from "./orderlistCardC"
function orderlistCardBoxC(props) {
return(
<>
    <div class="orderlistC_box_An mx-5 mb-3 px-5 py-4 d-flex justify-content-between">
        <div class="orderlistC_boxL_An">
            <span class="orderlistC_orderDate_An">2020/07/13</span>
        </div>
        <div class="orderlistC_boxM_An my-4">
            <OrderlistCardC />
        </div>
        <div class="orderlistC_boxR_An">
            <a href="#">查看更多</a>
        </div>
    </div>
    <div class="orderlistC_box_An mx-5 mb-3 px-5 py-4 d-flex justify-content-between">
        <div class="orderlistC_boxL_An">
            <span class="orderlistC_orderDate_An">2020/07/13</span>
        </div>
        <div class="orderlistC_boxM_An my-4">
            <OrderlistCardC />
        </div>
        <div class="orderlistC_boxR_An">
            <a href="#">查看更多</a>
        </div>
    </div>
    <div class="orderlistC_box_An mx-5 mb-3 px-5 py-4 d-flex justify-content-between">
        <div class="orderlistC_boxL_An">
            <span class="orderlistC_orderDate_An">2020/07/13</span>
        </div>
        <div class="orderlistC_boxM_An my-4">
            <OrderlistCardC />
        </div>
        <div class="orderlistC_boxR_An">
            <a href="#">查看更多</a>
        </div>
    </div>
    <div class="orderlistC_box_An mx-5 mb-3 px-5 py-4 d-flex justify-content-between">
        <div class="orderlistC_boxL_An">
            <span class="orderlistC_orderDate_An">2020/07/13</span>
        </div>
        <div class="orderlistC_boxM_An my-4">
            <OrderlistCardC />
        </div>
        <div class="orderlistC_boxR_An">
            <a href="#">查看更多</a>
        </div>
    </div>
    <div class="orderlistC_box_An mx-5 mb-3 px-5 py-4 d-flex justify-content-between">
        <div class="orderlistC_boxL_An">
            <span class="orderlistC_orderDate_An">2020/07/13</span>
        </div>
        <div class="orderlistC_boxM_An my-4">
            <OrderlistCardC />
        </div>
        <div class="orderlistC_boxR_An">
            <a href="#">查看更多</a>
        </div>
    </div>
    <div class="orderlistC_box_An mx-5 mb-3 px-5 py-4 d-flex justify-content-between">
        <div class="orderlistC_boxL_An">
            <span class="orderlistC_orderDate_An">2020/07/13</span>
        </div>
        <div class="orderlistC_boxM_An my-4">
            <OrderlistCardC />
        </div>
        <div class="orderlistC_boxR_An">
            <a href="#">查看更多</a>
        </div>
    </div>
</>
)}

export default orderlistCardBoxC