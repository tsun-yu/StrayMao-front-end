import React, { useState, useEffect } from 'react'
import { Parallax } from 'rc-scroll-anim'
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
      <footer className="navbar-fixed-bottom homeFt_bg ">
        <div className="position-relative homeFtBlock">
          <div className="row col-6 justify-content-center">
            <div className="col-3"></div>
            <div className="col">
              <div className="homeFtSlogan">
                <div>給愛一個家,</div>
                <div className="text-right pt-3">也把想要的都打包回家。</div>
              </div>
            </div>
          </div>
          <Parallax
            animation={{ x: 950, opacity: 1, playScale: [0, 1] }}
            style={{ transform: 'translateX(-100px)', opacity: 1 }}
            className="homeFtTruck position-absolute"
          />
          <div className="homeFtTree position-absolute"></div>
        </div>
        <div className="homeFtBar"></div>
      </footer>
    </>
  )
}

export default HomeFooter
