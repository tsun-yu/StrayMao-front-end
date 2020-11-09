import React, { useState, useEffect } from 'react'
import Page1Carousel from './HP-component/Page1Carousel'

function Page1(props) {
  useEffect(() => {
    let newIndex = 0

    const interval = setInterval(() => {
      // newIndex > 3 && (newIndex = 0)
      if (newIndex > 3) {
        document.querySelector('.page1left-wrap').style.transition = '0s'
        newIndex = 0
      } else {
        document.querySelector('.page1left-wrap').style.transition = '0.5s'
      }
      let slide = newIndex * -70
      document.querySelector('.page1left-wrap').style.top = slide + 'vh'
      newIndex++
    }, 2000)
    return () => {
      clearInterval(interval)
    }
  }, [])
  return (
    <>
      <div className="d-flex page1">
        <div className="page1left position-relative">
          <div className="position-absolute page1left-wrap">
            <div className="page1left-1">
              <div className="page1des">Love them likes family.</div>
              <div className="page1des2 d-flex flex-column justify-content-around">
                <div className="hide">fuck</div>
                <div>給他們一個機會, 擁有一個家。</div>
                <div className="page1des3 mr-2">>了解更多</div>
              </div>
            </div>
            <div className="page1left-2">
              <div className="page1des">
                It's not coincidence about meet our furbaby.
              </div>
              <div className="page1des2 d-flex flex-column justify-content-around">
                <div className="hide">fuck</div>
                <div>與毛孩的相遇，從來都不是巧合。</div>
                <div className="page1des3 mr-2">>了解更多</div>
              </div>
            </div>
            <div className="page1left-1">
              <div className="page1des">Love them likes family.</div>
              <div className="page1des2 d-flex flex-column justify-content-around">
                <div className="hide">fuck</div>
                <div>給他們一個機會, 擁有一個家。</div>
                <div className="page1des3 mr-2">>了解更多</div>
              </div>
            </div>
            <div className="page1left-2">
              <div className="page1des">
                It's not coincidence about meet our furbaby.
              </div>
              <div className="page1des2 d-flex flex-column justify-content-around">
                <div className="hide">fuck</div>
                <div>與毛孩的相遇，從來都不是巧合。</div>
                <div className="page1des3 mr-2">>了解更多</div>
              </div>
            </div>
          </div>
        </div>
        <div className="page1right">
          <Page1Carousel
            img1="/image/homepage/homepage1-1.png"
            img2="/image/homepage/homepage1-2.png"
            img3="/image/homepage/homepage1-3.png"
            img4="/image/homepage/homepage1-4.png"
            img5="/image/homepage/homepage1-5.png"
          />
        </div>
      </div>
    </>
  )
}

export default Page1
