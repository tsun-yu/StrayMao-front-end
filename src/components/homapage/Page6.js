import { queryAllByAltText } from '@testing-library/react'
import React, { useState, useEffect } from 'react'

function Page6(props) {
  return (
    <>
      <div className="page6">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 page6img d-flex justify-content-center align-items-center ">
              <div className="page6imgArea position-relative">
                <div className="page6activityImg1">
                  <img src="/image/homepage/homepage6-1.png"></img>
                </div>
                <div className="page6activityImg2">
                  <img src="/image/socialmedia/articleimg/article16.jpg"></img>
                </div>
                <div className="page6activityImg3">
                  <img src="/image/socialmedia/articleimg/article20.jpg"></img>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center">
              <div className="page6des1">
                <div className="mb-3">關於牠們,</div>
                <div className="ml-3">最近那些活動</div>
              </div>
              <div>
                <div className="mt-5 d-flex flex-column">
                  <div className="page6recent">近期</div>
                  <div className="page6desArea">
                    <div className="page6des2 ">
                      <div className="d-flex">
                        <div className="page6des2date col-4 pr-1">
                          <div className="page6des2dateYear">2020</div>
                          <div className="page6desdateDay">10.10</div>
                        </div>
                        <div className="page6des2topic col-8 my-auto">
                          <div>雙十去哪玩呢？</div>
                          <div className="text-right">貓貓狗狗齊出遊</div>
                        </div>
                      </div>
                    </div>

                    <div className="page6des3 ">
                      <div className="d-flex">
                        <div className="page6des2date col-4 pr-1">
                          <div className="page6des2dateYear">2020</div>
                          <div className="page6desdateDay">10.23</div>
                        </div>
                        <div className="page6des2topic col-8 my-auto">
                          <div>台北寵物節</div>
                          <div className="text-right">最狂優惠開跑</div>
                        </div>
                      </div>
                    </div>
                    <div className="page6des3 ">
                      <div className="d-flex">
                        <div className="page6des2date col-4 pr-1">
                          <div className="page6des2dateYear">2020</div>
                          <div className="page6desdateDay">10.31</div>
                        </div>
                        <div className="page6des2topic col-8 my-auto">
                          <div>毛孩麻吉日</div>
                          <div className="text-right">熱血犬貓鬥陣來</div>
                        </div>
                      </div>
                    </div>
                    <div className="page6des3 ">
                      <div className="d-flex">
                        <div className="page6des2date col-4 pr-1">
                          <div className="page6des2dateYear">2020</div>
                          <div className="page6desdateDay">11.11</div>
                        </div>
                        <div className="page6des2topic col-8 my-auto">
                          <div>雙十一光棍節</div>
                          <div className="text-right">單身狗一同出遊</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    href="##"
                    onClick={() => {}}
                    className="text-right
                         page6more mt-3"
                  >
                    <div className="hvr-underline-from-center">>了解更多</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page6
