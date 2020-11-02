import React, { useState, useEffect } from 'react'
import Page4Card from './Page4Card'

function Page4(props) {
  return (
    <>
      <div className="page4title">
        <div className="page4Store">
          <span>Store -</span>
        </div>
        <div className="page4slogan">您需要的一切, 我們都準備好了。</div>
      </div>
      <div className="container page4">
        <div className="row">
          {/* 2,4需要mt-5以及換圖片 */}
          <Page4Card />
          <Page4Card />
          <Page4Card />
          <Page4Card />
        </div>
      </div>
    </>
  )
}

export default Page4
