import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import {
  petDisLikeAsync,
  petLikeAsync,
  petLike,
  petInitLikeAsync,
} from '../../actions/adoption/index'
function AdopMainButton(props) {
  useEffect(() => {
    props.petInitLikeAsync(1)
    console.log('like:', props.like)
  }, [])
  let likeBtn = props.like ? (
    <a
      href="##"
      className="buttonRight col"
      onClick={() => {
        props.petDisLikeAsync(1)
        console.log('dislike!!!')
      }}
    >
      <svg className="icon-003-heart">
        <path d="M23.13,9.68l-.68-5.56a.93.93,0,0,0-.35-.61L17.77.19a.89.89,0,0,0-1-.06L11.57,3.28,6.38.13a.91.91,0,0,0-1,.06L1,3.51a.93.93,0,0,0-.35.61L0,9.68a.91.91,0,0,0,.31.8l10.67,9a.91.91,0,0,0,1.16,0l10.66-9A.94.94,0,0,0,23.13,9.68Z"></path>
      </svg>
    </a>
  ) : (
    <a
      href="##"
      className="buttonRight col"
      onClick={() => {
        props.petLikeAsync(1)
        console.log('like!!!')
      }}
    >
      <svg className="icon-002-heart">
        <path d="M23.13,9.68l-.68-5.56a.93.93,0,0,0-.35-.61L17.77.19a.89.89,0,0,0-1-.06L11.57,3.28,6.38.13a.91.91,0,0,0-1,.06L1,3.51a.93.93,0,0,0-.35.61L0,9.68a.91.91,0,0,0,.31.8l10.67,9a.91.91,0,0,0,1.16,0l10.66-9A.94.94,0,0,0,23.13,9.68ZM11.57,17.57,1.86,9.41l.57-4.69L6,2,11.1,5.11a.93.93,0,0,0,.94,0L17.16,2,20.7,4.72l.57,4.69Z"></path>
      </svg>
    </a>
  )
  return (
    <>
      <div className="adopMainButton">
        <div className="buttonGroup d-flex flex-row">
          <a href="##" className="buttonLeft col" onClick={() => {}}>
            <svg className="icon-014-cancel">
              <path d="M12.59,11.34l9.82-9.83a.88.88,0,0,0,0-1.25.9.9,0,0,0-1.22,0l-9.82,9.82L1.51.26A.88.88,0,0,0,.26.26a.88.88,0,0,0,0,1.25l9.82,9.83L.26,21.16a.89.89,0,0,0,1.25,1.26l9.83-9.83,9.82,9.83a.89.89,0,0,0,1.26-1.26Z" />
            </svg>
          </a>
          {likeBtn}
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (store) => {
  return { like: store.adoptReducer.petHeart }
}
const mapDispatchToProps = null

export default connect(mapStateToProps, {
  petDisLikeAsync,
  petLikeAsync,
  petLike,
  petInitLikeAsync,
})(AdopMainButton)
