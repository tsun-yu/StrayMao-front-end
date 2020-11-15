import React, { useState, useEffect } from 'react'
import Page3Topic from './Page3Topic'
import DogSize from './Ques6component/DogSize'
import CatSize from './Ques6component/CatSize'

function Page3Ques1(props) {
  const { setPet, setDot, selectToggle } = props

  const dogColorToggle = () => {
    const catSvg = document.querySelector(
      '#root > main > div > div:nth-child(5) > div > div > div:nth-child(1) > div.d-flex.justify-content-center > a.ml-5'
    ).classList
    const dogSvg = document.querySelector(
      '#root > main > div > div:nth-child(5) > div > div > div:nth-child(1) > div.d-flex.justify-content-center > a.mr-5'
    ).classList
    if (dogSvg[2] == 'page3pet') {
      dogSvg.remove('page3circle')
      dogSvg.remove('page3pet')
      catSvg.remove('page3circleClick')
      catSvg.remove('page3petClick')
      dogSvg.add('page3circleClick')
      dogSvg.add('page3petClick')
      catSvg.add('page3circle')
      catSvg.add('page3pet')
    } else {
      dogSvg.remove('page3circleClick')
      dogSvg.remove('page3petClick')
      dogSvg.add('page3circle')
      dogSvg.add('page3pet')
    }
  }
  const catColorToggle = () => {
    const catSvg = document.querySelector(
      '#root > main > div > div:nth-child(5) > div > div > div:nth-child(1) > div.d-flex.justify-content-center > a.ml-5'
    ).classList
    const dogSvg = document.querySelector(
      '#root > main > div > div:nth-child(5) > div > div > div:nth-child(1) > div.d-flex.justify-content-center > a.mr-5'
    ).classList
    if (catSvg[2] == 'page3pet') {
      dogSvg.remove('page3circleClick')
      dogSvg.remove('page3petClick')
      catSvg.remove('page3circle')
      catSvg.remove('page3pet')
      dogSvg.add('page3circle')
      dogSvg.add('page3pet')
      catSvg.add('page3circleClick')
      catSvg.add('page3petClick')
    } else {
      catSvg.remove('page3circleClick')
      catSvg.remove('page3petClick')
      catSvg.add('page3circle')
      catSvg.add('page3pet')
    }
  }

  return (
    <>
      <div className="page3single">
        <Page3Topic title="讓我們為您尋找" />
        <div className="d-flex justify-content-center">
          {/* dog */}
          <a
            href="##"
            onClick={() => {
              document.querySelector('.page3').style.left = '-100vw'
              setPet(<DogSize selectToggle={selectToggle} />)
              setDot(2)
              selectToggle(0)
              dogColorToggle()
              document.querySelector('.back').style.visibility = 'visible'
            }}
            className="page3circle mr-5 page3pet"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="139.462"
              height="133.128"
              viewBox="0 0 139.462 133.128"
            >
              <path
                id="dog_1165191_easyicon.net"
                d="M6.531,111.151s-6.957,28.142,19.29,28.142,29.09-9.8,29.09-9.8,6.641,7.273,11.066,8.221,43.952.316,43.952.316,7.273-10.119-15.494-11.7c0,0,6.957-11.066,4.428-18.974l5.691-.948s9.487,25.3,15.81,30.988l12.964.316s4.112-1.9-6.326-9.8-8.221-33.518-6.326-41.738,2.214-28.142-.632-37.629,0-1.582,0-1.582,18.024,4.428,21.5-6.641c0,0,4.428-1.9,3.477-6.007,0,0-14.23-6.323-16.76-7.589,0,0-1.9-5.653-7.352-7.668,0,0,1.857-7.867-.553-9.092,0,0-8.537,5.375-9.171,6.957,0,0-.632-9.171-2.214-10.75,0,0-10.75,6.957-10.119,16.76,0,0-15.178,22.767-13.28,37.945,0,0-51.225,18.971-38.577,58.5C47.006,119.372,27.4,128.227,6.531,111.151Z"
                transform="translate(-5.696 -6.165)"
              />
            </svg>
          </a>
          {/* cat */}
          <a
            href="##"
            onClick={() => {
              document.querySelector('.page3').style.left = '-100vw'
              setPet(<CatSize selectToggle={selectToggle} />)
              setDot(2)
              selectToggle(1)
              document.querySelector('.back').style.visibility = 'visible'
              catColorToggle()
            }}
            className=" page3circle ml-5 page3pet"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="75.12"
              height="142.666"
              viewBox="0 0 75.12 142.666"
            >
              <path
                id="cat_1165131_easyicon.net"
                d="M33.539,4.646s4.036,0,8.073,11.821c0,0,14.7,2.595,11.821,20.758,4.612,15.854,22.486,9.8,32,30.27s4.9,38.343,1.731,45.838c-.367,3.893,9.034,7.274,3.95,21.476-6.45,18.017-46.9,13.886-48.057,4.325,0,0,27.292,5.813,39.064-4.18A9.9,9.9,0,0,0,83.994,124c-1.442-2.595-28.974,3.891-40.648-1.3,0,0-3.027-5.764,6.485-5.764a64.346,64.346,0,0,1-2.595-6.485c-1.153-3.459-1.442,13.117-12.685,13.117,0,0-6.342.721-5.046-5.046,0,0-4.612-5.478,4.036-5.478,0,0,3.364-11.434.672-30.27-.383-9.609-9.993-8.84-9.993-22.872S27.1,41.069,27.1,41.069s-7.843-2.641-9.512-10.522c-.213-1.007-.224-4.42,2.211-4.468,0,0,4.036-8.456,11.915-8.456C31.714,17.617,30.367,6.471,33.539,4.646Z"
                transform="translate(-17.505 -4.646)"
              />
            </svg>
          </a>
        </div>
      </div>
    </>
  )
}

export default Page3Ques1
