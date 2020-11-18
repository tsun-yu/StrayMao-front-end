import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import '../../styles/store/straymaoP2.scss'
import 'animate.css'
import StoreCard from '../../components/store/StoreCard'
import PageBar from '../../components/adoption/PageBar'
import { gotoPage, setTotalPage } from '../../actions/common/index'
import ChatRoomSvg from '../../components/store/ChatRoomSvg'


import { getDogsListAsync } from '../../actions/store/index'

function StrayMaoDogs(props) {
  let i = 0

  const [dataLoading, setDataLoading] = useState(true)
  const [display, setDisplay] = useState([])
  const content = []
  let totalCards = props.cards
  // console.log('store: ',props.cards)
  let totalPages = Math.ceil(totalCards.length / 9)
  let nowPage = props.nowPage

  useEffect(() => {
    props.getDogsListAsync()
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
    // console.log("aaaa , ",document
    // .querySelector('.storeP2CatImg'))
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

  useEffect(() => {
    totalCards = props.cards
    totalPages = Math.ceil(totalCards.length / 9)

    if (totalCards.length > 0) {
      // let tt = JSON.parse(totalCards[0]);
      // console.log("totalCards: ", totalCards[0]);
      // console.log("now ", nowPage);
      // console.log("totalPages ", totalPages);
      // console.log("if:", nowPage === totalPages);
    }
    props.setTotalPage(totalPages)
    for (
      let i = 9 * (nowPage - 1);
      nowPage === totalPages ? i < totalCards.length : i < 9 * nowPage;
      i++
    ) {
      if (totalCards.length > 0) {
        // console.log(":", totalCards[i]);
        content.push(<StoreCard item={totalCards[i]} key={i} />)
      }
    }
    setDisplay(content)

    setTimeout(() => setDataLoading(false), 100)
  }, [totalCards, nowPage])

  const loading = <div></div>

  // 以資料載入的指示狀態來切換要出現的畫面
  // return dataLoading ? loading : display;

  return (
    <>
    <div className="storeP2BackgroundAround">
              <div className="storeP2Background">
                <img
                  src="./image/store/Keto_banner2.png"
                  alt=""
                  className="layer storeP2CatImg"
                  data-speed="2"
                />
              </div>
              <div className="storeP2BackgroundDogsBox1 animate__animated animate__slideInRight"></div>
              <div className="storeP2BackgroundDogsBox2 animate__animated animate__slideInDown">
                狗。商品
              </div>
            </div>
      <div className="container">
        <div className="row">
          <section>
            
          </section>

          {/* 熱銷推薦  */}
          <div className="storeP1Title">
            <div className="line1"></div>
            <div className="storeP1GoodsWords">最棒的汪，最棒的貨</div>
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
              {dataLoading ? loading : display}
            </div>
          </div>
        </div>
      </div>

      <div className="container storeP1Bottom">
        <div className="row d-flex" id="PageBar">
          <PageBar />
        </div>
      </div>

      <ChatRoomSvg />
    </>
  )
}

const mapStateToProps = (store) => {
  return {
    info: store.storeReducer.getDogs,
    nowPage: store.nowPage,
    totalPage: store.totalPage,
    cards: store.storeReducer.getDogs,
  }
}
const mapDispatchToProps = null

export default connect(mapStateToProps, {
  gotoPage,
  setTotalPage,
  getDogsListAsync,
})(StrayMaoDogs)
