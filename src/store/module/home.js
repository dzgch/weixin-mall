import { getHome,mechanical,medicament ,technical,abouts} from '@/api/api';
import { setToken, getToken } from '@/libs/util'
const state = {
  token: getToken()
}

const actions = {
  getHomeList ({ commit }, p) {
    p={userToken:'5O1555149719311'}
    return new Promise((resolve, reject) => {
      getHome(p).then(res => {
        const data = res.data
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  getmechanical ({ commit }, p) {
    return new Promise((resolve, reject) => {
      mechanical(p).then(res => {
        const data = res.data
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  getmedicament ({ commit }, p) {
    return new Promise((resolve, reject) => {
      medicament(p).then(res => {
        const data = res.data
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  },
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