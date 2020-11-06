import React, { useState, useEffect } from 'react'
import "../../styles/cart/order.scss";

function OrderCardC(props) {
return(
<>
    <div className="orderC_boxUpper_An d-flex justify-content-between">
        <img className="orderC_goodsImg_An" src="./image/store/brothcan-1-510x510.jpg"></img>
        <span className="orderC_goodsName_An">Farmina 法米納獸醫寵愛天然配方-貓用腸胃道 5kg</span>
        <span className="orderC_quantity_An">數量：1</span>
        <span className="orderC_goodsPrice_An">2790 元</span>
    </div>
</>
)}

export default OrderCardC