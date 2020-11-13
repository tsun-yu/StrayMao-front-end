import React, { useEffect, useState } from 'react'
import '../../styles/store/straymao.scss'
import { connect } from 'react-redux'
import StoreHeart from '../../components/store/StoreHeart'
import StoreCart from '../../components/store/StoreCart'
import { withRouter } from 'react-router-dom'
import {
  getListAsync,
  getHotSaleAsync,
  getDiscountAsync,
  getGoodsIdAsync,
  goodsIdDetail,
} from '../../actions/store/index'

function StoreCard(props) {
  // const [item , setItem] = useState(props.item)
  const { item } = props
    // console.log('item' ,item)
  const [test, setTest] = useState({})
  // const [display, setDisplay] = useState(0)
  // console.log('item:', item)
  useEffect(() => {
    let id = props.goodsId ?? 1
    // console.log("id :", props.petDetailId);
    setTest(props.getHotSaleAsync(id))
  }, [])

  return (
    <>
      {/* <div className="container">
        <div className="row"> */}

      <div className="card_new col-lg-3 col-md-6 col-sm-6">
        <a
          href="##"
          onClick={() => {
            // console.log('aaa:', props.item)
            props.goodsIdDetail(props.item.goodsId)
            props.history.push('/storeP3')
          }}
        >
          <StoreHeart />

          <div className="img">
            <img src={item.goodsImgs} alt="鮮肉煲罐頭" />
          </div>

          <div className="goodsText">
            <p>{item.name}</p>
            <span id="number">NT$ {item.price}</span>
            <span id="number2">NT$ {item.pricing}</span>

            <StoreCart />
          </div>
        </a>
      </div>

      {/* </div>
      </div> */}
    </>
  )
}

const mapStateToProps = (store) => {
  return {
    info: store.storeReducer.getGoodsId,
    goodsId: store.storeReducer.goodsIdDetail,
  }
}
const mapDispatchToProps = null

export default withRouter(
  connect(mapStateToProps, {
    goodsIdDetail,
    getHotSaleAsync,
  })(StoreCard)
)
