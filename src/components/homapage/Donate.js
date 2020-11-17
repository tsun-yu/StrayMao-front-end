import React, { useState, useEffect } from 'react'
import AlertDismissible from './HP-component/AlertDismissible'

function Donate(props) {
  return (
    <>
      <div className="position-relative">
        <div className="donateBanner mx-auto mt-5 d-flex justify-content-center align-items-center">
          DONATE
        </div>
        <div className="donateTitle d-flex justify-content-center my-5 mr-3 align-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="492"
            height="3"
            viewBox="0 0 492 3"
          >
            <line
              id="Line_32"
              data-name="Line 32"
              x1="492"
              transform="translate(0 1.5)"
              fill="none"
              stroke="#cb997e"
              stroke-width="3"
            />
          </svg>
          <div className="mx-3">募款專案</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="492"
            height="3"
            viewBox="0 0 492 3"
          >
            <line
              id="Line_32"
              data-name="Line 32"
              x1="492"
              transform="translate(0 1.5)"
              fill="none"
              stroke="#cb997e"
              stroke-width="3"
            />
          </svg>
        </div>
        <div className="donateArea">
          <div className="container">
            <div
              className="row justify-content-center my-3
            "
            >
              {/* 單次 */}
              <div className="mr-2">
                <input
                  className="magic-radio justify-content-center align-items-center"
                  type="radio"
                  name="radio"
                  id="r1"
                  value="option1"
                />
                <label htmlFor="r1" className="paragraph1 mr-1">
                  單次
                </label>
              </div>
              {/* 每月一次 */}
              <div className="ml-2">
                <input
                  className="magic-radio"
                  type="radio"
                  name="radio"
                  id="r2"
                  value="option2"
                />
                <label htmlFor="r2" className="paragraph1">
                  每月一次
                </label>
              </div>
            </div>
            {/* buttom */}
            <div
              className="row justify-content-center flex-column
            "
            >
              <div className="d-flex justify-content-center">
                <button
                  className="btn-green mx-2"
                  type="button"
                  style={{ width: '100px', padding: '10px' }}
                  onClick={() => {
                    document.querySelector('.donateAmount').value = '300'
                  }}
                >
                  NT$ 300
                </button>
                <button
                  className="btn-green  mx-2"
                  type="button"
                  style={{ width: '100px', padding: '10px' }}
                  onClick={() => {
                    document.querySelector('.donateAmount').value = '500'
                  }}
                >
                  NT$ 500
                </button>
                <button
                  className="btn-green mx-2"
                  type="button"
                  style={{ width: '100px', padding: '10px' }}
                  onClick={() => {
                    document.querySelector('.donateAmount').value = '1000'
                  }}
                >
                  NT$ 1000
                </button>{' '}
                <button
                  className="btn-green mx-2"
                  type="button"
                  style={{ width: '100px', padding: '10px' }}
                  onClick={() => {
                    document.querySelector('.donateAmount').value = '3000'
                  }}
                >
                  NT$ 3000
                </button>{' '}
                <button
                  className="btn-green mx-2"
                  type="button"
                  style={{ width: '100px', padding: '10px' }}
                  onClick={() => {
                    document.querySelector('.donateAmount').value = '5000'
                  }}
                >
                  NT$ 5000
                </button>
              </div>
            </div>
            {/* 信用卡輸入 */}
            <div className="mt-5 row justify-content-center">
              {/* 文字 */}
              <div className="d-flex flex-column  align-items-end mr-3">
                <div className="donateCredit">手動輸入:</div>
                <div className="donateCredit mt-4">信用卡號:</div>
                <div className="donateCredit mt-2">後三碼:</div>
                <div className="donateCredit mt-2">到期日:</div>
              </div>
              {/* 輸入 */}
              <div
                className="d-flex flex-column align-items-start ml-3
            "
              >
                {/* 金額 */}
                <div>
                  <input
                    className="input-brown donateAmount pl-3"
                    type="t"
                    style={{ width: '265px' }}
                  ></input>
                </div>
                {/* 卡號 */}
                <div className="mt-4">
                  <input
                    className="input-brown cdcard-1"
                    type="text"
                    style={{ width: '55px', marginRight: '15px' }}
                  ></input>
                  <input
                    className="input-brown cdcard-2"
                    type="text"
                    style={{ width: '55px', marginRight: '15px ' }}
                  ></input>
                  <input
                    className="input-brown cdcard-3"
                    type="password"
                    style={{ width: '55px', marginRight: '15px' }}
                  ></input>
                  <input
                    className="input-brown cdcard-4"
                    type="password"
                    style={{ width: '55px' }}
                  ></input>
                </div>
                {/* 後三碼 */}
                <div className="mt-2">
                  <input
                    className="input-brown cdcardthree"
                    type="password"
                    style={{ width: '55px' }}
                  ></input>
                </div>
                {/* 到期日 */}
                <div className="mt-2">
                  <input
                    className="input-brown cdcardmon"
                    type="text"
                    placeholder="MM"
                    style={{ width: '55px', marginRight: '15px' }}
                  ></input>
                  <input
                    className="input-brown cdcardyr"
                    type="text"
                    placeholder="YY"
                    style={{ width: '55px' }}
                  ></input>
                </div>
              </div>
            </div>
            <div className="row justify-content-center mt-5">
              {/* autofill */}
              <button
                className="btn-red mr-3"
                type="button"
                style={{ width: '60px', padding: '0px' }}
                onClick={() => {
                  document.querySelector('.cdcard-1').value = 1234
                  document.querySelector('.cdcard-2').value = 5678
                  document.querySelector('.cdcard-3').value = 1234
                  document.querySelector('.cdcard-4').value = 1234
                  document.querySelector('.cdcardthree').value = 123
                  document.querySelector('.cdcardmon').value = 10
                  document.querySelector('.cdcardyr').value = 25
                }}
              >
                Autofill
              </button>
              {/* send */}
              <button
                className="btn-red"
                type="button"
                style={{ width: '155px' }}
                onClick={() => {
                  document.querySelector('.cdcard-1').value = ''
                  document.querySelector('.cdcard-2').value = ''
                  document.querySelector('.cdcard-3').value = ''
                  document.querySelector('.cdcard-4').value = ''
                  document.querySelector('.cdcardthree').value = ''
                  document.querySelector('.cdcardmon').value = ''
                  document.querySelector('.cdcardyr').value = ''
                }}
              >
                馬上捐款
              </button>
            </div>
          </div>
        </div>
        {/* <div className="position-absolute donatePopup"></div> */}
        {/* <div className="donatepay">
          <iframe src="https://ccore.newebpay.com/EPG/straymao/goXutn"></iframe>
        </div> */}
      </div>
      <AlertDismissible />
    </>
  )
}

export default Donate
