import React, { useState, useEffect } from "react";
import "../../../styles/custom.scss";
import footerCar from "./img/footerCar.svg";



function FooterCar() {
  return (
    <>
      <div className="ftImgs">
        <img className="ftImgItem" src={footerCar} alt="footerCar" />
      </div>
    </>
  );
}

export default FooterCar;
