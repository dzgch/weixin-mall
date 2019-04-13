import { usersigup,userlogin,userlogout } from '@/api/api';
import { setToken, getToken } from '@/libs/util'
const state = {
  token: getToken()
}

const actions = {
  getusersigup ({ commit }, p) {
    return new Promise((resolve, reject) => {
      usersigup(p).then(res => {
        const data = res.data
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  getuserlogin ({ commit }, { openID, ip }) {
    return new Promise((resolve, reject) => {
      userlogin({
        openID:123,
        ip:123
      }).then(res => {
        const data = res.data
        commit('setToken', data.token)
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  getuserlogout ({ commit }, p) {
    return new Promise((resolve, reject) => {
      userlogout(p).then(res => {
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
  setToken (state, token) {
    state.token = token
    setToken(token)
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}