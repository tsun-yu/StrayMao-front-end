import React, { useState, useEffect } from 'react'

function NorthernCity(props) {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="page3circle2 page3city">台北</div>
        <div className="page3circle2 page3city">新北</div>
        <div className="page3circle2 page3city">桃園</div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="page3circle2 page3city">新竹</div>
        <div className="page3circle2 page3city">基隆</div>
        <div className="page3circle2 page3city">宜蘭</div>
      </div>
    </>
  )
}

export default NorthernCity
