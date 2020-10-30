import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import SocialHomepage from "./page/SocialHomepage";

function Test(props) {
  return (
    <>
      <SocialHomepage />
    </>
  );
}

const mapStateToProps = (store) => {
  return {};
};
const mapDispatchToProps = null;

export default connect(mapStateToProps, {})(Test);
