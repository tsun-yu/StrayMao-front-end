import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
function AdopMapDetail(props) {
  return (
    <>
      <div className="adopMapDetail ">
        <div className="adopMapDetailTitle d-flex justify-content-center">
          敦品動物醫院
        </div>
        <div className="adopMapDetailPic d-flex justify-content-center">
          <img src="/image/adoption/map-01.jpg" alt="敦品動物醫院" />
        </div>
        <div className="adopMapDetailInfo  d-flex flex-column ">
          <div className="adopMapDetailAddr ">addr</div>
          <div className="adopMapDetailTime ">Time</div>
          <div className="adopMapDetailPhone ">Phone</div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (store) => {
  return {};
};
const mapDispatchToProps = null;

export default connect(mapStateToProps, {})(AdopMapDetail);
