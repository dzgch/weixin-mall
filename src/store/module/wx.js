import { getwxuserinfo,getauthorize } from '@/api/api';
import { setToken, getToken,setInvitation,getInvitation } from '@/libs/util'
import wx from 'weixin-js-sdk'
const state = {
  token: getToken(),
  username:"",
  userid:"",
  distributor:"",
  headimgurl:"",
  address:""
}

const actions = {
  getSdkSign ({ commit }, p) {
    console.log(p)
    return new Promise((resolve, reject) => {
      getwxuserinfo(p).then(res => {
        const data = res.data
        console.log(res)
        setToken(data.user.userToken)
        commit('setToken', data.user.userToken)
        commit('setUserid', data.user.id)
        commit('setDistributor', data.user.distributor)
        commit('setUserName', data.user.nickName)
        commit('setHeadImgUrl', data.user.headImgUrl)
        wx.config({
          debug: true, // 因为在手机上测试没法打印，当debug为true时，所有的返回值都会在手机上alert出来
          appId: data.signature.appId, // 必填，公众号唯一标识
          timestamp: data.signature.timestamp, // 必填，生成签名的时间戳
          nonceStr: data.signature.nonceStr, // 必填，生成签名的随机串
          signature: data.signature.signature,// 必填，签名
          jsApiList: ['chooseWXPay','chooseImage','uploadImage','previewImage','getLocation'] // 必填，需要使用的JS接口列表，需要用到什么接口就去开发者文档查看相应的字段名
        });
      wx.ready(function(){
        // 定位
        wx.getLocation({
          type: 'gcj02', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
          success: function (res) {
          var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
          var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
          var speed = res.speed; // 速度，以米/每秒计
          var accuracy = res.accuracy; // 位置精度
          console.log(res)
          }
          });
            wx.chooseWXPay({
              timestamp: data.signature.timestamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
              nonceStr: data.signature.nonceStr, // 支付签名随机串，不长于 32 位
              package: "prepay_id="+"", // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
              signType: 'MD5', // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
              paySign: data.signature.sign, // 支付签名
              success: function (res) {
              // 支付成功后的回调函数
                  if(res.errMsg == "chooseWXPay:ok"){
                    //alert("支付成功");

                }else{
                    alert(res.errMsg);
                }
              }
              });
        });
        wx.error(function(res){
          // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
        });
        resolve()
      }).catch(err => {
        reject(err)
      })
    })
  },
  authorize ({ commit }, p) {
    console.log(p,getToken())
    return new Promise((resolve, reject) => {
      getauthorize({
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
}

const getters = {

}

const mutations = {
  setToken(state, data){
    setToken(data)
    state.token=data
  },
  setUserName(state, data) {
    state.username=data
  },
  setHeadImgUrl(state, data){
    state.headimgurl=data
  },
  setUserId(state, data) {
    state.userid=data
  },
  setDistributor(state, data){
    state.distributor=data
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}