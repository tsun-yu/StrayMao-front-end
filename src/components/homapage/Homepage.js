import React, { useState, useEffect } from 'react'
import HomeNavbar from './HP-component/HomeNavbar'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import Page4 from './Page4'
import Page5 from './Page5'
import Page6 from './Page6'

function homepage(props) {
  return (
    <>
      <HomeNavbar />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
    </>
  )
}

export default homepage
