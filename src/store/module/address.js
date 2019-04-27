import { addressAdd,
  addressRemove,
  addressUpdate,
  addressSelect,
  addressSetmain,
  addressGetmain
 } from '@/api/api';
import { setToken, getToken,setInvitation,getInvitation } from '@/libs/util'
const state = {
  token: getToken(),
  oneAddress:{},
  addrUser:"",
  addrPhone:"",
  addrLarge:"",
  addrSmall:"",
  addrMain:0
}

const actions = {
  getaddressAdd ({ commit,state }, p) {
    console.log(state)
    p={
      userToken:getToken(),
      addr:{
        addr:state.addrLarge+"-"+state.addrSmall,
        username:state.addrUser,
        phone:state.addrPhone,
        main:state.addrMain,
      }
    }
    return new Promise((resolve, reject) => {
      addressAdd(p).then(res => {
        const data = res.data
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  getaddressRemove ({ commit }, p) {
    return new Promise((resolve, reject) => {
      addressRemove({
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
  getaddressUpdate ({ commit }, p) {
    p={
      userToken:getToken(),
      addr:{
        addr:state.addrLarge+"-"+state.addrSmall,
        username:state.addrUser,
        phone:state.addrPhone,
        main:state.addrMain,
      }
    }
    return new Promise((resolve, reject) => {
      addressUpdate(p).then(res => {
        const data = res.data
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  getaddressSelect ({ commit }, p) {
    return new Promise((resolve, reject) => {
      addressSelect({
        userToken:getToken()
      }).then(res => {
        console.log(res)
        const data = res.data
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  getaddressSetmain ({ commit }, p) {
    return new Promise((resolve, reject) => {
      addressSetmain({
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
  getaddressGetmain ({ commit }, p) {
    return new Promise((resolve, reject) => {
      addressGetmain({
        userToken:getToken()
      }).then(res => {
        const data = res.data
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  handleOneAddress({commit},data){
    commit("setOneAddress",data)
  },
  handleAddrUser({commit},data){
    console.log(data)
    commit("setAddrUser",data)
  },
  handleAddrPhone({commit},data){
    commit("setAddrPhone",data)
  },
  handleAddrLarge({commit},data){
    commit("setAddrLarge",data)
  },
  handleAddrSmall({commit},data){
    commit("setAddrSmall",data)
  },
  handleAddrMain({commit},data){
    commit("setAddrMain",data)
  },
  handleClearAddr({commit},data){
    commit("setClearAddr",data)
  }
}

const getters = {
  getOneAddress(state){
    return state.oneAddress
  },
  getAddrUser(state){
    console.log(state)
    return state.addrUser
  },
  getAddrPhone(state){
    return state.addrPhone
  },
  getAddrLarge(state){
    return state.addrLarge
  },
  getAddrSmall(state){
    return state.addrSmall
  },
  getAddrMain(state){
    return state.addrMain
  },

}

const mutations = {
  setOneAddress(state,data){
    state.oneAddress=data
    state.addrUser=data.username
    state.addrPhone=data.phone
    state.addrLarge=data.addr.split("-")[0]
    if(data.addr.indexOf("-")>0)
    state.addrSmall=data.addr.split("-")[1]
    state.addrMain=data.main
  },
  setAddrUser(state,data){
    state.addrUser=data
  },
  setAddrPhone(state,data){
    state.addrPhone=data
  },
  setAddrLarge(state,data){
    state.addrLarge=data
  },
  setAddrSmall(state,data){
    state.addrSmall=data
  },
  setAddrMain(state,data){
    state.addrMain=data
  },
  setClearAddr(state,data){
    state.addrMain=0
    state.addrUser=""
    state.addrLarge=""
    state.addrPhone=""
    state.addrSmall=""
    state.oneAddress={}
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}