import React, { useState, useEffect } from 'react'

function Page3Ques5(props) {
  const { setCity } = props
  return (
    <>
      <div className="page3single ">
        <div className="page3topic text-center">
          <div className="page3big ">毛色</div>
          <div className="page3small">一步一步，　找到愛帶回家。</div>
          {/* <div>{state}</div> */}
          <div className="d-flex justify-content-center">
            <a href="##">
              <div className="page3circle page3area">黑</div>
            </a>
            <a href="##">
              <div className="page3circle page3area">白</div>
            </a>
            <a href="##">
              <div className="page3circle page3area">灰</div>
            </a>
            <a href="##">
              <div className="page3circle page3area">黃</div>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page3Ques5
