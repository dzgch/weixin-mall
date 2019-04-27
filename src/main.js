// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index.js'
import FastClick from 'fastclick'
import Vuex from 'vuex'
import { setToken, getToken,getInvitation,setInvitation,getCode,setCode } from './libs/util'
import  { ToastPlugin } from 'vux'
Vue.use(Vuex)
Vue.use(ToastPlugin)
// import api from './api/api'
import store from './store/index.js'
//移动端适配
import 'lib-flexible/flexible.js'

// Vue.prototype.$api = api;//将axios挂载到Vue实例中的$ajax上面,在项目中的任何位置通过this.$api使用
//点击事件优化
Vue.config.productionTip = false
FastClick.attach( document.body );

require('es6-promise').polyfill()



/* eslint-disable no-new */
/**
 */
// setToken("5O1554642125630")
const token = getToken()
console.log(token)
let checkIsLoginGotologin = function(to, next) {
 
  let isNotInvitation=store.state.user.invitation
  if(to.name === "home"){
    store.commit("changeFooter",0)
  }
  if ( token && to.name !== LOGIN_PAGE_NAME ) {
    //已登录， 要跳转的页面不是填写邀请码页,
    if ( !isNotInvitation ){//未填写邀请码
      next({
        name: LOGIN_PAGE_NAME // 跳转到邀请码页
      })
    } else {//已填写邀请码
      next()
    }
  }else if ( token && to.name === LOGIN_PAGE_NAME ) {
    // 已登录且要跳转的页面是填写邀请码页,
    
    if ( isNotInvitation ){//已填写邀请码或无需邀请码
      next({
        name: 'home' // 跳转到homeName页
      })
    } else {//未填写邀请码
      next()
    }
  } else {
    next()
  }
}

let getCodePullCode = async function(url,to,next) {
  let mycode = url.substring(url.indexOf('code=') + 5, url.indexOf('state=') - 1);// 前台截取code
  console.log(store);
  store.dispatch("getSdkSign",{code:mycode,ip:"192.0.0.1"}).then(res=>{
    location.href = `${URL}?a=1`;
  })
// selfStore.set('wechatCodeStr', mycode); // 存储code
// 传送给后台code
    // await axios
    //   .get("/home/WxSignature/getCode", {
    //     params: {
    //       code: mycode
    //     }
    //   })
    //   .then(res => {
    //     //需要登录
    //     var res = res.data;
    //     if (res && res.status === 1) {
    //       selfStore.set('openId', res.data);//本地存储Openid，也可以不存储。由后台调配

    //       location.href = `http://m.example.com/?a=1#${location.href.split('#')[1]}`; // 增加a=1 防止支付错误 防止前台死循环
    //     }
    //   });
}

/**
* 全局路由
* @DateTime 2019-04-13
*/
const LOGIN_PAGE_NAME = 'invitation_code'
let URL=''
router.beforeEach((to, from, next) => {
  // 判断用户有无填写邀请码，有则跳过邀请码页
  // 代码。。。
    // 未登陆
    // 获取授权
        let url = location.href;
    // 同时判断'a=1' 和code= 防止前台死循环 
    // wechatCode没有 发起授权
    // if(url.indexOf('code=')<1)
    // {
    //   let code = url.substring(url.indexOf('code=') + 5, url.indexOf('state=') - 1);
    //   setCode(code)
    // }
    //start
    console.log(token)
    if(!token && (url.indexOf('code=') < 1)){
        let redirectUrl = window.location.href
            redirectUrl = encodeURIComponent(redirectUrl)
            URL=window.location.href
            console.log(process.env)
            const appid=process.env.APP_ID
            // store.wx.dispatch("authorize","")
            console.log(redirectUrl)
            window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${redirectUrl}&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect`
        // 后台重定向页面，授权登录
    }else{

      (!(url.indexOf('code=') < 1)) ? getCodePullCode(url,to,next): checkIsLoginGotologin(to, next)
       
      }
    //end
  //   if (process.env.NODE_ENV == 'production') {
  //   let url = location.href;
  //   // 同时判断'a=1' 和code= 防止前台死循环 
  //   // wechatCode没有 发起授权

  //   if ((url.indexOf('a=1') < 1) && (url.indexOf('code=') < 1)) {
  //     //let redirectUrl = encodeURIComponent(` http://txweixin.free.idcfengye.com#${to.path}`);
  //     // location.href = `http://m.example.com/Home/WxSignature/getBaseInfos?redirect_url=${redirect_url}`;
  //     let redirectUrl = window.location.href
  //         redirectUrl = encodeURIComponent(redirectUrl)
  //         const appid='wx0739baa9f03240c5'
  //         store.wx.dispatch("authorize","")
  //         window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${redirectUrl}&response_type=code&scope=snsapi_base&state=123#wechat_redirect`
  //   } else {
  //     // 后台重定向页面，授权登录
  //     (!(url.indexOf('code=') < 1)) ? getCodePullCode(url): checkIsLoginGotologin(to, next)
  //   }
  // }
})
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
  // render: h => h(App)
})
