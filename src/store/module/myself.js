import { 
  shopcar,
  shopcarRemove,
  shopcarAdd,
  shopcarUpdate,
  settle,
  collect,
  collectRemove,
  collectAdd,
} from '@/api/api';
import { setToken, getToken ,getHour24} from '@/libs/util'
const state = {
  token: getToken(),
  shopcarList:[],//购物车列表
  shopdelList:[]//购物车删除列表
  ,allCheckCar:false//是否全选购物车
  ,collectList:[],//收藏夹列表
  collectDel:[]//收藏夹删除列表
  ,allCheckColl:false,
  shopcarBuy:[],
  shopcarRent:[]
}

const actions = {
  
  // 购物车商品列表
  getshopcar ({ commit }, p={userToken:getToken()}) {
    return new Promise((resolve, reject) => {
      shopcar(p).then(res => {
        const data = res.data
        commit('setShopcarList',data)
        commit('setShopdelListNone')
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  // 购物车管理
  getshopcarRemove({ commit },  p) {
    p={userToken:getToken(),string:state.shopdelList.join("!")}
    return new Promise((resolve, reject) => {
      shopcarRemove(p).then(res => {
        const data = res.data
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  // 购物车结算
  settle({ commit ,state},  p) {
    p={userToken:getToken(),string:state.shopdelList.join("!")}
    console.log(state.shopdelList)
    return new Promise((resolve, reject) => {
      settle(p).then(res => {
        const data = res.data
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  // 购物车添加
  getshopcarAdd({ commit },  p={userToken:getToken()}) {
    p=Object.assign({shopCar:p},{userToken:getToken()})
    return new Promise((resolve, reject) => {
      shopcarAdd(p).then(res => {
        const data = res.data
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  // 购物车更新
  getshopcarUpdate({ commit },  p) {
    p=Object.assign(p,{userToken:getToken()})
    return new Promise((resolve, reject) => {
      shopcarUpdate(p).then(res => {
        const data = res.data
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  // 收藏列表
  getcollect({ commit },  p={userToken:getToken()}) {
    return new Promise((resolve, reject) => {
      collect(p).then(res => {
        const data = res.data
        commit("setCollList",data)
        commit('setColldelListNone')
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  // 收藏夹删除
  getcollectRemove({ commit,state }, p) {
    console.log(state.collectDel)
    p={userToken:getToken(),string:state.collectDel.join("!")}
    return new Promise((resolve, reject) => {
      collectRemove(p).then(res => {
        const data = res.data
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  // 收藏夹添加
  getcollectAdd({ commit }, p={userToken:getToken()}) {
    p=Object.assign({collect:p},{userToken:getToken()})
    console.log(p)
    return new Promise((resolve, reject) => {
      collectAdd(p).then(res => {
        const data = res.data
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  // 租赁商品购物车
  handleRent({commit} ,p){
    commit("setRent",p)
  },
  // 购买商品购物车
  handleBuy({commit} ,p){
    commit("setBuy",p)
  }
}

const getters = {
  getRent(state){
    return state.shopcarRent
  },
  getBuy(state){
    return state.shopcarBuy
  },
  getShopDel(state){
    return state.shopdelList
  },
  getShopcarList(state){
    return state.shopcarList
  },
  getAllCheckCar(state){
    return state.allCheckCar
  },
  getCollDel(state){
    return state.collectDel
  },
  getCollList(state){
    return state.collectList
  },
  getAllCheckColl(state){
    return state.allCheckColl
  }
}

const mutations = {
  setRent(state,p){
    state.shopcarRent=p
  },
  setBuy(state,p){
    state.shopcarBuy=p
  },
  setShopcarList(state , data) {
    state.shopcarList=data
  },
  // 购物车全选
  setAllCheckCar(state, data) {
    // state.allCheckCar=data
  },
  // 更新购物车删除列表
  setShopdelList(state, data) {
    state.shopdelList=[...state.shopdelList,data]
  },
  //清空购物车删除列表
  setShopdelListNone(state) {
    state.shopdelList=[]
  },
  // 删除购物车列表中的某一个值
  removeShopdelList(state, data) {
    let newShopList=[]
    newShopList=state.shopdelList.filter(s=>{
      if(s==data){
        return false
      }else {
        return s
      }
    })
    state.shopdelList=newShopList
  },
  setCollList(state , data) {
    state.collectList=data
  },
  // 收藏夹全选
  setAllCheckColl(state, data) {
    // state.allCheckColl=data
    // console.log(data)
  },
  // 更新收藏夹删除列表
  setColldelList(state, data) {
    console.log(data)
    state.collectDel=[...state.collectDel,data]
    this.commit('setCheck')
  },
  //清空收藏夹删除列表
  setColldelListNone(state) {
    state.collectDel=[]
  },
  // 删除收藏夹列表中的某一个值
  removeColldelList(state, data) {
    let newShopList=[]
    newShopList=state.collectDel.filter(s=>{
      if(s==data){
        return false
      }else {
        return s
      }
    })
    state.collectDel=newShopList
    this.commit('setCheck')
  },
  setCheck(state,data){
    // if(state.collectList.length==state.collectDel.length)
    //   this.commit('setAllCheckColl',true)
    //   else{
    //     this.commit('setAllCheckColl',false)
    // }
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}