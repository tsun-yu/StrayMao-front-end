/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter, useHistory } from "react-router-dom";
function AdopFormPage(props) {
  const [display, setDisplay] = useState(<></>);

  const loading = <div></div>;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // 以資料載入的指示狀態來切換要出現的畫面
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col pt-3">
            <div className="adopFormTitle header4 mt-2">申請表格 </div>
            <div className="d-flex mt-5 flex-column align-items-center">
              <div className="d-flex flex-row mx-auto my-3">
                <svg
                  className="my-auto mr-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="228.5"
                  height="2"
                  viewBox="0 0 228.5 2"
                >
                  <line
                    id="Line_47"
                    data-name="Line 47"
                    x2="228.5"
                    transform="translate(0 1)"
                    fill="none"
                    stroke="#ddbea9"
                    strokeWidth="2"
                  />
                </svg>

                <div className="header7">個人資料</div>
                <svg
                  className="my-auto ml-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="228.5"
                  height="2"
                  viewBox="0 0 228.5 2"
                >
                  <line
                    id="Line_47"
                    data-name="Line 47"
                    x2="228.5"
                    transform="translate(0 1)"
                    fill="none"
                    stroke="#ddbea9"
                    strokeWidth="2"
                  />
                </svg>
              </div>

              <div className="adopFormBox px-5 py-4 d-flex flex-column">
                <div className="d-flex flex-column my-1">
                  <label className="my-2 paragraph1">姓名：</label>
                  <input
                    className="input-brown navSearchPlaceholder w-100"
                    type="text"
                    placeholder=""
                  ></input>
                </div>
                <div className="d-flex flex-column my-1">
                  <label className="my-2 paragraph1">年齡：</label>
                  <input
                    className="input-brown navSearchPlaceholder w-100"
                    type="text"
                    placeholder=""
                  ></input>
                </div>
                <div className="d-flex flex-column my-1">
                  <label className="my-2 paragraph1">電話：</label>
                  <input
                    className="input-brown navSearchPlaceholder w-100"
                    type="text"
                    placeholder=""
                  ></input>
                </div>
                <div className="d-flex flex-column my-1">
                  <label className="my-2 paragraph1">職業：</label>
                  <input
                    className="input-brown navSearchPlaceholder w-100"
                    type="text"
                    placeholder=""
                  ></input>
                </div>{" "}
                <div className="d-flex flex-column my-1">
                  <label className="my-2 paragraph1">地址：</label>
                  <input
                    className="input-brown navSearchPlaceholder w-100"
                    type="text"
                    placeholder=""
                  ></input>
                </div>{" "}
                <div className="d-flex flex-column my-1">
                  <label className="my-2 paragraph1">FB/IG：</label>
                  <input
                    className="input-brown navSearchPlaceholder w-100"
                    type="text"
                    placeholder=""
                  ></input>
                </div>
                <div className="d-flex flex-column my-1">
                  <label className="my-2 paragraph1">婚姻狀況：</label>

                  <div className="d-flex justify no-gutters">
                    <div className="opt col">
                      <input
                        className="magic-radio justify-content-center align-items-center"
                        type="radio"
                        name="radio"
                        id="r1"
                        value="option1"
                      />
                      <label htmlFor="r1" className="paragraph1">
                        已婚
                      </label>
                    </div>
                    <div className="opt col">
                      <input
                        className="magic-radio"
                        type="radio"
                        name="radio"
                        id="r2"
                        value="option2"
                      />
                      <label htmlFor="r2" className="paragraph1">
                        未婚
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="my-3">
                <button
                  className="btn-green d-flex justify-content-center  align-items-center m-auto"
                  type="button"
                  value="123"
                  onClick={() => {
                    props.history.push("/adoptionform2");
                  }}
                >
                  下一步
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  // return loading;
}

const mapStateToProps = (store) => {
  return {};
};
const mapDispatchToProps = null;

export default withRouter(connect(mapStateToProps, {})(AdopFormPage));
