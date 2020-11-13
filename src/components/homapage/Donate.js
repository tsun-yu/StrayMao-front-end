import React, { useState, useEffect } from 'react'

function Donate(props) {
  return (
    <>
      <div>
        <div className="donateBanner mx-auto mt-5 d-flex justify-content-center align-items-center">
          DONATE
        </div>
        <div className="donateTitle d-flex justify-content-center my-5">
          募款專案
        </div>
        <div className="donateArea">
          {/* buttom */}
          <div className="row justify-content-center">
            <button
              className="btn-green mx-2"
              type="button"
              style={{ width: '100px', padding: '10px' }}
            >
              NT$ 300
            </button>
            <button
              className="btn-green  mx-2"
              type="button"
              style={{ width: '100px', padding: '10px' }}
            >
              NT$ 500
            </button>
            <button
              className="btn-green mx-2"
              type="button"
              style={{ width: '100px', padding: '10px' }}
            >
              NT$ 1000
            </button>{' '}
            <button
              className="btn-green mx-2"
              type="button"
              style={{ width: '100px', padding: '10px' }}
            >
              NT$ 3000
            </button>{' '}
            <button
              className="btn-green mx-2"
              type="button"
              style={{ width: '100px', padding: '10px' }}
            >
              NT$ 5000
            </button>
          </div>
          {/* 信用卡輸入 */}
          <div className="mt-5 d-flex justify-content-center">
            <div className="d-flex flex-column col-3 align-items-end">
              <div className="donateCredit">手動輸入:</div>
              <div className="donateCredit">信用卡號:</div>
              <div className="donateCredit">後三碼:</div>
              <div className="donateCredit">到期日:</div>
            </div>
            <div
              className="d-flex flex-column col-9 align-items-start
            "
            >
              <div>
                {/* 輸入 */}
                <input class="input-brown" type="text"></input>
              </div>
              <div>
                {/* 卡號 */}
                <input class="input-brown" type="text"></input>
                <input class="input-brown" type="text"></input>
                <input class="input-brown" type="text"></input>
                <input class="input-brown" type="text"></input>
              </div>
              <div>
                {/* 後三碼 */}
                <input class="input-brown" type="text"></input>
              </div>
              <div>
                {/* 到期日 */}
                <input class="input-brown" type="text"></input>
                <input class="input-brown" type="text"></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Donate
