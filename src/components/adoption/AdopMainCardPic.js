<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
=======
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
>>>>>>> 6264cc9997f0a3182b1f9b7767d88642000ac679

function AdopMainCardPic(props) {
  return (
    <>
      <div className="adoptionMainCardPicture">
        <img
          className=""
          src={
            props.info.pic === null
              ? "/image/adoption/main-01.jpg"
              : props.info.pic
          }
        />
        {props.children}
      </div>
    </>
  )
}

const mapStateToProps = (store) => {
  return {}
}
const mapDispatchToProps = null

export default connect(mapStateToProps, {})(AdopMainCardPic)
