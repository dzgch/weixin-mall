<template>
<div class="mall">
    <div class="mall-top">
      <search-c></search-c>
      <swiper-c></swiper-c>
      <grid-c :gridList="baseList" class="mall-grid-c"></grid-c>
    </div>
    <div class="mall-cell">
      <flexbox orient="horizontal" :gutter="0" wrap="wrap">
        <flexbox-item v-for="k in 5" :key="k" :span="1/2" class="c-mall-goods-p">
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
import PanelST from '@/components/panel/panelST'
const baseList=[
    {
        link:'/new',
        label:"新品",
        img:require("@/assets/images/商城-新品.png")
    },
    {
        link:'/hot',
        label:"热卖",
        img:require("@/assets/images/商城-热卖.png")
    },
    {
        link:'/loan',
        label:"租赁",
        img:require("@/assets/images/商城-租赁.png")
    },
    {
        link:'/',
        label:"全部",
        img:require("@/assets/images/商城-全部.png")
    }
]
export default {
    name:"mall",
    components:{
      Flexbox, 
      FlexboxItem,
      SearchC,
      SwiperC,
      PanelST,
      GridC
    },
    data(){
        return {
          baseList:baseList
        }
    },
    created(){
    },
    methods: {
    
    }
}
</script>
<style lang="less">
.mall{
 background-color: @bg-color;
 .mall-grid-c{
   .weui-grid__icon{
     width:108px;
     height: 108px;
   }
 }
 .mall-cell{
   padding:0 10px;
   .c-mall-goods-p{
     padding:0 10px;
   }
 }
}
</style>
