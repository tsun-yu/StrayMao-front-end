import React, { useState, useEffect } from 'react'
import NorthernCity from './Ques3component/NorthernCity'
import SouthernCity from './Ques3component/SouthernCity'
import WesternCity from './Ques3component/WesternCity'
import EasternCity from './Ques3component/EasternCity'
import Page3Topic from './Page3Topic'

function Page3Ques2(props) {
  const { setCity, setArea, switchColor, setDot, selectToggle } = props
  return (
    <>
      <div className="page3single ">
        <Page3Topic title="選擇地區" />
        <div className="d-flex justify-content-center">
          <a
            className="a mx-2"
            href="##"
            onClick={(e) => {
              setCity(
                <NorthernCity
                  switchColor={switchColor}
                  selectToggle={selectToggle}
                />
              )
              setArea('北部地區')
              document.querySelector('.page3').style.left = '-200vw'
              setDot(3)
              // switchColor(e.target)
            }}
          >
            <div className="page3circle page3area">北部</div>
          </a>
          <a
            className="a mx-2"
            href="##"
            onClick={(e) => {
              setCity(
                <WesternCity
                  switchColor={switchColor}
                  selectToggle={selectToggle}
                />
              )
              setArea('中部地區')
              document.querySelector('.page3').style.left = '-200vw'
              setDot(3)
              // switchColor(e.target)
            }}
          >
            <div className="page3circle page3area">中部</div>
          </a>
          <a
            className="a mx-2"
            href="##"
            onClick={(e) => {
              setCity(
                <SouthernCity
                  switchColor={switchColor}
                  selectToggle={selectToggle}
                />
              )
              setArea('南部地區')
              document.querySelector('.page3').style.left = '-200vw'
              setDot(3)
              // switchColor(e.target)
            }}
          >
            <div className="page3circle page3area">南部</div>
          </a>
          <a
            className="a mx-2"
            href="##"
            onClick={(e) => {
              setCity(
                <EasternCity
                  switchColor={switchColor}
                  selectToggle={selectToggle}
                />
              )
              setArea('東部地區')
              document.querySelector('.page3').style.left = '-200vw'
              setDot(3)
              // switchColor(e.target)
            }}
          >
            <div className="page3circle page3area">東部</div>
          </a>
        </div>
      </div>
    </>
  )
}

export default Page3Ques2
