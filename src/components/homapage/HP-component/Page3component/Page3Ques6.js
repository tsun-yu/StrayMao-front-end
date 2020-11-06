import React, { useState, useEffect } from 'react'
import Page3Topic from './Page3Topic'
import DogSize from './Ques6component/DogSize'
import CatSize from './Ques6component/CatSize'

function Page3Ques6(props) {
  const { pet } = props
  return (
    <>
      <div className="page3single ">
        <Page3Topic title="體型" />
        {pet}
      </div>
    </>
  )
}

export default Page3Ques6
