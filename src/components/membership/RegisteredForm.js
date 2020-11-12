import React, { useState, useEffect } from 'react'
import "../../styles/membership/custom.scss";

function RegisteredForm(props) {

return(
<>
<div className="RegisteredTopic">註冊會員</div>
<div className="memberInfoBackground">
    <form className="infoForm RegisteredForm">
        <div className="wrapFlex1">
            <div className="form-group">
                <label for="infoFormControlFile1" className="viewImg">請上傳個人照片</label>
                <input type="file" className="form-control-file uploadImg" id="infoFormControlFile1"/>
            </div>

            <div className="wrapFlex2 registeredFlex">
                <div className="form-group fgFlex">
                    <label for="infoInputName"><span class="red-stars">**</span>姓&emsp;&emsp;&emsp;名：</label>
                    <input type="text" className="form-control infoInput1" id="infoInputName" placeholder="Enter name" required/>
                    <small class="form-text error-msg"></small>
                </div>
    
                <div className="form-group fgFlex registeredBirthday">
                    <label for="infoInputBirthday">出生年月日：</label>
                    <input type="date" className="form-control infoInput1" id="infoInputBirthday" placeholder="Enter birthday"/>
                </div>
  
                <div className="form-group fgFlex">
                    <label for="infoInputMobile"><span class="red-stars">**</span>行&nbsp;動&nbsp;電&nbsp;話：</label>
                    <input type="text" className="form-control infoInput1" id="infoInputMobile" placeholder="Enter mobile" pattern="09\d{2}-?\d{3}-?\d{3}" required/>
                    <br/>
                    <small id="mobileHelp" className="form-text text-muted inputTip">請輸入格式09xx-xxx-xxx</small>
                    <small class="form-text error-msg"></small>
                </div>
                <div className="form-group fgFlex">
                    <label for="infoInputTelephone"><span class="red-stars">**</span>連&nbsp;絡&nbsp;電&nbsp;話：</label>
                    <input type="text" className="form-control infoInput1" id="infoInputTelephone" placeholder="Enter telephone" pattern="d{2}-\d{4}-\d{4}"/>
                    <br/>
                    <small id="mobileHelp" className="form-text text-muted inputTip">請輸入格式xx-xxxx-xxxx</small>
                    <small class="form-text error-msg"></small>
                </div>
            </div>
        </div>

            <div className="wrapFlex2">
                <div className="form-group fgFlex">
                    <label for="infoInputEmail1"><span class="red-stars">**</span>電&nbsp;子&nbsp;信&nbsp;箱：</label>
                    <input type="email" className="form-control infoInput2" id="infoInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required/>
                    <small class="form-text error-msg"></small>
                </div>

                <div className="form-group fgFlex registeredAddress">
                    <label for="infoInputAddress">連&nbsp;絡&nbsp;地&nbsp;址：</label>
                    <textarea className="form-control infoInput2" id="infoInputAddress" rows="3"></textarea>
                </div>
            </div>

            <div className="wrapFlex3 registeredFlex">
                <div className="form-group fgFlex">
                    <label for="exampleInputPassword1"><span class="red-stars">**</span>請輸入密碼：</label>
                    <input type="password" className="form-control infoInput" id="exampleInputPassword1" placeholder="Password" required/>
                    <br/>
                    <small id="mobileHelp" className="form-text text-muted inputTip">請輸入至少6碼英數大小寫</small>
                    <small class="form-text error-msg"></small>
                </div>

                <div className="form-group fgFlex registeredPassword">
                    <label for="exampleInputPassword1"><span class="red-stars">**</span>再輸入一次密碼：</label>
                    <input type="password" className="form-control infoInput" id="exampleInputPassword1" placeholder="Password" required/>
                    <small class="form-text error-msg"></small>
                </div>
            </div>
            <div className="btn-group registeredInfoTop" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-primary memberBtnLeft">取消註冊&nbsp;&lt;回首頁&gt;</button>
                <button type="button" className="btn btn-primary memberBtnRight">確認送出</button>
            </div>
    </form>
</div>
</>
)}

export default RegisteredForm