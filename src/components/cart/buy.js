import React, { useState, useEffect } from 'react'
import "../../styles/cart/buy.scss";
import BuyCardC from "./buyCardC"
import BuyCardM from "./buyCardM"
function buy(props) {
return(
<>
<div class="buyC_body_An">
    <div class="container buyC_box_An">
        <div class="buyC_boxBottom_An">
            <BuyCardC />
        </div>
        <div class="buyC_boxDown_An d-flex justify-content-between">
            <div class="buyC_boxDownLeft_An">
                <span class="buyC_countPrice_An">小計：2790 元 + 運費：40元</span>
            </div>
            <div class="buyC_boxDownRight_An">
                <span class="buyC_totalPrice_An">總計：2790 元</span>
            </div>
        </div>
        <div class="buyC_boxConsignee_An">
            <div>
                <span>收件人姓名</span>
                <input class="buyC_input-green_An" type="text" placeholder="123"/>
            </div>
            <div>
                <span>連絡電話</span>
                <input class="buyC_input-green_An" type="text" placeholder="123"/>
            </div>
        </div>
        <div class="buyC_boxAddress_An">
            <div>
                <span>取貨方式</span>
                <div class="d-flex mx-0 my-0">
                    <div class="buyC_opt_An ml-0 mt-3 mb-0">
                        <input class="buyC_magic-radio_An" type="radio" name="radio1" id="r1" value="option1"/>
                        <label class="mb-0 pl-4" for="r1">郵寄</label>
                    </div>
                    <div class="buyC_opt_An mt-3 mb-0">
                        <input class="buyC_magic-radio_An" type="radio" name="radio1" id="r2" value="option2"/>
                        <label class="mb-0 pl-4" for="r2">宅急便</label>
                    </div>
                    <div class="buyC_opt_An mt-3 mb-0">
                        <input class="buyC_magic-radio_An" type="radio" name="radio1" id="r3" value="option3"/>
                        <label class="mb-0 pl-4" for="r3">便利商店取貨</label>
                    </div>
                </div>
            </div>
            <div>
                <span>地址</span>
                <input class="buyC_input-green_An" type="text" placeholder="123"/>
            </div>
        </div>
        <div class="buyC_boxAddress_An">
            <div>
                <span>付款方式</span>
                <div class="d-flex mx-0 my-0">
                    <div class="buyC_opt_An ml-0 mt-3 mb-0">
                        <input class="buyC_magic-radio_An" type="radio" name="radio2" id="r4" value="option4"/>
                        <label class="mb-0 pl-4" for="r4">信用卡</label>
                    </div>
                    <div class="buyC_opt_An mt-3 mb-0">
                        <input class="buyC_magic-radio_An" type="radio" name="radio2" id="r5" value="option5"/>
                        <label class="mb-0 pl-4" for="r5">ATM</label>
                    </div>
                    <div class="buyC_opt_An mt-3 mb-0">
                        <input class="buyC_magic-radio_An" type="radio" name="radio2" id="r6" value="option6"/>
                        <label class="mb-0 pl-4" for="r6">貨到付款</label>
                    </div>
                </div>
            </div>
        </div>

        <button class="buyC_btn-green_An" type="button" value="123">購買</button>
    </div>
</div>

<div class="buyM_body_An">
    <div class="buyM_box_An">
        <div class="buyM_boxBottom_An">
            <BuyCardM />
        </div>
        <div class="buyM_boxDown_An d-flex flex-column">
            <span class="buyM_countPrice_An">小計：2790 元 + 運費：40元</span>
            <span class="buyM_totalPrice_An">總計：2790 元</span>
        </div>
        <div class="buyM_boxConsignee_An">
            <div>
                <span c>收件人姓名</span>
                <input class="buyM_input-green_An" type="text" placeholder="123"/>
            </div>
            <div>
                <span>連絡電話</span>
                <input class="buyM_input-green_An" type="text" placeholder="123"/>
            </div>
        </div>
        <div class="buyM_boxAddress_An">
            <div>
                <span>取貨方式</span>
                <div class="d-flex mx-0 my-0">
                    <div class="buyM_opt_An mx-0 mt-3 mb-0">
                        <input class="buyM_magic-radio_An" type="radio" name="radio1" id="r1" value="option1"/>
                        <label class="mb-0 pl-4" for="r1">郵寄</label>
                    </div>
                    <div class="buyM_opt_An mt-3 mb-0">
                        <input class="buyM_magic-radio_An" type="radio" name="radio1" id="r2" value="option2"/>
                        <label class="mb-0 pl-4" for="r2">宅急便</label>
                    </div>
                    <div class="buyM_opt_An mx-0 mt-3 mb-0">
                        <input class="buyM_magic-radio_An" type="radio" name="radio1" id="r3" value="option3"/>
                        <label class="mb-0 pl-4" for="r3">便利商店取貨</label>
                    </div>
                </div>
            </div>
            <div>
                <span>地址</span>
                <input class="buyM_input-green_An" type="text" placeholder="123"/>
            </div>
        </div>
        <div class="buyM_boxAddress_An">
            <div>
                <span>付款方式</span>
                <div class="d-flex mx-0 my-0">
                    <div class="buyM_opt_An mx-0 mt-3 mb-0">
                        <input class="buyM_magic-radio_An" type="radio" name="radio2" id="r4" value="option4"/>
                        <label class="mb-0 pl-4" for="r4">信用卡</label>
                    </div>
                    <div class="buyM_opt_An mt-3 mb-0">
                        <input class="buyM_magic-radio_An" type="radio" name="radio2" id="r5" value="option5"/>
                        <label class="mb-0 pl-4" for="r5">ATM</label>
                    </div>
                    <div class="buyM_opt_An mx-0 mt-3 mb-0">
                        <input class="buyM_magic-radio_An" type="radio" name="radio2" id="r6" value="option6"/>
                        <label class="mb-0 pl-4" for="r6">貨到付款</label>
                    </div>
                </div>
            </div>
        </div>

        <button class="buyM_btn-green_An" type="button" value="123">購買</button>
    </div>
</div>
</>
)}

export default buy