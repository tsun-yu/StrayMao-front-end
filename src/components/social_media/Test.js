import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

function Test(props) {
  return (
    <>
      <h5>social</h5>
    </>
  );
}

const mapStateToProps = (store) => {
  return {};
};
const mapDispatchToProps = null;

export default connect(mapStateToProps, {})(Test);
