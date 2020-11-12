import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import '../../styles/store/straymaoP2.scss'
import 'animate.css'
import StoreCard from '../../components/store/StoreCard'


import {
  getListAsync,
} from '../../actions/store/index'


function StrayMaoNews(props) {
  let i = 0

  const [display, setDisplay] = useState([])
  let content = []

  useEffect(() => {
    props.getListAsync()
    // console.log(props.info)

    document.addEventListener('mousemove', function parallax(e) {
      this.querySelectorAll('.storeP2CatImg').forEach((storeP2CatImg) => {
        const speed = storeP2CatImg.getAttribute('data-speed')
        if (i == 1) {
          const x = (window.innerWidth - e.pageX * speed) / 50
          const y = (window.innerHeight - e.pageY * speed) / 50

          storeP2CatImg.style.transform = `translateX(${x}px) translateY(${y}px)`
        }
      })
    })
    document
      .querySelector('.storeP2CatImg')
      .addEventListener('mouseover', function func(e) {
        i = 1
      })
    document
      .querySelector('.storeP2CatImg')
      .addEventListener('mouseout', function func(e) {
        i = 0
      })
  }, [])

  useEffect(()=>{
    let info = props.info
    console.log('info :', props.info)
    if (info.length > 0){
      for(let i = 0;i < info.length;i++){
        content.push(
          <StoreCard
          item={{
            goodsId: info[i].goodsId,
              goodsImgs: info[i].goodsImgs,
              name: info[i].name,
              price: info[i].price,
              pricing: info[i].pricing,
          }}
          />
        )
      }
      setDisplay(content)
    }
  },[props.info])

  return (
    <>
      <div className="container">
        <div className="row">
          <section>
            <div className="storeP2Background">
              <img
                src="./image/store/P2Background.jpg"
                alt=""
                className="layer storeP2CatImg"
                data-speed="2"
              />
            </div>
          </section>

          {/* 熱銷推薦  */}
          <div className="storeP1Title">
            <div className="line1"></div>
            <div className="storeP1GoodsWords">最棒的喵，最棒的貨</div>
            <div className="line2"></div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="fliter">
            <div className="hotSale">
              熱銷推薦 <i className="fas fa-caret-down"></i>
            </div>
          </div>

          {/* card  */}
          <div className="container storeP1Bottom">
            <div className="row d-flex" id="between">
            {display}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (store) => {
  return {
    info: store.storeReducer.getStoreList,
  }
}
const mapDispatchToProps = null

export default connect(mapStateToProps, {getListAsync,})(StrayMaoNews)
