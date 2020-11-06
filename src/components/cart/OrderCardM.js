import React, { useState, useEffect } from 'react'
import "../../styles/cart/order.scss";

function OrderCardM(props) {
return(
<>
    <div className="orderM_boxUpper_An d-flex justify-content-between">
        <img className="orderM_goodsImg_An" src="./image/store/brothcan-1-510x510.jpg"></img>
        <div className="d-flex flex-column">
            <span className="orderM_goodsName_An">Farmina 法米納獸醫寵愛天然配方-貓用腸胃道 5kg</span>
            <div className="d-flex justify-content-between">
                <span className="orderM_quantity_An">數量：1</span>
                <span className="orderM_goodsPrice_An">2790 元</span>
            </div>
        </div>
    </div>
</>
)}

export default OrderCardM