import React, { useState, useEffect } from 'react'
import Page3Ques1 from './HP-component/Page3component/Page3Ques1'
import Page3Ques2 from './HP-component/Page3component/Page3Ques2'
import Page3Ques3 from './HP-component/Page3component/Page3Ques3'
import Page3Ques4 from './HP-component/Page3component/Page3Ques4'
import Page3Ques5 from './HP-component/Page3component/Page3Ques5'
import Page3Ques6 from './HP-component/Page3component/Page3Ques6'
import Dogsize from './HP-component/Page3component/Ques6component/DogSize'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

function Page3(props) {
  const [city, setCity] = useState('')
  const [area, setArea] = useState('縣市')
  const [pet, setPet] = useState(<Dogsize />)
  const switchColor = (x) => {
    x.style.color === 'rgb(203, 153, 126)'
      ? (x.style.color = '#fff1e6')
      : (x.style.color = '#cb997e')
    x.style.border === '0.125rem solid rgb(203, 153, 126)'
      ? (x.style.border = '#fff1e6 solid 0.125rem')
      : (x.style.border = '#cb997e solid 0.125rem')
  }

  return (
    <>
      <div>
        <div className="page3bg position-relative ">
          <div className="position-absolute d-flex flex-column justify-content-center forward">
            <IoIosArrowForward size="4rem" color=" #fff1e6" />
            <div>下一頁</div>
          </div>
          <div className="d-flex page3 position-absolute">
            <Page3Ques1 setPet={setPet} />
            <Page3Ques2
              setCity={setCity}
              setArea={setArea}
              switchColor={switchColor}
            />
            <Page3Ques3 city={city} area={area} setCity={setCity} />
            <Page3Ques4 />
            <Page3Ques5 switchColor={switchColor} />
            <Page3Ques6 pet={pet} />
          </div>
          <ul className="list-unstyled slider-dots position-absolute d-flex justify-content-center w-100">
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
