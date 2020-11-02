import React, { useState, useEffect } from 'react'

function Page5(props) {
  return (
    <>
      <div className="page5bar d-flex  align-items-center">
        <div className="page5title mx-auto">
          <div className="page5Social">
            <span>Social -</span>
          </div>
          <div className="page5slogan">
            關注您喜歡的，也與人分享您所愛的事物
          </div>
        </div>
      </div>
      <div className="page5">
        <div className="container">
          <div className="row">
            <div className="col-5 d-flex flex-column justify-content-between mt-5 page5left">
              <div className="page5small">最新話題一覽</div>
              <div className="d-flex flex-column page5des1 mx-auto">
                <div className="mb-2">關於牠們，</div>
                <div className="text-right mt-2">聊些什麼呢？</div>
              </div>
              <div className="page5small text-right">加入熱門討論</div>
            </div>
            <div className="col-7 page5right">
              <div className="d-flex justify-content-between">
                <div className=" page5right-1">
                  <div className="page5card">
                    <div className="page5cardImage mx-auto">
                      background image
                    </div>
                    <div className="page5cardDes mx-auto d-flex">
                      <div className="page5cardDate my-auto d-flex flex-column justify-content-center">
                        <div className="page5cardYear">2020.</div>
                        <div className="page5cardDay text-right">10.10</div>
                      </div>
                      <div className="page5cardContent my-auto d-flex flex-column justify-content-between">
                        <div className="page5cardLabel text-center">日常</div>
                        <div className="page5cardTopic text-right">
                          發現我家毛小孩...
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="page5right-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page5