import React, { useState, useEffect } from 'react'
import "../../styles/cart/order.scss";

function orderCardM(props) {
return(
<>
    <div class="orderM_boxUpper_An d-flex justify-content-between">
        <img class="orderM_goodsImg_An" src="./image/store/brothcan-1-510x510.jpg"></img>
        <div class="d-flex flex-column">
            <span class="orderM_goodsName_An">Farmina 法米納獸醫寵愛天然配方-貓用腸胃道 5kg</span>
            <div class="d-flex justify-content-between">
                <span class="orderM_quantity_An">數量：1</span>
                <span class="orderM_goodsPrice_An">2790 元</span>
            </div>
        </div>
    </div>
</>
)}

export default orderCardM