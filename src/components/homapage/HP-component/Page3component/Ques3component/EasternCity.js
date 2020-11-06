import React, { useState, useEffect } from 'react'

function EasternCity(props) {
  const { switchColor } = props
  return (
    <>
      <div className="d-flex justify-content-center">
        <a href="##" className="a mr-5">
          <div
            className="page3circle page3area"
            onClick={(e) => switchColor(e.target)}
          >
            花蓮
          </div>
        </a>
        <a href="##" className="a ml-5">
          <div
            className="page3circle page3area"
            onClick={(e) => switchColor(e.target)}
          >
            臺東
          </div>
        </a>
      </div>
    </>
  )
}

export default EasternCity
