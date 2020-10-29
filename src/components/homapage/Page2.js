import React, { useState, useEffect } from 'react'

function Page2(props) {
return(
<>
    <div className='d-flex container_w'>
        <div className='d-flex'>
            <div className="page2img  ">
            {/* <img src=""></img> */}
             </div>
             <div className="page2img page2img2">
            {/* <img src=""></img> */}
            </div>
            <div className="page2img page2img3">
            {/* <img src=""></img> */}
            </div>
            <div className="page2desBlock">
                <div className="adopt">
                    <span>Adopt -</span>
                </div>
                <div className="page2des">
                    <span>遇見，命中注定的那個牠</span>
                </div>
                <div className="page2des2">
                    立刻前往
                </div>
                <div>
                <img class="greenarrow-right" src="./018-greenarrow-right.svg"alt=""></img>
                </div>
            </div>
        </div>
    </div>
    <div className="blank2"></div>
</>
)}

export default Page2