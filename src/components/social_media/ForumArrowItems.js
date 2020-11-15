import React, { useState, useEffect } from "react";

function ForumArrowItems(props) {
  return (
    <span className="row forumArrowItems d-flex">
      <span className="arrow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17.636"
          height="21.653"
          viewBox="0 0 17.636 21.653"
        >
          <path
            id="Path_1866"
            data-name="Path 1866"
            d="M.584,8.77,11.69.391a1.5,1.5,0,0,1,2.5,1.025l.431,16.072c.117,1.039-1.176,1.427-2.006.83L.584,10.846A1.216,1.216,0,0,1,.584,8.77Z"
            transform="translate(1.501 1.531)"
            fill="none"
            stroke="#ed8f8f"
            stroke-miterlimit="10"
            stroke-width="3"
          />
        </svg>
      </span>
      <span className="arrow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18.381"
          height="22.256"
          viewBox="0 0 18.381 22.256"
          onClick={()=>{
            document.querySelector(".forumTopBigCard").style.left="-764px"
          }}
        >
          <path
            id="Path_1865"
            data-name="Path 1865"
            d="M.584,8.77,11.69.391a1.5,1.5,0,0,1,2.5,1.025l.431,16.072c.117,1.039-1.176,1.427-2.006.83L.584,10.846A1.216,1.216,0,0,1,.584,8.77Z"
            transform="matrix(-0.999, -0.035, 0.035, -0.999, 16.179, 20.673)"
            fill="none"
            stroke="#ed8f8f"
            stroke-miterlimit="10"
            stroke-width="3"
          />
        </svg>
      </span>
    </span>
  );
}

export default ForumArrowItems;
