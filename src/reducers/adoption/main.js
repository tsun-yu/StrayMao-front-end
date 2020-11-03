import { GET_RECOM } from "../../actions/adoption/actionTypes";

function getRecom(state = 1, action) {
  switch (action.type) {
    case GET_RECOM:
      state = action.value;
      break;
    default:
      break;
  }
  return state;
}
export { getRecom };
// export default totalPage;
