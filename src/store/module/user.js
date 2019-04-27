import { usersigup,
  userlogin,
  userlogout,
  getinvitation,
  noinvitationcode
 } from '@/api/api';
import { setToken, getToken,setInvitation,getInvitation } from '@/libs/util'
const state = {
  token: getToken(),
  invitation:getInvitation()
  ,userid:''
  ,distributor:''
  ,username:''
  
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
        commit('setToken', data.userToken)
        commit('setUserid', data.id)
        commit('setDistributor', data.distributor)
        console.log(data.userToken)
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  getuserlogout ({ commit }, p) {
    return new Promise((resolve, reject) => {
      userlogout({
        userToken:getToken()
      }).then(res => {
        const data = res.data
        setToken("")
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  getinvitation ({ commit }, p) {
    return new Promise((resolve, reject) => {
      getinvitation({
        userToken:getToken(),
        string:p
      }).then(res => {
        const data = res.data
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  getnoinvitationcode ({ commit }, p) {
    return new Promise((resolve, reject) => {
      noinvitationcode({
        userToken:getToken(),
      }).then(res => {
        const data = res.data
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  handleIsNotInvitation({ commit } , data){
    commit("setInvitation",data)
  },
}

const getters = {

}

const mutations = {
  setToken (state, token) {
    state.token = token
    setToken(token)
  },
  setInvitation (state, invitation) {
    state.invitation = invitation
    setInvitation(invitation)
  },
  setUserid( state, userid ){
    state.userid = userid
  },
  setDistributor (state, distributor) {
    state.distributor = distributor
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}