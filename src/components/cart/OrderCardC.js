import React, { useState, useEffect } from 'react'
import { connect } from "react-redux";
import "../../styles/cart/order.scss";

function OrderCardC(props) {
    console.log("props.price:",props.price)
    console.log("props.quantity:",props.quantity)
    console.log("subtotal:",props.price*props.quantity)
return(
<>
    <div className="orderC_boxUpper_An d-flex justify-content-between">
        <img className="orderC_goodsImg_An" src={props.info.goodsImgs}></img>
        <span className="orderC_goodsName_An">{props.info.name}</span>
        <div className="d-flex">
        <span className="orderC_quantity_An">數量：{props.info.quantity}</span>
        <span className="orderC_goodsPrice_An">{props.info.price*props.info.quantity} 元</span>
        </div>
        {props.children}
    </div>
</>
)}

const mapStateToProps = (store) => {
    return {};
};
const mapDispatchToProps = null;

export default connect(mapStateToProps, {})(OrderCardC);
// export default OrderCardC