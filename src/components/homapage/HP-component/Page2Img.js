import React, { useState, useEffect } from 'react'

function Page2Img(props) {
  return (
    <>
      <div className={props.pag2ImgClass}>
        <img src={props.img}></img>
      </div>
    </>
  )
}

export default Page2Img
