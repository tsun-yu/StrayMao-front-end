import React, { useState, useEffect } from "react";
import "../../styles/custom.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import FooterImgs from "./footerItem/FooterImgs";

function MyFooter() {
  return (
    <>
      <footer className="footer navbar-fixed-bottom footer_bg">
        <br />
        <div className="row container-fluid footer_content">
          <div className="row col-5 justify-content-start">
            <div className="col-3"></div>
            <div className="col">
              <div className="ftSlogan">寵愛有家，帶我回家</div>
              <br />
              <div className="footerText content_inside">
                我需要罐罐，需要摸摸
                <br />
                但我最需要的
                <br />
                是你的關愛ヽ(=^･ω･^=)丿~
              </div>
              <br />
              <div className="row col linkItem">
                <span className="linkItemTitle">追蹤我們</span>
                <ul className="linkList">
                  <li>
                    <FontAwesomeIcon icon={faFacebook} />
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faInstagram} />
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faYoutube} />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row col justify-content-end">
            <FooterImgs />
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
