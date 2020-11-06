import React, { useState, useEffect } from 'react'
import "../../styles/cart/orderlist.scss";
import OrderListCardM from "./OrderListCardM"
function OrderListCardBoxM(props) {
return(
<>
    <div className="orderlistM_box_An py-4 d-flex flex-column justify-content-between">
        <span className="orderlistM_orderDate_An">2020/07/13</span>
        <div className="orderlistM_boxM_An my-4">
            <OrderListCardM />
        </div>
        <a className="orderlistM_readMore_An" href="#">查看更多</a>
    </div>
    <div className="orderlistM_box_An py-4 d-flex flex-column justify-content-between">
        <span className="orderlistM_orderDate_An">2020/07/13</span>
        <div className="orderlistM_boxM_An my-4">
            <OrderListCardM />
        </div>
        <a className="orderlistM_readMore_An" href="#">查看更多</a>
    </div>
    <div className="orderlistM_box_An py-4 d-flex flex-column justify-content-between">
        <span className="orderlistM_orderDate_An">2020/07/13</span>
        <div className="orderlistM_boxM_An my-4">
            <OrderListCardM />
        </div>
        <a className="orderlistM_readMore_An" href="#">查看更多</a>
    </div>
    <div className="orderlistM_box_An py-4 d-flex flex-column justify-content-between">
        <span className="orderlistM_orderDate_An">2020/07/13</span>
        <div className="orderlistM_boxM_An my-4">
            <OrderListCardM />
        </div>
        <a className="orderlistM_readMore_An" href="#">查看更多</a>
    </div>
    <div className="orderlistM_box_An py-4 d-flex flex-column justify-content-between">
        <span className="orderlistM_orderDate_An">2020/07/13</span>
        <div className="orderlistM_boxM_An my-4">
            <OrderListCardM />
        </div>
        <a className="orderlistM_readMore_An" href="#">查看更多</a>
    </div>
    <div className="orderlistM_box_An py-4 d-flex flex-column justify-content-between">
        <span className="orderlistM_orderDate_An">2020/07/13</span>
        <div className="orderlistM_boxM_An my-4">
            <OrderListCardM />
        </div>
        <a className="orderlistM_readMore_An" href="#">查看更多</a>
    </div>
</>
)}

export default OrderListCardBoxM