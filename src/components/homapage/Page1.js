import React, { useState, useEffect } from 'react'
import Page1Carousel from './HP-component/Page1Carousel'

import Page1Text1 from './HP-component/Page1Text1'
import Page1Text2 from './HP-component/Page1Text2'

function Page1(props) {
  useEffect(() => {
    let newIndex = 0

    const interval = setInterval(() => {
      newIndex > 3 && (newIndex = 0)

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
      {/* line */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="114"
        height="1"
        viewBox="0 0 114 1"
        className="page1line position-absolute"
      >
        <line
          id="Line_2"
          data-name="Line 2"
          x2="114"
          transform="translate(0 0.5)"
          fill="none"
          stroke="#707070"
          strokeWidth="1"
        />
      </svg>
      {/* scroll */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="47"
        height="170.71"
        viewBox="0 0 47 170.71"
        className="page1scroll position-absolute"
      >
        <g
          id="Group_1828"
          data-name="Group 1828"
          transform="translate(-66.5 -663)"
        >
          <text
            id="SCROLL"
            transform="translate(113.5 663) rotate(90)"
            fill="#a5a58d"
            fontSize="20"
            fontFamily="Roboto-Regular, Roboto"
            letterSpacing="0em"
          >
            <tspan x="0" y="21">
              SCROLL
            </tspan>
          </text>
          <line
            id="Line_1"
            data-name="Line 1"
            y2="84.5"
            transform="translate(97.5 748.5)"
            fill="none"
            stroke="#707070"
            strokeWidth="1"
          />
          <line
            id="Line_52"
            data-name="Line 52"
            y1="13"
            x2="6"
            transform="translate(97.5 820.5)"
            fill="none"
            stroke="#707070"
            strokeWidth="1"
          />
        </g>
      </svg>
      <div className="d-flex page1">
        <div className="page1left position-relative">
          <div className="position-absolute page1left-wrap">
            <Page1Text1 />
            <Page1Text2 />
            <Page1Text1 />
            <Page1Text2 />
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
