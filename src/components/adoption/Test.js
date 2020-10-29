import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import AdopListPage from "./AdopListPage";
import AdopMainPage from "./AdopMainPage";
import AdopDetailPage from "./AdopDetailPage";
function Test(props) {
  return (
    <>
      {/* <AdopMainPage /> */}
      {/* <AdopListPage /> */}
      <AdopDetailPage />
    </>
  );
}

const mapStateToProps = (store) => {
  return {};
};
const mapDispatchToProps = null;

export default connect(mapStateToProps, {})(Test);
