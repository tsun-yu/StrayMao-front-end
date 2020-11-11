import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "../../styles/cart/order.scss";

function OrderDetialM(props) {
  return (
    <>
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
    </>
  );
}

const mapStateToProps = (store) => {
  return {};
};
const mapDispatchToProps = null;

export default connect(mapStateToProps, {})(OrderDetialM);
// export default OrderDetialM