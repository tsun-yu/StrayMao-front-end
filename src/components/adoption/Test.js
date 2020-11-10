import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import AdopMapPage from "./AdopMapPage";
import AdopMainPage from "./AdopMainPage";
import AdopDetailPage from "./AdopDetailPage";
import AdopListPage from "./AdopListPage";
import AdopFormPage from "./AdopFormPage4";

function Test(props) {
  return (
    <>
      {/* <AdopFormPage /> */}
      {/* <AdopMainPage /> */}
      {/* <AdopListPage /> */}
      {/* <AdopDetailPage /> */}
      <AdopMapPage />
    </>
  );
}

const mapStateToProps = (store) => {
  return {};
};
const mapDispatchToProps = null;

export default connect(mapStateToProps, {})(Test);
