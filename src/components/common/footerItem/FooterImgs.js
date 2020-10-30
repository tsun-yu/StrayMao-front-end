import React, { useState, useEffect } from "react";
import "../../../styles/custom.scss";
import footerCarBg from "./img/footerCar_bg.svg";
import FooterCar from "./FooterCar.js";

function FooterImgs() {
  return (
    <>
      <div className="col-8 ftImgAll">
        <div className="ftImgBg">
          <img className="ftImgBgItem" src={footerCarBg} alt="footerCarBg" />
        </div>
        <FooterCar />
      </div>
    </>
  );
}

export default FooterImgs;
