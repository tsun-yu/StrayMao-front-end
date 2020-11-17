import ReactStars from "react-rating-stars-component";
import React, { useState, useEffect } from 'react';
import "../../styles/cart/orderlist.scss";


const commentStarGroup = {
  size: 20,
  count: 5,
  color: "#ed8f8f",
  activeColor: "#ed8f8f",
  value: 4,
  a11y: true,
  isHalf: false,
  emptyIcon: <i className="far fa-star" />,
  // halfIcon: <i className="fa fa-star-half-alt" />,
  filledIcon: <i className="fa fa-star" />,
  onChange: newValue => {
    console.log(`commentStars: new value is ${newValue}`);
  }
};

function MyComment_card(props) {
  console.log("MyComment_card : " , props)
  let info = props.info;

return(
<>
  <div className="myCommentWrap">
    <div className="productMain">
        <img className="productImg" src="./image/store/brothcan-1-510x510.jpg" alt="product image" />
        <div className="commentStar">
        <ReactStars {...commentStarGroup} />
        </div>
    </div>
    <div className="commentMain">
        <div className="productName">商品名稱：{info.name}</div>
        <div className="commentContent">
        <textarea 
          className="form-control infoInput2" 
          id="infoInputAddress" 
          rows="3"
          value={info.comDesc}
          onChange={(event) => {
              // setcomDesc(event.target.value)
          }}
        ></textarea>
        </div>
        <div className="commentDate">評價日期：{info.comDate} </div>
    </div>
    
    <div className="commentBtnGroup">
    <button className="commentBtn"></button>
        <button className="commentBtn"
          onClick={() => {
            props.setDoSave({
              orderId: info.orderId,
              goodsId: info.goodsId,
              memberId: info.memberId,
              comStars: '',
              comDesc: '',
            });
          }}
        > {(info.comDesc =='' && info.comStars == '') ? "儲存":"更新" }</button>
        <button className="commentBtn">刪除</button>
    </div>
  </div>
</>
)}

export default MyComment_card