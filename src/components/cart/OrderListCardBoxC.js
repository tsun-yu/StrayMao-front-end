import React, { useState, useEffect } from 'react'
import "../../styles/cart/orderlist.scss";
import OrderListCardC from "./OrderListCardC"
function OrderListCardBoxC(props) {
    console.log('createAt',props.info)
return(
<>
<div className="orderlistC_box_An mx-5 mb-3 px-5 py-4 d-flex justify-content-between">
            <div className="orderlistC_boxL_An">
                <span className="orderlistC_orderDate_An">{props.info.data[0].createAt.substring(0,10)}</span>
            </div>
            <div className="orderlistC_boxM_An my-4">
            { props.info.data.length > 0 && props.info.data.map((value,i)=>{return <OrderListCardC info={value} />})}
                
                {/* { dataLoading ? loading : display} */}
            </div>
            <div className="orderlistC_boxR_An">
                <a href="#">查看更多</a>
            </div>
        </div>
</>
)}

export default OrderListCardBoxC