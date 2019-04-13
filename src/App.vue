<template>
  <div id="app">
     <view-box ref="viewBox"  :body-padding-bottom="$route.meta.showFooter?'1.41333rem':'0'">
       <!-- <Header></Header> -->
      <router-view></router-view>
      <Footer v-show="$route.meta.showFooter"></Footer>
     </view-box>
  </div>
</template>

<script>
import Footer from './components/footer'
import Header from './components/header'
import { ViewBox} from 'vux'
import './assets/iconfont/iconfont.css'
import './assets/css/main.less'
// import '~vux/src/styles/reset.less'
import "./style/theme.less"
import "./style/main.less"
import { constants } from 'fs';
// import { mapActions} from 'vuex'
export default {
   name: 'App',
  components: {
    Footer,
    Header,
    ViewBox
  },
  created () {
    //在页面加载时读取sessionStorage里的状态信息
    // if (sessionStorage.getItem("store") ) {
    //     this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))))
    // } 

    // //在页面刷新时将vuex里的信息保存到sessionStorage里
    // window.addEventListener("beforeunload",()=>{
    //     sessionStorage.setItem("store",JSON.stringify(this.$store.state))
    // })
  },

  data(){
    return {
      entryUrl: document.location.href
    }
  },
  methods:{
  //   ...mapActions([
  //     'getuserlogin'
  //   ])
  },
  computed:{
   
  },
  mounted(){
    console.log(this.$route.meta.showFooter);
    // this.getuserlogin({openID:123,ip:123})
  }
}
</script>

<style>
#app {
  font-family: MicrosoftYaHei,"Avenir",-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 16px;
  height: 100%;
  /* margin-top: 60px; */
}
body {
  background-color: #f4f5fa;
}
html,
body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  margin:0;
  padding:0;
}
.router-view {
  width: 100%;
  /* top: 46px; */
}
.weui-tab__panel{
  padding-top: 0px;
    /* padding-bottom: 106px !important; */
}

</style>
