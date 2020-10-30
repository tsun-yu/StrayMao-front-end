import { func } from 'prop-types';
import React, { useState, useEffect } from 'react'
import "../../styles/store/straymao.scss";
import "animate.css"

function straymaoP2(props) {
    return(<>
        <div style="height: 45px; background-color: rgb(179, 238, 177)"></div>
      <div   className="container">
        <div   className="row">
          <section>
            <div id="storeP2Background">
              <img
                src="./image/P2Background.jpg"
                alt=""
                  className="layer storeP2CatImg"
                data-speed="2"
              />
            </div>
          </section>

          {/* 熱銷推薦 */}
          <div   className="storeP1Title">
            <div   className="line1"></div>
            <div   className="storeP1GoodsWords">最棒的喵，最棒的貨</div>
            <div   className="line2"></div>
          </div>
        </div>
      </div>

      <div   className="container">
        <div   className="row">
          <div   className="fliter">
            <div   className="hotSale">
              熱銷推薦 <i   className="fas fa-caret-down"></i>
            </div>
          </div>

          {/* card */}
          <div   className="container storeP1Bottom">
            <div   className="row d-flex" id="between">
              <div   className="card_new col-lg-3">
                <div   className="icon d-flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21.388"
                    height="20.524"
                    viewBox="0 0 21.388 20.524"
                  >
                    <g id="愛心" transform="translate(0.251 0.25)">
                      <path
                        id="Path_1296"
                        data-name="Path 1296"
                        d="M489.508,232.381a4.73,4.73,0,0,0-5.1-3.618c-2.61-.018-5.309,2.627-5.441,6.541-.125,3.664,2.524,8.514,10.189,13.439,7.994-4.816,10.564-9.629,10.689-13.294.133-3.914-2.387-6.595-5-6.613a5.025,5.025,0,0,0-5.341,3.546"
                        transform="translate(-478.964 -228.762)"
                        fill="#fff"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1297"
                        data-name="Path 1297"
                        d="M489.508,232.381a4.73,4.73,0,0,0-5.1-3.618c-2.61-.018-5.309,2.627-5.441,6.541-.125,3.664,2.524,8.514,10.189,13.439,7.994-4.816,10.564-9.629,10.689-13.294.133-3.914-2.387-6.595-5-6.613A5.025,5.025,0,0,0,489.508,232.381Z"
                        transform="translate(-478.964 -228.762)"
                        fill="none"
                        stroke="#ed8f8f"
                        stroke-miterlimit="10"
                        stroke-width="0.5"
                      />
                    </g>
                  </svg>
                </div>
                <div   className="img">
                  <img
                    src="./image/brothcan-1-510x510.jpg"
                    alt="鮮肉煲罐頭"
                    style="width: 100%"
                  />
                </div>

                <div   className="goodsText">
                  <p>鮮肉煲罐頭</p>
                  <span id="number">NT$ 240</span>

                  <div   className="icon2 d-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26.865"
                      height="27.721"
                      viewBox="0 0 26.865 27.721"
                    >
                      <g
                        id="Group_607"
                        data-name="Group 607"
                        transform="translate(0.5 0.5)"
                      >
                        <circle
                          id="Ellipse_10"
                          data-name="Ellipse 10"
                          cx="1.98"
                          cy="1.98"
                          r="1.98"
                          transform="translate(7.983 22.76)"
                          fill="#fffffd"
                          stroke="#ed8f8f"
                          stroke-width="1"
                        />
                        <path
                          id="Path_1085"
                          data-name="Path 1085"
                          d="M268.477,324.1h0a1.98,1.98,0,1,0,1.98,1.98A1.98,1.98,0,0,0,268.477,324.1Z"
                          transform="translate(-246.608 -301.338)"
                          fill="#fffffd"
                          stroke="#ed8f8f"
                          stroke-width="1"
                        />
                        <path
                          id="Path_1086"
                          data-name="Path 1086"
                          d="M31.8,19.73H15.326L15,17.583H28.541a.978.978,0,0,0,.9-.7l3.223-9.328a1.17,1.17,0,0,0-.545-1.44.857.857,0,0,0-.357-.077H13.327L12.554.925A1.014,1.014,0,0,0,11.587,0H7.88A1.046,1.046,0,0,0,6.913,1.11,1.046,1.046,0,0,0,7.88,2.221h2.9l2.772,18.8a1.014,1.014,0,0,0,.967.925H31.8a1.121,1.121,0,0,0,0-2.221Z"
                          transform="translate(-6.913 0.001)"
                          fill="#fffffd"
                          stroke="#ed8f8f"
                          stroke-width="1"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>

              <div   className="card_new col-lg-3">
                <div   className="icon d-flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21.388"
                    height="20.524"
                    viewBox="0 0 21.388 20.524"
                  >
                    <g id="愛心" transform="translate(0.251 0.25)">
                      <path
                        id="Path_1296"
                        data-name="Path 1296"
                        d="M489.508,232.381a4.73,4.73,0,0,0-5.1-3.618c-2.61-.018-5.309,2.627-5.441,6.541-.125,3.664,2.524,8.514,10.189,13.439,7.994-4.816,10.564-9.629,10.689-13.294.133-3.914-2.387-6.595-5-6.613a5.025,5.025,0,0,0-5.341,3.546"
                        transform="translate(-478.964 -228.762)"
                        fill="#fff"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1297"
                        data-name="Path 1297"
                        d="M489.508,232.381a4.73,4.73,0,0,0-5.1-3.618c-2.61-.018-5.309,2.627-5.441,6.541-.125,3.664,2.524,8.514,10.189,13.439,7.994-4.816,10.564-9.629,10.689-13.294.133-3.914-2.387-6.595-5-6.613A5.025,5.025,0,0,0,489.508,232.381Z"
                        transform="translate(-478.964 -228.762)"
                        fill="none"
                        stroke="#ed8f8f"
                        stroke-miterlimit="10"
                        stroke-width="0.5"
                      />
                    </g>
                  </svg>
                </div>
                <div   className="img">
                  <img
                    src="./image/brothcan-1-510x510.jpg"
                    alt="鮮肉煲罐頭"
                    style="width: 100%"
                  />
                </div>

                <div   className="goodsText">
                  <p>鮮肉煲罐頭</p>
                  <span id="number">NT$ 240</span>

                  <div   className="icon2 d-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26.865"
                      height="27.721"
                      viewBox="0 0 26.865 27.721"
                    >
                      <g
                        id="Group_607"
                        data-name="Group 607"
                        transform="translate(0.5 0.5)"
                      >
                        <circle
                          id="Ellipse_10"
                          data-name="Ellipse 10"
                          cx="1.98"
                          cy="1.98"
                          r="1.98"
                          transform="translate(7.983 22.76)"
                          fill="#fffffd"
                          stroke="#ed8f8f"
                          stroke-width="1"
                        />
                        <path
                          id="Path_1085"
                          data-name="Path 1085"
                          d="M268.477,324.1h0a1.98,1.98,0,1,0,1.98,1.98A1.98,1.98,0,0,0,268.477,324.1Z"
                          transform="translate(-246.608 -301.338)"
                          fill="#fffffd"
                          stroke="#ed8f8f"
                          stroke-width="1"
                        />
                        <path
                          id="Path_1086"
                          data-name="Path 1086"
                          d="M31.8,19.73H15.326L15,17.583H28.541a.978.978,0,0,0,.9-.7l3.223-9.328a1.17,1.17,0,0,0-.545-1.44.857.857,0,0,0-.357-.077H13.327L12.554.925A1.014,1.014,0,0,0,11.587,0H7.88A1.046,1.046,0,0,0,6.913,1.11,1.046,1.046,0,0,0,7.88,2.221h2.9l2.772,18.8a1.014,1.014,0,0,0,.967.925H31.8a1.121,1.121,0,0,0,0-2.221Z"
                          transform="translate(-6.913 0.001)"
                          fill="#fffffd"
                          stroke="#ed8f8f"
                          stroke-width="1"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>

              <div   className="card_new col-lg-3">
                <div   className="icon d-flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21.388"
                    height="20.524"
                    viewBox="0 0 21.388 20.524"
                  >
                    <g id="愛心" transform="translate(0.251 0.25)">
                      <path
                        id="Path_1296"
                        data-name="Path 1296"
                        d="M489.508,232.381a4.73,4.73,0,0,0-5.1-3.618c-2.61-.018-5.309,2.627-5.441,6.541-.125,3.664,2.524,8.514,10.189,13.439,7.994-4.816,10.564-9.629,10.689-13.294.133-3.914-2.387-6.595-5-6.613a5.025,5.025,0,0,0-5.341,3.546"
                        transform="translate(-478.964 -228.762)"
                        fill="#fff"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1297"
                        data-name="Path 1297"
                        d="M489.508,232.381a4.73,4.73,0,0,0-5.1-3.618c-2.61-.018-5.309,2.627-5.441,6.541-.125,3.664,2.524,8.514,10.189,13.439,7.994-4.816,10.564-9.629,10.689-13.294.133-3.914-2.387-6.595-5-6.613A5.025,5.025,0,0,0,489.508,232.381Z"
                        transform="translate(-478.964 -228.762)"
                        fill="none"
                        stroke="#ed8f8f"
                        stroke-miterlimit="10"
                        stroke-width="0.5"
                      />
                    </g>
                  </svg>
                </div>
                <div   className="img">
                  <img
                    src="./image/brothcan-1-510x510.jpg"
                    alt="鮮肉煲罐頭"
                    style="width: 100%"
                  />
                </div>

                <div   className="goodsText">
                  <p>鮮肉煲罐頭</p>
                  <span id="number">NT$ 240</span>

                  <div   className="icon2 d-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26.865"
                      height="27.721"
                      viewBox="0 0 26.865 27.721"
                    >
                      <g
                        id="Group_607"
                        data-name="Group 607"
                        transform="translate(0.5 0.5)"
                      >
                        <circle
                          id="Ellipse_10"
                          data-name="Ellipse 10"
                          cx="1.98"
                          cy="1.98"
                          r="1.98"
                          transform="translate(7.983 22.76)"
                          fill="#fffffd"
                          stroke="#ed8f8f"
                          stroke-width="1"
                        />
                        <path
                          id="Path_1085"
                          data-name="Path 1085"
                          d="M268.477,324.1h0a1.98,1.98,0,1,0,1.98,1.98A1.98,1.98,0,0,0,268.477,324.1Z"
                          transform="translate(-246.608 -301.338)"
                          fill="#fffffd"
                          stroke="#ed8f8f"
                          stroke-width="1"
                        />
                        <path
                          id="Path_1086"
                          data-name="Path 1086"
                          d="M31.8,19.73H15.326L15,17.583H28.541a.978.978,0,0,0,.9-.7l3.223-9.328a1.17,1.17,0,0,0-.545-1.44.857.857,0,0,0-.357-.077H13.327L12.554.925A1.014,1.014,0,0,0,11.587,0H7.88A1.046,1.046,0,0,0,6.913,1.11,1.046,1.046,0,0,0,7.88,2.221h2.9l2.772,18.8a1.014,1.014,0,0,0,.967.925H31.8a1.121,1.121,0,0,0,0-2.221Z"
                          transform="translate(-6.913 0.001)"
                          fill="#fffffd"
                          stroke="#ed8f8f"
                          stroke-width="1"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>

              <div   className="card_new col-lg-3">
                <div   className="icon d-flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21.388"
                    height="20.524"
                    viewBox="0 0 21.388 20.524"
                  >
                    <g id="愛心" transform="translate(0.251 0.25)">
                      <path
                        id="Path_1296"
                        data-name="Path 1296"
                        d="M489.508,232.381a4.73,4.73,0,0,0-5.1-3.618c-2.61-.018-5.309,2.627-5.441,6.541-.125,3.664,2.524,8.514,10.189,13.439,7.994-4.816,10.564-9.629,10.689-13.294.133-3.914-2.387-6.595-5-6.613a5.025,5.025,0,0,0-5.341,3.546"
                        transform="translate(-478.964 -228.762)"
                        fill="#fff"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1297"
                        data-name="Path 1297"
                        d="M489.508,232.381a4.73,4.73,0,0,0-5.1-3.618c-2.61-.018-5.309,2.627-5.441,6.541-.125,3.664,2.524,8.514,10.189,13.439,7.994-4.816,10.564-9.629,10.689-13.294.133-3.914-2.387-6.595-5-6.613A5.025,5.025,0,0,0,489.508,232.381Z"
                        transform="translate(-478.964 -228.762)"
                        fill="none"
                        stroke="#ed8f8f"
                        stroke-miterlimit="10"
                        stroke-width="0.5"
                      />
                    </g>
                  </svg>
                </div>
                <div   className="img">
                  <img
                    src="./image/brothcan-1-510x510.jpg"
                    alt="鮮肉煲罐頭"
                    style="width: 100%"
                  />
                </div>

                <div   className="goodsText">
                  <p>鮮肉煲罐頭</p>
                  <span id="number">NT$ 240</span>

                  <div   className="icon2 d-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26.865"
                      height="27.721"
                      viewBox="0 0 26.865 27.721"
                    >
                      <g
                        id="Group_607"
                        data-name="Group 607"
                        transform="translate(0.5 0.5)"
                      >
                        <circle
                          id="Ellipse_10"
                          data-name="Ellipse 10"
                          cx="1.98"
                          cy="1.98"
                          r="1.98"
                          transform="translate(7.983 22.76)"
                          fill="#fffffd"
                          stroke="#ed8f8f"
                          stroke-width="1"
                        />
                        <path
                          id="Path_1085"
                          data-name="Path 1085"
                          d="M268.477,324.1h0a1.98,1.98,0,1,0,1.98,1.98A1.98,1.98,0,0,0,268.477,324.1Z"
                          transform="translate(-246.608 -301.338)"
                          fill="#fffffd"
                          stroke="#ed8f8f"
                          stroke-width="1"
                        />
                        <path
                          id="Path_1086"
                          data-name="Path 1086"
                          d="M31.8,19.73H15.326L15,17.583H28.541a.978.978,0,0,0,.9-.7l3.223-9.328a1.17,1.17,0,0,0-.545-1.44.857.857,0,0,0-.357-.077H13.327L12.554.925A1.014,1.014,0,0,0,11.587,0H7.88A1.046,1.046,0,0,0,6.913,1.11,1.046,1.046,0,0,0,7.88,2.221h2.9l2.772,18.8a1.014,1.014,0,0,0,.967.925H31.8a1.121,1.121,0,0,0,0-2.221Z"
                          transform="translate(-6.913 0.001)"
                          fill="#fffffd"
                          stroke="#ed8f8f"
                          stroke-width="1"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>

              <div   className="card_new col-lg-3">
                <div   className="icon d-flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21.388"
                    height="20.524"
                    viewBox="0 0 21.388 20.524"
                  >
                    <g id="愛心" transform="translate(0.251 0.25)">
                      <path
                        id="Path_1296"
                        data-name="Path 1296"
                        d="M489.508,232.381a4.73,4.73,0,0,0-5.1-3.618c-2.61-.018-5.309,2.627-5.441,6.541-.125,3.664,2.524,8.514,10.189,13.439,7.994-4.816,10.564-9.629,10.689-13.294.133-3.914-2.387-6.595-5-6.613a5.025,5.025,0,0,0-5.341,3.546"
                        transform="translate(-478.964 -228.762)"
                        fill="#fff"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1297"
                        data-name="Path 1297"
                        d="M489.508,232.381a4.73,4.73,0,0,0-5.1-3.618c-2.61-.018-5.309,2.627-5.441,6.541-.125,3.664,2.524,8.514,10.189,13.439,7.994-4.816,10.564-9.629,10.689-13.294.133-3.914-2.387-6.595-5-6.613A5.025,5.025,0,0,0,489.508,232.381Z"
                        transform="translate(-478.964 -228.762)"
                        fill="none"
                        stroke="#ed8f8f"
                        stroke-miterlimit="10"
                        stroke-width="0.5"
                      />
                    </g>
                  </svg>
                </div>
                <div   className="img">
                  <img
                    src="./image/brothcan-1-510x510.jpg"
                    alt="鮮肉煲罐頭"
                    style="width: 100%"
                  />
                </div>

                <div   className="goodsText">
                  <p>鮮肉煲罐頭</p>
                  <span id="number">NT$ 240</span>

                  <div   className="icon2 d-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26.865"
                      height="27.721"
                      viewBox="0 0 26.865 27.721"
                    >
                      <g
                        id="Group_607"
                        data-name="Group 607"
                        transform="translate(0.5 0.5)"
                      >
                        <circle
                          id="Ellipse_10"
                          data-name="Ellipse 10"
                          cx="1.98"
                          cy="1.98"
                          r="1.98"
                          transform="translate(7.983 22.76)"
                          fill="#fffffd"
                          stroke="#ed8f8f"
                          stroke-width="1"
                        />
                        <path
                          id="Path_1085"
                          data-name="Path 1085"
                          d="M268.477,324.1h0a1.98,1.98,0,1,0,1.98,1.98A1.98,1.98,0,0,0,268.477,324.1Z"
                          transform="translate(-246.608 -301.338)"
                          fill="#fffffd"
                          stroke="#ed8f8f"
                          stroke-width="1"
                        />
                        <path
                          id="Path_1086"
                          data-name="Path 1086"
                          d="M31.8,19.73H15.326L15,17.583H28.541a.978.978,0,0,0,.9-.7l3.223-9.328a1.17,1.17,0,0,0-.545-1.44.857.857,0,0,0-.357-.077H13.327L12.554.925A1.014,1.014,0,0,0,11.587,0H7.88A1.046,1.046,0,0,0,6.913,1.11,1.046,1.046,0,0,0,7.88,2.221h2.9l2.772,18.8a1.014,1.014,0,0,0,.967.925H31.8a1.121,1.121,0,0,0,0-2.221Z"
                          transform="translate(-6.913 0.001)"
                          fill="#fffffd"
                          stroke="#ed8f8f"
                          stroke-width="1"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>

              <div   className="card_new col-lg-3">
                <div   className="icon d-flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21.388"
                    height="20.524"
                    viewBox="0 0 21.388 20.524"
                  >
                    <g id="愛心" transform="translate(0.251 0.25)">
                      <path
                        id="Path_1296"
                        data-name="Path 1296"
                        d="M489.508,232.381a4.73,4.73,0,0,0-5.1-3.618c-2.61-.018-5.309,2.627-5.441,6.541-.125,3.664,2.524,8.514,10.189,13.439,7.994-4.816,10.564-9.629,10.689-13.294.133-3.914-2.387-6.595-5-6.613a5.025,5.025,0,0,0-5.341,3.546"
                        transform="translate(-478.964 -228.762)"
                        fill="#fff"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1297"
                        data-name="Path 1297"
                        d="M489.508,232.381a4.73,4.73,0,0,0-5.1-3.618c-2.61-.018-5.309,2.627-5.441,6.541-.125,3.664,2.524,8.514,10.189,13.439,7.994-4.816,10.564-9.629,10.689-13.294.133-3.914-2.387-6.595-5-6.613A5.025,5.025,0,0,0,489.508,232.381Z"
                        transform="translate(-478.964 -228.762)"
                        fill="none"
                        stroke="#ed8f8f"
                        stroke-miterlimit="10"
                        stroke-width="0.5"
                      />
                    </g>
                  </svg>
                </div>
                <div   className="img">
                  <img
                    src="./image/brothcan-1-510x510.jpg"
                    alt="鮮肉煲罐頭"
                    style="width: 100%"
                  />
                </div>

                <div   className="goodsText">
                  <p>鮮肉煲罐頭</p>
                  <span id="number">NT$ 240</span>

                  <div   className="icon2 d-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26.865"
                      height="27.721"
                      viewBox="0 0 26.865 27.721"
                    >
                      <g
                        id="Group_607"
                        data-name="Group 607"
                        transform="translate(0.5 0.5)"
                      >
                        <circle
                          id="Ellipse_10"
                          data-name="Ellipse 10"
                          cx="1.98"
                          cy="1.98"
                          r="1.98"
                          transform="translate(7.983 22.76)"
                          fill="#fffffd"
                          stroke="#ed8f8f"
                          stroke-width="1"
                        />
                        <path
                          id="Path_1085"
                          data-name="Path 1085"
                          d="M268.477,324.1h0a1.98,1.98,0,1,0,1.98,1.98A1.98,1.98,0,0,0,268.477,324.1Z"
                          transform="translate(-246.608 -301.338)"
                          fill="#fffffd"
                          stroke="#ed8f8f"
                          stroke-width="1"
                        />
                        <path
                          id="Path_1086"
                          data-name="Path 1086"
                          d="M31.8,19.73H15.326L15,17.583H28.541a.978.978,0,0,0,.9-.7l3.223-9.328a1.17,1.17,0,0,0-.545-1.44.857.857,0,0,0-.357-.077H13.327L12.554.925A1.014,1.014,0,0,0,11.587,0H7.88A1.046,1.046,0,0,0,6.913,1.11,1.046,1.046,0,0,0,7.88,2.221h2.9l2.772,18.8a1.014,1.014,0,0,0,.967.925H31.8a1.121,1.121,0,0,0,0-2.221Z"
                          transform="translate(-6.913 0.001)"
                          fill="#fffffd"
                          stroke="#ed8f8f"
                          stroke-width="1"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>

              <div   className="card_new col-lg-3">
                <div   className="icon d-flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21.388"
                    height="20.524"
                    viewBox="0 0 21.388 20.524"
                  >
                    <g id="愛心" transform="translate(0.251 0.25)">
                      <path
                        id="Path_1296"
                        data-name="Path 1296"
                        d="M489.508,232.381a4.73,4.73,0,0,0-5.1-3.618c-2.61-.018-5.309,2.627-5.441,6.541-.125,3.664,2.524,8.514,10.189,13.439,7.994-4.816,10.564-9.629,10.689-13.294.133-3.914-2.387-6.595-5-6.613a5.025,5.025,0,0,0-5.341,3.546"
                        transform="translate(-478.964 -228.762)"
                        fill="#fff"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1297"
                        data-name="Path 1297"
                        d="M489.508,232.381a4.73,4.73,0,0,0-5.1-3.618c-2.61-.018-5.309,2.627-5.441,6.541-.125,3.664,2.524,8.514,10.189,13.439,7.994-4.816,10.564-9.629,10.689-13.294.133-3.914-2.387-6.595-5-6.613A5.025,5.025,0,0,0,489.508,232.381Z"
                        transform="translate(-478.964 -228.762)"
                        fill="none"
                        stroke="#ed8f8f"
                        stroke-miterlimit="10"
                        stroke-width="0.5"
                      />
                    </g>
                  </svg>
                </div>
                <div   className="img">
                  <img
                    src="./image/brothcan-1-510x510.jpg"
                    alt="鮮肉煲罐頭"
                    style="width: 100%"
                  />
                </div>

                <div   className="goodsText">
                  <p>鮮肉煲罐頭</p>
                  <span id="number">NT$ 240</span>

                  <div   className="icon2 d-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26.865"
                      height="27.721"
                      viewBox="0 0 26.865 27.721"
                    >
                      <g
                        id="Group_607"
                        data-name="Group 607"
                        transform="translate(0.5 0.5)"
                      >
                        <circle
                          id="Ellipse_10"
                          data-name="Ellipse 10"
                          cx="1.98"
                          cy="1.98"
                          r="1.98"
                          transform="translate(7.983 22.76)"
                          fill="#fffffd"
                          stroke="#ed8f8f"
                          stroke-width="1"
                        />
                        <path
                          id="Path_1085"
                          data-name="Path 1085"
                          d="M268.477,324.1h0a1.98,1.98,0,1,0,1.98,1.98A1.98,1.98,0,0,0,268.477,324.1Z"
                          transform="translate(-246.608 -301.338)"
                          fill="#fffffd"
                          stroke="#ed8f8f"
                          stroke-width="1"
                        />
                        <path
                          id="Path_1086"
                          data-name="Path 1086"
                          d="M31.8,19.73H15.326L15,17.583H28.541a.978.978,0,0,0,.9-.7l3.223-9.328a1.17,1.17,0,0,0-.545-1.44.857.857,0,0,0-.357-.077H13.327L12.554.925A1.014,1.014,0,0,0,11.587,0H7.88A1.046,1.046,0,0,0,6.913,1.11,1.046,1.046,0,0,0,7.88,2.221h2.9l2.772,18.8a1.014,1.014,0,0,0,.967.925H31.8a1.121,1.121,0,0,0,0-2.221Z"
                          transform="translate(-6.913 0.001)"
                          fill="#fffffd"
                          stroke="#ed8f8f"
                          stroke-width="1"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>

              <div   className="card_new col-lg-3">
                <div   className="icon d-flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21.388"
                    height="20.524"
                    viewBox="0 0 21.388 20.524"
                  >
                    <g id="愛心" transform="translate(0.251 0.25)">
                      <path
                        id="Path_1296"
                        data-name="Path 1296"
                        d="M489.508,232.381a4.73,4.73,0,0,0-5.1-3.618c-2.61-.018-5.309,2.627-5.441,6.541-.125,3.664,2.524,8.514,10.189,13.439,7.994-4.816,10.564-9.629,10.689-13.294.133-3.914-2.387-6.595-5-6.613a5.025,5.025,0,0,0-5.341,3.546"
                        transform="translate(-478.964 -228.762)"
                        fill="#fff"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1297"
                        data-name="Path 1297"
                        d="M489.508,232.381a4.73,4.73,0,0,0-5.1-3.618c-2.61-.018-5.309,2.627-5.441,6.541-.125,3.664,2.524,8.514,10.189,13.439,7.994-4.816,10.564-9.629,10.689-13.294.133-3.914-2.387-6.595-5-6.613A5.025,5.025,0,0,0,489.508,232.381Z"
                        transform="translate(-478.964 -228.762)"
                        fill="none"
                        stroke="#ed8f8f"
                        stroke-miterlimit="10"
                        stroke-width="0.5"
                      />
                    </g>
                  </svg>
                </div>
                <div   className="img">
                  <img
                    src="./image/brothcan-1-510x510.jpg"
                    alt="鮮肉煲罐頭"
                    style="width: 100%"
                  />
                </div>

                <div   className="goodsText">
                  <p>鮮肉煲罐頭</p>
                  <span id="number">NT$ 240</span>

                  <div   className="icon2 d-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26.865"
                      height="27.721"
                      viewBox="0 0 26.865 27.721"
                    >
                      <g
                        id="Group_607"
                        data-name="Group 607"
                        transform="translate(0.5 0.5)"
                      >
                        <circle
                          id="Ellipse_10"
                          data-name="Ellipse 10"
                          cx="1.98"
                          cy="1.98"
                          r="1.98"
                          transform="translate(7.983 22.76)"
                          fill="#fffffd"
                          stroke="#ed8f8f"
                          stroke-width="1"
                        />
                        <path
                          id="Path_1085"
                          data-name="Path 1085"
                          d="M268.477,324.1h0a1.98,1.98,0,1,0,1.98,1.98A1.98,1.98,0,0,0,268.477,324.1Z"
                          transform="translate(-246.608 -301.338)"
                          fill="#fffffd"
                          stroke="#ed8f8f"
                          stroke-width="1"
                        />
                        <path
                          id="Path_1086"
                          data-name="Path 1086"
                          d="M31.8,19.73H15.326L15,17.583H28.541a.978.978,0,0,0,.9-.7l3.223-9.328a1.17,1.17,0,0,0-.545-1.44.857.857,0,0,0-.357-.077H13.327L12.554.925A1.014,1.014,0,0,0,11.587,0H7.88A1.046,1.046,0,0,0,6.913,1.11,1.046,1.046,0,0,0,7.88,2.221h2.9l2.772,18.8a1.014,1.014,0,0,0,.967.925H31.8a1.121,1.121,0,0,0,0-2.221Z"
                          transform="translate(-6.913 0.001)"
                          fill="#fffffd"
                          stroke="#ed8f8f"
                          stroke-width="1"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>

              <div   className="card_new col-lg-3">
                <div   className="icon d-flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21.388"
                    height="20.524"
                    viewBox="0 0 21.388 20.524"
                  >
                    <g id="愛心" transform="translate(0.251 0.25)">
                      <path
                        id="Path_1296"
                        data-name="Path 1296"
                        d="M489.508,232.381a4.73,4.73,0,0,0-5.1-3.618c-2.61-.018-5.309,2.627-5.441,6.541-.125,3.664,2.524,8.514,10.189,13.439,7.994-4.816,10.564-9.629,10.689-13.294.133-3.914-2.387-6.595-5-6.613a5.025,5.025,0,0,0-5.341,3.546"
                        transform="translate(-478.964 -228.762)"
                        fill="#fff"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1297"
                        data-name="Path 1297"
                        d="M489.508,232.381a4.73,4.73,0,0,0-5.1-3.618c-2.61-.018-5.309,2.627-5.441,6.541-.125,3.664,2.524,8.514,10.189,13.439,7.994-4.816,10.564-9.629,10.689-13.294.133-3.914-2.387-6.595-5-6.613A5.025,5.025,0,0,0,489.508,232.381Z"
                        transform="translate(-478.964 -228.762)"
                        fill="none"
                        stroke="#ed8f8f"
                        stroke-miterlimit="10"
                        stroke-width="0.5"
                      />
                    </g>
                  </svg>
                </div>
                <div   className="img">
                  <img
                    src="./image/brothcan-1-510x510.jpg"
                    alt="鮮肉煲罐頭"
                    style="width: 100%"
                  />
                </div>

                <div   className="goodsText">
                  <p>鮮肉煲罐頭</p>
                  <span id="number">NT$ 240</span>

                  <div   className="icon2 d-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26.865"
                      height="27.721"
                      viewBox="0 0 26.865 27.721"
                    >
                      <g
                        id="Group_607"
                        data-name="Group 607"
                        transform="translate(0.5 0.5)"
                      >
                        <circle
                          id="Ellipse_10"
                          data-name="Ellipse 10"
                          cx="1.98"
                          cy="1.98"
                          r="1.98"
                          transform="translate(7.983 22.76)"
                          fill="#fffffd"
                          stroke="#ed8f8f"
                          stroke-width="1"
                        />
                        <path
                          id="Path_1085"
                          data-name="Path 1085"
                          d="M268.477,324.1h0a1.98,1.98,0,1,0,1.98,1.98A1.98,1.98,0,0,0,268.477,324.1Z"
                          transform="translate(-246.608 -301.338)"
                          fill="#fffffd"
                          stroke="#ed8f8f"
                          stroke-width="1"
                        />
                        <path
                          id="Path_1086"
                          data-name="Path 1086"
                          d="M31.8,19.73H15.326L15,17.583H28.541a.978.978,0,0,0,.9-.7l3.223-9.328a1.17,1.17,0,0,0-.545-1.44.857.857,0,0,0-.357-.077H13.327L12.554.925A1.014,1.014,0,0,0,11.587,0H7.88A1.046,1.046,0,0,0,6.913,1.11,1.046,1.046,0,0,0,7.88,2.221h2.9l2.772,18.8a1.014,1.014,0,0,0,.967.925H31.8a1.121,1.121,0,0,0,0-2.221Z"
                          transform="translate(-6.913 0.001)"
                          fill="#fffffd"
                          stroke="#ed8f8f"
                          stroke-width="1"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </>)
}

export default straymaoP2(mapStateToProps, {})(Test);


