import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import AdopMapPage from "./AdopMapPage";
import AdopMainPage from "./AdopMainPage";
import AdopDetailPage from "./AdopDetailPage";
import AdopListPage from "./AdopListPage";
function Test(props) {
  return (
    <>
      <AdopMainPage />
      {/* <AdopListPage /> */}
      {/* <AdopDetailPage /> */}
      {/* <AdopMapPage /> */}
    </>
  );
}

const mapStateToProps = (store) => {
  return {};
};
const mapDispatchToProps = null;

export default connect(mapStateToProps, {})(Test);
