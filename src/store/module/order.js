import { 
  getOrder,
  nopay,
  pay ,
  nosend,
  issend,
  orderAappraise,
  orderDetails,
  removeOrder,
  sureShop,
  ordercancel,
  batchorder,
  buycommodity,
  pushorder
} from '@/api/api';
import { setToken, getToken ,getHour24} from '@/libs/util'
const state = {

}

const actions = {
  // 我的订单
  getOrderList ({ commit },  p={userToken:getToken()}) {
    return new Promise((resolve, reject) => {
      getOrder(p).then(res => {
        const data = res.data
        for(var i=0;i<data.length;i++){
          data[i].payOrdertime=getHour24(data[i].payOrdertime)
          data[i].completeTime=getHour24(data[i].completeTime)
        }
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  // 代付款
  getnopay ({ commit },  p) {
    p={
     
      userToken:getToken()
    }
    return new Promise((resolve, reject) => {
      nopay(p).then(res => {
        const data = res.data
        for(var i=0;i<data.length;i++){
          data[i].payOrdertime=getHour24(data[i].payOrdertime)
          data[i].completeTime=getHour24(data[i].completeTime)
        }
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  // 已付款
  getpay({ commit },  p) {
    p={
     
      userToken:getToken()
    }
    return new Promise((resolve, reject) => {
      pay(p).then(res => {
        const data = res.data
        for(var i=0;i<data.length;i++){
          data[i].payOrdertime=getHour24(data[i].payOrdertime)
          data[i].completeTime=getHour24(data[i].completeTime)
        }
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  },
    // 待发货
    getnosend({ commit },  p) {
      p={
       
        userToken:getToken()
      }
      return new Promise((resolve, reject) => {
        nosend(p).then(res => {
          const data = res.data
          for(var i=0;i<data.length;i++){
            data[i].payOrdertime=getHour24(data[i].payOrdertime)
            data[i].completeTime=getHour24(data[i].completeTime)
          }
          resolve(data)
        }).catch(err => {
          reject(err)
        })
      })
    },
      // 待收货
  getissend({ commit },  p) {
    p={
     
      userToken:getToken()
    }
    return new Promise((resolve, reject) => {
      issend(p).then(res => {
        const data = res.data
        for(var i=0;i<data.length;i++){
          data[i].payOrdertime=getHour24(data[i].payOrdertime)
          data[i].completeTime=getHour24(data[i].completeTime)
        }
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  },
    // 待评价
    getorderAappraise({ commit },  p) {
      p={
       
        userToken:getToken()
      }
      return new Promise((resolve, reject) => {
        orderAappraise(p).then(res => {
          const data = res.data
          for(var i=0;i<data.length;i++){
            data[i].payOrdertime=getHour24(data[i].payOrdertime)
            data[i].completeTime=getHour24(data[i].completeTime)
          }
          resolve(data)
        }).catch(err => {
          reject(err)
        })
      })
    },
     // 订单详情
     getorderDetails({ commit },  p) {
      p={
        string:p,
        userToken:getToken()
      }
      return new Promise((resolve, reject) => {
        orderDetails(p).then(res => {
          const data = res.data
          for(var i=0;i<data.length;i++){
            data[i].payOrdertime=getHour24(data[i].payOrdertime)
          }
          resolve(data)
        }).catch(err => {
          reject(err)
        })
      })
    },
       // 删除订单
       getremoveOrder({ commit },  p) {
        p={
          string:p,
          userToken:getToken()
        }
        return new Promise((resolve, reject) => {
          removeOrder(p).then(res => {
            const data = res.data
            resolve(data)
          }).catch(err => {
            reject(err)
          })
        })
      },
      // 确认收货
     getsureShop({ commit },  p) {
      p={
        string:p,
        userToken:getToken()
      }
      return new Promise((resolve, reject) => {
        sureShop(p).then(res => {
          const data = res.data
          resolve(data)
        }).catch(err => {
          reject(err)
        })
      })
    },
    // ordercancel,取消订单
    ordercancel({ commit },  p) {
      p=Object.assign(p,{userToken:getToken()})
      return new Promise((resolve, reject) => {
        ordercancel(p).then(res => {
          const data = res.data
          resolve(data)
        }).catch(err => {
          reject(err)
        })
      })
    },
    // batchorder,批量提交订单
    getbatchorder({ commit },  p) {
      p=Object.assign({order:p},{userToken:getToken()})
      return new Promise((resolve, reject) => {
        batchorder(p).then(res => {
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