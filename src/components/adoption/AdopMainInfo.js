import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

function AdopMainInfo(props) {
  return (
    <>
      <div className="adoptionMainInfo d-flex flex-column align-item-center justify-content-center pt-5">
        <div className="d-flex flex-row mx-auto">
          <svg
            className="my-auto"
            xmlns="http://www.w3.org/2000/svg"
            width="50.383"
            height="2.18"
            viewBox="0 0 50.383 2.18"
          >
            <path
              id="Path_1874"
              data-name="Path 1874"
              d="M0,0,13.381.048l16,.057L50.376.18"
              transform="translate(0.004 1)"
              fill="none"
              stroke="#ed8f8f"
              strokeWidth="2"
            />
          </svg>
          <div className="heade4 mx-3">毛孩簡介</div>
          <svg
            className="my-auto"
            xmlns="http://www.w3.org/2000/svg"
            width="50.383"
            height="2.18"
            viewBox="0 0 50.383 2.18"
          >
            <path
              id="Path_1874"
              data-name="Path 1874"
              d="M0,0,13.381.048l16,.057L50.376.18"
              transform="translate(0.004 1)"
              fill="none"
              stroke="#ed8f8f"
              strokeWidth="2"
            />
          </svg>
        </div>
        <div className="d-flex flex-row mx-auto mt-5">
          <ul className="adoptListStyleNone paragraph1 ">
            <li className="mt-2">
              名字：<span>{props.info.name}</span>
            </li>
            <li className="mt-2">
              性別：<span>{props.info.gender}</span>
            </li>
            <li className="mt-2">
              年齡：<span>{props.info.age}</span>
            </li>
            <li className="mt-2">
              地點：<span>{props.info.area}</span>
            </li>
            <li className="mt-2">
              介紹：<span>{props.info.des}</span>
            </li>
          </ul>
        </div>
        {props.children}
      </div>
    </>
  )
}

const mapStateToProps = (store) => {
  return {}
}
const mapDispatchToProps = null

export default connect(mapStateToProps, {})(AdopMainInfo)
