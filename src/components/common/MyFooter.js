import React, { useState, useEffect } from "react";
import "../../styles/custom.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import footerCarBg from "../../images/footerCar_bg.svg";
import footerCar from "../../images/footerCar.svg";

function MyFooter() {
  return (
    <>
      <footer className="footer navbar-fixed-bottom footer_bg">
        <br />
        <div className="row container-fluid footer_content">
          <div className="row col-5 justify-content-start">
            <div className="col-3"></div>
            <div className="col title6-NC">
              <span className="Header5">寵愛有家，帶我回家</span>
              <br />
              <div className="footerText content_inside">
                我需要罐罐，需要摸摸
                <br />
                但我最需要的
                <br />
                是你的關愛ヽ(=^･ω･^=)丿~
              </div>
              <br />
              <div className="row col">
                <div className="link-title7">聯絡我們</div>
                <div className="col-1">
                  <FontAwesomeIcon icon={faFacebook} />
                </div>
                <div className="col-1">
                  <FontAwesomeIcon icon={faInstagram} />
                </div>
                <div className="col-1">
                  <FontAwesomeIcon icon={faYoutube} />
                </div>
              </div>
            </div>
          </div>
          <div className="row col justify-content-end">
            <div className="col-8 ftImgAll">
              <div className="ftImgBg">
                <img
                  className="ftImgBgItem"
                  src={footerCarBg}
                  alt="footerCarBg"
                />
              </div>
              <div className="ftImgs">
                <img className="ftImgItem" src={footerCar} alt="footerCar" />
              </div>
            </div>
            <div className="row col justify-content-end">
              <span className="bottomText">
                <br />
                <br />© 2020 Stray Mao, Taipei, Taiwan
              </span>
            </div>
          </div>
        </div>

        <br />
      </footer>
    </>
  );
}

export default MyFooter;
