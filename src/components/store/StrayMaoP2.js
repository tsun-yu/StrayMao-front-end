import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import '../../styles/store/straymaoP2.scss'
import 'animate.css'
import StoreCard from '../../components/store/StoreCard'
import PageBar from '../../components/common/PageBar'
import { gotoPage, setTotalPage } from "../../actions/common/index";

import {
  getCatsListAsync,
} from '../../actions/store/index'


function StrayMaoP2(props) {
  let i = 0

  const [display, setDisplay] = useState([])
  let content = []

  // 分頁
  const [dataLoading, setDataLoading] = useState(true);
  const [displayPage, setDisplayPage] = useState([])
  const contentPage = []
  let totalCards = props.cards;
  // console.log('store: ',props.cards)
  let totalPages = Math.ceil(totalCards.length / 9);
  let nowPage = props.nowPage;

  useEffect(() => {
    props.getCatsListAsync()
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

    totalCards = props.cards;
    totalPages = Math.ceil(totalCards.length / 9);

    if (totalCards.length > 0) {
      // let tt = JSON.parse(totalCards[0]);
      // console.log("totalCards: ", totalCards[0]);
      // console.log("now ", nowPage);
      // console.log("totalPages ", totalPages);
      // console.log("if:", nowPage === totalPages);
    }
    props.setTotalPage(totalPages);
    for (
      let i = 9 * (nowPage - 1);
      nowPage === totalPages ? i < totalCards.length : i < 9 * nowPage;
      i++
    ) {
      if (totalCards.length > 0) {
        // console.log(":", totalCards[i]);
        contentPage.push(<StoreCard item={totalCards[i]} key={i} />);
      }
    }
    setDisplayPage(contentPage);

    setTimeout(() => setDataLoading(false), 100);
  }, [totalCards, nowPage]);

  const loading = <div></div>;

  // useEffect(()=>{
  //   let info = props.info
  //   // console.log('info :', props.info)
  //   if (info.length > 0){
  //     for(let i = 0;i < info.length;i++){
  //       content.push(
  //         <StoreCard
  //         item={{
  //           goodsId: info[i].goodsId,
  //             goodsImgs: info[i].goodsImgs,
  //             name: info[i].name,
  //             price: info[i].price,
  //             pricing: info[i].pricing,
  //         }}
  //         />
  //       )
  //     }
  //     setDisplay(content)
  //   }
  // },[props.info])

  // useEffect(getRandomInt(max) {
  //   let getRandomInt = null
  //   return: Math.floor(Math.random() * Math.floor(max)),
  //   console.log('整數',getRandomInt)
  // },[])

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
            {dataLoading ? loading : displayPage}
            </div>
          </div>
          
          <div className="container storeP1Bottom">
            <div className="row d-flex" id="between">
            <PageBar />
            </div>
          </div>

        </div>
      </div>

      
    </>
  )
}

const mapStateToProps = (store) => {
  return {
    info: store.storeReducer.getCats,
    nowPage: store.nowPage,
    totalPage: store.totalPage,
    cards: store.storeReducer.getCats,
  }
}
const mapDispatchToProps = null

export default connect(mapStateToProps, {
  getCatsListAsync,
  gotoPage,
  setTotalPage,
  })(StrayMaoP2)
