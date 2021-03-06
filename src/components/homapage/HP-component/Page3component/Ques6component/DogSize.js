import React, { useState, useEffect } from 'react'

function DogSize(props) {
  const { selectToggle } = props
  const iconColorToggle = (x) => {
    const iconSvg = document.querySelector(
      `#root > main > div > div:nth-child(5) > div > div > div:nth-child(6) > div.d-flex.justify-content-center > a:nth-child(${x})`
    ).classList
    if (iconSvg[2] == 'page3pet') {
      iconSvg.remove('page3circle')
      iconSvg.remove('page3pet')
      iconSvg.add('page3circleClick')
      iconSvg.add('page3petClick')
    } else {
      iconSvg.remove('page3circleClick')
      iconSvg.remove('page3petClick')
      iconSvg.add('page3circle')
      iconSvg.add('page3pet')
    }
  }
  return (
    <>
      <div className="d-flex justify-content-center">
        <a
          className="mx-2 page3circle page3pet"
          href="##"
          onClick={() => {
            iconColorToggle(1)
            selectToggle(26)
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="162.472"
            height="155.094"
            viewBox="0 0 162.472 155.094"
          >
            <path
              id="dog_1165191_easyicon.net"
              d="M6.669,128.473s-8.105,32.786,22.473,32.786,33.89-11.42,33.89-11.42,7.737,8.473,12.892,9.577,51.2.368,51.2.368S135.6,148,109.077,146.152c0,0,8.105-12.892,5.158-22.1l6.63-1.1s11.052,29.471,18.418,36.1l15.1.368s4.79-2.211-7.369-11.42-9.577-39.048-7.369-48.625,2.579-32.786-.736-43.838,0-1.843,0-1.843,21,5.158,25.048-7.737c0,0,5.158-2.211,4.051-7,0,0-16.578-7.366-19.525-8.841,0,0-2.211-6.586-8.565-8.933,0,0,2.163-9.165-.644-10.592,0,0-9.945,6.262-10.684,8.105,0,0-.736-10.684-2.579-12.524,0,0-12.524,8.105-11.788,19.525,0,0-17.682,26.524-15.471,44.206,0,0-59.677,22.1-44.942,68.15C53.822,138.05,30.982,148.366,6.669,128.473Z"
              transform="translate(-5.696 -6.165)"
            />
          </svg>
        </a>
        <a
          className="mx-2 page3circle page3pet"
          href="##"
          onClick={() => {
            iconColorToggle(2)
            selectToggle(27)
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="127.286"
            height="121.505"
            viewBox="0 0 127.286 121.505"
          >
            <path
              id="dog_1165191_easyicon.net"
              d="M6.459,101.985S.109,127.67,24.064,127.67s26.55-8.947,26.55-8.947,6.062,6.638,10.1,7.5,40.115.288,40.115.288,6.638-9.235-14.141-10.679c0,0,6.35-10.1,4.041-17.317l5.194-.865s8.659,23.088,14.43,28.282l11.832.288s3.753-1.732-5.773-8.947-7.5-30.591-5.773-38.094,2.021-25.685-.577-34.344,0-1.444,0-1.444,16.45,4.041,19.624-6.062c0,0,4.041-1.732,3.174-5.483,0,0-12.988-5.771-15.3-6.926,0,0-1.732-5.159-6.71-7,0,0,1.695-7.18-.5-8.3,0,0-7.791,4.906-8.37,6.35,0,0-.577-8.37-2.021-9.812,0,0-9.812,6.35-9.235,15.3,0,0-13.853,20.779-12.121,34.632,0,0-46.753,17.315-35.209,53.391C43.4,109.488,25.506,117.57,6.459,101.985Z"
              transform="translate(-5.696 -6.165)"
            />
          </svg>
        </a>
        <a
          className="mx-2 page3circle page3pet"
          href="##"
          onClick={() => {
            iconColorToggle(3)
            selectToggle(28)
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="85.344"
            height="81.469"
            viewBox="0 0 85.344 81.469"
          >
            <path
              id="dog_1165191_easyicon.net"
              d="M6.207,70.412S1.95,87.634,18.012,87.634s17.8-6,17.8-6,4.064,4.451,6.772,5.031,26.9.193,26.9.193S73.934,80.667,60,79.7c0,0,4.258-6.772,2.71-11.611l3.483-.58S72,82.988,75.868,86.471l7.934.193s2.516-1.161-3.871-6S74.9,60.154,76.06,55.123,77.415,37.9,75.673,32.1s0-.968,0-.968,11.03,2.71,13.158-4.064c0,0,2.71-1.161,2.128-3.676,0,0-8.708-3.869-10.257-4.644a8.2,8.2,0,0,0-4.5-4.692s1.136-4.814-.338-5.564c0,0-5.224,3.289-5.612,4.258,0,0-.387-5.612-1.355-6.579,0,0-6.579,4.258-6.192,10.257,0,0-9.288,13.933-8.127,23.221,0,0-31.348,11.61-23.607,35.8C30.976,75.443,18.978,80.862,6.207,70.412Z"
              transform="translate(-5.696 -6.165)"
            />
          </svg>
        </a>
      </div>
    </>
  )
}

export default DogSize
