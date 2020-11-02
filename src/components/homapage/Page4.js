import React, { useState, useEffect } from 'react'
import Page4Card from './HP-component/Page4Card'

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
          <Page4Card img="./image/homepage/homepage4-1.png" label="狗 狗 用" />
          <Page4Card img="./image/homepage/homepage4-1.png" label="貓 咪 用" />
          <Page4Card img="./image/homepage/homepage4-1.png" label="貓 咪 用" />
          <Page4Card img="./image/homepage/homepage4-1.png" label="貓 咪 用" />
        </div>
      </div>
    </>
  )
}

export default Page4
