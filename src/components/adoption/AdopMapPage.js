import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import AdopMapCheck from "./AdopMapCheck";
import AdopMapMain from "./AdopMapMain";
import AdopMapDetail from "./AdopMapDetail";
function AdopMapPage(props) {
  return (
    <>
      <div className="container">
        <div className="row ">
          <div className="col-2">
            <AdopMapCheck />
          </div>
          <div className="col-6">
            <AdopMapMain />
          </div>
          <div className="col-4">
            <AdopMapDetail />
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (store) => {
  return {};
};
const mapDispatchToProps = null;

export default connect(mapStateToProps, {})(AdopMapPage);
