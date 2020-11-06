import React, { useState, useEffect } from 'react'
import "../../styles/cart/orderlist.scss";
import OrderListCardC from "./OrderListCardC"
function OrderListCardBoxC(props) {
return(
<>
    <div className="orderlistC_box_An mx-5 mb-3 px-5 py-4 d-flex justify-content-between">
        <div className="orderlistC_boxL_An">
            <span className="orderlistC_orderDate_An">2020/07/13</span>
        </div>
        <div className="orderlistC_boxM_An my-4">
            <OrderListCardC />
        </div>
        <div className="orderlistC_boxR_An">
            <a href="#">查看更多</a>
        </div>
    </div>
    <div className="orderlistC_box_An mx-5 mb-3 px-5 py-4 d-flex justify-content-between">
        <div className="orderlistC_boxL_An">
            <span className="orderlistC_orderDate_An">2020/07/13</span>
        </div>
        <div className="orderlistC_boxM_An my-4">
            <OrderListCardC />
        </div>
        <div className="orderlistC_boxR_An">
            <a href="#">查看更多</a>
        </div>
    </div>
    <div className="orderlistC_box_An mx-5 mb-3 px-5 py-4 d-flex justify-content-between">
        <div className="orderlistC_boxL_An">
            <span className="orderlistC_orderDate_An">2020/07/13</span>
        </div>
        <div className="orderlistC_boxM_An my-4">
            <OrderListCardC />
        </div>
        <div className="orderlistC_boxR_An">
            <a href="#">查看更多</a>
        </div>
    </div>
    <div className="orderlistC_box_An mx-5 mb-3 px-5 py-4 d-flex justify-content-between">
        <div className="orderlistC_boxL_An">
            <span className="orderlistC_orderDate_An">2020/07/13</span>
        </div>
        <div className="orderlistC_boxM_An my-4">
            <OrderListCardC />
        </div>
        <div className="orderlistC_boxR_An">
            <a href="#">查看更多</a>
        </div>
    </div>
    <div className="orderlistC_box_An mx-5 mb-3 px-5 py-4 d-flex justify-content-between">
        <div className="orderlistC_boxL_An">
            <span className="orderlistC_orderDate_An">2020/07/13</span>
        </div>
        <div className="orderlistC_boxM_An my-4">
            <OrderListCardC />
        </div>
        <div className="orderlistC_boxR_An">
            <a href="#">查看更多</a>
        </div>
    </div>
    <div className="orderlistC_box_An mx-5 mb-3 px-5 py-4 d-flex justify-content-between">
        <div className="orderlistC_boxL_An">
            <span className="orderlistC_orderDate_An">2020/07/13</span>
        </div>
        <div className="orderlistC_boxM_An my-4">
            <OrderListCardC />
        </div>
        <div className="orderlistC_boxR_An">
            <a href="#">查看更多</a>
        </div>
    </div>
</>
)}

export default OrderListCardBoxC