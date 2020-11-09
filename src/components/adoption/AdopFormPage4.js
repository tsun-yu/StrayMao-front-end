/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
function AdopFormPage3(props) {
  const [display, setDisplay] = useState(<></>);

  //   setDisplay(
  //     <>
  //       <div className="adoptFromBox"></div>
  //     </>
  //   );
  const loading = <div></div>;

  // 以資料載入的指示狀態來切換要出現的畫面
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col pt-3">
            <div className="adopFormTitle header4 mt-2">申請表格 </div>
            <div className="d-flex mt-5 flex-column align-items-center">
              <div className="adopFormBoxFin px-5 py-4 d-flex flex-column  align-items-center justify-content-center">
                <label className="header2 mb-3">寵愛有家，帶我回家</label>
                <label className="header7">
                  感謝您的填寫，我們的專員會盡快向您聯繫
                </label>
              </div>
              <div className="my-3">
                <button
                  className="btn-brown d-flex justify-content-center  align-items-center m-auto"
                  type="button"
                  value="123"
                >
                  回首頁
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

export default connect(mapStateToProps, {})(AdopFormPage3);
