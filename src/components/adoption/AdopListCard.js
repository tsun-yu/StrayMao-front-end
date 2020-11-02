import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
function AdoptListCard(props) {
  return (
    <>
      <div className="card_new adoptListCard">
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
        <div className="img adoptListCardImg">
          <img src="/image/adoption/main-01.jpg" alt="鮮肉煲罐頭" />
        </div>

        <div className="adopListInfo">
          <p className="paragraph1">
            肉包 <span className="paragraph2"> 3 年 2 週</span>
          </p>
          <span className="paragraph2">台北 ,黑毛 </span>
          <a className="paragraph2">Read More</a>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (store) => {
  return {}
}
const mapDispatchToProps = null

export default connect(mapStateToProps, {})(AdoptListCard)
