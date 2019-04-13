<template>
<div class="loan">
    <div class="mall-head">
      <header-c :title="headerTitle">
      </header-c>
    </div>
    <div class="mall-top">
      <search-c></search-c>
      <content-title :title="title"></content-title>
      <swiper-c class="new-swiper-c"></swiper-c>
      <!-- <hot-p-x></hot-p-x> -->
    </div>
    <div class="mall-cell">
      <flexbox orient="vertical" :gutter="0" wrap="wrap">
        <flexbox-item v-for="k in 5" :key="k" class="c-mall-goods-p">
          <panel-for-loan></panel-for-loan>
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
import PanelForLoan from '@/components/panel/panelForLoan'
import ContentTitle from '@/components/basic/contentTitle'
import HotPX from '@/components/hotGoods/hotPX'
export default {
    name:"new",
    components:{
      Flexbox, 
      FlexboxItem,
      HeaderC,
      SearchC,
      SwiperC,
      PanelForLoan,
      ContentTitle,
      HotPX
    },
    data(){
        return {
          title:"租赁",
          headerTitle:"租赁"
        }
    },
    created(){
    },
    methods: {
    
    }
}
</script>
<style lang="less">
.loan{
  .mall-top{
     background-color: @bg-color;
  }
 .mall-grid-c{
   .weui-grid__icon{
     width:108px;
     height: 108px;
   }
 }
 .new-swiper-c{
   padding:0 20px;
 }
 .mall-cell{
    background-color: @bg-color;
   padding:0 10px;
  //  margin-top:15px;
   .c-mall-goods-p{
     padding:0 10px;
   }
 }
}
</style>
