import React, { useState, useEffect } from 'react'
import Page3Ques1 from './HP-component/Page3component/Page3Ques1'
import Page3Ques2 from './HP-component/Page3component/Page3Ques2'
import Page3Ques3 from './HP-component/Page3component/Page3Ques3'
import Page3Ques4 from './HP-component/Page3component/Page3Ques4'
import Page3Ques5 from './HP-component/Page3component/Page3Ques5'
import Page3Ques6 from './HP-component/Page3component/Page3Ques6'
import Dogsize from './HP-component/Page3component/Ques6component/DogSize'

function Page3(props) {
  const [city, setCity] = useState('')
  const [area, setArea] = useState('縣市')
  const [pet, setPet] = useState(<Dogsize />)

  return (
    <>
      <div>
        <div className="page3bg position-relative ">
          <div className="d-flex page3 position-absolute">
            <Page3Ques1 setPet={setPet} />
            <Page3Ques2 setCity={setCity} setArea={setArea} />
            <Page3Ques3 city={city} area={area} setCity={setCity} />
            <Page3Ques4 />
            <Page3Ques5 />
            <Page3Ques6 pet={pet} />
          </div>
          <ul class="list-unstyled slider-dots position-absolute d-flex justify-content-center w-100">
            <li
              onClick={() =>
                (document.querySelector('.page3').style.left = '0vw')
              }
            ></li>
            <li
              onClick={() =>
                (document.querySelector('.page3').style.left = '-100vw')
              }
            ></li>
            <li
              onClick={() =>
                (document.querySelector('.page3').style.left = '-200vw')
              }
            ></li>
            <li
              className="page3dot "
              onClick={() =>
                (document.querySelector('.page3').style.left = '-300vw')
              }
            ></li>
            <li
              className="page3dot "
              onClick={() =>
                (document.querySelector('.page3').style.left = '-400vw')
              }
            ></li>
            <li
              className="page3dot "
              onClick={() =>
                (document.querySelector('.page3').style.left = '-500vw')
              }
            ></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Page3
