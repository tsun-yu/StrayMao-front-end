import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import AdopMainCardPic from "./AdopMainCardPic";
import AdopMainButton from "./AdopMainButton";
import AdopMainInfo from "./AdopMainInfo";
import AdopMainReadMore from "./AdopMainReadMore";
function AdopDetailInfo(props) {
  return (
    <>
      <div className="adopDetailInfo">
        <ul className="adoptListStyleNone">
          <li>
            <span className="adopDetailQues">救援經過：</span>
            <span className="adopDetailAns">
              被人用老鼠籠誘捕要丟到山區野放。
            </span>
          </li>
          <li>
            <span className="adopDetailQues">預防針施打狀況：</span>
            <span className="adopDetailAns">每年都有打3合一疫苗</span>
          </li>
          <li>
            <span className="adopDetailQues">
              血檢快篩貓瘟、貓白血、貓愛滋是否通過：
            </span>
            <span className="adopDetailAns">均過關</span>
          </li>
          <li>
            <span className="adopDetailQues">上一次體內驅蟲時間：</span>
            <span className="adopDetailAns">108/12</span>
          </li>
          <li>
            <span className="adopDetailQues">上一次體外驅蟲時間：</span>
            <span className="adopDetailAns">109/1</span>
          </li>
          <li>
            <span className="adopDetailQues">是否結紮：</span>
            <span className="adopDetailAns">是</span>
          </li>
          <li>
            <span className="adopDetailQues">是否已植入晶片：</span>
            <span className="adopDetailAns">是</span>
          </li>
          <li>
            <span className="adopDetailQues">是否親貓：</span>
            <span className="adopDetailAns">親</span>
          </li>
          <li>
            <span className="adopDetailQues">是否親人：</span>
            <span className="adopDetailAns">親</span>
          </li>
          <li>
            <span className="adopDetailQues">是否親狗：</span>
            <span className="adopDetailAns">不知道</span>
          </li>
          <li>
            <span className="adopDetailQues">有沒有特別習慣：</span>
            <span className="adopDetailAns">
              有時候拍屁屁她會生氣，有時候很爽
            </span>
          </li>
          <li>
            <span className="adopDetailQues">
              有沒有什麼需要特別照顧的地方：
            </span>
            <span className="adopDetailAns">無</span>
          </li>
          <li>
            <span className="adopDetailQues">其他交代事項：</span>
            <span className="adopDetailAns">留意皮膚狀況</span>
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
