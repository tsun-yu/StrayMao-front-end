import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import AdopMainCardPic from "./AdopMainCardPic";
import AdopMainButton from "./AdopMainButton";
import AdopMainInfo from "./AdopMainInfo";
import AdopMainReadMore from "./AdopMainReadMore";
import AdopDetailInfo from "./AdopDetailInfo";
function AdopDetailPage(props) {
  return (
    <>
      <div className="adopRecommand">
        <div className="col p-1">
          <AdopMainCardPic />
        </div>
        <div className="col">
          <AdopMainInfo />
        </div>
      </div>
      <AdopDetailInfo />
    </>
  );
}

const mapStateToProps = (store) => {
  return {};
};
const mapDispatchToProps = null;

export default connect(mapStateToProps, {})(AdopDetailPage);
