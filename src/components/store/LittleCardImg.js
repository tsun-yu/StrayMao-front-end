import React, { useEffect, useState } from 'react'
import '../../styles/store/straymao.scss'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {
  getListAsync,
  getHotSaleAsync,
  getDiscountAsync,
  getGoodsIdAsync,
  goodsIdDetail,
} from '../../actions/store/index'

function LittleCardImg(props) {
  // const [item , setItem] = useState(props.item)
  const { itemAni } = props
  // console.log('123: ', itemAni)
  const [test, setTest] = useState({})
  // console.log('item:', itemAni)
  useEffect(() => {
    let id = props.goodsId ?? 1
    // console.log("id :", props.petDetailId);
    setTest(props.getListAsync(id))
  }, [])

  return (
    <>
      
        <div className="littleCardImg">
          {/* <img src="./image/store/dog-food2.png" alt="" /> */}
          <img src={itemAni.goodsImgs} alt="" />
        </div>
        <div className="littleCardImgLine">
          <div className="littleCardName">{itemAni.name}</div>
          <div className="littleCardPrice">NT$ {itemAni.price}</div>
        </div>

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
    getListAsync,
  })(LittleCardImg)
)
