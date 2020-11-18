//used elemect
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter }  from "react-router-dom";


function Test(props) {
  return (
    <>
      <h1>Test What !!?</h1>
    </>
  )
}

const mapStateToProps = (store) => {
  return {};
};
const mapDispatchToProps = null;

// export default connect(mapStateToProps, {})(Test);

export default withRouter(connect(mapStateToProps, {})(Test));
