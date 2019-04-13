import { getShop,newshop,hotshop ,selectRentCommodity,selectcommodity} from '@/api/api';
import { setToken, getToken } from '@/libs/util'
const state = {
  token: getToken()
}

const actions = {
  getShopList ({ commit }, p) {
    return new Promise((resolve, reject) => {
      getShop(p).then(res => {
        const data = res.data
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  getnewshop ({ commit }, p) {
    return new Promise((resolve, reject) => {
      newshop(p).then(res => {
        const data = res.data
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  gethotshop({ commit }, p) {
    return new Promise((resolve, reject) => {
      hotshop(p).then(res => {
        const data = res.data
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  getselectRentCommodity ({ commit }, p) {
    return new Promise((resolve, reject) => {
      selectRentCommodity(p).then(res => {
        const data = res.data
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  getselectcommodity ({ commit }, p) {
    return new Promise((resolve, reject) => {
      selectcommodity(p).then(res => {
        const data = res.data
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  },
}

const getters = {

}

const mutations = {

}

export default {
  state,
  actions,
  getters,
  mutations
}