import { combineReducers } from 'redux'

<<<<<<< HEAD
import { getRecom, petHeart, getList } from './main'
=======
import { getRecom, petHeart, getList, getDetail, petDetailId } from "./main";
>>>>>>> 6264cc9997f0a3182b1f9b7767d88642000ac679

// //combine all reducer to a big reducer
export const adoptReducer = combineReducers({
  getRecom,
  petHeart,
  getList,
<<<<<<< HEAD
})
=======
  getDetail,
  petDetailId,
});
>>>>>>> 6264cc9997f0a3182b1f9b7767d88642000ac679
