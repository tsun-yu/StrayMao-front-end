import React, { useState, useEffect } from 'react'
// import Page3Topic from './Page3Topic'

function Page3Ques3(props) {
  const { city, area, setCity, switchColor } = props
  area === '縣市' && setCity('請先選擇地區')

  return (
    <>
      <div className="page3single ">
        <div className="text-center">
          <div className="page3big mb-3">{area}</div>
          <div className="page3small mb-5">一步一步，　找到愛帶回家。</div>
          <div className="page3big">{city}</div>
        </div>
      </div>
    </>
  )
}

export default Page3Ques3
