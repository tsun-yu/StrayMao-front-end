import React, { useEffect, useState } from 'react'
import '../../styles/store/straymao.scss'
import { connect } from 'react-redux'

function StoreCart(props) {
  return (
    <>
      <div className="icon2 d-flex">
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20.793"
            height="21.442"
            viewBox="0 0 20.793 21.442"
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
                transform="translate(5.768 16.481)"
                fill="#fffffd"
                stroke="#ed8f8f"
                stroke-width="1"
              />
              <path
                id="Path_1085"
                data-name="Path 1085"
                d="M268.477,324.1h0a1.98,1.98,0,1,0,1.98,1.98A1.98,1.98,0,0,0,268.477,324.1Z"
                transform="translate(-252.682 -307.617)"
                fill="#fffffd"
                stroke="#ed8f8f"
                stroke-width="1"
              />
              <path
                id="Path_1086"
                data-name="Path 1086"
                d="M25.949,14.086h-12.6L13.1,12.554H23.459a.742.742,0,0,0,.69-.5l2.466-6.66A.812.812,0,0,0,26.2,4.363a.7.7,0,0,0-.273-.055H11.82L11.228.66A.756.756,0,0,0,10.488,0H7.653a.768.768,0,0,0-.74.793.768.768,0,0,0,.74.793H9.872l2.121,13.426a.756.756,0,0,0,.74.661H25.949a.795.795,0,0,0,0-1.586Z"
                transform="translate(-6.913 0.001)"
                fill="#fffffd"
                stroke="#ed8f8f"
                stroke-width="1"
              />
            </g>
          </svg>
        </a>
      </div>
    </>
  )
}

const mapStateToProps = (store) => {
  return {}
}
const mapDispatchToProps = null
export default connect(mapStateToProps, {})(StoreCart)
