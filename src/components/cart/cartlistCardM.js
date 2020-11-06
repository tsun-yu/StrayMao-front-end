import React, { useState, useEffect } from 'react'
import "../../styles/cart/cartlist.scss";

function CardListCardM(props) {
return(
<>
    <div className="cartlistM_boxUpper_An d-flex">
        <div className="cartlistM_checkboxAndTrash_An d-flex flex-column justify-content-between">
            <div className="cartlistM_demo_An">    
                <input className="cartlistM_magic-checkbox_An" type="checkbox" name="layout" id="c1"/>
                <label for="c1"></label>
            </div>
            <div className="cartlistM_icon-018-trashUpper_An">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.82 24.22">
                    <path id="Path_1809" data-name="Path 1809" d="M19.87,2.78H13.72V1a.94.94,0,0,0-1-.95H8A.94.94,0,0,0,7.1,1V2.78H1a.94.94,0,0,0-.95,1v3.7a1,1,0,0,0,1,1H2.36V21.86a2.37,2.37,0,0,0,2.37,2.36H16.09a2.36,2.36,0,0,0,2.36-2.36V8.38h1.42a1,1,0,0,0,.95-1V3.73A1,1,0,0,0,19.87,2.78ZM9,1.89h2.84v.89H9Zm7.57,20a.47.47,0,0,1-.47.47H4.73a.47.47,0,0,1-.47-.47V8.38h12.3ZM18.92,6.49h-17V4.67h17Z"/>
                    <path id="Path_1810" data-name="Path 1810" d="M8,9.78a.94.94,0,0,0-.94.94V20A.95.95,0,0,0,9,20V10.72A.94.94,0,0,0,8,9.78Z"/>
                    <path id="Path_1811" data-name="Path 1811" d="M12.77,9.78a.94.94,0,0,0-.94.94h0V20a.95.95,0,0,0,1.89,0V10.72A.94.94,0,0,0,12.77,9.78Z"/>
                </svg>
            </div>
        </div>
        <img className="cartlistM_goodsImg_An" src="./image/store/brothcan-1-510x510.jpg"></img>
        <div className="cartlistM_nameInputboxAndPrice d-flex flex-column justify-content-between">
            <span className="cartlistM_goodsName_An">Farmina 法米納獸醫寵愛天然配方-貓用腸胃道 5kg</span>
            <span className="cartlistM_goodsPrice_An">2790 元</span>
            <div className="cartlistM_btn-quantity_An">
                <button className="cartlistM_quantitybtn_An">
                    <input className="cartlistM_input-transparent_An" type="text" placeholder="123" value="1"/>
                    <i className="fas fa-caret-down"></i>
                </button>
                <div className="cartlistM_btn-quantity-content_An">
                    <a href="#" value="111">111</a>
                    <a href="#" value="222">222</a>
                    <a href="#" value="333">333</a>
                </div>
            </div>
        </div>
    </div>
</>
)}
    
export default CardListCardM