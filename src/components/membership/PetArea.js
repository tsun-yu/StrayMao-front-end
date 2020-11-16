import React, { useState, useEffect } from 'react'
import "../../styles/membership/custom.scss";

function PetArea(props) {
return(
<>
<div className="petAreaWrap">
    <nav className="nav nav-pills flex-sm-row petAreaNavGroup">
        <a className="flex-sm-fill text-sm-center nav-link petAreaNav active" href="#">關注寵物清單</a>
        <a className="flex-sm-fill text-sm-center nav-link petAreaNav" href="#">線上領養查詢</a>
        <a className="flex-sm-fill text-sm-center nav-link petAreaNav" href="#">認/領&emsp;養紀錄</a>
        <a className="flex-sm-fill text-sm-center nav-link disabled" href="#" tabIndex="-1" aria-disabled="true"></a>
        <a className="flex-sm-fill text-sm-center nav-link disabled" href="#" tabIndex="-1" aria-disabled="true"></a>
        <a className="flex-sm-fill text-sm-center nav-link disabled" href="#" tabIndex="-1" aria-disabled="true"></a>
        <a className="flex-sm-fill text-sm-center nav-link disabled" href="#" tabIndex="-1" aria-disabled="true"></a>
    </nav>
    <div className="container petAreaBackgroud">
        <div className="row">
            <div className="col petCard">
                <img className="petImg" src="../image/membership/cat1.jpg" alt="pet image" />
                <div className="petDetail">
                <a className="aStyle" href="#">詳細資訊</a>
                </div>
            </div>
            <div className="col petCard">
                <img className="petImg" src="../image/membership/cat2.jpg" alt="pet image" />
                <div className="petDetail">
                <a className="aStyle" href="#">詳細資訊</a>
                </div>
            </div>
            <div className="col petCard">
                <img className="petImg" src="../image/membership/cat1.jpg" alt="pet image" />
                <div className="petDetail">
                <a className="aStyle" href="#">詳細資訊</a>
                </div>
            </div>
            <div className="col petCard">
                <img className="petImg" src="../image/membership/dog1.jpg" alt="pet image" />
                <div className="petDetail">
                <a className="aStyle" href="#">詳細資訊</a>
                </div>
            </div>
            <div className="col petCard">
                <img className="petImg" src="../image/membership/dog2.jpg" alt="pet image" />
                <div className="petDetail">
                <a className="aStyle" href="#">詳細資訊</a>
                </div>
            </div>
            <div className="col petCard">
                <img className="petImg" src="../image/membership/dog1.jpg" alt="pet image" />
                <div className="petDetail">
                <a className="aStyle" href="#">詳細資訊</a>
                </div>
            </div>
        </div>
    </div>
</div>

<div className="petAreaWrap">
    <nav className="nav nav-pills flex-sm-row petAreaNavGroup">
        <a className="flex-sm-fill text-sm-center nav-link petAreaNav" href="#">關注寵物清單</a>
        <a className="flex-sm-fill text-sm-center nav-link petAreaNav active" href="#">線上領養查詢</a>
        <a className="flex-sm-fill text-sm-center nav-link petAreaNav" href="#">認/領&emsp;養紀錄</a>
        <a className="flex-sm-fill text-sm-center nav-link disabled" href="#" tabIndex="-1" aria-disabled="true"></a>
        <a className="flex-sm-fill text-sm-center nav-link disabled" href="#" tabIndex="-1" aria-disabled="true"></a>
        <a className="flex-sm-fill text-sm-center nav-link disabled" href="#" tabIndex="-1" aria-disabled="true"></a>
        <a className="flex-sm-fill text-sm-center nav-link disabled" href="#" tabIndex="-1" aria-disabled="true"></a>
    </nav>
    <div className="container petAreaBackgroud">
        <div className="row">
            <div className="col petCard">
                <img className="petImg" src="./image/membership/cat1.jpg" alt="pet image" />
                <div className="petDetail">
                <a className="aStyle" href="#">詳細資訊</a>
                </div>
            </div>
            <div className="col petCard">
                <img className="petImg" src="./image/membership/cat2.jpg" alt="pet image" />
                <div className="petDetail">
                <a className="aStyle" href="#">詳細資訊</a>
                </div>
            </div>
            <div className="col petCard">
                <img className="petImg" src="./image/membership/cat1.jpg" alt="pet image" />
                <div className="petDetail">
                <a className="aStyle" href="#">詳細資訊</a>
                </div>
            </div>
            <div className="col petCard">
                <img className="petImg" src="./image/membership/dog1.jpg" alt="pet image" />
                <div className="petDetail">
                <a className="aStyle" href="#">詳細資訊</a>
                </div>
            </div>
            <div className="col petCard">
                <img className="petImg" src="./image/membership/dog2.jpg" alt="pet image" />
                <div className="petDetail">
                <a className="aStyle" href="#">詳細資訊</a>
                </div>
            </div>
            <div className="col petCard">
                <img className="petImg" src="./image/membership/dog1.jpg" alt="pet image" />
                <div className="petDetail">
                <a className="aStyle" href="#">詳細資訊</a>
                </div>
            </div>
        </div>
    </div>
</div>

<div className="petAreaWrap">
    <nav className="nav nav-pills flex-sm-row petAreaNavGroup">
        <a className="flex-sm-fill text-sm-center nav-link petAreaNav" href="#">關注寵物清單</a>
        <a className="flex-sm-fill text-sm-center nav-link petAreaNav" href="#">線上領養查詢</a>
        <a className="flex-sm-fill text-sm-center nav-link petAreaNav active" href="#">認/領&emsp;養紀錄</a>
        <a class="flex-sm-fill text-sm-center nav-link disabled" href="#" tabIndex="-1" aria-disabled="true"></a>
        <a class="flex-sm-fill text-sm-center nav-link disabled" href="#" tabIndex="-1" aria-disabled="true"></a>
        <a class="flex-sm-fill text-sm-center nav-link disabled" href="#" tabIndex="-1" aria-disabled="true"></a>
        <a class="flex-sm-fill text-sm-center nav-link disabled" href="#" tabIndex="-1" aria-disabled="true"></a>
    </nav>
    <div className="container petAreaBackgroud">
        <div className="col petCard">
            <img className="petImg" src="./image/membership/cat1.jpg" alt="pet image" />
            <div className="petDetail">
            <a className="aStyle" href="#">詳細資訊</a>
            </div>
        </div>
        <div className="col petCard">
            <img className="petImg" src="./image/membership/cat2.jpg" alt="pet image" />
            <div className="petDetail">
            <a className="aStyle" href="#">詳細資訊</a>
            </div>
        </div>
        <div className="col petCard">
            <img className="petImg" src="./image/membership/cat1.jpg" alt="pet image" />
            <div className="petDetail">
            <a className="aStyle" href="#">詳細資訊</a>
            </div>
        </div>
        <div className="col petCard">
            <img className="petImg" src="./image/membership/dog1.jpg" alt="pet image" />
            <div className="petDetail">
            <a className="aStyle" href="#">詳細資訊</a>
            </div>
        </div>
        <div className="col petCard">
            <img className="petImg" src="./image/membership/dog2.jpg" alt="pet image" />
            <div className="petDetail">
            <a className="aStyle" href="#">詳細資訊</a>
            </div>
        </div>
        <div className="col petCard">
            <img className="petImg" src="./image/membership/dog1.jpg" alt="pet image" />
            <div className="petDetail">
            <a className="aStyle" href="#">詳細資訊</a>
            </div>
        </div>
    </div>
</div>
</>
)}

export default PetArea