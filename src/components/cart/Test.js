import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Main from "./main"

function Test(props) {
  return (
    <>
      <Main />
    </>
  );
}

const mapStateToProps = (store) => {
  return {};
};
const mapDispatchToProps = null;

export default connect(mapStateToProps, {})(Test);