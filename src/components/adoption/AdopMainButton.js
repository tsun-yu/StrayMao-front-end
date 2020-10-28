import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

function AdopMainButton(props) {
  return (
    <>
      <div className="adopMainButton">
        <div className="buttonGroup d-flex flex-row">
          <a
            className="buttonLeft col"
            onClick={() => {
              console.log("aaaaa");
            }}
          >
            {" "}
            <svg
              id="_014-cancel"
              data-name="014-cancel"
              xmlns="http://www.w3.org/2000/svg"
              width="18.092"
              height="18.092"
              viewBox="0 0 18.092 18.092"
            >
              <g
                id="Group_1117"
                data-name="Group 1117"
                transform="translate(0 0)"
              >
                <path
                  id="Path_1731"
                  data-name="Path 1731"
                  d="M10.045,9.046l7.839-7.839a.707.707,0,0,0-1-1L9.046,8.046,1.206.207a.707.707,0,1,0-1,1L8.046,9.046.207,16.885a.707.707,0,0,0,1,1l7.839-7.839,7.839,7.839a.707.707,0,0,0,1-1Z"
                  transform="translate(0 0)"
                  fill="#fff"
                />
              </g>
            </svg>
          </a>
          <a
            className="buttonRight col"
            onClick={() => {
              console.log("bbbbb");
            }}
          >
            {" "}
            <svg
              id="_002-heart"
              data-name="002-heart"
              xmlns="http://www.w3.org/2000/svg"
              width="24.931"
              height="21.182"
              viewBox="0 0 24.931 21.182"
            >
              <path
                id="Path_1717"
                data-name="Path 1717"
                d="M24.923,48.927l-.729-5.988a.977.977,0,0,0-.374-.657L19.155,38.7a.972.972,0,0,0-1.1-.06l-5.594,3.39-5.594-3.39a.972.972,0,0,0-1.1.06L1.11,42.283a.976.976,0,0,0-.374.657L.007,48.927a.977.977,0,0,0,.341.866l11.492,9.66a.972.972,0,0,0,1.252,0l11.492-9.66A.977.977,0,0,0,24.923,48.927Zm-12.458,8.5L2,48.638l.616-5.055,3.812-2.927,5.53,3.351a.972.972,0,0,0,1.008,0l5.53-3.351,3.812,2.927.616,5.055Z"
                transform="translate(0.001 -38.5)"
                fill="#fff"
              />
            </svg>
          </a>
        </div>{" "}
      </div>
    </>
  );
}

const mapStateToProps = (store) => {
  return {};
};
const mapDispatchToProps = null;

export default connect(mapStateToProps, {})(AdopMainButton);
