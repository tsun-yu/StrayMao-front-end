import ReactStars from "react-rating-stars-component";
import React, { useState, useEffect } from 'react';
import "../../styles/cart/orderlist.scss";
import $ from 'jquery'
import Moment from 'react-moment';

function MyComment_card(props) {
  let info = props.info;
  const [thiscomStars , setThisComStars] = useState(info.comStars);

  const commentStarGroup = {
    size: 20,
    count: 5,
    color: "#ed8f8f",
    activeColor: "#ed8f8f",
    value: info.comStars,
    a11y: false,
    isHalf: false,
    emptyIcon: <i className="far fa-star" />,
    // halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
    onChange: newValue => {
      console.log("commentStars: new value is", newValue);
      setThisComStars(newValue);
      // $("#comStars_" + info.orderId + info.goodsId + info.memberId).val(newValue);
    }
  };

return(
<>
  <div className="myCommentWrap">
    <div className="productMain">
        <img className="productImg" src={"." + info.goodsImgs} alt="product image" />
        <div className="commentStar">
          <ReactStars {...commentStarGroup} />
        </div>
    </div>
    <div className="commentMain">
        <div className="productName1">商品名稱：{info.name}</div>
        <div className="">
          <textarea 
            className="form-control infoInput2 commentContent" 
            id={"comDescArea_" + info.orderId + info.goodsId + info.memberId} 
            rows="3"
          >{info.comDesc}</textarea>
        </div>
        <input type="hidden" id={"comStars_" + info.orderId + info.goodsId + info.memberId} value=""  />
        <div className="commentDate">評價日期：
          <Moment format="YYYY/MM/DD hh:mm:ss">{info.comDate}</Moment>
        </div>
    </div>
    
    <div className="commentBtnGroup">
    <button className="commentBtn"
      onClick={() => {
        const id = "#comDescArea_" + info.orderId + info.goodsId + info.memberId;
        // const comDesc = document.querySelector(id).innerHTML;
        const $comDesc2 = $("#comDescArea_" + info.orderId + info.goodsId + info.memberId);
        props.setDoSave({
          orderId: info.orderId,
          goodsId: info.goodsId,
          memberId: info.memberId,
          comStars: parseInt(thiscomStars),
          comDesc: $comDesc2.val(),
        });
      }}
    > {(info.comDesc =='' && info.comStars == '') ? "儲存":"更新" }</button>
        <button className="commentBtn">刪除</button>
    </div>
  </div>
</>
)}

export default MyComment_card