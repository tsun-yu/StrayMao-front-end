import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import AdopMainCardPic from "./AdopMainCardPic";
import AdopMainButton from "./AdopMainButton";
function Test(props) {
  return (
    <>
      <div className="adopTitleMain">
        <h5 className="adopTitle">ADOPT</h5>
        <div className="adopTitleLine" />
      </div>
      <div className="adopRecommand">
        <div className="col p-1">
          <AdopMainCardPic>
            <AdopMainButton />
          </AdopMainCardPic>
        </div>
        <div className="col">bbb</div>
      </div>
    </>
  );
}

const mapStateToProps = (store) => {
  return {};
};
const mapDispatchToProps = null;

export default connect(mapStateToProps, {})(Test);
