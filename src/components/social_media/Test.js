import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import SocialFourm from "./page/SocialFourm";
import SocialHomepage from "./page/SocialHomepage";

function Test(props) {
  return (
    <>
      <SocialFourm />
    </>
  );
}

const mapStateToProps = (store) => {
  return {};
};
const mapDispatchToProps = null;

export default connect(mapStateToProps, {})(Test);
