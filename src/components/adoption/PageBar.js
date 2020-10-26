import React, { useState, useEffect } from "react";

function PageBar(props) {
  const obj = { color: "#A5A58D" };
  return (
    <>
      <ul className="pageBar">
        <li>
          <a>
            <i style={obj} class="fas fa-caret-left fa-2x"></i>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15.549"
              height="18.452"
              viewBox="0 0 15.549 18.452"
            >
              <path
                id="Path_1277"
                data-name="Path 1277"
                d="M597.519,532.057,607.04,539a1.3,1.3,0,0,0,2.145-.849l.369-13.313c.1-.86-1.009-1.181-1.72-.687l-10.315,6.189A.99.99,0,0,0,597.519,532.057Z"
                transform="translate(-595.517 -522.397)"
                fill="none"
                stroke="#a5a58d"
                stroke-miterlimit="10"
                stroke-width="3"
              />
            </svg> */}
          </a>
        </li>
        <li>
          <a href="#">
            <span> 1 </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34.635"
              height="32.394"
              viewBox="0 0 34.635 32.394"
            >
              <g
                id="Group_611"
                data-name="Group 611"
                transform="translate(-705.734 -509.813)"
              >
                <circle
                  id="Ellipse_14"
                  data-name="Ellipse 14"
                  cx="11.34"
                  cy="11.34"
                  r="11.34"
                  transform="translate(712.152 519.526)"
                  fill="#ed8f8f"
                />
                <circle
                  id="Ellipse_15"
                  data-name="Ellipse 15"
                  cx="3.692"
                  cy="3.692"
                  r="3.692"
                  transform="translate(714.789 509.813)"
                  fill="#ed8f8f"
                />
                <circle
                  id="Ellipse_16"
                  data-name="Ellipse 16"
                  cx="3.692"
                  cy="3.692"
                  r="3.692"
                  transform="translate(724.986 509.813)"
                  fill="#ed8f8f"
                />
                <circle
                  id="Ellipse_17"
                  data-name="Ellipse 17"
                  cx="4"
                  cy="4"
                  r="4"
                  transform="translate(705.734 517.197)"
                  fill="#ed8f8f"
                />
                <circle
                  id="Ellipse_18"
                  data-name="Ellipse 18"
                  cx="4"
                  cy="4"
                  r="4"
                  transform="translate(732.37 517.197)"
                  fill="#ed8f8f"
                />
              </g>
            </svg>
          </a>
        </li>
        <li>
          <a href="#">2</a>
        </li>
        <li>
          <a href="#">3</a>
        </li>
        <li>
          <a href="#">4</a>
        </li>
        <li>
          <a href="#">5</a>
        </li>
        <li>
          <a>
            <i style={obj} class="fas fa-caret-right fa-2x"></i>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15.55"
              height="18.452"
              viewBox="0 0 15.55 18.452"
            >
              <path
                id="Path_1276"
                data-name="Path 1276"
                d="M848.585,532.057,839.064,539a1.3,1.3,0,0,1-2.145-.849l-.369-13.313c-.1-.86,1.009-1.181,1.72-.687l10.315,6.189A.989.989,0,0,1,848.585,532.057Z"
                transform="translate(-835.037 -522.397)"
                fill="none"
                stroke="#a5a58d"
                stroke-miterlimit="10"
                stroke-width="3"
              />
            </svg> */}
          </a>
        </li>
      </ul>
    </>
  );
}

export default PageBar;
