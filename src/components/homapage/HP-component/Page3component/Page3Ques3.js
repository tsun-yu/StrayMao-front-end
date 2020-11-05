import React, { useState, useEffect } from 'react'
// import Page3Topic from './Page3Topic'

function Page3Ques3(props) {
  const { city, area, setCity } = props
  area === '' && setCity('請選擇地區')

  return (
    <>
      <div className="page3single ">
        <div className="page3topic text-center">
          <div className="page3big mb-3">{area}地區</div>
          <div className="page3small mb-5">一步一步，　找到愛帶回家。</div>
          <div>{city}</div>
        </div>
      </div>
    </>
  )
}

export default Page3Ques3
