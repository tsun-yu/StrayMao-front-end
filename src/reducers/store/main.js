import {
  GET_STORELIST,
  GET_SORT,
  GET_DETAIL,
  GET_HOT,
} from '../../actions/store/actionTypes'

// function getList(state = 1, action) {
function getStoreList(state = 1, action) {
  switch (action.type) {
    case GET_STORELIST:
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
      state = action.value
      break
    default:
      break
  }
  return state
}
export { getStoreList, getHot }
