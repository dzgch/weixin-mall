import { getHome,mechanical,medicament ,technical,abouts} from '@/api/api';
import { setToken, getToken } from '@/libs/util'
const state = {
  token: getToken()
}

const actions = {
  getHomeList ({ commit }, p) {
    p={userToken:getToken()}
    return new Promise((resolve, reject) => {
      getHome(p).then(res => {
        const data = res.data
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  // 获取电动机械
  getmechanical ({ commit },  p={userToken:getToken()}) {
    return new Promise((resolve, reject) => {
      mechanical(p).then(res => {
        const data = res.data
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  // 获取园林药剂
  getmedicament ({ commit },  p={userToken:getToken()}) {
    return new Promise((resolve, reject) => {
      medicament(p).then(res => {
        const data = res.data
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  // 获取技术支持
  gettechnical ({ commit }, p) {
    return new Promise((resolve, reject) => {
      technical(p).then(res => {
        const data = res.data
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  // 获取关于我们
  getabouts ({ commit }, p) {
    return new Promise((resolve, reject) => {
      abouts(p).then(res => {
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