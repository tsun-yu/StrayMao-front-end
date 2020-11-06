import React, { useState, useEffect } from 'react'
import { HiArrowCircleRight } from 'react-icons/hi'
import Page2Img from './HP-component/Page2Img'
import { Parallax } from 'rc-scroll-anim'

function Page2(props) {
  return (
    <>
      <div className=" container page2">
        <div className="row">
          <div className="d-flex mx-auto">
            {/* <Page2Img
              img="/image/homepage/homepage2-1.png"
              page2ImgClass="page2img"
            /> */}
            <Parallax
              animation={{ y: 0, opacity: 1, playScale: [0.1, 0.5] }}
              style={{ transform: 'translateY(150px)', opacity: 0 }}
              className="page2img1"
            />
            <Parallax
              animation={{ y: 0, opacity: 1, playScale: [0.3, 0.7] }}
              style={{ transform: 'translateY(150px)', opacity: 0 }}
              className="page2img2"
            />
            <Parallax
              animation={{ y: 0, opacity: 1, playScale: [0.4, 0.8] }}
              style={{ transform: 'translateY(150px)', opacity: 0 }}
              className="page2img3"
            />

            {/* <Page2Img
              img="/image/homepage/homepage2-2.png"
              page2ImgClass="page2img2 page2img"
            /> */}
            {/* <Page2Img
              img="/image/homepage/homepage2-3.png"
              page2ImgClass="page2img page2img3"
            /> */}
            <div className="page2desBlock">
              <div className="adopt">
                <span>Adopt -</span>
              </div>
              <div className="page2des">
                <span>遇見，命中注定的那個牠</span>
              </div>
              <div className="page2des2">
                立刻前往
                <HiArrowCircleRight color="#a5a58d" size={16} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page2
