<template>
<div class="home">
  <div class="c-home-head">
    <search-c></search-c>
    <swiper-c class="c-swiper"></swiper-c>
    <mall-title></mall-title>
    <grid-c></grid-c>
  </div>
  <div class="c-home-goods">
    <content-title></content-title>
    <panel-t></panel-t>
    
  </div>
  <div class="c-home-goods-l">
    <flexbox orient="horizontal" :gutter="0" wrap="wrap">
        <flexbox-item v-for="k in 5" :key="k" :span="1/2" class="c-home-goods-p">
          <panel-s-t></panel-s-t>
        </flexbox-item>
    </flexbox>
  </div>
</div>
</template>
<script>
import { Flexbox, FlexboxItem } from 'vux'
import SearchC from '@/components/search'
import SwiperC from '@/components/swiper'
import GridC from '@/components/gridC'
import PanelT from '@/components/panel/panelT'
import PanelST from '@/components/panel/panelST'
import ContentTitle from '@/components/basic/contentTitle'
import MallTitle from '@/components/basic/mallTitle'
import {mapActions} from 'vuex'
export default {
    name:"home",
    components:{
      Flexbox, 
      FlexboxItem,
      SearchC,
      SwiperC,
      GridC,
      PanelT,
      PanelST,
      ContentTitle,
      MallTitle
    },
    data(){
        return {
          goodsListT:{}
        }
    },
    created(){
        console.log("1233");
        this.postLogin();
    },
    mounted(){
      // this.getHomeList().then(res=>{
      //   console.log(res);
      // })
    },
    methods: {
      // ...mapActions([
      //   'getHomeList'
      // ]),
    // 请求 登录接口
    postLogin() {
      // this.$api.postLogin({openID: '123', ip: '111'}).then(response => {
      //   console.log(response)
      // }).catch(error => {
      //   console.log(error.response)
      // })
    }
  }
}
</script>
<style lang="less" scoped>
.home{
  .c-home-head{
    background-color: @bg-color;
    padding-bottom:30px;
    .c-swiper{
      padding-top:10px;
    }
  }
  .c-home-goods{
    margin-top:15px;
    background-color: @bg-color;
    padding:0 30px;
  }
  .c-home-goods-l{
    padding:0 15px;
    background-color: @bg-color;
  }
  .c-home-goods-p{
    .c-home-goods-l;
  }
}
</style>
