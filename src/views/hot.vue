<template>
<div class="hot">
  <div class="mall-head">
      <header-c :title="headerTitle">
      </header-c>
    </div>
    <div class="mall-top">
      <search-c></search-c>
      <content-title :title="title"></content-title>
      <swiper-c class="hot-swiper-c"></swiper-c>
      <hot-p-x></hot-p-x>
    </div>
    <div class="mall-cell">
      <flexbox orient="vertical" :gutter="0" wrap="wrap">
        <flexbox-item v-for="k in 5" :key="k" class="c-mall-goods-p">
          <panel-for-hot></panel-for-hot>
        </flexbox-item>
      </flexbox>
    </div>
</div>
</template>
<script>
import { Flexbox, FlexboxItem } from 'vux'
import SearchC from '@/components/search'
import SwiperC from '@/components/swiper'
import HeaderC from '@/components/header'
import PanelForHot from '@/components/panel/panelForHot'
import ContentTitle from '@/components/basic/contentTitle'
import HotPX from '@/components/hotGoods/hotPX'
export default {
    name:"hot",
    components:{
      Flexbox, 
      FlexboxItem,
      HeaderC,
      SearchC,
      SwiperC,
      PanelForHot,
      ContentTitle,
      HotPX
    },
    data(){
        return {
          title:"热卖商品",
          headerTitle:"热卖商品"
        }
    },
    created(){
    },
    methods: {
    
    }
}
</script>
<style lang="less">
.hot{
 .mall-top{
   background-color: @bg-color;
 }
 .hot-swiper-c{
   padding:0 20px;
 }
 .mall-grid-c{
   .weui-grid__icon{
     width:108px;
     height: 108px;
   }
 }
 .mall-cell{
   background-color: @bg-color;
   padding:0 10px;
   margin-top:15px;
   .c-mall-goods-p{
     padding:0 10px;
   }
 }
}
</style>
