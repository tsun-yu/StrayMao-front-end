import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

function AdopMainReadMore(props) {
  return (
    <>
      <div className="d-flex flex-row mx-auto adoptReadMore mt-5">
        <a href="#">Read More</a>
      </div>
    </>
  );
}

const mapStateToProps = (store) => {
  return {};
};
const mapDispatchToProps = null;

export default connect(mapStateToProps, {})(AdopMainReadMore);
