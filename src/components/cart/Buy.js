import React, { useState, useEffect } from 'react'
import "../../styles/cart/buy.scss";
import BuyCardC from "./BuyCardC"
import BuyCardM from "./BuyCardM"
function Buy(props) {
return(
<>
<div className="buyC_body_An">
    <div className="container buyC_box_An">
        <div className="buyC_boxBottom_An">
            <BuyCardC />
        </div>
        <div className="buyC_boxDown_An d-flex justify-content-between">
            <div className="buyC_boxDownLeft_An">
                <span className="buyC_countPrice_An">小計：2790 元 + 運費：40元</span>
            </div>
            <div className="buyC_boxDownRight_An">
                <span className="buyC_totalPrice_An">總計：2790 元</span>
            </div>
        </div>
        <div className="buyC_boxConsignee_An">
            <div>
                <span>收件人姓名</span>
                <input className="buyC_input-green_An" type="text" placeholder="123"/>
            </div>
            <div>
                <span>連絡電話</span>
                <input className="buyC_input-green_An" type="text" placeholder="123"/>
            </div>
        </div>
        <div className="buyC_boxAddress_An">
            <div>
                <span>取貨方式</span>
                <div className="d-flex mx-0 my-0">
                    <div className="buyC_opt_An ml-0 mt-3 mb-0">
                        <input className="buyC_magic-radio_An" type="radio" name="radio1" id="r1" value="option1"/>
                        <label className="mb-0 pl-4" for="r1">郵寄</label>
                    </div>
                    <div className="buyC_opt_An mt-3 mb-0">
                        <input className="buyC_magic-radio_An" type="radio" name="radio1" id="r2" value="option2"/>
                        <label className="mb-0 pl-4" for="r2">宅急便</label>
                    </div>
                    <div className="buyC_opt_An mt-3 mb-0">
                        <input className="buyC_magic-radio_An" type="radio" name="radio1" id="r3" value="option3"/>
                        <label className="mb-0 pl-4" for="r3">便利商店取貨</label>
                    </div>
                </div>
            </div>
            <div>
                <span>地址</span>
                <input className="buyC_input-green_An" type="text" placeholder="123"/>
            </div>
        </div>
        <div className="buyC_boxAddress_An">
            <div>
                <span>付款方式</span>
                <div className="d-flex mx-0 my-0">
                    <div className="buyC_opt_An ml-0 mt-3 mb-0">
                        <input className="buyC_magic-radio_An" type="radio" name="radio2" id="r4" value="option4"/>
                        <label className="mb-0 pl-4" for="r4">信用卡</label>
                    </div>
                    <div className="buyC_opt_An mt-3 mb-0">
                        <input className="buyC_magic-radio_An" type="radio" name="radio2" id="r5" value="option5"/>
                        <label className="mb-0 pl-4" for="r5">ATM</label>
                    </div>
                    <div className="buyC_opt_An mt-3 mb-0">
                        <input className="buyC_magic-radio_An" type="radio" name="radio2" id="r6" value="option6"/>
                        <label className="mb-0 pl-4" for="r6">貨到付款</label>
                    </div>
                </div>
            </div>
        </div>

        <button className="buyC_btn-green_An" type="button" value="123">購買</button>
    </div>
</div>

<div className="buyM_body_An">
    <div className="buyM_box_An">
        <div className="buyM_boxBottom_An">
            <BuyCardM />
        </div>
        <div className="buyM_boxDown_An d-flex flex-column">
            <span className="buyM_countPrice_An">小計：2790 元 + 運費：40元</span>
            <span className="buyM_totalPrice_An">總計：2790 元</span>
        </div>
        <div className="buyM_boxConsignee_An">
            <div>
                <span c>收件人姓名</span>
                <input className="buyM_input-green_An" type="text" placeholder="123"/>
            </div>
            <div>
                <span>連絡電話</span>
                <input className="buyM_input-green_An" type="text" placeholder="123"/>
            </div>
        </div>
        <div className="buyM_boxAddress_An">
            <div>
                <span>取貨方式</span>
                <div className="d-flex mx-0 my-0">
                    <div className="buyM_opt_An mx-0 mt-3 mb-0">
                        <input className="buyM_magic-radio_An" type="radio" name="radio1" id="r1" value="option1"/>
                        <label className="mb-0 pl-4" for="r1">郵寄</label>
                    </div>
                    <div className="buyM_opt_An mt-3 mb-0">
                        <input className="buyM_magic-radio_An" type="radio" name="radio1" id="r2" value="option2"/>
                        <label className="mb-0 pl-4" for="r2">宅急便</label>
                    </div>
                    <div className="buyM_opt_An mx-0 mt-3 mb-0">
                        <input className="buyM_magic-radio_An" type="radio" name="radio1" id="r3" value="option3"/>
                        <label className="mb-0 pl-4" for="r3">便利商店取貨</label>
                    </div>
                </div>
            </div>
            <div>
                <span>地址</span>
                <input className="buyM_input-green_An" type="text" placeholder="123"/>
            </div>
        </div>
        <div className="buyM_boxAddress_An">
            <div>
                <span>付款方式</span>
                <div className="d-flex mx-0 my-0">
                    <div className="buyM_opt_An mx-0 mt-3 mb-0">
                        <input className="buyM_magic-radio_An" type="radio" name="radio2" id="r4" value="option4"/>
                        <label className="mb-0 pl-4" for="r4">信用卡</label>
                    </div>
                    <div className="buyM_opt_An mt-3 mb-0">
                        <input className="buyM_magic-radio_An" type="radio" name="radio2" id="r5" value="option5"/>
                        <label className="mb-0 pl-4" for="r5">ATM</label>
                    </div>
                    <div className="buyM_opt_An mx-0 mt-3 mb-0">
                        <input className="buyM_magic-radio_An" type="radio" name="radio2" id="r6" value="option6"/>
                        <label className="mb-0 pl-4" for="r6">貨到付款</label>
                    </div>
                </div>
            </div>
        </div>

        <button className="buyM_btn-green_An" type="button" value="123">購買</button>
    </div>
</div>
</>
)}

export default Buy