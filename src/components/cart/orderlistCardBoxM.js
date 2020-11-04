import React, { useState, useEffect } from 'react'
import "../../styles/cart/orderlist.scss";
import OrderlistCardM from "./orderlistCardM"
function storepage(props) {
return(
<>
    <div class="orderlistM_box_An py-4 d-flex flex-column justify-content-between">
        <span class="orderlistM_orderDate_An">2020/07/13</span>
        <div class="orderlistM_boxM_An my-4">
            <OrderlistCardM />
        </div>
        <a class="orderlistM_readMore_An" href="#">查看更多</a>
    </div>
    <div class="orderlistM_box_An py-4 d-flex flex-column justify-content-between">
        <span class="orderlistM_orderDate_An">2020/07/13</span>
        <div class="orderlistM_boxM_An my-4">
            <OrderlistCardM />
        </div>
        <a class="orderlistM_readMore_An" href="#">查看更多</a>
    </div>
    <div class="orderlistM_box_An py-4 d-flex flex-column justify-content-between">
        <span class="orderlistM_orderDate_An">2020/07/13</span>
        <div class="orderlistM_boxM_An my-4">
            <OrderlistCardM />
        </div>
        <a class="orderlistM_readMore_An" href="#">查看更多</a>
    </div>
    <div class="orderlistM_box_An py-4 d-flex flex-column justify-content-between">
        <span class="orderlistM_orderDate_An">2020/07/13</span>
        <div class="orderlistM_boxM_An my-4">
            <OrderlistCardM />
        </div>
        <a class="orderlistM_readMore_An" href="#">查看更多</a>
    </div>
    <div class="orderlistM_box_An py-4 d-flex flex-column justify-content-between">
        <span class="orderlistM_orderDate_An">2020/07/13</span>
        <div class="orderlistM_boxM_An my-4">
            <OrderlistCardM />
        </div>
        <a class="orderlistM_readMore_An" href="#">查看更多</a>
    </div>
    <div class="orderlistM_box_An py-4 d-flex flex-column justify-content-between">
        <span class="orderlistM_orderDate_An">2020/07/13</span>
        <div class="orderlistM_boxM_An my-4">
            <OrderlistCardM />
        </div>
        <a class="orderlistM_readMore_An" href="#">查看更多</a>
    </div>
</>
)}

export default storepage