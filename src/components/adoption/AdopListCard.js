import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
function AdoptListCard(props) {
  return (
    <>
      <div className=" adoptListCard">
        <div className="icon d-flex">
          <svg className="icon-003-heart">
            <path d="M23.13,9.68l-.68-5.56a.93.93,0,0,0-.35-.61L17.77.19a.89.89,0,0,0-1-.06L11.57,3.28,6.38.13a.91.91,0,0,0-1,.06L1,3.51a.93.93,0,0,0-.35.61L0,9.68a.91.91,0,0,0,.31.8l10.67,9a.91.91,0,0,0,1.16,0l10.66-9A.94.94,0,0,0,23.13,9.68Z"></path>
          </svg>
        </div>
        <div className="img adoptListCardImg">
          <img src="/image/adoption/main-01.jpg" alt="鮮肉煲罐頭" />
        </div>

        <div className="adopListInfo">
          <p className="paragraph1">
            {/* <span>肉包</span> */}
            <span className="paragraph2">{props.info}</span>
            <span className="paragraph2"> 3 年 2 週</span>
          </p>
          <span className="paragraph2">台北 ,黑毛 </span>
          <a className="paragraph2 ">Read More</a>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (store) => {
  return {};
};
const mapDispatchToProps = null;

export default connect(mapStateToProps, {})(AdoptListCard);
