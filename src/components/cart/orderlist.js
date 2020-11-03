import React, { useState, useEffect } from 'react'
import "../../styles/cart/orderlist.scss";

function storepage(props) {
return(
<>
<div class="orderlistC_body_An">
<div class="container">
    <div class="orderlistC_classificationBox_An">
        <div class="orderlistC_classification_An">
            <a href="#">近三個月內的訂單</a>
            <span> / </span>
            <a href="#">全部訂單</a>
        </div>
        <div class="orderlistC_btn-filter_An">
            <button class="orderlistC_filterbtn_An">
                <span>排序 <i class="fas fa-caret-down"></i></span>
            </button>
            <div class="orderlistC_btn-filter-content_An">
              <a href="#">由新到舊</a>
              <a href="#">由舊到新</a>
            </div>
        </div>
    </div>
    <div class="orderlistC_box_An mx-5 mb-3 px-5 py-4 d-flex justify-content-between">
        <div class="orderlistC_boxL_An">
            <span class="orderlistC_orderDate_An">2020/07/13</span>
        </div>
        <div class="orderlistC_boxM_An my-4">
            <div class="orderlistC_item_An d-flex justify-content-between">
                <span class="orderlistC_goodsName_An">Farmina 法米納獸醫寵愛天然配方-貓用腸胃道 5kg</span>
                <span class="orderlistC_quantity_An">數量：1</span>
            </div>
            <div class="orderlistC_item_An d-flex justify-content-between">
                <span class="orderlistC_goodsName_An">Farmina 法米納獸醫寵愛天然配方-貓用腸胃道 5kg</span>
                <span class="orderlistC_quantity_An">數量：1</span>
            </div>
            <div class="orderlistC_item_An d-flex justify-content-between">
                <span class="orderlistC_goodsName_An">Farmina 法米納獸醫寵愛天然配方-貓用腸胃道 5kg</span>
                <span class="orderlistC_quantity_An">數量：1</span>
            </div>
        </div>
        <div class="orderlistC_boxR_An">
            <a href="#">查看更多</a>
        </div>
    </div>
    <div class="orderlistC_box_An mx-5 mb-3 px-5 py-4 d-flex justify-content-between">
        <div class="orderlistC_boxL_An">
            <span class="orderlistC_orderDate_An">2020/07/13</span>
        </div>
        <div class="orderlistC_boxM_An my-4">
            <div class="orderlistC_item_An d-flex justify-content-between">
                <span class="orderlistC_goodsName_An">Farmina 法米納獸醫寵愛天然配方-貓用腸胃道 5kg</span>
                <span class="orderlistC_quantity_An">數量：1</span>
            </div>
            <div class="orderlistC_item_An d-flex justify-content-between">
                <span class="orderlistC_goodsName_An">Farmina 法米納獸醫寵愛天然配方-貓用腸胃道 5kg</span>
                <span class="orderlistC_quantity_An">數量：1</span>
            </div>
            <div class="orderlistC_item_An d-flex justify-content-between">
                <span class="orderlistC_goodsName_An">Farmina 法米納獸醫寵愛天然配方-貓用腸胃道 5kg</span>
                <span class="orderlistC_quantity_An">數量：1</span>
            </div>
        </div>
        <div class="orderlistC_boxR_An">
            <a href="#">查看更多</a>
        </div>
    </div>
    <div class="orderlistC_box_An mx-5 mb-3 px-5 py-4 d-flex justify-content-between">
        <div class="orderlistC_boxL_An">
            <span class="orderlistC_orderDate_An">2020/07/13</span>
        </div>
        <div class="orderlistC_boxM_An my-4">
            <div class="orderlistC_item_An d-flex justify-content-between">
                <span class="orderlistC_goodsName_An">Farmina 法米納獸醫寵愛天然配方-貓用腸胃道 5kg</span>
                <span class="orderlistC_quantity_An">數量：1</span>
            </div>
            <div class="orderlistC_item_An d-flex justify-content-between">
                <span class="orderlistC_goodsName_An">Farmina 法米納獸醫寵愛天然配方-貓用腸胃道 5kg</span>
                <span class="orderlistC_quantity_An">數量：1</span>
            </div>
            <div class="orderlistC_item_An d-flex justify-content-between">
                <span class="orderlistC_goodsName_An">Farmina 法米納獸醫寵愛天然配方-貓用腸胃道 5kg</span>
                <span class="orderlistC_quantity_An">數量：1</span>
            </div>
        </div>
        <div class="orderlistC_boxR_An">
            <a href="#">查看更多</a>
        </div>
    </div>
    <div class="orderlistC_box_An mx-5 mb-3 px-5 py-4 d-flex justify-content-between">
        <div class="orderlistC_boxL_An">
            <span class="orderlistC_orderDate_An">2020/07/13</span>
        </div>
        <div class="orderlistC_boxM_An my-4">
            <div class="orderlistC_item_An d-flex justify-content-between">
                <span class="orderlistC_goodsName_An">Farmina 法米納獸醫寵愛天然配方-貓用腸胃道 5kg</span>
                <span class="orderlistC_quantity_An">數量：1</span>
            </div>
            <div class="orderlistC_item_An d-flex justify-content-between">
                <span class="orderlistC_goodsName_An">Farmina 法米納獸醫寵愛天然配方-貓用腸胃道 5kg</span>
                <span class="orderlistC_quantity_An">數量：1</span>
            </div>
            <div class="orderlistC_item_An d-flex justify-content-between">
                <span class="orderlistC_goodsName_An">Farmina 法米納獸醫寵愛天然配方-貓用腸胃道 5kg</span>
                <span class="orderlistC_quantity_An">數量：1</span>
            </div>
        </div>
        <div class="orderlistC_boxR_An">
            <a href="#">查看更多</a>
        </div>
    </div>
    <div class="orderlistC_box_An mx-5 mb-3 px-5 py-4 d-flex justify-content-between">
        <div class="orderlistC_boxL_An">
            <span class="orderlistC_orderDate_An">2020/07/13</span>
        </div>
        <div class="orderlistC_boxM_An my-4">
            <div class="orderlistC_item_An d-flex justify-content-between">
                <span class="orderlistC_goodsName_An">Farmina 法米納獸醫寵愛天然配方-貓用腸胃道 5kg</span>
                <span class="orderlistC_quantity_An">數量：1</span>
            </div>
            <div class="orderlistC_item_An d-flex justify-content-between">
                <span class="orderlistC_goodsName_An">Farmina 法米納獸醫寵愛天然配方-貓用腸胃道 5kg</span>
                <span class="orderlistC_quantity_An">數量：1</span>
            </div>
            <div class="orderlistC_item_An d-flex justify-content-between">
                <span class="orderlistC_goodsName_An">Farmina 法米納獸醫寵愛天然配方-貓用腸胃道 5kg</span>
                <span class="orderlistC_quantity_An">數量：1</span>
            </div>
        </div>
        <div class="orderlistC_boxR_An">
            <a href="#">查看更多</a>
        </div>
    </div>
    <div class="orderlistC_box_An mx-5 mb-3 px-5 py-4 d-flex justify-content-between">
        <div class="orderlistC_boxL_An">
            <span class="orderlistC_orderDate_An">2020/07/13</span>
        </div>
        <div class="orderlistC_boxM_An my-4">
            <div class="orderlistC_item_An d-flex justify-content-between">
                <span class="orderlistC_goodsName_An">Farmina 法米納獸醫寵愛天然配方-貓用腸胃道 5kg</span>
                <span class="orderlistC_quantity_An">數量：1</span>
            </div>
            <div class="orderlistC_item_An d-flex justify-content-between">
                <span class="orderlistC_goodsName_An">Farmina 法米納獸醫寵愛天然配方-貓用腸胃道 5kg</span>
                <span class="orderlistC_quantity_An">數量：1</span>
            </div>
            <div class="orderlistC_item_An d-flex justify-content-between">
                <span class="orderlistC_goodsName_An">Farmina 法米納獸醫寵愛天然配方-貓用腸胃道 5kg</span>
                <span class="orderlistC_quantity_An">數量：1</span>
            </div>
        </div>
        <div class="orderlistC_boxR_An">
            <a href="#">查看更多</a>
        </div>
    </div>
</div>
</div>

<div class="orderlistM_body_An">
  <div class="orderlistM_classificationBox_An">
      <div class="orderlistM_classification_An">
          <a href="#">近三個月內的訂單</a>
          <span> / </span>
          <a href="#">全部訂單</a>
      </div>
      <div class="orderlistM_btn-filter_An">
          <button class="orderlistM_filterbtn_An">
              <span>排序 <i class="fas fa-caret-down"></i></span>
          </button>
          <div class="orderlistM_btn-filter-content_An">
            <a href="#">由新到舊</a>
            <a href="#">由舊到新</a>
          </div>
      </div>
  </div>
  <div class="orderlistM_box_An py-4 d-flex flex-column justify-content-between">
    <span class="orderlistM_orderDate_An">2020/07/13</span>
    <div class="orderlistM_boxM_An my-4">
      <div class="orderlistM_item_An d-flex justify-content-between">
        <span class="orderlistM_goodsName_An">Farmina 法米納獸醫寵愛天然配方-貓用腸胃道 5kg</span>
        <span class="orderlistM_quantity_An">數量：1</span>
      </div>
      <div class="orderlistM_item_An d-flex justify-content-between">
        <span class="orderlistM_goodsName_An">Farmina 法米納獸醫寵愛天然配方-貓用腸胃道 5kg</span>
        <span class="orderlistM_quantity_An">數量：1</span>
      </div>
      <div class="orderlistM_item_An d-flex justify-content-between">
        <span class="orderlistM_goodsName_An">Farmina 法米納獸醫寵愛天然配方-貓用腸胃道 5kg</span>
        <span class="orderlistM_quantity_An">數量：1</span>
      </div>
    </div>
    <a class="orderlistM_readMore_An" href="#">查看更多</a>
  </div>
  <div class="orderlistM_box_An py-4 d-flex flex-column justify-content-between">
    <span class="orderlistM_orderDate_An">2020/07/13</span>
    <div class="orderlistM_boxM_An my-4">
      <div class="orderlistM_item_An d-flex justify-content-between">
        <span class="orderlistM_goodsName_An">Farmina 法米納獸醫寵愛天然配方-貓用腸胃道 5kg</span>
        <span class="orderlistM_quantity_An">數量：1</span>
      </div>
      <div class="orderlistM_item_An d-flex justify-content-between">
        <span class="orderlistM_goodsName_An">Farmina 法米納獸醫寵愛天然配方-貓用腸胃道 5kg</span>
        <span class="orderlistM_quantity_An">數量：1</span>
      </div>
      <div class="orderlistM_item_An d-flex justify-content-between">
        <span class="orderlistM_goodsName_An">Farmina 法米納獸醫寵愛天然配方-貓用腸胃道 5kg</span>
        <span class="orderlistM_quantity_An">數量：1</span>
      </div>
    </div>
    <a class="orderlistM_readMore_An" href="#">查看更多</a>
  </div>
  <div class="orderlistM_box_An py-4 d-flex flex-column justify-content-between">
    <span class="orderlistM_orderDate_An">2020/07/13</span>
    <div class="orderlistM_boxM_An my-4">
      <div class="orderlistM_item_An d-flex justify-content-between">
        <span class="orderlistM_goodsName_An">Farmina 法米納獸醫寵愛天然配方-貓用腸胃道 5kg</span>
        <span class="orderlistM_quantity_An">數量：1</span>
      </div>
      <div class="orderlistM_item_An d-flex justify-content-between">
        <span class="orderlistM_goodsName_An">Farmina 法米納獸醫寵愛天然配方-貓用腸胃道 5kg</span>
        <span class="orderlistM_quantity_An">數量：1</span>
      </div>
      <div class="orderlistM_item_An d-flex justify-content-between">
        <span class="orderlistM_goodsName_An">Farmina 法米納獸醫寵愛天然配方-貓用腸胃道 5kg</span>
        <span class="orderlistM_quantity_An">數量：1</span>
      </div>
    </div>
    <a class="orderlistM_readMore_An" href="#">查看更多</a>
  </div>
  <div class="orderlistM_box_An py-4 d-flex flex-column justify-content-between">
    <span class="orderlistM_orderDate_An">2020/07/13</span>
    <div class="orderlistM_boxM_An my-4">
      <div class="orderlistM_item_An d-flex justify-content-between">
        <span class="orderlistM_goodsName_An">Farmina 法米納獸醫寵愛天然配方-貓用腸胃道 5kg</span>
        <span class="orderlistM_quantity_An">數量：1</span>
      </div>
      <div class="orderlistM_item_An d-flex justify-content-between">
        <span class="orderlistM_goodsName_An">Farmina 法米納獸醫寵愛天然配方-貓用腸胃道 5kg</span>
        <span class="orderlistM_quantity_An">數量：1</span>
      </div>
      <div class="orderlistM_item_An d-flex justify-content-between">
        <span class="orderlistM_goodsName_An">Farmina 法米納獸醫寵愛天然配方-貓用腸胃道 5kg</span>
        <span class="orderlistM_quantity_An">數量：1</span>
      </div>
    </div>
    <a class="orderlistM_readMore_An" href="#">查看更多</a>
  </div>
  <div class="orderlistM_box_An py-4 d-flex flex-column justify-content-between">
    <span class="orderlistM_orderDate_An">2020/07/13</span>
    <div class="orderlistM_boxM_An my-4">
      <div class="orderlistM_item_An d-flex justify-content-between">
        <span class="orderlistM_goodsName_An">Farmina 法米納獸醫寵愛天然配方-貓用腸胃道 5kg</span>
        <span class="orderlistM_quantity_An">數量：1</span>
      </div>
      <div class="orderlistM_item_An d-flex justify-content-between">
        <span class="orderlistM_goodsName_An">Farmina 法米納獸醫寵愛天然配方-貓用腸胃道 5kg</span>
        <span class="orderlistM_quantity_An">數量：1</span>
      </div>
      <div class="orderlistM_item_An d-flex justify-content-between">
        <span class="orderlistM_goodsName_An">Farmina 法米納獸醫寵愛天然配方-貓用腸胃道 5kg</span>
        <span class="orderlistM_quantity_An">數量：1</span>
      </div>
    </div>
    <a class="orderlistM_readMore_An" href="#">查看更多</a>
  </div>
  <div class="orderlistM_box_An py-4 d-flex flex-column justify-content-between">
    <span class="orderlistM_orderDate_An">2020/07/13</span>
    <div class="orderlistM_boxM_An my-4">
      <div class="orderlistM_item_An d-flex justify-content-between">
        <span class="orderlistM_goodsName_An">Farmina 法米納獸醫寵愛天然配方-貓用腸胃道 5kg</span>
        <span class="orderlistM_quantity_An">數量：1</span>
      </div>
      <div class="orderlistM_item_An d-flex justify-content-between">
        <span class="orderlistM_goodsName_An">Farmina 法米納獸醫寵愛天然配方-貓用腸胃道 5kg</span>
        <span class="orderlistM_quantity_An">數量：1</span>
      </div>
      <div class="orderlistM_item_An d-flex justify-content-between">
        <span class="orderlistM_goodsName_An">Farmina 法米納獸醫寵愛天然配方-貓用腸胃道 5kg</span>
        <span class="orderlistM_quantity_An">數量：1</span>
      </div>
    </div>
    <a class="orderlistM_readMore_An" href="#">查看更多</a>
  </div>
</div>
</>
)}

export default storepage