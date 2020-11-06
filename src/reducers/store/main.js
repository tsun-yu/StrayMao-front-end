import { GET_STORELIST } from '../../actions/store/actionTypes'
function getList(state = 1, action) {
  switch (action.type) {
    case GET_STORELIST:
      state = action.value
      break
    default:
      break
  }
  return state
}
export { getList }
