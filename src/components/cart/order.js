import React, { useState, useEffect } from 'react'
import "../../styles/cart/order.scss";

function storepage(props) {
return(
<>
<div class="body_An">
    <div class="container box_An">
        <div class="boxBottom_An">
            <div class="boxUpper_An d-flex justify-content-between">
                <div class="icon-018-trashUpper_An">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.82 24.22">
                        <path id="Path_1809" data-name="Path 1809" d="M19.87,2.78H13.72V1a.94.94,0,0,0-1-.95H8A.94.94,0,0,0,7.1,1V2.78H1a.94.94,0,0,0-.95,1v3.7a1,1,0,0,0,1,1H2.36V21.86a2.37,2.37,0,0,0,2.37,2.36H16.09a2.36,2.36,0,0,0,2.36-2.36V8.38h1.42a1,1,0,0,0,.95-1V3.73A1,1,0,0,0,19.87,2.78ZM9,1.89h2.84v.89H9Zm7.57,20a.47.47,0,0,1-.47.47H4.73a.47.47,0,0,1-.47-.47V8.38h12.3ZM18.92,6.49h-17V4.67h17Z"/>
                        <path id="Path_1810" data-name="Path 1810" d="M8,9.78a.94.94,0,0,0-.94.94V20A.95.95,0,0,0,9,20V10.72A.94.94,0,0,0,8,9.78Z"/>
                        <path id="Path_1811" data-name="Path 1811" d="M12.77,9.78a.94.94,0,0,0-.94.94h0V20a.95.95,0,0,0,1.89,0V10.72A.94.94,0,0,0,12.77,9.78Z"/>
                    </svg>
                </div>
                <img class="goodsImg_An" src="./image/store/brothcan-1-510x510.jpg"></img>
                <span class="goodsName_An">Farmina 法米納獸醫寵愛天然配方-貓用腸胃道 5kg</span>
                <div class="inputbox_An d-flex">
                    <div class="icon-067-minus_An">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.44 19.44">
                            <path id="Path_1767" data-name="Path 1767" d="M19.48,0H.72A.81.81,0,0,0,0,.88a.8.8,0,0,0,.72.71H19.48a.8.8,0,0,0,.71-.88A.81.81,0,0,0,19.48,0Z"/>
                        </svg>
                    </div>
                    <input class="input-black_An" type="text" placeholder="123" value="1"/>
                    <div class="icon-021-plus_An">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.44 19.44">
                            <path id="Path_1806" data-name="Path 1806" d="M18.67,9h-8.2V.76A.76.76,0,1,0,9,.76V9H.76a.76.76,0,0,0,0,1.52H9v8.2a.76.76,0,1,0,1.52,0h0v-8.2h8.2a.76.76,0,0,0,0-1.52h0Z"/>
                        </svg>
                    </div>
                </div>
                <span class="goodsPrice_An">2790 元</span>

            </div>
            <div class="boxUpper_An d-flex justify-content-between">
                <div class="icon-018-trashUpper_An">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.82 24.22">
                        <path id="Path_1809" data-name="Path 1809" d="M19.87,2.78H13.72V1a.94.94,0,0,0-1-.95H8A.94.94,0,0,0,7.1,1V2.78H1a.94.94,0,0,0-.95,1v3.7a1,1,0,0,0,1,1H2.36V21.86a2.37,2.37,0,0,0,2.37,2.36H16.09a2.36,2.36,0,0,0,2.36-2.36V8.38h1.42a1,1,0,0,0,.95-1V3.73A1,1,0,0,0,19.87,2.78ZM9,1.89h2.84v.89H9Zm7.57,20a.47.47,0,0,1-.47.47H4.73a.47.47,0,0,1-.47-.47V8.38h12.3ZM18.92,6.49h-17V4.67h17Z"/>
                        <path id="Path_1810" data-name="Path 1810" d="M8,9.78a.94.94,0,0,0-.94.94V20A.95.95,0,0,0,9,20V10.72A.94.94,0,0,0,8,9.78Z"/>
                        <path id="Path_1811" data-name="Path 1811" d="M12.77,9.78a.94.94,0,0,0-.94.94h0V20a.95.95,0,0,0,1.89,0V10.72A.94.94,0,0,0,12.77,9.78Z"/>
                    </svg>
                </div>
                <img class="goodsImg_An" src="./image/store/brothcan-1-510x510.jpg"></img>
                <span class="goodsName_An">Farmina 法米納獸醫寵愛天然配方-貓用腸胃道 5kg</span>
                <div class="inputbox_An d-flex">
                    <div class="icon-067-minus_An">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.44 19.44">
                            <path id="Path_1767" data-name="Path 1767" d="M19.48,0H.72A.81.81,0,0,0,0,.88a.8.8,0,0,0,.72.71H19.48a.8.8,0,0,0,.71-.88A.81.81,0,0,0,19.48,0Z"/>
                        </svg>
                    </div>
                    <input class="input-black_An" type="text" placeholder="123" value="1"/>
                    <div class="icon-021-plus_An">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.44 19.44">
                            <path id="Path_1806" data-name="Path 1806" d="M18.67,9h-8.2V.76A.76.76,0,1,0,9,.76V9H.76a.76.76,0,0,0,0,1.52H9v8.2a.76.76,0,1,0,1.52,0h0v-8.2h8.2a.76.76,0,0,0,0-1.52h0Z"/>
                        </svg>
                    </div>
                </div>
                <span class="goodsPrice_An">2790 元</span>

            </div>
            <div class="boxUpper_An d-flex justify-content-between">
                <div class="icon-018-trashUpper_An">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.82 24.22">
                        <path id="Path_1809" data-name="Path 1809" d="M19.87,2.78H13.72V1a.94.94,0,0,0-1-.95H8A.94.94,0,0,0,7.1,1V2.78H1a.94.94,0,0,0-.95,1v3.7a1,1,0,0,0,1,1H2.36V21.86a2.37,2.37,0,0,0,2.37,2.36H16.09a2.36,2.36,0,0,0,2.36-2.36V8.38h1.42a1,1,0,0,0,.95-1V3.73A1,1,0,0,0,19.87,2.78ZM9,1.89h2.84v.89H9Zm7.57,20a.47.47,0,0,1-.47.47H4.73a.47.47,0,0,1-.47-.47V8.38h12.3ZM18.92,6.49h-17V4.67h17Z"/>
                        <path id="Path_1810" data-name="Path 1810" d="M8,9.78a.94.94,0,0,0-.94.94V20A.95.95,0,0,0,9,20V10.72A.94.94,0,0,0,8,9.78Z"/>
                        <path id="Path_1811" data-name="Path 1811" d="M12.77,9.78a.94.94,0,0,0-.94.94h0V20a.95.95,0,0,0,1.89,0V10.72A.94.94,0,0,0,12.77,9.78Z"/>
                    </svg>
                </div>
                <img class="goodsImg_An" src="./image/store/brothcan-1-510x510.jpg"></img>
                <span class="goodsName_An">Farmina 法米納獸醫寵愛天然配方-貓用腸胃道 5kg</span>
                <div class="inputbox_An d-flex">
                    <div class="icon-067-minus_An">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.44 19.44">
                            <path id="Path_1767" data-name="Path 1767" d="M19.48,0H.72A.81.81,0,0,0,0,.88a.8.8,0,0,0,.72.71H19.48a.8.8,0,0,0,.71-.88A.81.81,0,0,0,19.48,0Z"/>
                        </svg>
                    </div>
                    <input class="input-black_An" type="text" placeholder="123" value="1"/>
                    <div class="icon-021-plus_An">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.44 19.44">
                            <path id="Path_1806" data-name="Path 1806" d="M18.67,9h-8.2V.76A.76.76,0,1,0,9,.76V9H.76a.76.76,0,0,0,0,1.52H9v8.2a.76.76,0,1,0,1.52,0h0v-8.2h8.2a.76.76,0,0,0,0-1.52h0Z"/>
                        </svg>
                    </div>
                </div>
                <span class="goodsPrice_An">2790 元</span>

            </div>
            <div class="boxUpper_An d-flex justify-content-between">
                <div class="icon-018-trashUpper_An">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.82 24.22">
                        <path id="Path_1809" data-name="Path 1809" d="M19.87,2.78H13.72V1a.94.94,0,0,0-1-.95H8A.94.94,0,0,0,7.1,1V2.78H1a.94.94,0,0,0-.95,1v3.7a1,1,0,0,0,1,1H2.36V21.86a2.37,2.37,0,0,0,2.37,2.36H16.09a2.36,2.36,0,0,0,2.36-2.36V8.38h1.42a1,1,0,0,0,.95-1V3.73A1,1,0,0,0,19.87,2.78ZM9,1.89h2.84v.89H9Zm7.57,20a.47.47,0,0,1-.47.47H4.73a.47.47,0,0,1-.47-.47V8.38h12.3ZM18.92,6.49h-17V4.67h17Z"/>
                        <path id="Path_1810" data-name="Path 1810" d="M8,9.78a.94.94,0,0,0-.94.94V20A.95.95,0,0,0,9,20V10.72A.94.94,0,0,0,8,9.78Z"/>
                        <path id="Path_1811" data-name="Path 1811" d="M12.77,9.78a.94.94,0,0,0-.94.94h0V20a.95.95,0,0,0,1.89,0V10.72A.94.94,0,0,0,12.77,9.78Z"/>
                    </svg>
                </div>
                <img class="goodsImg_An" src="./image/store/brothcan-1-510x510.jpg"></img>
                <span class="goodsName_An">Farmina 法米納獸醫寵愛天然配方-貓用腸胃道 5kg</span>
                <div class="inputbox_An d-flex">
                    <div class="icon-067-minus_An">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.44 19.44">
                            <path id="Path_1767" data-name="Path 1767" d="M19.48,0H.72A.81.81,0,0,0,0,.88a.8.8,0,0,0,.72.71H19.48a.8.8,0,0,0,.71-.88A.81.81,0,0,0,19.48,0Z"/>
                        </svg>
                    </div>
                    <input class="input-black_An" type="text" placeholder="123" value="1"/>
                    <div class="icon-021-plus_An">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.44 19.44">
                            <path id="Path_1806" data-name="Path 1806" d="M18.67,9h-8.2V.76A.76.76,0,1,0,9,.76V9H.76a.76.76,0,0,0,0,1.52H9v8.2a.76.76,0,1,0,1.52,0h0v-8.2h8.2a.76.76,0,0,0,0-1.52h0Z"/>
                        </svg>
                    </div>
                </div>
                <span class="goodsPrice_An">2790 元</span>

            </div>
        </div>
        <div class="boxDown_An d-flex justify-content-between">
            <div class="boxDownLeft_An">
                <span class="countPrice_An">小計：2790 元 + 運費：40元</span>
            </div>
            <div class="boxDownRight_An">
                <span class="totalPrice_An">總計：2790 元</span>
            </div>
        </div>
        <div class="boxConsignee_An">
            <div>
                <span c>收件人姓名</span>
                <input class="input-green_An" type="text" placeholder="123"/>
            </div>
            <div>
                <span>連絡電話</span>
                <input class="input-green_An" type="text" placeholder="123"/>
            </div>
        </div>
        <div class="boxAddress_An">
            <div>
                <span>取貨方式</span>
                <div class="d-flex mx-0 my-0">
                    <div class="opt_An ml-0 mt-3 mb-0">
                        <input class="magic-radio_An" type="radio" name="radio1" id="r1" value="option1"/>
                        <label class="mb-0 pl-4" for="r1">郵寄</label>
                    </div>
                    <div class="opt_An mt-3 mb-0">
                        <input class="magic-radio_An" type="radio" name="radio1" id="r2" value="option2"/>
                        <label class="mb-0 pl-4" for="r2">宅急便</label>
                    </div>
                    <div class="opt_An mt-3 mb-0">
                        <input class="magic-radio_An" type="radio" name="radio1" id="r3" value="option3"/>
                        <label class="mb-0 pl-4" for="r3">便利商店取貨</label>
                    </div>
                </div>
            </div>
            <div>
                <span>地址</span>
                <input class="input-green_An" type="text" placeholder="123"/>
            </div>
        </div>
        <div class="boxAddress_An">
            <div>
                <span>付款方式</span>
                <div class="d-flex mx-0 my-0">
                    <div class="opt_An ml-0 mt-3 mb-0">
                        <input class="magic-radio_An" type="radio" name="radio2" id="r4" value="option4"/>
                        <label class="mb-0 pl-4" for="r4">信用卡</label>
                    </div>
                    <div class="opt_An mt-3 mb-0">
                        <input class="magic-radio_An" type="radio" name="radio2" id="r5" value="option5"/>
                        <label class="mb-0 pl-4" for="r5">ATM</label>
                    </div>
                    <div class="opt_An mt-3 mb-0">
                        <input class="magic-radio_An" type="radio" name="radio2" id="r6" value="option6"/>
                        <label class="mb-0 pl-4" for="r6">貨到付款</label>
                    </div>
                </div>
            </div>
        </div>

        <button class="btn-green_An" type="button" value="123">購買</button>
    </div>
</div>
</>
)}

export default storepage