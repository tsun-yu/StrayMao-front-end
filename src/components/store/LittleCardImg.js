import React, { useEffect, useState } from 'react'
import '../../styles/store/straymao.scss'
import { connect } from 'react-redux'

function LittleCardImg(props) {
  // const [item , setItem] = useState(props.item)
  const { item } = props
  console.log('item:', item)
  return (
    <>
      <div class="littleCardImg">
        {/* <img src="./image/store/dog-food2.png" alt="" /> */}
        <img src={item.goodsImgs} alt="" />
      </div>
      <div>
        <div class="littleCardName">{item.name}</div>
        <div class="littleCardPrice">NT$ {item.price}</div>
      </div>
    </>
  )
}

const mapStateToProps = (store) => {
  return {}
}
const mapDispatchToProps = null
export default connect(mapStateToProps, {})(LittleCardImg)
