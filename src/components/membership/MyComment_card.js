import React, { useState, useEffect } from 'react';
import ReactStars from "react-rating-stars-component";
import Moment from 'react-moment';
import confirm , { Button, alert } from "react-alert-confirm";
import { Fragment } from "react";


function MyComment_card(props) {
  let info = props.info;
  // const [info , setInfo] = useState(props.info)
  const [thiscomStars , setThisComStars] = useState(info.comStars);
  const [thisComDesc , setThisComDesc] = useState(info.comDesc);
  
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
      setThisComStars(newValue);
    }
  };

  const confirmDelete = () => {
    confirm({
      title: "我們很重視您的評價，真的要刪除嗎?",
      content: "喵嗚~ 這是真的嗎?",
      footer: dispatch => (
        <Fragment>
          <Button onClick={() => dispatch("cancel")}>取 消</Button>
          <Button onClick={() => dispatch("ok")} styleType="danger">
            請幫我刪除
          </Button>
        </Fragment>
      ),
      closeBefore: (action, close) => {
        if (action === "ok") {
          props.setDoDelete({
            orderId: info.orderId,
            goodsId: info.goodsId,
            memberId: info.memberId,
          });
        } else {
          close();
        }
      }
    });
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
          value={thisComDesc}
          onChange={(event) => {
            setThisComDesc(event.target.value);
          }}
        ></textarea>
      </div>
      <div className="commentDate">評價日期：
        {(info.comDate=='') ? "尚未評價" : <Moment format="YYYY/MM/DD hh:mm:ss">{info.comDate}</Moment> }
      </div>
    </div>
    
    <div className="commentBtnGroup">
    <button className="commentBtn"
      onClick={() => {
        // const $comDesc2 = $("#comDescArea_" + info.orderId + info.goodsId + info.memberId);
        props.setDoSave({
          orderId: info.orderId,
          goodsId: info.goodsId,
          memberId: info.memberId,
          comStars: parseInt(thiscomStars),
          comDesc: thisComDesc,
        });
      }}
    > {(info.comDate == '') ? "儲存":"更新" }</button>
    <button className="commentBtn"
      onClick={() => {
        confirmDelete();
      }}
      // onClick={() => {
        // var yes = window.confirm('確定嗎？  喵~');
        // if (yes) {
        //   props.setDoDelete({
        //     orderId: info.orderId,
        //     goodsId: info.goodsId,
        //     memberId: info.memberId,
        //   });
        // } else {
        //   alert('好哩家在  喵~');
        // }
      // }}
    >刪除</button>
    </div>
  </div>
</>
)}

export default MyComment_card