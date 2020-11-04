import React, { useState, useEffect } from 'react'
import NorthernCity from './Ques3component/NorthernCity'

function Page3Ques3(props) {
  const { city } = props
  return (
    <>
      <div className="page3single ">
        <div className="page3topic text-center">
          <div className="page3big "></div>
          <div className="page3small">一步一步，　找到愛帶回家。</div>
          {/* <div>{state}</div> */}
          <NorthernCity />
          {/* <div>{city}</div> */}
        </div>
      </div>
    </>
  )
}

export default Page3Ques3
