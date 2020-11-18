import { func } from 'prop-types'
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import '../../styles/store/straymao.scss'
import 'animate.css'
import StoreCard from '../../components/store/StoreCard'
import ChatRoomSvg from '../../components/store/ChatRoomSvg'
// import StoreCardTest from '../../components/store/StoreCardTest'
// import { getListAsync } from '../../actions/store/index'
import { Link } from 'react-router-dom'
import StoreAnimation from '../../components/store/StoreAnimation'

import {
  getListAsync,
  getHotSaleAsync,
  getDiscountAsync,
} from '../../actions/store/index'

function Storepage(props) {
  let i = 0
  const [display, setDisplay] = useState([])
  const [display2, setDisplay2] = useState([])
  const [displayDiscount, setDisplayDiscount] = useState([])
  let content = []
  let content2 = []
  let contentDiscount = []
  useEffect(() => {
    props.getListAsync()
    props.getHotSaleAsync()
    props.getDiscountAsync()
    // console.log(props.info)

    // mouse
    document
      .querySelector('#storeP1BackgroundMouse')
      .addEventListener('mouseover', () => {
        let storeP1BackgroundMouse = document.querySelector(
          '#storeP1BackgroundMouse'
        )
        storeP1BackgroundMouse.classList.remove('animate__bounceInDown')
        storeP1BackgroundMouse.classList.add('animate__bounce')
      })

    document
      .querySelector('#storeP1BackgroundMouse')
      .addEventListener('mouseout', () => {
        let storeP1BackgroundMouse = document.querySelector(
          '#storeP1BackgroundMouse'
        )
        setTimeout(() => {
          storeP1BackgroundMouse.classList.remove('animate__bounce')
        }, 1000)
      })

    document.addEventListener('mousemove', function parallax(e) {
      this.querySelectorAll('.storeP1Background').forEach(
        (storeP1Background) => {
          const speed = storeP1Background.getAttribute('data-speed')
          if (i == 1) {
            const x = (window.innerWidth - e.pageX * speed) / 50
            const y = (window.innerHeight - e.pageY * speed) / 50

            storeP1Background.style.transform = `translateX(${x}px) translateY(${y}px)`
          }
          // console.log(e);
        }
      )
    })
    document
      .querySelector('.storeP1Background')
      .addEventListener('mouseover', function func(e) {
        i = 1
      })
    document
      .querySelector('.storeP1Background')
      .addEventListener('mouseout', function func(e) {
        i = 0
      })
  }, [])

  useEffect(() => {
    // console.log('info :', props.infoDiscount)
    let info = props.info
    let info2 = props.info2
    let infoDiscount = props.infoDiscount

    if (info.length > 0 && info2.length > 0) {
      // for (let i = 0; i < info.length; i++) {
      for (let i = 0; i < 3; i++) {
        if (info2[i].price < info2[i].pricing) {
          content.push(
            <StoreCard
              item={{
                categoryId: info2[i].categoryId,
                goodsId: info2[i].goodsId,
                goodsImgs: info2[i].goodsImgs,
                name: info2[i].name,
                price: info2[i].price,
                pricing: info2[i].pricing,
              }}
            />
          )
        } else {
          content.push(
            <StoreCard
              item={{
                categoryId: info2[i].categoryId,
                goodsId: info2[i].goodsId,
                goodsImgs: info2[i].goodsImgs,
                name: info2[i].name,
                price: info2[i].price,
              }}
            />
          )
        }

        // console.log('1230',info2[i].goodsId)
      }
      setDisplay(content)

      for (let i = 0; i < 9; i++) {
        if (info[i].price < info[i].pricing) {
          content2.push(
            <StoreCard
              item={{
                categoryId: info[i].categoryId,
                goodsId: info[i].goodsId,
                goodsImgs: info[i].goodsImgs,
                name: info[i].name,
                price: info[i].price,
                pricing: info[i].pricing,
              }}
            />
          )
        } else {
          content2.push(
            <StoreCard
              item={{
                categoryId: info[i].categoryId,
                goodsId: info[i].goodsId,
                goodsImgs: info[i].goodsImgs,
                name: info[i].name,
                price: info[i].price,
              }}
            />
          )
        }

        // console.log('1231',info2[i].goodsId)
      }
      setDisplay2(content2)

      if (info.length > 0 && info2.length > 0 && infoDiscount.length > 0) {
        for (let i = 0; i < 3; i++) {
          if (infoDiscount[i].price < infoDiscount[i].pricing) {
            contentDiscount.push(
              <StoreCard
                item={{
                  categoryId: infoDiscount[i].categoryId,
                  goodsId: infoDiscount[i].goodsId,
                  goodsImgs: infoDiscount[i].goodsImgs,
                  name: infoDiscount[i].name,
                  price: infoDiscount[i].price,
                  pricing: infoDiscount[i].pricing,
                }}
              />
            )
          } else {
            contentDiscount.push(
              <StoreCard
                item={{
                  categoryId: infoDiscount[i].categoryId,
                  goodsId: infoDiscount[i].goodsId,
                  goodsImgs: infoDiscount[i].goodsImgs,
                  name: infoDiscount[i].name,
                  price: infoDiscount[i].price,
                }}
              />
            )
          }

          // console.log('1232',info2[i].goodsId)
        }
        setDisplayDiscount(contentDiscount)
      }
    }
  }, [props.info, props.info2, props.infoDiscount])

  return (
    <>
      {/* 地板 */}
      {/* onMouseOver={(storeP1Background)=> */}
      <section>
        <StoreAnimation />
      </section>
      <div className="container" data-speed="0">
        <div className="row">
          {/* <!-- 大按鈕 --> */}
          <article id="bigBtn" className="d-flex">
            <a href="/storeNews">
              <button
                className="storeP1Btn"
                id="newsBigBtn"
                type="button"
                value="News"
              >
                News
              </button>
            </a>

            <a href="/storeCats">
              <button
                className="storeP1Btn"
                id="catBigBtn"
                type="button"
                value="Cats"
              >
                Cat
              </button>
            </a>

            <a href="/storeDogs">
              <button
                className="storeP1Btn"
                id="dogBigBtn"
                type="button"
                value="Dogs"
              >
                Dog
              </button>
            </a>
          </article>
          {/* <!-- 熱銷推薦 --> */}
          <div className="storeP1Title center">
            <div className="line1"></div>
            <div className="storeP1GoodsWords">熱銷推薦</div>
            <div className="line2"></div>
          </div>
        </div>
      </div>

      <div className="storeP1BccPeachDad">
        <div className="storeP1BccPeach"></div>

        <div className="storeP1Bcc" data-speed="0">
          <div className="container storeP1Bottom" data-speed="0">
            <div className="row d-flex" id="between">
              
              {display}
             
            </div>
          </div>
        </div>
      </div>

      {/* <!-- 特價商品 --> */}
      <div className="container">
        <div className="row">
          {/* <!-- 特價商品 --> */}
          <div className="storeP1Title center">
            <div className="line1"></div>
            <div className="storeP1GoodsWords">特價商品</div>
            <div className="line2"></div>
          </div>
        </div>
      </div>

      <div className="storeP1BccGreenDad">
        <div className="storeP1BccGreen"></div>
        <div className="storeP1Bcc storeP1Bottom" data-speed="0">
          <div className="container">
            <div className="row d-flex" id="between">
              

              {displayDiscount}

              
            </div>
          </div>
          
        </div>
      </div>

      {/* <div className="container">
        <div className="row">
          <div className="readMore">
            <a href="#">找更多</a>
          </div>
        </div>
      </div> */}

      <ChatRoomSvg />

      {/* <!-- 特價商品結束 --> */}
      <aside>
        {/* <!-- <div id="cartAndDonate" className="d-flex"> --> */}
        <div className="circle-s circle-cart">
          <div className="div-cart">
            <i className="fas fa-shopping-cart" />
          </div>
        </div>
        <div className="circle-l circle-donate">
          <div>捐款</div>
        </div>
        {/* <!-- </div> --> */}
      </aside>
    </>
  )
}

// export default Storepage

const mapStateToProps = (store) => {
  return {
    info: store.storeReducer.getStoreList,
    info2: store.storeReducer.getHot,
    infoDiscount: store.storeReducer.getDiscount,
  }
}
const mapDispatchToProps = null

export default connect(mapStateToProps, {
  getListAsync,
  getHotSaleAsync,
  getDiscountAsync,
})(Storepage)
