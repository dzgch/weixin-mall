import { getOrder,nopay,pay ,shopcar,shopcarManage,collect,collectManage} from '@/api/api';
import { setToken, getToken } from '@/libs/util'
const state = {
  token: getToken()
}

const actions = {
  getOrderList ({ commit }, p) {
    return new Promise((resolve, reject) => {
      getOrder(p).then(res => {
        const data = res.data
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  getnopay ({ commit }, p) {
    return new Promise((resolve, reject) => {
      nopay(p).then(res => {
        const data = res.data
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  getpay({ commit }, p) {
    return new Promise((resolve, reject) => {
      pay(p).then(res => {
        const data = res.data
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  getshopcar ({ commit }, p) {
    return new Promise((resolve, reject) => {
      shopcar(p).then(res => {
        const data = res.data
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  getshopcarManage({ commit }, p) {
    return new Promise((resolve, reject) => {
      shopcarManage(p).then(res => {
        const data = res.data
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  getcollect({ commit }, p) {
    return new Promise((resolve, reject) => {
      collect(p).then(res => {
        const data = res.data
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  getcollectManage({ commit }, p) {
    return new Promise((resolve, reject) => {
      collectManage(p).then(res => {
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