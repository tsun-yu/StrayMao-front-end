import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "../../styles/cart/order.scss";
import OrderDetialM from "./OrderDetialM"

import { getOrder, getOrderAsync } 
from "../../actions/cart/index";
function OrderDetialBoxM(props) {
    const [test, setTest] = useState({});
    const [dataLoading, setDataLoading] = useState(true);
    const [display, setDisplay] = useState(<></>);

    const content = [];
    let totalCards = props.info;
    useEffect(() => {
        props.getOrderAsync()
    }, []);
    useEffect(() => {
        totalCards = props.info;
        console.log("info2: ",props.info)
        console.log("totalcards:",totalCards)
        let i = 0;
            
        console.log(":",totalCards[i]);
        if (totalCards.length > 0) {
            content.push(<OrderDetialM info={totalCards[i]} key={i} />);
            // content.push(<OrderDetialC info={totalCards[i]} key={i} />);
        }
        // console.log("content :　",content)
    setDisplay(
    <>
    <div className="orderM_boxDown_An">
        {content}
        {/* <OrderDetialM /> */}
    </div>
</>
  )

  setTimeout(() => setDataLoading(false), 1000)
        console.log("content:",content)
    },[props.info])
    const loading = <div></div>

  // 以資料載入的指示狀態來切換要出現的畫面
  return dataLoading ? loading : display
  // return loading
}

const mapStateToProps = (store) => {
  return { info: store.cartReducer.getOrder };
};
const mapDispatchToProps = null;

export default connect(mapStateToProps, {
    getOrder, getOrderAsync
})(OrderDetialBoxM);
// export default OrderDetialC