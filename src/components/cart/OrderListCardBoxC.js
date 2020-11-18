import React, { useState, useEffect } from 'react'
import { connect } from "react-redux";
import "../../styles/cart/orderlist.scss";
import OrderListCardC from "./OrderListCardC"
import { withRouter, useHistory } from 'react-router-dom';

import { getOrderId } from "../../actions/cart/index";
function OrderListCardBoxC(props) {
    useEffect(()=>{


    },[])
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
                <a href="" onClick={() => {
                    props.getOrderId(props.info)
                    props.history.push('/Order')
                    }}>查看更多</a>
            </div>
        </div>
</>
)}

const mapStateToProps = (store) => {
    return { id: store.cartReducer.getId };
  };
  const mapDispatchToProps = null;
export default  withRouter(connect(mapStateToProps, {
    getOrderId
})(OrderListCardBoxC))
