import React, { useState, useEffect } from 'react'

function Page4Card(props) {
  return (
    <>
      <div className="col-lg-3 page4product">
        <div className="page4label">
          <div className="p-1">{props.label}</div>
        </div>
        <div className="page4img">
          <img src={props.img}></img>
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
      </div>
    </>
  )
}

export default Page4Card
