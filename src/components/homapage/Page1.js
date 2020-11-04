import React, { useState, useEffect } from 'react'
import Page1Carousel from './HP-component/Page1Carousel'

function Page1(props) {
  return (
    <>
      <div className="d-flex page1">
        <div className="page1left">
          <div className="page1des">Love them likes family.</div>
          <div className="page1des2 d-flex flex-column justify-content-around">
            <div className="hide">fuck</div>
            <div>給他們一個機會, 擁有一個家。</div>
            <div className="page1des3 mr-2">>了解更多</div>
          </div>
        </div>
        <Page1Carousel
          img1="/image/homepage/homepage1-1.png"
          img2="/image/homepage/homepage1-2.png"
          img3="/image/homepage/homepage1-3.png"
          img4="/image/homepage/homepage1-4.png"
          img5="/image/homepage/homepage1-5.png"
        />
      </div>
    </>
  )
}

export default Page1
