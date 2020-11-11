import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "../../styles/cart/order.scss";

function OrderDetialC(props) {
  return (
    <>
<div className="orderC_boxStatus_An">
                <div className="orderC_titleBox_An d-flex justify-content-center">
                    <div className="orderC_borderSL_An"></div>
                    <span className="orderC_titel_An">訂單詳情</span>
                    <div className="orderC_borderSR_An"></div>
                </div>
                <div className="orderC_detailBox_An d-flex flex-column justify-content-center">
                    <span className="orderC_redSpan_An mb-1">訂單狀態：{props.info.orderState}</span>
                    <span className="orderC_brownSpan_An mb-1">總計：{props.info.totalPrice} 元</span>
                    <span className="orderC_brownSpan_An mb-1">訂單日期：{props.info.createAt.substring(0,10)}</span>
                </div>
            </div>
            <div className="orderC_borderL_An"></div>
            <div className="orderC_boxConsignee_An d-flex flex-column">
                <span>收件人：{props.info.memberName}</span>
                <span>取貨方式：{props.info.productDelivery}</span>
                <span>付款方式：{props.info.paymentTerm}</span>
                <span>地址：{props.info.address}</span>
                {props.children}
            </div>
</>
  );
}

const mapStateToProps = (store) => {
  return {};
};
const mapDispatchToProps = null;

export default connect(mapStateToProps, {})(OrderDetialC);
// export default OrderDetialC