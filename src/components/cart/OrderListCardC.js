import React, { useState, useEffect } from 'react'
// import { connect } from "react-redux";
import "../../styles/cart/orderlist.scss";

function OrderListCardC(props) {
return(
<>
    <div className="orderlistC_item_An d-flex justify-content-between">
        <span className="orderlistC_goodsName_An">{props.info.name}</span>
        <span className="orderlistC_quantity_An">數量：{props.info.quantity}</span>
        
    </div>
</>
)}
// const mapStateToProps = (store) => {
//     return {};
//   };
// const mapDispatchToProps = null;

// export default connect(mapStateToProps, {})(OrderListCardC);
export default OrderListCardC

//{props.info[i].data[j].name}