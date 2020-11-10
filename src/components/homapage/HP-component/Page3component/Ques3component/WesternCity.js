import React, { useState, useEffect } from 'react'

function WesternCity(props) {
  const { switchColor, selectToggle } = props
  return (
    <>
      <div className="d-flex justify-content-center mb-2">
        <a href="##" className="a mx-2">
          <div
            className="page3circle2 page3city"
            onClick={(e) => {
              switchColor(e.target)
              selectToggle(8)
            }}
          >
            苗栗
          </div>
        </a>
        <a href="##" className="a mx-2">
          <div
            className="page3circle2 page3city"
            onClick={(e) => {
              switchColor(e.target)
              selectToggle(9)
            }}
          >
            臺中
          </div>
        </a>
        <a href="##" className="a mx-2">
          <div
            className="page3circle2 page3city"
            onClick={(e) => {
              switchColor(e.target)
              selectToggle(10)
            }}
          >
            彰化
          </div>
        </a>
      </div>
      <div className="d-flex justify-content-center mt-2">
        <a href="##" className="a mx-2">
          <div
            className="page3circle2 page3city"
            onClick={(e) => {
              switchColor(e.target)
              selectToggle(11)
            }}
          >
            南投
          </div>
        </a>
        <a href="##" className="a mx-2">
          <div
            className="page3circle2 page3city"
            onClick={(e) => {
              switchColor(e.target)
              selectToggle(12)
            }}
          >
            雲林
          </div>
        </a>
      </div>
    </>
  )
}

export default WesternCity
