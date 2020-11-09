import {
  GET_STORELIST,
  GET_SORT,
  GET_DETAIL,
  GET_HOT,
  GET_DISCOUNT,
  GET_DOGS,
  GET_CATS,
  GET_PRICEUP,
  GET_PRICEDOWN,
} from '../../actions/store/actionTypes'

// function getList(state = 1, action) {
function getStoreList(state = 1, action) {
  switch (action.type) {
    case GET_STORELIST:
      // console.log('action', action.value)
      state = action.value
      break
    default:
      break
  }
  return state
}
function getDetail(state = 1, action) {
  switch (action.type) {
    case GET_DETAIL:
      // console.log('action', action.value)
      state = action.value
      break
    default:
      break
  }
  return state
}
function getHot(state = 1, action) {
  switch (action.type) {
    case GET_HOT:
      console.log('hot: ', action.value)
      state = action.value
      break
    default:
      break
  }
  return state
}
function getDiscount(state = 1, action) {
  switch (action.type) {
    case GET_DISCOUNT:
      console.log('Dis: ', action.value)

      state = action.value
      break
    default:
      break
  }
  return state
}
function getDogs(state = 1, action) {
  switch (action.type) {
    case GET_DOGS:
      // console.log('action', action.value)
      state = action.value
      break
    default:
      break
  }
  return state
}
function getCats(state = 1, action) {
  switch (action.type) {
    case GET_CATS:
      // console.log('action', action.value)
      state = action.value
      break
    default:
      break
  }
  return state
}
function getPriceUp(state = 1, action) {
  switch (action.type) {
    case GET_PRICEUP:
      // console.log('action', action.value)
      state = action.value
      break
    default:
      break
  }
  return state
}
function getPriceDown(state = 1, action) {
  switch (action.type) {
    case GET_PRICEDOWN:
      // console.log('action', action.value)
      state = action.value
      break
    default:
      break
  }
  return state
}
export {
  getStoreList,
  getDetail,
  getHot,
  getDiscount,
  getDogs,
  getCats,
  getPriceUp,
  getPriceDown,
}
