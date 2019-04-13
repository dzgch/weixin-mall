import Vue from 'vue'
import axios from 'axios'; // 引入axios
import QS from 'qs'; // 引入qs模块，用来序列化post类型的数据

var instance = axios.create({
    //  设置请求前置路径
    baseURL: process.env.API_ROOT,
    timeout: 10000,
    // 设置允许携带cookie
    withCredentials:false
  });

  
  // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
  axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
  // 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
  
    /* 添加loading S */
   // startLoading()
    /* 添加loading E */
  
    return config
  }, function (error) {
    // 对请求错误做些什么
  
    /* 关闭loading S */
   // endLoading()
    /* 关闭loading E */
  
    return Promise.reject(error)
  })

  // 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
  
    /* 关闭loading S */
    //endLoading()
    /* 关闭loading E */
  
    return response
  }, function (error) {
    // 对响应错误做点什么
  
    /* 关闭loading S */
   // endLoading()
    /* 关闭loading E */
  
    return Promise.reject(error)
  })

  var httpRequest = {
    // get请求
    get (url, params) {
      console.log("get",QS.stringify(params))
      return new Promise((resolve, reject) => {
        instance({
          method: 'get',
          url: url,
          params: QS.stringify(params)
        }).then(response => {
          // 请求成功
          resolve(response.data)
        }).catch(err => {
          // 请求失败
          console.log('请求失败')
          reject(err)
        })
      })
    },
    // post请求
    post (url, data) {
      console.log(data)
      return new Promise((resolve, reject) => {
        instance({
          method: 'post',
          url: url,
          data: data
        }).then(response => {
          // 请求成功
          resolve(response.data)
        }).catch(err => {
          // 请求失败
          console.log('请求失败')
          reject(err)
        })
      })
    }
  }
  
  export default httpRequest;