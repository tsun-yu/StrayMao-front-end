import React, { useState, useEffect } from 'react'

function WesternCity(props) {
  return (
    <>
      <div className="d-flex justify-content-center mb-2">
        <a href="##" className="a mx-2">
          <div className="page3circle2 page3city">苗栗</div>
        </a>
        <a href="##" className="a mx-2">
          <div className="page3circle2 page3city">臺中</div>
        </a>
        <a href="##" className="a mx-2">
          <div className="page3circle2 page3city">彰化</div>
        </a>
      </div>
      <div className="d-flex justify-content-center mt-2">
        <a href="##" className="a mx-2">
          <div className="page3circle2 page3city">南投</div>
        </a>
        <a href="##" className="a mx-2">
          <div className="page3circle2 page3city">雲林</div>
        </a>
      </div>
    </>
  )
}

export default WesternCity
