import React, { useState, useEffect } from 'react'

function Page3Ques2(props) {
  const { setCity } = props
  return (
    <>
      <div className="page3single ">
        <div className="page3topic text-center">
          <div className="page3big ">選擇地區</div>
          <div className="page3small">一步一步，　找到愛帶回家。</div>
          {/* <div>{state}</div> */}
          <div className="d-flex justify-content-center">
            <a
              href="##"
              onClick={() => {
                // setCity(<NorthernCity />)
                document.querySelector('.page3').style.left = '-200vw'
              }}
            >
              <div className="page3circle page3area">北部</div>
            </a>
            <a href="##">
              <div className="page3circle page3area">中部</div>
            </a>
            <a href="##">
              <div className="page3circle page3area">南部</div>
            </a>
            <a href="##">
              <div className="page3circle page3area">東部</div>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page3Ques2
