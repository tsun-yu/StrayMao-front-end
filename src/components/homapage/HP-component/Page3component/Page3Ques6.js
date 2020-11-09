import React, { useState, useEffect } from 'react'
import Page3Topic from './Page3Topic'
import {
  IoIosArrowForward,
  IoIosArrowDropright,
  IoIosArrowDroprightCircle,
} from 'react-icons/io'

function Page3Ques6(props) {
  const { pet } = props

  return (
    <>
      <div className="page3single ">
        <Page3Topic title="體型" />
        {pet}
      </div>
      <a href="##">
        <div
          className="forward position-absolute d-flex flex-column justify-content-center align-items-center forward forward"
          onClick={() => {
            // console.log('12345')
          }}
        >
          <IoIosArrowDroprightCircle
            size="5rem"
            color=" #cb997e"
            className="forward2"
          />
          <div className="forward2adoption">開 始 媒 合</div>
        </div>
      </a>
    </>
  )
}

export default Page3Ques6
