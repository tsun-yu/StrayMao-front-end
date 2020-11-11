import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import AdopMainCardPic from './AdopMainCardPic';
import AdopMainButton from './AdopMainButton';
import AdopMainInfo from './AdopMainInfo';
import AdopMainReadMore from './AdopMainReadMore';
function AdopDetailInfo(props) {
  // console.log(props.info);
  return (
    <>
      <div className="adopDetailInfo px-5 py-3">
        <ul className="adoptListStyleNone paragraph2 w-100">
          <li className="d-flex flex-row justify-content-between">
            <span className="adopDetailQues paragraph2">救援經過：</span>
            <div className="adopDetailAns">{props.info.Q1}</div>
          </li>
          <li className="d-flex flex-row justify-content-between">
            <span className="adopDetailQues paragraph2">預防針施打狀況：</span>
            <div className="adopDetailAns ">{props.info.Q2}</div>
          </li>
          <li className="d-flex flex-row justify-content-between">
            <span className="adopDetailQues paragraph2">
              血檢快篩貓瘟、貓白血、貓愛滋是否通過：
            </span>
            <span className="adopDetailAns">{props.info.Q3}</span>
          </li>
          <li className="d-flex flex-row justify-content-between">
            <span className="adopDetailQues paragraph2">
              上一次體內驅蟲時間：
            </span>
            <span className="adopDetailAns">{props.info.Q4}</span>
          </li>
          <li className="d-flex flex-row justify-content-between">
            <span className="adopDetailQues paragraph2">
              上一次體外驅蟲時間：
            </span>
            <span className="adopDetailAns">{props.info.Q5}</span>
          </li>
          <li className="d-flex flex-row justify-content-between">
            <span className="adopDetailQues paragraph2">是否結紮：</span>
            <span className="adopDetailAns">{props.info.Q6}</span>
          </li>
          <li className="d-flex flex-row justify-content-between">
            <span className="adopDetailQues paragraph2">是否已植入晶片：</span>
            <span className="adopDetailAns">{props.info.Q7}</span>
          </li>
          <li className="d-flex flex-row justify-content-between">
            <span className="adopDetailQues paragraph2">是否親貓：</span>
            <span className="adopDetailAns">{props.info.Q8}</span>
          </li>
          <li className="d-flex flex-row justify-content-between">
            <span className="adopDetailQues ">是否親人：</span>
            <span className="adopDetailAns">{props.info.Q9}</span>
          </li>
          <li className="d-flex flex-row justify-content-between">
            <span className="adopDetailQues">是否親狗：</span>
            <span className="adopDetailAns">{props.info.Q10}</span>
          </li>
          <li className="d-flex flex-row justify-content-between">
            <span className="adopDetailQues">有沒有特別習慣：</span>
            <span className="adopDetailAns">{props.info.Q11}</span>
          </li>
          <li className="d-flex flex-row justify-content-between">
            <span className="adopDetailQues">
              有沒有什麼需要特別照顧的地方：
            </span>
            <span className="adopDetailAns">{props.info.Q12}</span>
          </li>
          <li className="d-flex flex-row justify-content-between">
            <span className="adopDetailQues">其他交代事項：</span>
            <span className="adopDetailAns">{props.info.Q13}</span>
          </li>
        </ul>
      </div>
    </>
  );
}

const mapStateToProps = (store) => {
  return {};
};
const mapDispatchToProps = null;

export default connect(mapStateToProps, {})(AdopDetailInfo);
