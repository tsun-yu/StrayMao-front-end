import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import '../../styles/store/straymaoP3.scss'
import 'animate.css'
import StoreCard from '../../components/store/StoreCard'

function StrayMaoP3(props) {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="storeP3 d-flex">
            <div className="storeP3Img">
              <img src="./image/store/dog-food.png" alt="" />
            </div>
            <div className="storeP3Description">
              <div className="storeP3Title">鮮肉煲罐頭</div>
              <div className="storeP3Stock d-flex">
                <div className="dot"></div>
                庫存 4 件
              </div>
              <div className="storeP3Transport">
                <span>全店，超商取貨滿一千免運</span>
                <p>全店，本島宅配滿一千五免運</p>
              </div>

              <div className="numberAndstar d-flex">
                <div className="storeP3Price">
                  <div className="realPrice">NT$1,550</div>
                  <svg className="icon-005-star">
                    <path d="M10.31,12,6.79,10.11,3.27,12l.66-3.93L1.07,5.29,5,4.7,6.76,1.13,8.53,4.69l3.94.56L9.63,8Z" />
                    <path d="M2.61,12.89l.78-4.66L0,4.94l4.68-.69L6.75,0,8.86,4.23l4.68.67L10.17,8.21,11,12.87,6.79,10.68ZM2.15,5.63,4.47,7.88l-.54,3.18L6.78,9.55,9.65,11,9.09,7.86,11.4,5.6,8.2,5.15,6.76,2.26,5.34,5.16Z" />
                  </svg>
                  <svg className="icon-005-star">
                    <path d="M10.31,12,6.79,10.11,3.27,12l.66-3.93L1.07,5.29,5,4.7,6.76,1.13,8.53,4.69l3.94.56L9.63,8Z" />
                    <path d="M2.61,12.89l.78-4.66L0,4.94l4.68-.69L6.75,0,8.86,4.23l4.68.67L10.17,8.21,11,12.87,6.79,10.68ZM2.15,5.63,4.47,7.88l-.54,3.18L6.78,9.55,9.65,11,9.09,7.86,11.4,5.6,8.2,5.15,6.76,2.26,5.34,5.16Z" />
                  </svg>
                  <svg className="icon-005-star">
                    <path d="M10.31,12,6.79,10.11,3.27,12l.66-3.93L1.07,5.29,5,4.7,6.76,1.13,8.53,4.69l3.94.56L9.63,8Z" />
                    <path d="M2.61,12.89l.78-4.66L0,4.94l4.68-.69L6.75,0,8.86,4.23l4.68.67L10.17,8.21,11,12.87,6.79,10.68ZM2.15,5.63,4.47,7.88l-.54,3.18L6.78,9.55,9.65,11,9.09,7.86,11.4,5.6,8.2,5.15,6.76,2.26,5.34,5.16Z" />
                  </svg>
                  <svg className="icon-005-star">
                    <path d="M10.31,12,6.79,10.11,3.27,12l.66-3.93L1.07,5.29,5,4.7,6.76,1.13,8.53,4.69l3.94.56L9.63,8Z" />
                    <path d="M2.61,12.89l.78-4.66L0,4.94l4.68-.69L6.75,0,8.86,4.23l4.68.67L10.17,8.21,11,12.87,6.79,10.68ZM2.15,5.63,4.47,7.88l-.54,3.18L6.78,9.55,9.65,11,9.09,7.86,11.4,5.6,8.2,5.15,6.76,2.26,5.34,5.16Z" />
                  </svg>
                  <svg className="icon-004-star">
                    <path d="M10.31,12,6.79,10.11,3.27,12l.66-3.93L1.07,5.29,5,4.7,6.76,1.13,8.53,4.69l3.94.56L9.63,8Z" />
                    <path d="M2.61,12.89l.78-4.66L0,4.94l4.68-.69L6.75,0,8.86,4.23l4.68.67L10.17,8.21,11,12.87,6.79,10.68ZM2.15,5.63,4.47,7.88l-.54,3.18L6.78,9.55,9.65,11,9.09,7.86,11.4,5.6,8.2,5.15,6.76,2.26,5.34,5.16Z" />
                  </svg>
                </div>

                <div className="starAndComment">
                  <div className="fakePrice">NT$1,850</div>
                  <div className="comment">
                    4.0分｜<a href="">2個評價</a>
                  </div>
                </div>
              </div>

              <div className="storeP3Discount">購買數量：</div>

              <div className="inputbox d-flex">
                <svg className="icon-067-minus">
                  <path d="M19.48,0H.72A.81.81,0,0,0,0,.88a.8.8,0,0,0,.72.71H19.48a.8.8,0,0,0,.71-.88A.81.81,0,0,0,19.48,0Z"></path>{' '}
                </svg>
                <input
                  className="input-black"
                  type="text"
                  placeholder=""
                  value="1"
                />
                <svg className="icon-021-plus">
                  <path d="M18.67,9h-8.2V.76A.76.76,0,1,0,9,.76V9H.76a.76.76,0,0,0,0,1.52H9v8.2a.76.76,0,1,0,1.52,0h0v-8.2h8.2a.76.76,0,0,0,0-1.52h0Z"></path>{' '}
                </svg>
              </div>

              <div className="storeP3BTN d-flex">
                <button className="btn-addMyLove" type="button" value="">
                  加入願望清單
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14.668"
                    height="14.163"
                    viewBox="0 0 14.668 14.163"
                  >
                    <path
                      id="Path_1698"
                      data-name="Path 1698"
                      d="M1158.688,665.922a3.1,3.1,0,0,0-3.336-2.368c-1.708-.011-3.474,1.719-3.561,4.28-.081,2.4,1.652,5.57,6.667,8.794,5.23-3.152,6.912-6.3,6.994-8.7.086-2.561-1.563-4.315-3.27-4.327a3.287,3.287,0,0,0-3.494,2.32"
                      transform="translate(-1151.288 -663.054)"
                      fill="none"
                      stroke="#ed8f8f"
                      stroke-width="1"
                    />
                  </svg>
                </button>
                <button className="btn-green" type="button" value="">
                  加入購物車
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="goodsDescription d-flex">
            <div class="goodsDescriptionTitle">
              <a href="#">商品資訊</a>
            </div>
            <div class="goodsDescriptionTitle">
              <a href="#">顧客評價</a>
            </div>
          </div>
        </div>
      </div>

      <div class="goodsDescriptionLine d-flex">
        <div class="goodsDescriptionLittleTitle">商品資訊</div>
      </div>

      <div class="container">
        <div class="row">
          <div class="goodsDescriptionLittleWords">
            每盒內含10件商品
            <br />
            ※零食同系列內的「口味」、玩具同系列內的「款式」將隨機出貨 恕不挑款
            <br />
            1. SHEBA 誘惑泥 (12gx4條) x1
            <br />
            2. Catit 喵肉乾 (30g) 炭燒風味 x1
            <br />
            3. 舟屋 冷凍乾燥雞腿肉/櫻桃鴨 x1
            <br />
            4. Bistro cat 特級銀貓健康餐罐 (80g) x1
            <br />
            5. HYPERR超躍貓咪無穀主食罐 (70g) x1
            <br />
            6. 克瑞斯 天然無穀主食貓餐罐(90g) x1
            <br />
            7. CIAO 鰹魚燒晚餐 (50g) x1
            <br />
            8. Kitcat 山羊奶湯罐-(70g) x1
            <br />
            9. FOFOS 兩只福狸 貓舌頭爽爽舔食墊（美味紫/馬卡龍綠/珊瑚紅）x1
            <br />
            10. 不挑款人氣飼料試吃包 x1
          </div>
        </div>
      </div>

      <div class="d-flex">
        <div class="storeP3GuessYouLike">猜你喜歡</div>
      </div>

      <div class="container">
        <div class="row" id="between">
          <StoreCard />
          <StoreCard />
          <StoreCard />
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (store) => {
  return {}
}
const mapDispatchToProps = null

export default connect(mapStateToProps, {})(StrayMaoP3)
