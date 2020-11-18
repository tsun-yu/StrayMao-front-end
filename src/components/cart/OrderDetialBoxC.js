import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "../../styles/cart/order.scss";
import OrderDetialC from "./OrderDetialC"

import { getOrderId } 
from "../../actions/cart/index";
function OrderDetialBoxC(props) {
    const [test, setTest] = useState({});
    const [dataLoading, setDataLoading] = useState(true);
    const [display, setDisplay] = useState(<></>);

    const content = [];
    // let totalCards = props.info.data;
    useEffect(() => {
      let totalCards = JSON.parse(localStorage.getItem('orderListData')).data;
        // totalCards = props.info.data
        console.log("99: ",props.info.data)
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
        // totalCards = props.info.data;
        // setTotalCards(props.info.data)
        
    },[props.info.data])
    const loading = <div></div>

  // 以資料載入的指示狀態來切換要出現的畫面
  return dataLoading ? loading : display
  // return loading
}

const mapStateToProps = (store) => {
  return { info: store.cartReducer.getOrderId };
  // return { };
};
const mapDispatchToProps = null;

export default connect(mapStateToProps, {
  getOrderId
})(OrderDetialBoxC);
// export default OrderDetialC