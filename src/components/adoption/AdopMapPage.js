import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import AdopMapCheck from "./AdopMapCheck";
import AdopMapMain from "./AdopMapMain";
import AdopMapDetail from "./AdopMapDetail";
function AdopMapPage(props) {
  return (
    <>
      <div className="row">
        <AdopMapCheck />
        <AdopMapMain />
        <AdopMapDetail />
      </div>
    </>
  );
}

const mapStateToProps = (store) => {
  return {};
};
const mapDispatchToProps = null;

export default connect(mapStateToProps, {})(AdopMapPage);
