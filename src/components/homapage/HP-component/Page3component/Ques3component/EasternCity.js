import React, { useState, useEffect } from 'react'

function EasternCity(props) {
  const { switchColor } = props
  return (
    <>
      <div className="d-flex justify-content-center">
        <a href="##" className="a mr-5" onClick={(e) => switchColor(e.target)}>
          <div className="page3circle page3area">花蓮</div>
        </a>
        <a href="##" className="a ml-5" onClick={(e) => switchColor(e.target)}>
          <div className="page3circle page3area">臺東</div>
        </a>
      </div>
    </>
  )
}

export default EasternCity
