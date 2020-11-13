import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "../../styles/cart/cartlist.scss";

import { changeRecommandAsync,updateRecommandAsync,deleteRecommandAsync } 
from "../../actions/cart/index";
import { bindActionCreators } from "redux";

function CartListCardC(props) {
  const [quantity, setQuantity] = useState(props.info.quantity)
  const [test,setTest] = useState(0)
  const [checkboxvalue, setCheckBoxValue]=useState(false)
  const [totalPrice,setTotalPrice] = useState(props.info.price*props.info.quantity)
  // console.log("props.info.quantity:",props.storeInfo)
  // console.log("props.info.index:",props.index)
  // console.log("props.info.quantity2:",props.storeInfo)

  useEffect(()=>{
    // props.changeRecommandAsync([props.storeInfo[0]])
    console.log('checked', props.checked);
  },[props])



  const minusOne = ()=>{
    let storeInfo = props.storeInfo;
    console.log('qqq',storeInfo[props.index].quantity);
    storeInfo[props.index].quantity -= 1;
    console.log('qqq22',storeInfo[props.index].quantity);
    props.info.quantity = storeInfo[props.index].quantity;
    setQuantity(storeInfo[props.index].quantity)
    props.changeRecommandAsync(storeInfo)
    console.log("quantity:",quantity)
    setTotalPrice(storeInfo[props.index].quantity*props.info.price)
    props.cost()
  }

  const addOne = ()=>{
    let storeInfo = props.storeInfo;
    console.log('qqq',storeInfo[props.index].quantity);
    storeInfo[props.index].quantity += 1;
    console.log('qqq22',storeInfo[props.index].quantity);
    props.info.quantity = storeInfo[props.index].quantity;
    setQuantity(storeInfo[props.index].quantity)
    props.changeRecommandAsync(storeInfo)
    setTotalPrice(storeInfo[props.index].quantity*props.info.price)
    props.cost()
  }

  const trashBtn = ()=>{
    props.deleteRecommandAsync(props.info.cartId);
    console.log("dislike!!!");
    setTest(1)
  }

  const handleChange = (event)=>{
    setQuantity(event.target.value);
  }

  const handleCheckbox = (event)=>{
    props.setChecked({[event.target.value]:!checkboxvalue})
    setCheckBoxValue(!checkboxvalue)
  }

  return (
    <>
{test==1?"":

      <div className="cartlistC_boxUpper_An d-flex justify-content-between">
      <div className="d-flex">
        <div 
        id={"t_"+props.info.cartId} className="cartlistC_icon-018-trashUpper_An" onClick={()=>trashBtn()}
          // onClick={() => {
          //   props.deleteRecommandAsync(props.info.cartId);
          //   console.log("dislike!!!");
          //   }}
          >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.82 24.22">
            <path
              id="Path_1809"
              data-name="Path 1809"
              d="M19.87,2.78H13.72V1a.94.94,0,0,0-1-.95H8A.94.94,0,0,0,7.1,1V2.78H1a.94.94,0,0,0-.95,1v3.7a1,1,0,0,0,1,1H2.36V21.86a2.37,2.37,0,0,0,2.37,2.36H16.09a2.36,2.36,0,0,0,2.36-2.36V8.38h1.42a1,1,0,0,0,.95-1V3.73A1,1,0,0,0,19.87,2.78ZM9,1.89h2.84v.89H9Zm7.57,20a.47.47,0,0,1-.47.47H4.73a.47.47,0,0,1-.47-.47V8.38h12.3ZM18.92,6.49h-17V4.67h17Z"
            />
            <path
              id="Path_1810"
              data-name="Path 1810"
              d="M8,9.78a.94.94,0,0,0-.94.94V20A.95.95,0,0,0,9,20V10.72A.94.94,0,0,0,8,9.78Z"
            />
            <path
              id="Path_1811"
              data-name="Path 1811"
              d="M12.77,9.78a.94.94,0,0,0-.94.94h0V20a.95.95,0,0,0,1.89,0V10.72A.94.94,0,0,0,12.77,9.78Z"
            />
          </svg>
        </div>
        <div className="cartlistC_demo_An">
          <input
            className="cartlistC_magic-checkbox_An"
            type="checkbox"
            name="layout"
            id={props.info.cartId}
            value={props.info.cartId}
            onChange={(event)=>{handleCheckbox(event)}}
            checked={checkboxvalue}
            />
          <label for={props.info.cartId}></label>
        </div>
        <img
          className="cartlistC_goodsImg_An"
          src="./image/store/brothcan-1-510x510.jpg"
        ></img>
        </div>
        <span className="cartlistC_goodsName_An">
          {props.info.name}
        </span>
        <div className="d-flex">
        <div className="cartlistC_inputbox_An d-flex">
        <div className="cartlistC_icon-067-minus_An" onClick={() => minusOne()}>
          {/* <div className="cartlistC_icon-067-minus_An" onClick={() => setTotal(q - 1)}> */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.44 19.44">
              <path
                id="Path_1767"
                data-name="Path 1767"
                d="M19.48,0H.72A.81.81,0,0,0,0,.88a.8.8,0,0,0,.72.71H19.48a.8.8,0,0,0,.71-.88A.81.81,0,0,0,19.48,0Z"
              />
            </svg>
          </div>
          <input
            className="cartlistC_input-black_An"
            type="text"
            placeholder="123"
            value={quantity}
            onChange={(event)=>handleChange(event)}
          />
          <div className="cartlistC_icon-021-plus_An" onClick={() => addOne()}>
          {/* <div className="cartlistC_icon-021-plus_An" onClick={() => setTotal(q + 1)}> */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.44 19.44">
              <path
                id="Path_1806"
                data-name="Path 1806"
                d="M18.67,9h-8.2V.76A.76.76,0,1,0,9,.76V9H.76a.76.76,0,0,0,0,1.52H9v8.2a.76.76,0,1,0,1.52,0h0v-8.2h8.2a.76.76,0,0,0,0-1.52h0Z"
              />
            </svg>
          </div>
        </div>
        <div className="cartlistC_goodsPrice_An d-flex">
        <span>{totalPrice}</span>
        <span> 元</span>
        </div>
        </div>
        {props.children}
      </div>
}
    </>
  );
}

const mapStateToProps = (store) => {
  return {storeInfo: store.cartReducer.getRecom};
};
const mapDispatchToProps = dispatch =>{
  return bindActionCreators(
    {
      changeRecommandAsync,
      updateRecommandAsync,
      deleteRecommandAsync
    },
    dispatch
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(CartListCardC);


// export default cardlistCardC
