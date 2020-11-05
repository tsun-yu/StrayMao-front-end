import React, { useState, useEffect } from 'react'
import Page3Ques1 from './HP-component/Page3component/Page3Ques1'
import Page3Ques2 from './HP-component/Page3component/Page3Ques2'
import Page3Ques3 from './HP-component/Page3component/Page3Ques3'
import Page3Ques4 from './HP-component/Page3component/Page3Ques4'
import Page3Ques5 from './HP-component/Page3component/Page3Ques5'

function Page3(props) {
  const [city, setCity] = useState('')
  const [area, setArea] = useState('')

  return (
    <>
      <div>
        <div className="page3bg position-relative ">
          <div className="d-flex page3 position-absolute">
            <Page3Ques1 />
            <Page3Ques2 setCity={setCity} setArea={setArea} />
            <Page3Ques3 city={city} area={area} setCity={setCity} />
            <Page3Ques4 />
            <Page3Ques5 />
          </div>
          <div className="d-flex position-absolute page3dots">
            <div
              className="page3dot "
              onClick={() =>
                (document.querySelector('.page3').style.left = '0vw')
              }
            ></div>
            <div
              className="page3dot "
              onClick={() =>
                (document.querySelector('.page3').style.left = '-100vw')
              }
            ></div>
            <div
              className="page3dot "
              onClick={() =>
                (document.querySelector('.page3').style.left = '-200vw')
              }
            ></div>
            <div
              className="page3dot "
              onClick={() =>
                (document.querySelector('.page3').style.left = '-300vw')
              }
            ></div>
            <div
              className="page3dot "
              onClick={() =>
                (document.querySelector('.page3').style.left = '-400vw')
              }
            ></div>
            <div
              className="page3dot "
              onClick={() =>
                (document.querySelector('.page3').style.left = '-500vw')
              }
            ></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page3
