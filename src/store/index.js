import Vue from 'vue'
import Vuex from 'vuex'
import vuexI18n from 'vuex-i18n'
import mine from './module/mine'
import user from './module/user'
import wx from './module/wx'
import home from './module/home'
import goods from './module/goods'
import myself from './module/myself'
import apparise from './module/apparise'
import address from './module/address'
import order from './module/order'
import rentorder from './module/rentorder'

Vue.use(Vuex);
let store=new Vuex.Store({
  state:{
    myCenterList:[
      {title:"我的订单",is_link:true,link:"/order",iconClass:["iconfont icondingdandingdanmingxishouzhimingxi"]},
      {title:"购物车",is_link:true,link:"/shopcar",iconClass:["iconfont icongouwuche1"]},
      {title:"我的收藏",is_link:true,link:"/collect",iconClass:["iconfont icontubiao_wuxing-"]},
      // {title:"优惠券",is_link:true,link:"/",iconClass:["iconfont iconyouhuiquan"]},
      {title:"地址管理",is_link:true,link:"/address",iconClass:["iconfont icondizhi1"]},
      // {title:"分享",is_link:true,link:"/invitation_code",iconClass:["iconfont iconfenxiang"]},
      // {title:"客服热线",is_link:true,link:"/",iconClass:["iconfont iconphone-channel"]},
      ],
    moneyLink:""//账户余额充值
    ,goodsDetailsPath:"/goodsdetails"//商品详情页
    ,gotoBuyPath:"/sureorder"//立即购买路径
    ,gotoBuyName:"sureorder"//立即购买路径
    ,loanPath:"/sureloan"//租赁路径
    ,loanName:"sureloan"//租赁路径
    ,addressPath:"/address"//地址路径
    ,addressName:"address"//地址路径
    ,homePath:"/"//首页
    ,buyAddress:{}//购买商品时的地址选择
    ,goodsSureMsg:{
      allMoney:0//总价格
      ,disPrice:0//优惠卷
      ,ordernum:1//订单数量
      ,prePrice:0//原始价格
      ,freight:0//运费
    },
    goodsDetails:{}//一件商品详情信息
    ,moreGoods:[]//多件商品详情信息
    ,footerList:[
      {imgUrl:"iconfont iconhome",name:'首页',link:'/',selected:false},
      {imgUrl:"iconfont icongouwuche",name:'商城' ,link:'/mall',selected:false},
      // {imgUrl:"iconfont icongongneng_fabuxuqiu",name:'预约',link:'/',selected:false},
      // {imgUrl:"iconfont iconpeixunjihua",name:'培训',badge:"",selected:false},
      {imgUrl:"iconfont iconyonghu",name:'我的',badge:"",link:'/myself',selected:false}
    ]
  },
  mutations:{
    // 点击底部导航
    changeFooter( state, index){
      state.footerList[index].selected=true
      console.log(state.footerList)
      for(var i=0;i<state.footerList.length;i++){
        if(i!==index){
          state.footerList[i].selected = false
        }
      }
    },
    // 购买时订单选择的地址
    changeAddress( state, data){
      state.buyAddress=data
    },
    // 订单购买数量
    setOrdernum(state, data) {
      state.goodsSureMsg.ordernum=data
      state.goodsSureMsg.allMoney=state.goodsSureMsg.prePrice*Number(data)
    },
    // 原始价格
    setPrePrice(state, data) {
      state.goodsSureMsg.prePrice= data
    },
    // 总价格
    setAllMoney(state, data) {
      state.goodsSureMsg.allMoney=data
    },
    // 运费
    setFare(state, data) {
      state.goodsSureMsg.freight=data
    },
    // 一件商品详情
    setGoodsDetails(state, data) {
      state.goodsDetails = data
    }
  },
  actions:{
    
    handleChangeFooter({ commit } , data){
      commit("changeFooter",data)
    },
    handlePrePrice({commit},data) {
      commit("setPrePrice",data)
    },
    handleAllMoney({commit},data) {
      commit("setAllMoney",data)
    },
    handleFare({commit},data){
      commit('setFare',data)
    },
    handleGoodsDetails({commit},data){
      commit('setGoodsDetails',data)
    }
  },
  getters:{
    getfooterList(state){
      return state.footerList
    }
  },
  modules: {
    mine,
    user,
    wx,
    home,
    goods,
    myself,
    address,
    apparise,
    rentorder,
    order,
    i18n: vuexI18n.store
  }
});

Vue.use(vuexI18n.plugin, store)

export default store