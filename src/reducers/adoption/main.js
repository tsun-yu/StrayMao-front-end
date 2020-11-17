import { act } from 'react-dom/test-utils';
import {
  GET_RECOM,
  GET_DETAIL,
  PET_CANCLE,
  PET_DISLIKE,
  PET_INIT,
  PET_LIKE,
  GET_LIST,
  SET_DETAIL_PET_ID,
  SET_ADOP_ID,
  GET_ADOP_ID,
  ADD_ADOP,
} from '../../actions/adoption/actionTypes';

function addPet(state = 1, action) {
  switch (action.type) {
    case ADD_ADOP:
      state = state;
      break;
    default:
      break;
  }
  return state;
}

function adopId(state = 1, action) {
  switch (action.type) {
    case SET_ADOP_ID:
      state = action.value;
      break;
    case GET_ADOP_ID:
      state = state;
      break;
    default:
      break;
  }
  return state;
}
function getRecom(
  state = [{ pic: '', name: '', gender: '', age: '', area: '', des: '' }],
  action
) {
  switch (action.type) {
    case GET_RECOM:
      state = action.value;
      break;
    default:
      break;
  }
  return state;
}
function getDetail(state = [{}], action) {
  switch (action.type) {
    case GET_DETAIL:
      console.log('reducer: ', action.value);
      state = action.value;
      break;
    default:
      break;
  }
  return state;
}
function getList(state = 1, action) {
  switch (action.type) {
    case GET_LIST:
      // console.log("reducer!!!", action.value);
      state = action.value;
      break;
    default:
      break;
  }
  return state;
}
function petHeart(state = false, action) {
  switch (action.type) {
    case PET_LIKE:
      state = true;
      break;
    case PET_DISLIKE:
      state = false;
      break;
    case PET_INIT:
      state = action.like;
      break;
    default:
      break;
  }
  return state;
}
function petDetailId(state = 1, action) {
  switch (action.type) {
    case SET_DETAIL_PET_ID:
      // console.log("set:", action.id);
      state = action.id;
      break;
    default:
      break;
  }
  return state;
}
export { getRecom, petHeart, getList, getDetail, petDetailId, adopId, addPet };
// export default totalPage;
