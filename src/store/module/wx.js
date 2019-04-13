import { getSdkSign,getauthorize } from '@/api/api';
const state = {
  
}

const actions = {
  getSdkSign ({ commit }, {}) {
    return new Promise((resolve, reject) => {
      getSdkSign({}).then(res => {
        const data = res.data
        wx.config({
          debug: false, // 因为在手机上测试没法打印，当debug为true时，所有的返回值都会在手机上alert出来
          appId: data.appId, // 必填，公众号唯一标识
          timestamp: data.timestamp, // 必填，生成签名的时间戳
          nonceStr: data.nonceStr, // 必填，生成签名的随机串
          signature: data.signature,// 必填，签名
          jsApiList: ['chooseImage','uploadImage','previewImage','getLocation'] // 必填，需要使用的JS接口列表，需要用到什么接口就去开发者文档查看相应的字段名
        });
      wx.ready(function(){
        // 定位
        wx.getLocation({
          type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
          success: function (res) {
          var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
          var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
          var speed = res.speed; // 速度，以米/每秒计
          var accuracy = res.accuracy; // 位置精度
          }
          });
        // 拍照或从手机相册选取
        wx.chooseImage({
          count: 1, // 默认9
          sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
          success: function (res) {
          var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
          }
          });
          //预览图片
          wx.previewImage({
            current: '', // 当前显示图片的http链接
            urls: [] // 需要预览的图片http链接列表
            });

        });
        resolve()
      }).catch(err => {
        reject(err)
      })
    })
  },
  authorize ({ commit }, p) {
    return new Promise((resolve, reject) => {
      getauthorize(p).then(res => {
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