import React, { useEffect, useState } from 'react'
import '../../styles/store/straymao.scss'
import { connect } from 'react-redux'

function LittleCardImg(props) {
  // const [item , setItem] = useState(props.item)
  //   const { item } = props
  //   console.log('item:', item)
  return (
    <>
      <div class="littleCardImg">
        <img src="./image/store/dog-food2.png" alt="" />
      </div>
      <div>
        <div class="littleCardName">ABC</div>
        <div class="littleCardPrice">123456</div>
      </div>
    </>
  )
}

const mapStateToProps = (store) => {
  return {}
}
const mapDispatchToProps = null
export default connect(mapStateToProps, {})(LittleCardImg)
