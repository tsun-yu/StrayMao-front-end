import React, { useState, useEffect } from 'react'

function Page1Carousel(props) {
  const { img1, img2, img3, img4 } = props
  /*
let newIndex = 0;

setInterval(() => {
  newIndex > 3 && (newIndex = 0);
  a = newIndex * -60;
  document.querySelector(".img-wrap").style.left = a + "vw";
  newIndex++;
}, 1000);*/

  //   const [test, setTest] = useState({})
  useEffect(() => {
    let newIndex = 0

    setInterval(() => {
      newIndex > 3 && (newIndex = 0)
      let slide = newIndex * -60
      document.querySelector('.img-wrap').style.left = slide + 'vw'
      newIndex++
    }, 1000)
  }, [])
  return (
    <>
      <div className="page1right">
        <div class="wrap mx-auto position-relative">
          <div class="d-flex img-wrap position-absolute">
            <img class="bigImg" src={img1} alt="" />
            <img class="bigImg" src={img2} alt="" />
            <img class="bigImg" src={img3} alt="" />
            <img class="bigImg" src={img4} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Page1Carousel
