import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "../../styles/cart/order.scss";
import OrderDetialC from "./OrderDetialC"

import { getOrder, getOrderAsync } 
from "../../actions/cart/index";
function OrderDetialBoxC(props) {
    const [test, setTest] = useState({});
    const [dataLoading, setDataLoading] = useState(true);
    const [display, setDisplay] = useState(<></>);

    const content = [];
    let totalCards = props.info;
    useEffect(() => {
        totalCards = props.info
        console.log("99: ",props.info)
        if (totalCards.length > 0) {
            content.push(<OrderDetialC info={totalCards[0]} key={0} />);
            console.log("aaaa : ",totalCards[0])
            setDisplay(
                <>
                    <div className="orderC_boxDown_An">
                    <OrderDetialC info={totalCards[0]} key={0} />
                                {/* {content} */}
                            </div>
                    </>
              )
              
              setTimeout(() => setDataLoading(false), 1000)
             
            }
    }, []);
    useEffect(() => {
        totalCards = props.info;
        
        
    },[props.info])
    const loading = <div></div>

  // 以資料載入的指示狀態來切換要出現的畫面
  return dataLoading ? loading : display
  // return loading
}

const mapStateToProps = (store) => {
//   return { info: store.cartReducer.getOrder };
  return { };
};
const mapDispatchToProps = null;

export default connect(mapStateToProps, {
    getOrder, getOrderAsync
})(OrderDetialBoxC);
// export default OrderDetialC