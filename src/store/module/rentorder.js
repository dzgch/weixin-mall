import { 
  rentordercancel,
  rentorder,
  rentorderparticulars,
  rentordernopay,
  rentorderpay,
  rentordernosend,
  rentorderissend,
  rentorderappraise,
  rentcommodity,
  pushrentorder,
  batchrentorder
} from '@/api/api';
import { setToken, getToken ,getHour24} from '@/libs/util'
const state = {
  token: getToken(),
}

const actions = {
  // rentordercancel,取消租赁订单
  rentordercancel({ commit },  p) {
    p=Object.assign(p,{userToken:getToken()})
    return new Promise((resolve, reject) => {
      rentordercancel(p).then(res => {
        const data = res.data
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  // rentorder,我的租赁订单
  rentorder({ commit },  p) {
    p={
      string:p,
      userToken:getToken()
    }
    return new Promise((resolve, reject) => {
      rentorder(p).then(res => {
        const data = res.data
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  // rentorderparticulars,租赁订单详情
  rentorderparticulars({ commit },  p) {
    p={
      string:p,
      userToken:getToken()
    }
    return new Promise((resolve, reject) => {
      rentorderparticulars(p).then(res => {
        const data = res.data
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  // rentordernopay,租赁待付款
  rentordernopay({ commit },  p) {
    p={
      userToken:getToken()
    }
    return new Promise((resolve, reject) => {
      rentordernopay(p).then(res => {
        const data = res.data
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  // rentorderpay,租赁已付款
  rentorderpay({ commit },  p) {
    p={
      string:p,
      userToken:getToken()
    }
    return new Promise((resolve, reject) => {
      rentorderpay(p).then(res => {
        const data = res.data
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  // rentordernosend,租赁待发货
  rentordernosend({ commit },  p) {
    p={
      userToken:getToken()
    }
    return new Promise((resolve, reject) => {
      rentordernosend(p).then(res => {
        const data = res.data
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  // rentorderissend,租赁待收货
  rentorderissend({ commit },  p) {
    p={
      userToken:getToken()
    }
    return new Promise((resolve, reject) => {
      rentorderissend(p).then(res => {
        const data = res.data
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  // rentorderappraise,租赁待评价
  rentorderappraise({ commit },  p) {
    p={
      userToken:getToken()
    }
    return new Promise((resolve, reject) => {
      rentorderappraise(p).then(res => {
        const data = res.data
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  // batchrentorder 批量提交租赁订单
  batchrentorder({ commit },  p) {
    p=Object.assign({rentOrder:p},{userToken:getToken()})
    return new Promise((resolve, reject) => {
      batchrentorder(p).then(res => {
        const data = res.data
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  // 租赁订单
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