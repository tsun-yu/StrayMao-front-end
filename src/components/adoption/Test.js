import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

function Test(props) {
  return (
    <>
      <div className="adopTitleMain">
        <h5 className="adopTitle">ADOPT</h5>
        <div className="adopTitleLine" />
      </div>
      <div className="adopRecommand">
        <div className="col p-1">aaa</div>
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
