import React, { useState, useEffect } from 'react'
import "../../styles/cart/orderlist.scss";

function storepage(props) {
return(
<>
<div class="body_An">
<div class="container">
    <div class="classificationBox_An">
        <div class="classification_An">
            <a href="#">近三個月內的訂單</a>
            <span> / </span>
            <a href="#">全部訂單</a>
        </div>
        <div class="btn-filter_An">
            <button class="filterbtn_An">
                <span>排序 <i class="fas fa-caret-down"></i></span>
            </button>
            <div class="btn-filter-content_An">
              <a href="#">由新到舊</a>
              <a href="#">由舊到新</a>
            </div>
        </div>
    </div>
    <div class="box_An mx-5 mb-3 px-5 py-4 d-flex justify-content-between">
        <div class="boxL_An">
            <span class="orderDate_An">2020/07/13</span>
        </div>
        <div class="boxM_An my-4">
            <div class="item_An d-flex justify-content-between">
                <span class="goodsName_An">Farmina 法米納獸醫寵愛天然配方-貓用腸胃道 5kg</span>
                <span class="quantity_An">數量：1</span>
            </div>
            <div class="item_An d-flex justify-content-between">
                <span class="goodsName_An">Farmina 法米納獸醫寵愛天然配方-貓用腸胃道 5kg</span>
                <span class="quantity_An">數量：1</span>
            </div>
            <div class="item_An d-flex justify-content-between">
                <span class="goodsName_An">Farmina 法米納獸醫寵愛天然配方-貓用腸胃道 5kg</span>
                <span class="quantity_An">數量：1</span>
            </div>
        </div>
        <div class="boxR_An">
            <a href="#">查看更多</a>
        </div>
    </div>
    <div class="box_An mx-5 mb-3 px-5 py-4 d-flex justify-content-between">
        <div class="boxL_An">
            <span class="orderDate_An">2020/07/13</span>
        </div>
        <div class="boxM_An my-4">
            <div class="item_An d-flex justify-content-between">
                <span class="goodsName_An">Farmina 法米納獸醫寵愛天然配方-貓用腸胃道 5kg</span>
                <span class="quantity_An">數量：1</span>
            </div>
            <div class="item_An d-flex justify-content-between">
                <span class="goodsName_An">Farmina 法米納獸醫寵愛天然配方-貓用腸胃道 5kg</span>
                <span class="quantity_An">數量：1</span>
            </div>
            <div class="item_An d-flex justify-content-between">
                <span class="goodsName_An">Farmina 法米納獸醫寵愛天然配方-貓用腸胃道 5kg</span>
                <span class="quantity_An">數量：1</span>
            </div>
        </div>
        <div class="boxR_An">
            <a href="#">查看更多</a>
        </div>
    </div>
    <div class="box_An mx-5 mb-3 px-5 py-4 d-flex justify-content-between">
        <div class="boxL_An">
            <span class="orderDate_An">2020/07/13</span>
        </div>
        <div class="boxM_An my-4">
            <div class="item_An d-flex justify-content-between">
                <span class="goodsName_An">Farmina 法米納獸醫寵愛天然配方-貓用腸胃道 5kg</span>
                <span class="quantity_An">數量：1</span>
            </div>
            <div class="item_An d-flex justify-content-between">
                <span class="goodsName_An">Farmina 法米納獸醫寵愛天然配方-貓用腸胃道 5kg</span>
                <span class="quantity_An">數量：1</span>
            </div>
            <div class="item_An d-flex justify-content-between">
                <span class="goodsName_An">Farmina 法米納獸醫寵愛天然配方-貓用腸胃道 5kg</span>
                <span class="quantity_An">數量：1</span>
            </div>
        </div>
        <div class="boxR_An">
            <a href="#">查看更多</a>
        </div>
    </div>
    <div class="box_An mx-5 mb-3 px-5 py-4 d-flex justify-content-between">
        <div class="boxL_An">
            <span class="orderDate_An">2020/07/13</span>
        </div>
        <div class="boxM_An my-4">
            <div class="item_An d-flex justify-content-between">
                <span class="goodsName_An">Farmina 法米納獸醫寵愛天然配方-貓用腸胃道 5kg</span>
                <span class="quantity_An">數量：1</span>
            </div>
            <div class="item_An d-flex justify-content-between">
                <span class="goodsName_An">Farmina 法米納獸醫寵愛天然配方-貓用腸胃道 5kg</span>
                <span class="quantity_An">數量：1</span>
            </div>
            <div class="item_An d-flex justify-content-between">
                <span class="goodsName_An">Farmina 法米納獸醫寵愛天然配方-貓用腸胃道 5kg</span>
                <span class="quantity_An">數量：1</span>
            </div>
        </div>
        <div class="boxR_An">
            <a href="#">查看更多</a>
        </div>
    </div>
    <div class="box_An mx-5 mb-3 px-5 py-4 d-flex justify-content-between">
        <div class="boxL_An">
            <span class="orderDate_An">2020/07/13</span>
        </div>
        <div class="boxM_An my-4">
            <div class="item_An d-flex justify-content-between">
                <span class="goodsName_An">Farmina 法米納獸醫寵愛天然配方-貓用腸胃道 5kg</span>
                <span class="quantity_An">數量：1</span>
            </div>
            <div class="item_An d-flex justify-content-between">
                <span class="goodsName_An">Farmina 法米納獸醫寵愛天然配方-貓用腸胃道 5kg</span>
                <span class="quantity_An">數量：1</span>
            </div>
            <div class="item_An d-flex justify-content-between">
                <span class="goodsName_An">Farmina 法米納獸醫寵愛天然配方-貓用腸胃道 5kg</span>
                <span class="quantity_An">數量：1</span>
            </div>
        </div>
        <div class="boxR_An">
            <a href="#">查看更多</a>
        </div>
    </div>
    <div class="box_An mx-5 mb-3 px-5 py-4 d-flex justify-content-between">
        <div class="boxL_An">
            <span class="orderDate_An">2020/07/13</span>
        </div>
        <div class="boxM_An my-4">
            <div class="item_An d-flex justify-content-between">
                <span class="goodsName_An">Farmina 法米納獸醫寵愛天然配方-貓用腸胃道 5kg</span>
                <span class="quantity_An">數量：1</span>
            </div>
            <div class="item_An d-flex justify-content-between">
                <span class="goodsName_An">Farmina 法米納獸醫寵愛天然配方-貓用腸胃道 5kg</span>
                <span class="quantity_An">數量：1</span>
            </div>
            <div class="item_An d-flex justify-content-between">
                <span class="goodsName_An">Farmina 法米納獸醫寵愛天然配方-貓用腸胃道 5kg</span>
                <span class="quantity_An">數量：1</span>
            </div>
        </div>
        <div class="boxR_An">
            <a href="#">查看更多</a>
        </div>
    </div>
</div>
</div>
</>
)}

export default storepage