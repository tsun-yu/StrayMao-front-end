import React, { useState, useEffect } from 'react'
import { connect } from "react-redux"
import "../../styles/cart/cartlist.scss"
import CartlistCardC from "./cartlistCardC"
import CartlistCardM from "./cartlistCardM"

import { getRecommand, getRecommandAsync } 
from "../../actions/cart/index";
function cartlist(props) {
    // const [test, setTest] = useState({});
    // useEffect(() => {
    //     setTest(props.getRecommandAsync());
    // }, []);
return(
<>
<div class="cartlistC_body_An">
    <div class="container cartlistC_box_An">
        <div class="cartlistC_boxBottom_An">
            <CartlistCardC />
        </div>
        <div class="cartlistC_boxDown_An d-flex justify-content-between">
            <div class="cartlistC_boxDownLeft_An d-flex">
            <div class="cartlistC_icon-018-trashDown_An">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.82 24.22">
                    <path id="Path_1809" data-name="Path 1809" d="M19.87,2.78H13.72V1a.94.94,0,0,0-1-.95H8A.94.94,0,0,0,7.1,1V2.78H1a.94.94,0,0,0-.95,1v3.7a1,1,0,0,0,1,1H2.36V21.86a2.37,2.37,0,0,0,2.37,2.36H16.09a2.36,2.36,0,0,0,2.36-2.36V8.38h1.42a1,1,0,0,0,.95-1V3.73A1,1,0,0,0,19.87,2.78ZM9,1.89h2.84v.89H9Zm7.57,20a.47.47,0,0,1-.47.47H4.73a.47.47,0,0,1-.47-.47V8.38h12.3ZM18.92,6.49h-17V4.67h17Z"/>
                    <path id="Path_1810" data-name="Path 1810" d="M8,9.78a.94.94,0,0,0-.94.94V20A.95.95,0,0,0,9,20V10.72A.94.94,0,0,0,8,9.78Z"/>
                    <path id="Path_1811" data-name="Path 1811" d="M12.77,9.78a.94.94,0,0,0-.94.94h0V20a.95.95,0,0,0,1.89,0V10.72A.94.94,0,0,0,12.77,9.78Z"/>
                </svg>
            </div>
            <button class="cartlistC_btn-brown_An" type="button" value="123">全選</button>
            </div>
            <div class="cartlistC_boxDownRight_An">
            <span class="cartlistC_totalPrice_An">小計：2790 元</span>
            </div>
        </div>

        <button class="cartlistC_btn-green_An" type="button" value="123">購買</button>
    </div>
</div>

<div class="cartlistM_body_An">
    <div class="cartlistM_box_An">
        <div class="cartlistM_boxBottom_An">
            <CartlistCardM />
        </div>
        <div class="cartlistM_boxDown_An d-flex justify-content-between">
            <div class="cartlistM_d-flex flex-column justify-content-between">
                <div class="cartlistM_boxDownLeft_An d-flex">
                    <div class="cartlistM_icon-018-trashDown_An">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.82 24.22">
                            <path id="Path_1809" data-name="Path 1809" d="M19.87,2.78H13.72V1a.94.94,0,0,0-1-.95H8A.94.94,0,0,0,7.1,1V2.78H1a.94.94,0,0,0-.95,1v3.7a1,1,0,0,0,1,1H2.36V21.86a2.37,2.37,0,0,0,2.37,2.36H16.09a2.36,2.36,0,0,0,2.36-2.36V8.38h1.42a1,1,0,0,0,.95-1V3.73A1,1,0,0,0,19.87,2.78ZM9,1.89h2.84v.89H9Zm7.57,20a.47.47,0,0,1-.47.47H4.73a.47.47,0,0,1-.47-.47V8.38h12.3ZM18.92,6.49h-17V4.67h17Z"/>
                            <path id="Path_1810" data-name="Path 1810" d="M8,9.78a.94.94,0,0,0-.94.94V20A.95.95,0,0,0,9,20V10.72A.94.94,0,0,0,8,9.78Z"/>
                            <path id="Path_1811" data-name="Path 1811" d="M12.77,9.78a.94.94,0,0,0-.94.94h0V20a.95.95,0,0,0,1.89,0V10.72A.94.94,0,0,0,12.77,9.78Z"/>
                        </svg>
                    </div>
                    <button class="cartlistM_btn-brown_An" type="button" value="123">全選</button>
                </div>
                <span class="cartlistM_totalPrice_An">小計：2790 元</span>
            </div>
            <button class="cartlistM_btn-green_An" type="button" value="123">購買</button>
        </div>
    </div>
</div>
</>
)}

// const mapStateToProps = (store) => {
//     return { info: store.adoptReducer.getRecom };
//   };
//   const mapDispatchToProps = null;

// export default  connect(
//     mapStateToProps, {
//         getRecommand, getRecommandAsync 
//     })(cartlist)

export default cartlist