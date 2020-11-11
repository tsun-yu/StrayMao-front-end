import React, { useState, useEffect } from 'react'

function SouthernCity(props) {
  const { switchColor, selectToggle } = props
  return (
    <>
      <div className="d-flex justify-content-center mb-2">
        <a href="##" className="a mx-2">
          <div
            className="page3circle2 page3city"
            onClick={(e) => {
              switchColor(e.target)
              selectToggle(13)
            }}
          >
            嘉義
          </div>
        </a>
        <a href="##" className="a mx-2">
          <div
            className="page3circle2 page3city"
            onClick={(e) => {
              switchColor(e.target)
              selectToggle(14)
            }}
          >
            台南
          </div>
        </a>
        <a href="##" className="a mx-2">
          <div
            className="page3circle2 page3city"
            onClick={(e) => {
              switchColor(e.target)
              selectToggle(15)
            }}
          >
            高雄
          </div>
        </a>
      </div>
      <div className="d-flex justify-content-center mt-2">
        <a href="##" className="a mx-2">
          <div
            className="page3circle2 page3city"
            onClick={(e) => {
              switchColor(e.target)
              selectToggle(16)
            }}
          >
            屏東
          </div>
        </a>
        <a href="##" className="a mx-2">
          <div
            className="page3circle2 page3city"
            onClick={(e) => {
              switchColor(e.target)
              selectToggle(17)
            }}
          >
            澎湖
          </div>
        </a>
      </div>
    </>
  )
}

export default SouthernCity
