import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Homepage from './Homepage'

function Test(props) {
  useEffect(() => {
    props.setHome(true)
    return () => {
      props.setHome(false)
    }
  }, [])

  return (
    <>
      <Homepage />
    </>
  )
}

const mapStateToProps = (store) => {
  return {}
}
const mapDispatchToProps = null

export default connect(mapStateToProps, {})(Test)
