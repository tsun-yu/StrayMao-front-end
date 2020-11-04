import React, { useState, useEffect } from 'react'
import Page3Ques1 from './HP-component/Page3component/Page3Ques1'
import Page3Ques2 from './HP-component/Page3component/Page3Ques2'
import Page3Ques3 from './HP-component/Page3component/Page3Ques3'
import Page3Ques4 from './HP-component/Page3component/Page3Ques4'

function Page3(props) {
  const [city, setCity] = useState('')
  return (
    <>
      <div>
        <div className="page3bg position-relative">
          <div className="d-flex page3 position-absolute">
            {/* <Page3Ques1 />
            <Page3Ques2 setCity={setCity} />
            <Page3Ques3 city={city} /> */}
            <Page3Ques4 />
          </div>
        </div>
      </div>
    </>
  )
}

export default Page3
