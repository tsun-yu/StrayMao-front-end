import React, { useState, useEffect } from 'react'
import "../../styles/membership/custom.scss";

function Page1(props) {
return(
<>
<div className="petAreaWrap">
    <nav className="nav nav-pills flex-column flex-sm-row">
        <a className="flex-sm-fill text-sm-center nav-link petAreaNav active" href="#">關注寵物清單</a>
        <a className="flex-sm-fill text-sm-center nav-link petAreaNav" href="#">線上領養查詢</a>
        <a className="flex-sm-fill text-sm-center nav-link petAreaNav" href="#">認/領&emsp;養紀錄</a>
        <a class="flex-sm-fill text-sm-center nav-link disabled" href="#" tabindex="-1" aria-disabled="true"></a>
        <a class="flex-sm-fill text-sm-center nav-link disabled" href="#" tabindex="-1" aria-disabled="true"></a>
        <a class="flex-sm-fill text-sm-center nav-link disabled" href="#" tabindex="-1" aria-disabled="true"></a>
        <a class="flex-sm-fill text-sm-center nav-link disabled" href="#" tabindex="-1" aria-disabled="true"></a>
    </nav>
    <div className="petAreaBackgroud">
        <div className="petCard">
            <img className="petImg" src="./image/membership/cat1.jpg" alt="pet image" />
            <div className="petDetail">
                <a href="#">詳細資訊</a>
            </div>
        </div>
    </div>
</div>
</>
)}

export default Page1