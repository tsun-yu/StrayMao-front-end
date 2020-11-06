/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

function AdopMainCardPic(props) {
  return (
    <>
      <div className="adoptionMainCardPicture">
        <img
          className=""
          src={
            props.info.pic === null
              ? "/image/adoption/main-01.jpg"
              : props.info.pic
          }
        />
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
