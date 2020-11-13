import React, { useState, useEffect } from 'react'

function Donate(props) {
  return (
    <>
      <div>
        <div className="donateBanner mx-auto mt-5 d-flex justify-content-center align-items-center">
          DONATE
        </div>
        <div className="donateTitle d-flex justify-content-center my-5 mr-3">
          募款專案
        </div>
        <div className="donateArea">
          <div className="container">
            {/* buttom */}
            <div className="row justify-content-center">
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
                <div>
                  {/* 金額 */}
                  <input
                    className="input-brown donateAmount pl-3"
                    type="text"
                    style={{ width: '265px' }}
                  ></input>
                </div>
                <div className="mt-4">
                  {/* 卡號 */}
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
                <div className="mt-2">
                  {/* 後三碼 */}
                  <input
                    className="input-brown cdcardthree"
                    type="password"
                    style={{ width: '55px' }}
                  ></input>
                </div>
                <div className="mt-2">
                  {/* 到期日 */}
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
              <button
                className="btn-red"
                type="button"
                style={{ width: '155px' }}
              >
                馬上捐款
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Donate
