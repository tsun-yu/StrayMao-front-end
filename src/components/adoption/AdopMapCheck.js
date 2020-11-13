import { check } from 'prettier';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import AdopMapMain from './AdopMapMain';
let checkObj = {
  c1: false,
  c2: false,
  c3: false,
  c4: false,
  c5: false,
  c6: false,
};
function AdopMapCheck(props) {
  const clickEvent = (value) => {
    // console.log(value);
    const e = document.querySelector(value);
    if (e.getAttribute('checked')) {
      e.removeAttribute('checked');
      checkObj[e.getAttribute('id')] = false;
    } else {
      e.setAttribute('checked', true);
      checkObj[e.getAttribute('id')] = true;
    }
    props.setKind(checkObj);
    props.setDetail(props.detail + 1);
  };
  const clickEventAll = (value) => {
    if (document.querySelector('#c1').getAttribute('checked')) {
      document.querySelectorAll(value).forEach((e) => {
        e.removeAttribute('checked');
        checkObj[e.getAttribute('id')] = false;
      });
    } else {
      document.querySelectorAll(value).forEach((e) => {
        e.setAttribute('checked', true);
        checkObj[e.getAttribute('id')] = true;
      });
    }
    props.setKind(checkObj);
    props.setDetail(props.detail + 6);
  };
  return (
    <>
      <>
        <div className="adopMapCheck">
          <div className="demo">
            <div className="col">
              <h4 className="header6 mb-4">設施</h4>
              <div className="opt">
                <input
                  className="magic-checkbox"
                  type="checkbox"
                  name="layout"
                  id="c1"
                />
                <label
                  onClick={() => {
                    clickEventAll('.magic-checkbox');
                  }}
                >
                  全選
                </label>
              </div>
              <div className="opt">
                <input
                  className="magic-checkbox"
                  type="checkbox"
                  name="layout"
                  id="c2"
                />
                <label
                  onClick={() => {
                    clickEvent('#c2');
                  }}
                >
                  寵物旅館
                </label>
              </div>
              <div className="opt">
                <input
                  className="magic-checkbox"
                  type="checkbox"
                  name="layout"
                  id="c3"
                />
                <label
                  onClick={() => {
                    clickEvent('#c3');
                  }}
                >
                  動物醫院
                </label>
              </div>
              <div className="opt">
                <input
                  className="magic-checkbox"
                  type="checkbox"
                  name="layout"
                  id="c4"
                />
                <label
                  onClick={() => {
                    clickEvent('#c4');
                  }}
                >
                  動物收容所
                </label>
              </div>
              <div className="opt">
                <input
                  className="magic-checkbox"
                  type="checkbox"
                  name="layout"
                  id="c5"
                />
                <label
                  onClick={() => {
                    clickEvent('#c5');
                  }}
                >
                  寵物用品店
                </label>
              </div>
              <div className="opt">
                <input
                  className="magic-checkbox"
                  type="checkbox"
                  name="layout"
                  id="c6"
                />
                <label
                  onClick={() => {
                    clickEvent('#c6');
                  }}
                >
                  寵物友善餐廳
                </label>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

const mapStateToProps = (store) => {
  return {};
};
const mapDispatchToProps = null;

export default connect(mapStateToProps, {})(AdopMapCheck);
