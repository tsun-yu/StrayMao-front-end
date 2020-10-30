import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
function AdopMapCheck(props) {
  return (
    <>
      <div className="adopMapCheck">
        <div className="demo">
          <div className="col">
            <h4 className="header6">設施</h4>
            <div className="opt">
              <input
                className="magic-checkbox"
                type="checkbox"
                name="layout"
                id="c1"
              />
              <label htmlFor="c1">全選</label>
            </div>
            <div className="opt">
              <input
                className="magic-checkbox"
                type="checkbox"
                name="layout"
                id="c2"
              />
              <label htmlFor="c2">寵物旅館</label>
            </div>
            <div className="opt">
              <input
                className="magic-checkbox"
                type="checkbox"
                name="layout"
                id="c3"
              />
              <label htmlFor="c3">動物醫院</label>
            </div>
            <div className="opt">
              <input
                className="magic-checkbox"
                type="checkbox"
                name="layout"
                id="c4"
              />
              <label htmlFor="c4">動物收容所</label>
            </div>
            <div className="opt">
              <input
                className="magic-checkbox"
                type="checkbox"
                name="layout"
                id="c5"
              />
              <label htmlFor="c5">寵物用品店</label>
            </div>
            <div className="opt">
              <input
                className="magic-checkbox"
                type="checkbox"
                name="layout"
                id="c6"
              />
              <label htmlFor="c6">寵物友善餐廳</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (store) => {
  return {};
};
const mapDispatchToProps = null;

export default connect(mapStateToProps, {})(AdopMapCheck);
