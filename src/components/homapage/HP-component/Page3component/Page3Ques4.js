import React, { useState, useEffect } from 'react'
import Page3Topic from './Page3Topic'
import { IoIosFemale, IoIosMale } from 'react-icons/io'

function Page3Ques4(props) {
  const { selectToggle } = props
  const maleColorToggle = () => {
    const maleSvg = document.querySelector(
      '#root > main > div > div:nth-child(3) > div > div > div:nth-child(4) > div.d-flex.justify-content-center.align-items-center > a.mr-5'
    ).classList

    if (maleSvg[2] == 'page3gender') {
      maleSvg.remove('page3circle')
      maleSvg.remove('page3gender')
      maleSvg.add('page3circleClick')
      maleSvg.add('page3genderClick')
    } else {
      maleSvg.remove('page3circleClick')
      maleSvg.remove('page3genderClick')
      maleSvg.add('page3circle')
      maleSvg.add('page3gender')
    }
  }
  const femaleColorToggle = () => {
    const femaleSvg = document.querySelector(
      '#root > main > div > div:nth-child(3) > div > div > div:nth-child(4) > div.d-flex.justify-content-center.align-items-center > a.ml-5'
    ).classList
    if (femaleSvg[2] == 'page3gender') {
      femaleSvg.remove('page3circle')
      femaleSvg.remove('page3gender')
      femaleSvg.add('page3circleClick')
      femaleSvg.add('page3genderClick')
    } else {
      femaleSvg.remove('page3circleClick')
      femaleSvg.remove('page3genderClick')
      femaleSvg.add('page3circle')
      femaleSvg.add('page3gender')
    }
  }

  return (
    <>
      <div className="page3single ">
        <Page3Topic title="性別" />

        <div className="d-flex justify-content-center align-items-center">
          <a
            href="##"
            onClick={() => {
              maleColorToggle()
              selectToggle(20)
            }}
            className=" mr-5 page3circle page3gender"
          >
            <IoIosMale size="7rem" />
          </a>
          <a
            href="##"
            onClick={() => {
              femaleColorToggle()
              selectToggle(21)
            }}
            className="ml-5 page3circle page3gender"
          >
            <IoIosFemale size="7rem" color="#fff1e6" />
          </a>
        </div>
      </div>
    </>
  )
}

export default Page3Ques4
