<template>
<div class="mall">
    <div class="mall-top">
      <search-c top="0rem" @on-data="getSearchData" @on-all-data="getSearchAll"></search-c>
      <swiper-c :swiper_list="lunboList"></swiper-c>
      <grid-c :gridList="baseList" class="mall-grid-c"></grid-c>
    </div>
    <div class="mall-cell">
      <flexbox orient="horizontal" :gutter="0" wrap="wrap">
        <flexbox-item v-for="(k,i) in goodsListT" :key="i" :span="1/2" class="c-mall-goods-p">
          <panel-s-t :goodsList="k"></panel-s-t>
        </flexbox-item>
        <div class="tip-nomessage" v-show="goodsListT.length<1">
          暂无数据
        </div>
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
import { mapActions } from 'vuex';
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
        link:'/goods?type=1',
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
          baseList:baseList,
          goodsListT:[]//商品列表
          ,lunboList:[]
        }
    },
       mounted(){
         this.getShopData()
    },
    methods: {
      ...mapActions([
        'getShopList'
      ]),
       getSearchData(data){
        this.goodsListT=data
      },
      getSearchAll(){
        this.getShopData()
      },
      getShopData(){
      this.getShopList().then(res=>{
        // console.log(res);
        // 轮播图
        let pic=res.pic
        for(var i=0;i<pic.length;i++){
          this.lunboList.push({
              url: 'javascript:',
              img: pic[i],
              title: '',
              fallbackImg: require("@/assets/images/首页banner.png")
          })
        }
        let commodityList=res.commodityList
        this.goodsListT=commodityList
      })
      }
    }
}
</script>
<style lang="less">
.mall{
 background-color: @bg-color;
 .tip-nomessage{
   height:200px;
   line-height:200px;
   text-align: center;
   width:100%
 }
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
