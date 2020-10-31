import React, { useState, useEffect } from 'react'
import "../../styles/cart/buy.scss";

function storepage(props) {
return(
<>
<div class="body_An">
    <div class="container box_An">
        <div class="boxBottom_An">
            <div class="boxUpper_An d-flex justify-content-between">
                <img class="goodsImg_An" src="./image/store/brothcan-1-510x510.jpg"></img>
                <span class="goodsName_An">Farmina 法米納獸醫寵愛天然配方-貓用腸胃道 5kg</span>
                <span class="goodsPrice_An">2790 元</span>
            </div>
            <div class="boxUpper_An d-flex justify-content-between">
                <img class="goodsImg_An" src="./image/store/brothcan-1-510x510.jpg"></img>
                <span class="goodsName_An">Farmina 法米納獸醫寵愛天然配方-貓用腸胃道 5kg</span>
                <span class="goodsPrice_An">2790 元</span>
            </div>
            <div class="boxUpper_An d-flex justify-content-between">
                <img class="goodsImg_An" src="./image/store/brothcan-1-510x510.jpg"></img>
                <span class="goodsName_An">Farmina 法米納獸醫寵愛天然配方-貓用腸胃道 5kg</span>
                <span class="goodsPrice_An">2790 元</span>
            </div>
            <div class="boxUpper_An d-flex justify-content-between">
                <img class="goodsImg_An" src="./image/store/brothcan-1-510x510.jpg"></img>
                <span class="goodsName_An">Farmina 法米納獸醫寵愛天然配方-貓用腸胃道 5kg</span>
                <span class="goodsPrice_An">2790 元</span>
            </div>
        </div>
        <div class="boxDown_An">
            <div class="boxStatus_An">
                <div class="titleBox_An d-flex justify-content-center">
                    <div class="borderSL_An"></div>
                    <span class="titel">訂單詳情</span>
                    <div class="borderSR_An"></div>
                </div>
                <div class="detailBox_An d-flex flex-column justify-content-center">
                    <span class="redSpan_An mb-1">訂單狀態：已出貨</span>
                    <span class="brownSpan_An mb-1">總計：10,896 元</span>
                    <span class="brownSpan_An mb-1">訂單日期：2020/7/13</span>
                </div>
            </div>
            <div class="borderL_An"></div>
            <div class="boxConsignee_An d-flex flex-column">
                <span>收件人：王小明</span>
                <span>取貨方式：超商取貨</span>
                <span>付款方式：貨到付款</span>
                <span>地址：台北市信義區信義路五段150巷401弄31號</span>
            </div>
        </div>
    </div>
</div>
</>
)}

export default storepage