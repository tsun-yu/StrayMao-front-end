import React, { useState, useEffect } from 'react'
import Page4Card from './HP-component/Page4Card'

function Page4(props) {
  // let i = 0
  // useEffect(() => {
  //   document.addEventListener('mousemove', function parallax(e) {
  //     this.querySelectorAll('.page4product').forEach((page4product) => {
  //       const speed = page4product.getAttribute('data-speed')
  //       if (i == 1) {
  //         const x = (window.innerWidth - e.pageX * speed) / 50
  //         const y = (window.innerHeight - e.pageY * speed) / 50

  //         page4product.style.transform = `translateX(${x}px) translateY(${y}px)`
  //       }
  //       // console.log(e);
  //     })
  //   })
  //   document
  //     .querySelector('.page4product')
  //     .addEventListener('mouseover', function func(e) {
  //       i = 1
  //     })
  //   document
  //     .querySelector('.page4product')
  //     .addEventListener('mouseout', function func(e) {
  //       i = 0
  //     })
  // }, [])
  return (
    <>
      <div className="page4title my-5">
        <div className="page4Store">
          <span>Store -</span>
        </div>
        <div className="page4slogan">您需要的一切, 我們都準備好了。</div>
      </div>
      <div className="container page4">
        <div className="row">
          {/* 2,4需要mt-5以及換圖片 */}
          <Page4Card
            img="./image/homepage/homepage4-1.png"
            label="狗 狗 用 品"
            className="col-lg-3 page4product"
            labelClass="page4label label1"
          />

          <Page4Card
            img="./image/homepage/homepage4-2.png"
            label="貓 咪 用 品"
            className="col-lg-3 page4product mt-5"
            labelClass="page4label label2"
          />

          <Page4Card
            img="./image/homepage/homepage4-1.png"
            label="寵 物 玩 具"
            className="col-lg-3 page4product"
            labelClass="page4label label1"
          />

          <Page4Card
            img="./image/homepage/homepage4-4.png"
            label="寵 物 飼 料"
            className="col-lg-3 page4product mt-5"
            labelClass="page4label label2"
          />
        </div>
      </div>
    </>
  )
}

export default Page4
