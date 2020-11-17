import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import Page4 from './Page4'
import Page5 from './Page5'
import Page6 from './Page6'

function Homepage(props) {
  useEffect(() => {
    props.setHome(true)
    return () => {
      props.setHome(false)
    }
  }, [])

  return (
    <>
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
    </>
  )
}

const mapStateToProps = (store) => {
  return {}
}
const mapDispatchToProps = null

export default connect(mapStateToProps, {})(Homepage)
