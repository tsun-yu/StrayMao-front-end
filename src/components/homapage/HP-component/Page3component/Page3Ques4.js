import React, { useState, useEffect } from 'react'
import Page3Topic from './Page3Topic'
import { IoIosFemale, IoIosMale } from 'react-icons/io'

function Page3Ques4(props) {
  const { setCity } = props
  return (
    <>
      <div className="page3single ">
        <Page3Topic title="性別" />

        <div className="d-flex justify-content-center align-items-center">
          <div className="page3circle mr-5">
            <IoIosMale size="7rem" color="#fff1e6" />
          </div>
          <div className="page3circle ml-5">
            <IoIosFemale size="7rem" color="#fff1e6" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Page3Ques4
