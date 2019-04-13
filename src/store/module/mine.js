import api from '@/api/api';
const state = {
  // 商品详情页签
  tagList: ['商品详情', '商品评价'],
  tagType: '0'
  // 订单页签
  ,orderTagList: ['全部', '待付款','待发货','待收货','待评价'],
  orderTagType: '0'
  ,typeTagList:['购买订单','租赁订单']
  ,typeTagType:'0'
  // 是否显示租赁弹出框
  ,showToast:false
}

const actions = {
  
}

const getters = {
  getTagType(state){
    return state.tagType;
  },
  getOrderTagType(state){
    return state.orderTagType;
  },
  getShowToast(state){
    return state.showToast;
  }
}

const mutations = {
  updateTagType(state,index){
    state.tagType=index;
  },
  updateOrderTagType(state,index){
    state.orderTagType=index;
  },
  updateShowToast(state,index){
    state.showToast=index;
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}