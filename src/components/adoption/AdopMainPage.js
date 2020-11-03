import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import AdopMainCardPic from "./AdopMainCardPic";
import AdopMainButton from "./AdopMainButton";
import AdopMainInfo from "./AdopMainInfo";
import AdopMainReadMore from "./AdopMainReadMore";

import { getRecommand, getRecommandAsync } from "../../actions/adoption/index";
function AdopMainPage(props) {
  const [test, setTest] = useState({});
  useEffect(() => {
    setTest(props.getRecommandAsync());
  }, []);
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
        <div className="col">
          <AdopMainInfo info={props.info}>
            <AdopMainReadMore />
          </AdopMainInfo>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (store) => {
  return { info: store.adoptReducer.getRecom };
};
const mapDispatchToProps = null;

export default connect(mapStateToProps, { getRecommand, getRecommandAsync })(
  AdopMainPage
);
