import { appraise,
  myappraise,
  appraiseAdd,
  appraiseRemove
 } from '@/api/api';
import { setToken, getToken,setInvitation,getInvitation } from '@/libs/util'
const state = {
  token: getToken(),
  
  
}

const actions = {
  getappraise ({ commit }, p) {
    p={...p,userToken:getToken()}
    return new Promise((resolve, reject) => {
      appraise(p).then(res => {
        const data = res.data
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  getmyappraise ({ commit }, { openID, ip }) {
    return new Promise((resolve, reject) => {
      myappraise({
        openID:123,
        ip:123
      }).then(res => {
        const data = res.data
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  getappraiseAdd ({ commit }, p) {
    p=Object.assign(p,{userToken:getToken()})
    return new Promise((resolve, reject) => {
      appraiseAdd(p).then(res => {
        const data = res.data
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  getappraiseRemove ({ commit }, p) {
    return new Promise((resolve, reject) => {
      appraiseRemove(p).then(res => {
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