import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

function AdopMainCardPic(props) {
  return (
    <>
      <div className="adoptionMainCardPicture">
        <img className="" src="/image/adoption/main-01.jpg" />
        {props.children}
      </div>
    </>
  );
}

const mapStateToProps = (store) => {
  return {};
};
const mapDispatchToProps = null;

export default connect(mapStateToProps, {})(AdopMainCardPic);
