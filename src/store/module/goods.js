import { getShop,
  newshop,
  hotshop ,
  selectRentCommodity,
  selectcommodity,
  classlist,
  select,
  selectByName,
  selectcommoditybyid
} from '@/api/api';
import { setToken, getToken } from '@/libs/util'
const state = {
  token: getToken()
}

const actions = {
  getShopList ({ commit }, p) {
    p={userToken:getToken()}
    return new Promise((resolve, reject) => {
      getShop(p).then(res => {
        const data = res.data
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  getnewshop ({ commit }, p={userToken:getToken()}) {
    return new Promise((resolve, reject) => {
      newshop(p).then(res => {
        const data = res.data
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  gethotshop({ commit }, p={userToken:getToken()}) {
    return new Promise((resolve, reject) => {
      hotshop(p).then(res => {
        const data = res.data
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  getselectRentCommodity ({ commit }, p={userToken:getToken()}) {
    return new Promise((resolve, reject) => {
      selectRentCommodity(p).then(res => {
        const data = res.data
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  // 获取全部商品
  getselectcommodity ({ commit }, p={userToken:getToken()}) {
    return new Promise((resolve, reject) => {
      selectcommodity(p).then(res => {
        const data = res.data
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  },
    // 查询分类
    getclasslist ({ commit }, p) {
      p={userToken:getToken()}
      return new Promise((resolve, reject) => {
        classlist(p).then(res => {
          const data = res.data
          resolve(data)
        }).catch(err => {
          reject(err)
        })
      })
    },
      // 根据分类查询物品
  getselect ({ commit }, p) {
    console.log(p)
    p=Object.assign(p,{userToken:getToken()})
    return new Promise((resolve, reject) => {
      select(p).then(res => {
        const data = res.data
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  },
    // 根据名称查询物品
    getselectByName ({ commit },p) {
      p={string:p,userToken:getToken()}
      return new Promise((resolve, reject) => {
        selectByName(p).then(res => {
          const data = res.data
          resolve(data)
        }).catch(err => {
          reject(err)
        })
      })
    },
      // 根据id查询物品
  getselectcommoditybyid ({ commit }, p) {
    p={userToken:getToken(),string:p}
    return new Promise((resolve, reject) => {
      selectcommoditybyid(p).then(res => {
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