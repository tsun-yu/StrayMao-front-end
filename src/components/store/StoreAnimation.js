import React, { useEffect, useState } from 'react'
import '../../styles/store/straymao.scss'
import { connect } from 'react-redux'
import LittleCardImg from '../../components/store/LittleCardImg'

function StoreAnimation(props) {
  // const [item , setItem] = useState(props.item)
  // const { item } = props
  // const { itemLittleCard2 } = props
  // console.log('item:', item)
  return (
    <>
      <div className="d-flex storeP1Background" data-speed="1">
        <div id="storeP1BackgroundTop">
          <img
            id="storeP1BackgroundMouse"
            className="animate__animated animate__bounceInDown"
            src="./image/store/mouse.png"
            alt=""
          />
          <img
            id="storeP1BackgroundCat"
            className="animate__animated animate__slideInLeft"
            src="./image/store/cat_PNG113.png"
            alt=""
          />
          <img
            id="storeP1BackgroundDog"
            className="animate__animated animate__slideInRight"
            src="./image/store/未命名-2.png"
            alt=""
          />

          <div className="storeP1BackgroundCatTower">
            <img
              id="storeP1BackgroundCatTower"
              className="animate__animated animate__slideInLeft"
              src="./image/store/cat-3953989_1280.png"
              alt=""
            />
            {/* hover cards and link to */}

            <a href="https://www.google.com/">
              <div className="storeP1BackgroundCatTowerCircle2">
                <svg
                  id="storeP1BackgroundCatTowerCircle2"
                  className="animate__animated animate__slideInDown storeP1BackgroundCatTowerCircle2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="27.5"
                  height="27.5"
                  viewBox="0 0 27.5 27.5"
                >
                  <defs>
                    <clipPath id="clip-path">
                      <rect
                        id="Rectangle_865"
                        data-name="Rectangle 865"
                        width="27.5"
                        height="27.5"
                        transform="translate(235.5 376.5)"
                        fill="none"
                      />
                    </clipPath>
                  </defs>
                  <g
                    id="Group_688"
                    data-name="Group 688"
                    transform="translate(-235.5 -376.5)"
                    opacity="0.2"
                  >
                    <g id="Group_687" data-name="Group 687">
                      <g
                        id="Group_686"
                        data-name="Group 686"
                        clip-path="url(#clip-path)"
                      >
                        <circle
                          id="Ellipse_19"
                          data-name="Ellipse 19"
                          cx="10.25"
                          cy="10.25"
                          r="10.25"
                          transform="translate(239 380)"
                          fill="none"
                          stroke="#595757"
                          stroke-miterlimit="10"
                          stroke-width="7"
                        />
                      </g>
                    </g>
                  </g>
                </svg>

                <div className="StoreP1BackgroundCatTowerCircleCard d-flex">
                  <LittleCardImg
                    item={{
                      goodsImgs: './image/store/cat-3953989_1280.png',
                      name: 'Trixie 貓樹屋',
                      price: '20,000',
                    }}
                  />
                </div>
              </div>
            </a>

            <svg
              id="storeP1BackgroundCatTowerCircle"
              xmlns="http://www.w3.org/2000/svg"
              width="27.5"
              height="27.5"
              viewBox="0 0 27.5 27.5"
            >
              <defs>
                <clipPath id="clip-path">
                  <rect
                    id="Rectangle_865"
                    data-name="Rectangle 865"
                    width="27.5"
                    height="27.5"
                    transform="translate(235.5 376.5)"
                    fill="none"
                  />
                </clipPath>
              </defs>
              <g
                id="Group_688"
                data-name="Group 688"
                transform="translate(-235.5 -376.5)"
                opacity="0.2"
              >
                <g id="Group_687" data-name="Group 687">
                  <g
                    id="Group_686"
                    data-name="Group 686"
                    clip-path="url(#clip-path)"
                  >
                    <circle
                      id="Ellipse_19"
                      data-name="Ellipse 19"
                      cx="10.25"
                      cy="10.25"
                      r="10.25"
                      transform="translate(239 380)"
                      fill="none"
                      stroke="#595757"
                      stroke-miterlimit="10"
                      stroke-width="7"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </div>

          <img
            id="storeP1BackgroundDogFood"
            className="animate__animated animate__slideInRight"
            src="./image/store/dog-food2.png"
            alt=""
          />

          {/* hover cards and link to */}
          <a href="https://www.google.com/">
            <div className="storeP1BackgroundDogFoodCircle2">
              <svg
                id="storeP1BackgroundDogFoodCircle2"
                xmlns="http://www.w3.org/2000/svg"
                width="27.5"
                height="27.5"
                viewBox="0 0 27.5 27.5"
              >
                <defs>
                  <clipPath id="clip-path">
                    <rect
                      id="Rectangle_865"
                      data-name="Rectangle 865"
                      width="27.5"
                      height="27.5"
                      transform="translate(235.5 376.5)"
                      fill="none"
                    />
                  </clipPath>
                </defs>
                <g
                  id="Group_688"
                  data-name="Group 688"
                  transform="translate(-235.5 -376.5)"
                  opacity="0.2"
                >
                  <g id="Group_687" data-name="Group 687">
                    <g
                      id="Group_686"
                      data-name="Group 686"
                      clip-path="url(#clip-path)"
                    >
                      <circle
                        id="Ellipse_19"
                        data-name="Ellipse 19"
                        cx="10.25"
                        cy="10.25"
                        r="10.25"
                        transform="translate(239 380)"
                        fill="none"
                        stroke="#595757"
                        stroke-miterlimit="10"
                        stroke-width="7"
                      />
                    </g>
                  </g>
                </g>
              </svg>

              <div className="StoreP1BackgroundDogFoodCircleCard d-flex">
                <LittleCardImg
                  item={{
                    goodsImgs: './image/store/dog-food2.png',
                    name: 'Hills 成犬 完美體重',
                    price: '1,800',
                  }}
                />
              </div>
            </div>
          </a>

          <svg
            id="storeP1BackgroundDogFoodCircle"
            xmlns="http://www.w3.org/2000/svg"
            width="27.5"
            height="27.5"
            viewBox="0 0 27.5 27.5"
          >
            <defs>
              <clipPath id="clip-path">
                <rect
                  id="Rectangle_865"
                  data-name="Rectangle 865"
                  width="27.5"
                  height="27.5"
                  transform="translate(235.5 376.5)"
                  fill="none"
                />
              </clipPath>
            </defs>
            <g
              id="Group_688"
              data-name="Group 688"
              transform="translate(-235.5 -376.5)"
              opacity="0.2"
            >
              <g id="Group_687" data-name="Group 687">
                <g
                  id="Group_686"
                  data-name="Group 686"
                  clip-path="url(#clip-path)"
                >
                  <circle
                    id="Ellipse_19"
                    data-name="Ellipse 19"
                    cx="10.25"
                    cy="10.25"
                    r="10.25"
                    transform="translate(239 380)"
                    fill="none"
                    stroke="#595757"
                    stroke-miterlimit="10"
                    stroke-width="7"
                  />
                </g>
              </g>
            </g>
          </svg>

          <img
            id="storeP1BackgroundDogFoodBowl"
            className="animate__animated animate__slideInUp"
            src="./image/store/343-3432319_low-carb-pet-food-manhaten-cat.png"
            alt=""
          />
          <img
            id="storeP1BackgroundBall"
            className="animate__animated animate__slideInRight"
            src="./image/store/ball.png"
            alt=""
          />

          <svg
            id="storeP1BackgroundBallCircle2"
            xmlns="http://www.w3.org/2000/svg"
            width="27.5"
            height="27.5"
            viewBox="0 0 27.5 27.5"
          >
            <defs>
              <clipPath id="clip-path">
                <rect
                  id="Rectangle_865"
                  data-name="Rectangle 865"
                  width="27.5"
                  height="27.5"
                  transform="translate(235.5 376.5)"
                  fill="none"
                />
              </clipPath>
            </defs>
            <g
              id="Group_688"
              data-name="Group 688"
              transform="translate(-235.5 -376.5)"
              opacity="0.2"
            >
              <g id="Group_687" data-name="Group 687">
                <g
                  id="Group_686"
                  data-name="Group 686"
                  clip-path="url(#clip-path)"
                >
                  <circle
                    id="Ellipse_19"
                    data-name="Ellipse 19"
                    cx="10.25"
                    cy="10.25"
                    r="10.25"
                    transform="translate(239 380)"
                    fill="none"
                    stroke="#595757"
                    stroke-miterlimit="10"
                    stroke-width="7"
                  />
                </g>
              </g>
            </g>
          </svg>

          <svg
            id="storeP1BackgroundBallCircle"
            xmlns="http://www.w3.org/2000/svg"
            width="27.5"
            height="27.5"
            viewBox="0 0 27.5 27.5"
          >
            <defs>
              <clipPath id="clip-path">
                <rect
                  id="Rectangle_865"
                  data-name="Rectangle 865"
                  width="27.5"
                  height="27.5"
                  transform="translate(235.5 376.5)"
                  fill="none"
                />
              </clipPath>
            </defs>
            <g
              id="Group_688"
              data-name="Group 688"
              transform="translate(-235.5 -376.5)"
              opacity="0.2"
            >
              <g id="Group_687" data-name="Group 687">
                <g
                  id="Group_686"
                  data-name="Group 686"
                  clip-path="url(#clip-path)"
                >
                  <circle
                    id="Ellipse_19"
                    data-name="Ellipse 19"
                    cx="10.25"
                    cy="10.25"
                    r="10.25"
                    transform="translate(239 380)"
                    fill="none"
                    stroke="#595757"
                    stroke-miterlimit="10"
                    stroke-width="7"
                  />
                </g>
              </g>
            </g>
          </svg>

          {/* 牆 */}
          <img
            id="storeP1BackgroundMoon"
            className="animate__animated animate__slideInDown"
            src="./image/store/cat_tree01.png"
            alt=""
          />

          {/* hover cards and link to */}
          <a href="https://www.google.com/">
            <div className="storeP1BackgroundMoonCircle2">
              <svg
                id="storeP1BackgroundMoonCircle2"
                xmlns="http://www.w3.org/2000/svg"
                width="27.5"
                height="27.5"
                viewBox="0 0 27.5 27.5"
              >
                <defs>
                  <clipPath id="clip-path">
                    <rect
                      id="Rectangle_865"
                      data-name="Rectangle 865"
                      width="27.5"
                      height="27.5"
                      transform="translate(235.5 376.5)"
                      fill="none"
                    />
                  </clipPath>
                </defs>
                <g
                  id="Group_688"
                  data-name="Group 688"
                  transform="translate(-235.5 -376.5)"
                  opacity="0.2"
                >
                  <g id="Group_687" data-name="Group 687">
                    <g
                      id="Group_686"
                      data-name="Group 686"
                      clip-path="url(#clip-path)"
                    >
                      <circle
                        id="Ellipse_19"
                        data-name="Ellipse 19"
                        cx="10.25"
                        cy="10.25"
                        r="10.25"
                        transform="translate(239 380)"
                        fill="none"
                        stroke="#595757"
                        stroke-miterlimit="10"
                        stroke-width="7"
                      />
                    </g>
                  </g>
                </g>
              </svg>

              <div className="storeP1BackgroundMoonCircleCard d-flex">
                <LittleCardImg
                  item={{
                    goodsImgs: './image/store/cat_tree01.png',
                    name: 'Luna月亮跳台',
                    price: '5,000',
                  }}
                />
              </div>
            </div>
          </a>

          <svg
            id="storeP1BackgroundMoonCircle"
            xmlns="http://www.w3.org/2000/svg"
            width="27.5"
            height="27.5"
            viewBox="0 0 27.5 27.5"
          >
            <defs>
              <clipPath id="clip-path">
                <rect
                  id="Rectangle_865"
                  data-name="Rectangle 865"
                  width="27.5"
                  height="27.5"
                  transform="translate(235.5 376.5)"
                  fill="none"
                />
              </clipPath>
            </defs>
            <g
              id="Group_688"
              data-name="Group 688"
              transform="translate(-235.5 -376.5)"
              opacity="0.2"
            >
              <g id="Group_687" data-name="Group 687">
                <g
                  id="Group_686"
                  data-name="Group 686"
                  clip-path="url(#clip-path)"
                >
                  <circle
                    id="Ellipse_19"
                    data-name="Ellipse 19"
                    cx="10.25"
                    cy="10.25"
                    r="10.25"
                    transform="translate(239 380)"
                    fill="none"
                    stroke="#595757"
                    stroke-miterlimit="10"
                    stroke-width="7"
                  />
                </g>
              </g>
            </g>
          </svg>

          <img
            id="storeP1BackgroundAngle"
            className="animate__animated animate__slideInDown"
            src="./image/store/cat_tree02.png"
            alt=""
          />

          <a href="https://www.google.com/">
            <div className="storeP1BackgroundAngleCircle2">
              <svg
                id="storeP1BackgroundAngleCircle2"
                xmlns="http://www.w3.org/2000/svg"
                width="27.5"
                height="27.5"
                viewBox="0 0 27.5 27.5"
              >
                <defs>
                  <clipPath id="clip-path">
                    <rect
                      id="Rectangle_865"
                      data-name="Rectangle 865"
                      width="27.5"
                      height="27.5"
                      transform="translate(235.5 376.5)"
                      fill="none"
                    />
                  </clipPath>
                </defs>
                <g
                  id="Group_688"
                  data-name="Group 688"
                  transform="translate(-235.5 -376.5)"
                  opacity="0.2"
                >
                  <g id="Group_687" data-name="Group 687">
                    <g
                      id="Group_686"
                      data-name="Group 686"
                      clip-path="url(#clip-path)"
                    >
                      <circle
                        id="Ellipse_19"
                        data-name="Ellipse 19"
                        cx="10.25"
                        cy="10.25"
                        r="10.25"
                        transform="translate(239 380)"
                        fill="none"
                        stroke="#595757"
                        stroke-miterlimit="10"
                        stroke-width="7"
                      />
                    </g>
                  </g>
                </g>
              </svg>

              <div className="storeP1BackgroundAngleCircleCard d-flex">
                <LittleCardImg
                  item={{
                    goodsImgs: './image/store/cat_tree02.png',
                    name: '六角貓跳台Busy Cat',
                    price: '2,200',
                  }}
                />
              </div>
            </div>
          </a>

          <svg
            id="storeP1BackgroundAngleCircle"
            xmlns="http://www.w3.org/2000/svg"
            width="27.5"
            height="27.5"
            viewBox="0 0 27.5 27.5"
          >
            <defs>
              <clipPath id="clip-path">
                <rect
                  id="Rectangle_865"
                  data-name="Rectangle 865"
                  width="27.5"
                  height="27.5"
                  transform="translate(235.5 376.5)"
                  fill="none"
                />
              </clipPath>
            </defs>
            <g
              id="Group_688"
              data-name="Group 688"
              transform="translate(-235.5 -376.5)"
              opacity="0.2"
            >
              <g id="Group_687" data-name="Group 687">
                <g
                  id="Group_686"
                  data-name="Group 686"
                  clip-path="url(#clip-path)"
                >
                  <circle
                    id="Ellipse_19"
                    data-name="Ellipse 19"
                    cx="10.25"
                    cy="10.25"
                    r="10.25"
                    transform="translate(239 380)"
                    fill="none"
                    stroke="#595757"
                    stroke-miterlimit="10"
                    stroke-width="7"
                  />
                </g>
              </g>
            </g>
          </svg>

          <img
            id="storeP1BackgroundStep1"
            className="animate__animated animate__slideInDown"
            src="./image/store/cat_tree03.png"
            alt=""
          />
          <img
            id="storeP1BackgroundStep2"
            className="animate__animated animate__slideInDown"
            src="./image/store/cat_tree03.png"
            alt=""
          />
          <img
            id="storeP1BackgroundStep3"
            className="animate__animated animate__slideInDown"
            src="./image/store/cat_tree03.png"
            alt=""
          />
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (store) => {
  return {}
}
const mapDispatchToProps = null
export default connect(mapStateToProps, {})(StoreAnimation)
