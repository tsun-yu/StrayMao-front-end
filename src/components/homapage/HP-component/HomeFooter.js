import React, { useState, useEffect } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
// import FooterImgs from './footerItem/FooterImgs'

function HomeFooter() {
  return (
    <>
      <footer className="footer navbar-fixed-bottom homeFooter_bg page7">
        <br />
        <div className="row container-fluid footer_content">
          <div className="row col-5 justify-content-start">
            <div className="col-3"></div>
            <div className="col">
              <div className="ftSlogan">
                <div>給愛一個家,</div>
                <div>也把想要的都打包回家。</div>
              </div>
            </div>
          </div>
          <div className="row col justify-content-end">
            {/* <FooterImgs /> */}
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
  )
}

export default HomeFooter
