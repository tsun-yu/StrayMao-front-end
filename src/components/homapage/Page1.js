import React, { useState, useEffect } from 'react'

function Page1(props) {
return(
<>
<div className="d-flex container_w">
    <div className="page1Sec1">
        <div className="page1des">
        Love them likes <br/>
        family.
        </div>
        <div className="page1des2 page1des3 d-flex flex-column justify-content-around">
            <div className="hide">fuck</div>
            <div>給他們一個機會, 擁有一個家。</div>
            <div className="page1des4 mr-2">>了解更多</div>
        </div>
    </div>
    <div className="imgDiv">
        <img className="bigImg" src="/image/homepage/homepage-1.jpg"/>
    </div>
</div>
<div className="blank1"></div>
</>
)}

export default Page1