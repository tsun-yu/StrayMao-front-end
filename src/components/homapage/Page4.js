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
          {/* <div className="col-lg-3 page4product">
            <div className="page4label">
              <div className="p-1">狗 狗 用</div>
            </div>
            <div className="page4img">
              <img src="./image/homepage/homepage4-1.png"></img>
            </div>
            <div className="page4text px-3 py-2 d-flex">
              <div className="page4date pr-1">
                <div className="page4year">2020.</div>
                <div className="page4new text-right">New</div>
              </div>
              <div className="page4content d-flex flex-column justify-content-end">
                <div className="page4popular">本月品牌熱門</div>
                <div className="page4item text-right">最方便自動餵食器</div>
              </div>
            </div>
          </div> */}
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
