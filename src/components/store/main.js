import { func } from 'prop-types';
import React, { useState, useEffect } from 'react'
import "../../styles/store/straymao.scss";
import "animate.css"

function Storepage(props) {
// const [storeP1Background, setstoreP1Background] = useState(0);
let i =0;
useEffect(()=>{

  document.querySelector('#storeP1BackgroundMouse').addEventListener("mouseover", ()=> {
    let storeP1BackgroundMouse = document.querySelector('#storeP1BackgroundMouse')
        storeP1BackgroundMouse.classList.add('animate__bounce') ;    
      });

  //     document.querySelector('#storeP1BackgroundMouse').addEventListener("mouseout", ()=> {

  //       let storeP1BackgroundMouse = document.querySelector('#storeP1BackgroundMouse')
  //           storeP1BackgroundMouse.style.transform = ` translateY(0px)`;
        
  //         });

  document.addEventListener("mousemove", function parallax(e) {
    this.querySelectorAll('.storeP1Background').forEach(storeP1Background => {
        const speed = storeP1Background.getAttribute('data-speed')
        if (i == 1){
         const x = (window.innerWidth - e.pageX * speed) / 50
         const y = (window.innerHeight - e.pageY * speed) / 50

  storeP1Background.style.transform = `translateX(${x}px) translateY(${y}px)`;
}     
        // console.log(e);
    })});      
    document.querySelector('.storeP1Background').addEventListener("mouseover",function func(e){
      i=1
          });
          document.querySelector('.storeP1Background').addEventListener("mouseout",function func(e){
            i=0
                });                
},[]);

// useEffect(()=>{
//   document.addEventListener("mouseover", function()=>{
//     // this.querySelector('#storeP1BackgroundMouse')
//     storeP1BackgroundMouse.style.transform = `translateX(${x}px) translateY(${y}px)`;

//   })
// });




return(
<>

      {/* 地板 */}
      {/* onMouseOver={(storeP1Background)=> */}
    <section>
      <div className="d-flex storeP1Background" data-speed="1">
        <div id="storeP1BackgroundTop">
          <img id="storeP1BackgroundMouse" className="animate__animated" src="./image/store/mouse.png" alt=""   />
          <img id="storeP1BackgroundCat" src="./image/store/cat_PNG113.png" alt=""   />
          <img id="storeP1BackgroundDog" src="./image/store/未命名-2.png" alt=""   />

          <img
            id="storeP1BackgroundCatTower"
            src="./image/store/cat-3953989_1280.png"
            alt=""  
          />

          <img
            id="storeP1BackgroundDogFood"
            src="./image/store/dog-food2.png"
            alt=""
          />
          
          <img
            id="storeP1BackgroundDogFoodBowl"
            src="./image/store/343-3432319_low-carb-pet-food-manhaten-cat.png"
            alt=""
          />
          <img id="storeP1BackgroundBall" src="./image/store/ball.png" alt=""      />
         {/* 牆 */}
          <img id="storeP1BackgroundMoon" src="./image/store/cat_tree01.png" alt="" />
          <img id="storeP1BackgroundAngle" src="./image/store/cat_tree02.png" alt="" />
          <img id="storeP1BackgroundStep1" src="./image/store/cat_tree03.png" alt="" />
          <img id="storeP1BackgroundStep2" src="./image/store/cat_tree03.png" alt="" />
          <img id="storeP1BackgroundStep3" src="./image/store/cat_tree03.png" alt="" />
        </div>      
      </div>
    </section>
      <div className="container" data-speed="0">
        <div className="row">
          {/* <!-- 大按鈕 --> */}
          <article id="bigBtn" className="d-flex">
            <button className="btn" id="newsBigBtn" type="button" value="News">
              News
            </button>
            <button className="btn" id="catBigBtn" type="button" value="Cats">
              Cat
            </button>
            <button className="btn" id="dogBigBtn" type="button" value="Dogs">
              Dog
            </button>
          </article>
          {/* <!-- 熱銷推薦 --> */}
          <div className="storeP1Title center">
            <div className="line1"></div>
            <div className="storeP1GoodsWords">熱銷推薦</div>
            <div className="line2"></div>
          </div>
        </div>
      </div>

      <div className="container storeP1Bottom" data-speed="0">
        <div className="row d-flex" id="between">
          <div className="arrow">
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
          </div>

          <div className="card_new col-lg-3">
            <div className="icon d-flex">
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
            <div className="img">
              <img src="./image/store/brothcan-1-510x510.jpg" alt="鮮肉煲罐頭" />
            </div>

            <div className="goodsText">
              <p>鮮肉煲罐頭</p>
              <span id="number">NT$ 240</span>

              <div className="icon2 d-flex">
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

          <div className="card_new col-lg-3">
            <div className="icon d-flex">
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
            <div className="img">
              <img
                src="./image/store/brothcan-1-510x510.jpg"
                alt="鮮肉煲罐頭"                
              />
            </div>

            <div className="goodsText">
              <p>鮮肉煲罐頭</p>
              <span id="number">NT$ 240</span>

              <div className="icon2 d-flex">
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

          <div className="card_new col-lg-3">
            <div className="icon d-flex">
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
            <div className="img">
              <img
                src="./image/store/brothcan-1-510x510.jpg"
                alt="鮮肉煲罐頭"                
              />
            </div>

            <div className="goodsText">
              <p>鮮肉煲罐頭</p>
              <span id="number">NT$ 240</span>

              <div className="icon2 d-flex">
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

          <div className="arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18.381"
              height="22.256"
              viewBox="0 0 18.381 22.256"
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
          </div>
        </div>
      </div>

      {/* <!-- 特價商品 --> */}
      <div className="container">
        <div className="row">
          {/* <!-- 特價商品 --> */}
          <div className="storeP1Title center">
            <div className="line1"></div>
            <div className="storeP1GoodsWords">特價商品</div>
            <div className="line2"></div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row d-flex" id="between">
          <div className="arrow">
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
          </div>

          <div className="card_new col-lg-3">
            <div className="icon d-flex">
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
            <div className="img">
              <img src="./image/store/brothcan-1-510x510.jpg" alt="鮮肉煲罐頭" />
            </div>

            <div className="goodsText">
              <p>鮮肉煲罐頭</p>
              <span id="number">NT$ 240</span>

              <div className="icon2 d-flex">
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

          <div className="card_new col-lg-3">
            <div className="icon d-flex">
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
            <div className="img">
              <img
                src="./image/store/brothcan-1-510x510.jpg"
                alt="鮮肉煲罐頭"
              />
            </div>

            <div className="goodsText">
              <p>鮮肉煲罐頭</p>
              <span id="number">NT$ 240</span>

              <div className="icon2 d-flex">
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

          <div className="card_new col-lg-3">
            <div className="icon d-flex">
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
            <div className="img">
              <img
                src="./image/store/brothcan-1-510x510.jpg"
                alt="鮮肉煲罐頭"
              />
            </div>

            <div className="goodsText">
              <p>鮮肉煲罐頭</p>
              <span id="number">NT$ 240</span>

              <div className="icon2 d-flex">
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

          <div className="arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18.381"
              height="22.256"
              viewBox="0 0 18.381 22.256"
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
          </div>
        </div>
      </div>
      {/* <!-- 特價商品結束 --> */}
      <aside>
        {/* <!-- <div id="cartAndDonate" className="d-flex"> --> */}
        <div className="circle-s circle-cart">
          <div className="div-cart">
            <i className="fas fa-shopping-cart" />
          </div>
        </div>
        <div className="circle-l circle-donate">
          <div>捐款</div>
        </div>
        {/* <!-- </div> --> */}
      </aside>
    
</>
)}

export default Storepage