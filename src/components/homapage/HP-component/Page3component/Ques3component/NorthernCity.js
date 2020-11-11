import React, { useState, useEffect } from 'react'

function NorthernCity(props) {
  const { switchColor, selectToggle } = props
  return (
    <>
      <div className="d-flex justify-content-center mb-2">
        <a href="##" className="a mx-2">
          <div
            className="page3circle2 page3city "
            onClick={(e) => {
              switchColor(e.target)
              selectToggle(2)
            }}
          >
            台北
          </div>
        </a>
        <a href="##" className="a mx-2">
          <div
            className="page3circle2 page3city"
            onClick={(e) => {
              switchColor(e.target)
              selectToggle(3)
            }}
          >
            新北
          </div>
        </a>
        <a href="##" className="a mx-2">
          <div
            className="page3circle2 page3city"
            onClick={(e) => {
              switchColor(e.target)
              selectToggle(4)
            }}
          >
            桃園
          </div>
        </a>
      </div>
      <div className="d-flex justify-content-center">
        <a href="##" className="a mx-2 mt-2">
          <div
            className="page3circle2 page3city"
            onClick={(e) => {
              switchColor(e.target)
              selectToggle(5)
            }}
          >
            新竹
          </div>
        </a>
        <a href="##" className="a mx-2">
          <div
            className="page3circle2 page3city"
            onClick={(e) => {
              switchColor(e.target)
              selectToggle(6)
            }}
          >
            基隆
          </div>
        </a>
        <a href="##" className="a mx-2">
          <div
            className="page3circle2 page3city"
            onClick={(e) => {
              switchColor(e.target)
              selectToggle(7)
            }}
          >
            宜蘭
          </div>
        </a>
      </div>
    </>
  )
}

export default NorthernCity
