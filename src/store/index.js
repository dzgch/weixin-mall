import Vue from 'vue'
import Vuex from 'vuex'
import vuexI18n from 'vuex-i18n'
import mine from './module/mine'
import user from './module/user'
import wx from './module/wx'
import home from './module/home'
import goods from './module/goods'
import myself from './module/myself'

Vue.use(Vuex);
let store=new Vuex.Store({
  state:{
    myCenterList:[
      {title:"我的订单",is_link:true,link:"/order",iconClass:["iconfont icondingdandingdanmingxishouzhimingxi"]},
      {title:"购物车",is_link:true,link:"/shopcar",iconClass:["iconfont icongouwuche1"]},
      {title:"我的收藏",is_link:true,link:"/collect",iconClass:["iconfont icontubiao_wuxing-"]},
      {title:"优惠券",is_link:true,link:"/",iconClass:["iconfont iconyouhuiquan"]},
      {title:"地址管理",is_link:true,link:"/address",iconClass:["iconfont icondizhi1"]},
      {title:"分享",is_link:true,link:"/invitation_code",iconClass:["iconfont iconfenxiang"]},
      {title:"客服热线",is_link:true,link:"/",iconClass:["iconfont iconphone-channel"]},
      ],
      moneyLink:""//账户余额充值
      ,goodsDetailsPath:"/goodsdetails"//商品详情页
      ,gotoBuyPath:"/sureorder"//立即购买路径
      ,loanPath:"/sureloan"//租赁路径
      ,homePath:"/home"//租赁路径
      ,isNotInvitation:false
  },
  mutations:{
    setIsNotInvitation(state,data){
      state.isNotInvitation = data
    }
  },
  actions:{
    handleIsNotInvitation({ commit } , data){
      commit("setIsNotInvitation",data)
    }
  },
  getters:{

  },
  modules: {
    mine,
    user,
    wx,
    home,
    goods,
    myself,
    i18n: vuexI18n.store
  }
});

Vue.use(vuexI18n.plugin, store)

export default store