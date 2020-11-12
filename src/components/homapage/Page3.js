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
  const [dot, setDot] = useState(1)
  const [city, setCity] = useState('')
  const [area, setArea] = useState('縣市')
  const [pet, setPet] = useState(<Dogsize />)
  const [select, setSelect] = useState([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
  ])

  const switchColor = (x) => {
    x.style.color === 'rgb(203, 153, 126)'
      ? (x.style.color = '#fff1e6')
      : (x.style.color = '#cb997e')
    x.style.border === '0.125rem solid rgb(203, 153, 126)'
      ? (x.style.border = '#fff1e6 solid 0.125rem')
      : (x.style.border = '#cb997e solid 0.125rem')
  }
  const backpage = () => {
    switch (dot) {
      case 2:
        document.querySelector('.page3').style.left = 0
        setDot(1)
        document.querySelector('.back').style.visibility = 'hidden'
        break
      case 3:
        document.querySelector('.page3').style.left = '-100vw'
        setDot(2)
        break
      case 4:
        document.querySelector('.page3').style.left = '-200vw'
        setDot(3)
        break
      case 5:
        document.querySelector('.page3').style.left = '-300vw'
        setDot(4)
        break
      case 6:
        document.querySelector('.page3').style.left = '-400vw'
        setDot(5)
        document.querySelector('.forward').style.visibility = 'visible'
        break
    }
  }
  const nextpage = () => {
    switch (dot) {
      case 1:
        document.querySelector('.page3').style.left = '-100vw'
        setDot(2)
        document.querySelector('.back').style.visibility = 'visible'
        break
      case 2:
        document.querySelector('.page3').style.left = '-200vw'
        setDot(3)
        break
      case 3:
        document.querySelector('.page3').style.left = '-300vw'
        setDot(4)
        break
      case 4:
        document.querySelector('.page3').style.left = '-400vw'
        setDot(5)
        break
      case 5:
        document.querySelector('.page3').style.left = '-500vw'
        setDot(6)
        document.querySelector('.forward').style.visibility = 'hidden'
        break
    }
  }
  const arrowToggle = () => {
    document.querySelector('.back').style.visibility == 'hidden' &&
      (document.querySelector('.back').style.visibility = 'visible')
    document.querySelector('.forward').style.visibility == 'hidden' &&
      (document.querySelector('.forward').style.visibility = 'visible')
  }
  const selectToggle = (i) => {
    select[i] == 1 ? (select[i] = 0) : (select[i] = 1)
    if (i == 0) {
      if ((select[0] == select[1]) == 1) {
        select[1] = 0
      }
    } else if ((i = 1)) {
      if ((select[0] == select[1]) == 1) {
        select[0] = 0
      }
    }
    console.log(select)
  }

  const selectToggle4catdog = (i) => {
    if (i == 0) {
      if (select[1] == 1) {
        select[0] = 1
        select[1] = 0
      } else {
        select[0] = 0
        select[1] = 1
      }
    }
    console.log(select)
  }

  //connect DB
  const postDB = async (select) => {
    const url = 'http://localhost:3001/straymao/homepage/question'
    const data = { arr: select }
    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    try {
      const response = await fetch(request)
      const data = await response.json()
      // data會是一個物件值
      await console.log(data)
    } catch (error) {
      //setError(error)
    }
  }

  // dot
  useEffect(() => {
    document
      .querySelectorAll('#root > main > div > div:nth-child(5) > div > ul > li')
      .forEach((e) => {
        e.style.backgroundColor = 'rgba(255, 255, 255, 0.6)'
      })
    document.querySelector(
      `#root > main > div > div:nth-child(5) > div > ul > li:nth-child(${dot})`
    ).style.backgroundColor = 'rgba(203, 153, 126, 1)'
  }, [dot])
  return (
    <>
      <div>
        <div className="page3bg position-relative ">
          {/* back */}
          <a href="##">
            <div
              className="position-absolute d-flex flex-column justify-content-center align-items-center back"
              style={{ visibility: 'hidden' }}
              onClick={() => {
                backpage()
              }}
            >
              <IoIosArrowBack size="4rem" color=" #fff1e6" />
              <div className="arrow">上一頁</div>
            </div>
          </a>
          {/* forward */}
          <a href="##">
            <div
              className="forward position-absolute d-flex flex-column justify-content-center align-items-center forward forward"
              onClick={() => {
                console.log('12345')
                nextpage()
              }}
            >
              <IoIosArrowForward size="4rem" color=" #fff1e6" />
              <div className="arrow">下一頁</div>
            </div>
          </a>
          {/* content */}
          <div className="d-flex page3 position-absolute" style={{ left: 0 }}>
            <Page3Ques1
              setPet={setPet}
              setDot={setDot}
              selectToggle={selectToggle}
              selectToggle4catdog={selectToggle4catdog}
            />
            <Page3Ques2
              setCity={setCity}
              setArea={setArea}
              switchColor={switchColor}
              setDot={setDot}
              selectToggle={selectToggle}
            />
            <Page3Ques3 city={city} area={area} setCity={setCity} />
            <Page3Ques4 setDot={setDot} selectToggle={selectToggle} />
            <Page3Ques5 switchColor={switchColor} selectToggle={selectToggle} />
            <Page3Ques6 pet={pet} selectToggle={selectToggle} select={select} />
          </div>
          {/* dots */}
          <ul className="list-unstyled slider-dots position-absolute d-flex justify-content-center w-100">
            <li
              onClick={(e) => {
                document.querySelector('.page3').style.left = '0vw'
                setDot(1)
                document.querySelector('.back').style.visibility = 'hidden'
                document.querySelector('.forward').style.visibility = 'visible'
              }}
            ></li>
            <li
              onClick={() => {
                document.querySelector('.page3').style.left = '-100vw'
                setDot(2)
                arrowToggle()
              }}
            ></li>
            <li
              onClick={() => {
                document.querySelector('.page3').style.left = '-200vw'
                setDot(3)
                arrowToggle()
              }}
            ></li>
            <li
              onClick={() => {
                document.querySelector('.page3').style.left = '-300vw'
                setDot(4)
                arrowToggle()
              }}
            ></li>
            <li
              onClick={() => {
                document.querySelector('.page3').style.left = '-400vw'
                setDot(5)
                arrowToggle()
              }}
            ></li>
            <li
              onClick={() => {
                document.querySelector('.page3').style.left = '-500vw'
                setDot(6)
                document.querySelector('.forward').style.visibility = 'hidden'
                document.querySelector('.back').style.visibility = 'visible'
              }}
            ></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Page3
