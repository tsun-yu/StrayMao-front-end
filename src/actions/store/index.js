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
} from './actionTypes'

//actionCreater

// export const getRecommand = (value) => {
//   return { type: GET_RECOM, value }
// }

// export const getRecommandAsync = (value) => {
//   return async function getRecommandPet(dispatch, getState) {
//     const url = 'http://localhost:3001/straymao/adoption/get_pet_list/1'

//     const request = new Request(url, {
//       method: 'GET',
//       headers: new Headers({
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       }),
//     })
//     try {
//       const response = await fetch(request)
//       const data = await response.json()
//       // data會是一個物件值
//       console.log(data)

//       await dispatch(getRecommand(data.data[0]))
//     } catch (error) {
//       //setError(error)
//     }
//   }
// }

// export const petLike = (value) => {
//   return { type: PET_LIKE, like: value }
// }
// export const petDisLike = (value) => {
//   return { type: PET_DISLIKE, like: value }
// }
// export const petInitLike = (value) => {
//   return { type: PET_INIT, like: value }
// }
// export const petLikeAsync = (value) => {
//   return async function addPetHeart(dispatch, getState) {
//     const url = 'http://localhost:3001/straymao/adoption/pet_heart'
//     const pet = { petId: value, userId: 111 }
//     const request = new Request(url, {
//       method: 'POST',
//       body: JSON.stringify(pet),
//       headers: new Headers({
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       }),
//     })
//     try {
//       const response = await fetch(request)
//       const data = await response.json()
//       // data會是一個物件值
//       console.log(data)

//       await dispatch(petLike(true))
//     } catch (error) {
//       //setError(error)
//     }
//   }
// }

// export const petDisLikeAsync = (value) => {
//   return async function addPetHeart(dispatch, getState) {
//     const url = 'http://localhost:3001/straymao/adoption/pet_heart'
//     const pet = { petId: value, userId: 111 }
//     const request = new Request(url, {
//       method: 'DELETE',
//       body: JSON.stringify(pet),
//       headers: new Headers({
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       }),
//     })
//     try {
//       const response = await fetch(request)
//       const data = await response.json()
//       // data會是一個物件值
//       console.log(data)

//       await dispatch(petDisLike(false))
//     } catch (error) {
//       //setError(error)
//     }
//   }
// }

// export const petInitLikeAsync = (value) => {
//   return async function addPetHeart(dispatch, getState) {
//     const url = 'http://localhost:3001/straymao/adoption/pet_heart_init'
//     const pet = { petId: value, userId: 111 }
//     const request = new Request(url, {
//       method: 'POST',
//       body: JSON.stringify(pet),
//       headers: new Headers({
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       }),
//     })
//     try {
//       const response = await fetch(request)
//       const data = await response.json()
//       // data會是一個物件值
//       console.log('init:', data.data)
//       let dataValue = false
//       if (data.data.length > 0) {
//         dataValue = true
//       }
//       await dispatch(petInitLike(dataValue))
//     } catch (error) {
//       //setError(error)
//     }
//   }
// }

// 最新
export const getList = (value) => {
  return { type: GET_STORELIST, value }
}

export const getListAsync = (value) => {
  return async function getRecommandPet(dispatch, getState) {
    const url = 'http://localhost:3001/straymao/store/goods/news'

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    try {
      const response = await fetch(request)
      const data = await response.json()
      // data會是一個物件值
      console.log('最新: ', data)

      await dispatch(getList(data.data))
    } catch (error) {
      //setError(error)
    }
  }
}

//商品詳細資訊
export const getDetail = (value) => {
  return { type: GET_DETAIL, value }
}

export const getDetailAsync = (value) => {
  return async function getRecommandPet(dispatch, getState) {
    const url = 'http://localhost:3001/straymao/store/goods'

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    try {
      const response = await fetch(request)
      const data = await response.json()
      // data會是一個物件值
      console.log('詳細: ', data)

      await dispatch(getDetail(data.data))
    } catch (error) {
      //setError(error)
    }
  }
}

// get HotSale DATA From node.js
export const getHotSale = (value) => {
  return { type: GET_HOT, value }
}

export const getHotSaleAsync = (value) => {
  return async function getRecommandPet(dispatch, getState) {
    const url = 'http://localhost:3001/straymao/store/goods/sale'

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    try {
      const response = await fetch(request)
      const data = await response.json()
      // data會是一個物件值
      console.log('熱賣: ', data)

      await dispatch(getHotSale(data.data))
    } catch (error) {
      //setError(error)
    }
  }
}

// get discount DATA From node.js
export const getDiscount = (value) => {
  return { type: GET_DISCOUNT, value }
}

export const getDiscountAsync = (value) => {
  return async function getRecommandPet(dispatch, getState) {
    const url = 'http://localhost:3001/straymao/store/goods/discount'

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    try {
      const response = await fetch(request)
      const data = await response.json()
      // data會是一個物件值
      console.log('特價: ', data)

      await dispatch(getDiscount(data.data))
    } catch (error) {
      //setError(error)
    }
  }
}

// 狗
export const getDogsList = (value) => {
  return { type: GET_DOGS, value }
}

export const getDogsListAsync = (value) => {
  return async function getRecommandPet(dispatch, getState) {
    const url = 'http://localhost:3001/straymao/store/goods/dog'

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    try {
      const response = await fetch(request)
      const data = await response.json()
      // data會是一個物件值
      console.log('狗商品: ', data)

      await dispatch(getDogsList(data.data))
    } catch (error) {
      //setError(error)
    }
  }
}

// 貓
export const getCatsList = (value) => {
  return { type: GET_CATS, value }
}

export const getCatsListAsync = (value) => {
  return async function getRecommandPet(dispatch, getState) {
    const url = 'http://localhost:3001/straymao/store/goods/cat'

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    try {
      const response = await fetch(request)
      const data = await response.json()
      // data會是一個物件值
      console.log('貓商品: ', data)

      await dispatch(getCatsList(data.data))
    } catch (error) {
      //setError(error)
    }
  }
}

// 價高到價低
export const getPriceUp = (value) => {
  return { type: GET_PRICEUP, value }
}

export const getPriceUpAsync = (value) => {
  return async function getRecommandPet(dispatch, getState) {
    const url = 'http://localhost:3001/straymao/store/goods/priceU'

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    try {
      const response = await fetch(request)
      const data = await response.json()
      // data會是一個物件值
      console.log('價高到價低: ', data)

      await dispatch(getPriceUp(data.data))
    } catch (error) {
      //setError(error)
    }
  }
}

// 價低到價高
export const getPriceDown = (value) => {
  return { type: GET_PRICEDOWN, value }
}

export const getPriceDownAsync = (value) => {
  return async function getRecommandPet(dispatch, getState) {
    const url = 'http://localhost:3001/straymao/store/goods/priceD'

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    try {
      const response = await fetch(request)
      const data = await response.json()
      // data會是一個物件值
      console.log('價低到價高: ', data)

      await dispatch(getPriceDown(data.data))
    } catch (error) {
      //setError(error)
    }
  }
}
