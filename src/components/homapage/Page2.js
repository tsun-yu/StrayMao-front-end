import React, { useState, useEffect } from 'react'
import { HiArrowCircleRight } from 'react-icons/hi'
import Page2Img from './HP-component/Page2Img'

function Page2(props) {
  return (
    <>
      <div className=" container page2">
        <div className="row">
          <div className="d-flex mx-auto">
            <Page2Img
              img="/image/homepage/homepage2-1.png"
              page2ImgClass="page2img"
            />

            <Page2Img
              img="/image/homepage/homepage2-2.png"
              page2ImgClass="page2img2 page2img"
            />
            <Page2Img
              img="/image/homepage/homepage2-3.png"
              page2ImgClass="page2img page2img3"
            />
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
