import React, { useState, useEffect } from 'react'
import { withRouter, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'

function DonateButton(props) {
  return (
    <>
      <div className="position-fixed donateButtonBlock">
        <div className="donateButtonBlock-1 position-relative">
          <a
            href="##"
            className="donateButton position-absolute d-flex justify-content-center align-items-center hvr-reveal a"
            onClick={() => {
              props.history.push('/donate')
            }}
          >
            捐款
          </a>
          <a
            href="##"
            className="adoptionButton position-absolute d-flex justify-content-center align-items-center hvr-radial-out a"
            onClick={() => {
              props.history.push('/adoptionMain')
            }}
          >
            領養
          </a>
        </div>
      </div>
    </>
  )
}
const mapStateToProps = (store) => {
  return {}
}
const mapDispatchToProps = null

export default withRouter(connect(mapStateToProps, {})(DonateButton))
