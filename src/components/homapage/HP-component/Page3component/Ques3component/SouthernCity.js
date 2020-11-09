import React, { useState, useEffect } from 'react'

function SouthernCity(props) {
  const { switchColor } = props
  return (
    <>
      <div className="d-flex justify-content-center mb-2">
        <a href="##" className="a mx-2">
          <div
            className="page3circle2 page3city"
            onClick={(e) => switchColor(e.target)}
          >
            嘉義
          </div>
        </a>
        <a href="##" className="a mx-2">
          <div
            className="page3circle2 page3city"
            onClick={(e) => switchColor(e.target)}
          >
            台南
          </div>
        </a>
        <a href="##" className="a mx-2">
          <div
            className="page3circle2 page3city"
            onClick={(e) => switchColor(e.target)}
          >
            高雄
          </div>
        </a>
      </div>
      <div className="d-flex justify-content-center mt-2">
        <a href="##" className="a mx-2">
          <div
            className="page3circle2 page3city"
            onClick={(e) => switchColor(e.target)}
          >
            屏東
          </div>
        </a>
        <a href="##" className="a mx-2">
          <div
            className="page3circle2 page3city"
            onClick={(e) => switchColor(e.target)}
          >
            澎湖
          </div>
        </a>
      </div>
    </>
  )
}

export default SouthernCity