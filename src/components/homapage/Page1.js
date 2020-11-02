import React, { useState, useEffect } from 'react'

function Page1(props) {
  return (
    <>
      <div className="d-flex page1">
        <div className="page1left">
          <div className="page1des">Love them likes family.</div>
          <div className="page1des2 d-flex flex-column justify-content-around">
            <div className="hide">fuck</div>
            <div>給他們一個機會, 擁有一個家。</div>
            <div className="page1des3 mr-2">>了解更多</div>
          </div>
        </div>
        <div className="page1right">
          <img className="bigImg" src="/image/homepage/homepage1.png" />
        </div>
      </div>
    </>
  )
}

export default Page1
