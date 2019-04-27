<template>
<div class="hot">
  <div class="mall-head">
      <header-c :title="headerTitle">
      </header-c>
    </div>
    <div class="mall-top">
      <search-c  @on-data="getSearchData" @on-all-data="getSearchAll"></search-c>
      <content-title :title="title"></content-title>
      <swiper-c class="hot-swiper-c"  :swiper_list="lunboList"></swiper-c>
      <hot-p-x @on-getDataByType="getDataByType"></hot-p-x>
    </div>
    <div class="mall-cell">
      <flexbox orient="vertical" :gutter="0" wrap="wrap">
        <flexbox-item v-for="(k,i) in goodsListT" :key="i" class="c-mall-goods-p">
          <!-- <panel-for-hot :goodsList="k"></panel-for-hot> -->
          <panel-for-coll :goodsList="k"></panel-for-coll>
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
import HeaderC from '@/components/header'
import PanelForHot from '@/components/panel/panelForHot'
import PanelForColl from '@/components/panel/panelForColl'
import ContentTitle from '@/components/basic/contentTitle'
import HotPX from '@/components/hotGoods/hotPX'
import { mapActions } from 'vuex';
export default {
    name:"hot",
    components:{
      Flexbox, 
      FlexboxItem,
      HeaderC,
      SearchC,
      SwiperC,
      PanelForHot,
      PanelForColl,
      ContentTitle,
      HotPX
    },
    data(){
        return {
          title:"热卖商品",
          headerTitle:"热卖商品",
          goodsListT:[]//商品列表
          ,lunboList:[]
        }
    },
    mounted(){
      this.getShopData()
    },
    methods: {
    ...mapActions([
      'gethotshop'
    ]),
    getSearchData(data){
        this.goodsListT=data
      },
      getSearchAll(){
        this.getShopData()
      },
      getShopData(){
          this.gethotshop().then(res=>{
        let pic=res.pic
        for(var i=0;i<pic.length;i++){
          this.lunboList.push({
              url: 'javascript:',
              img: pic[i],
              title: '',
              fallbackImg: require("@/assets/images/首页banner.png")
          })
        }
        let commodityList=res.commodity
        this.goodsListT=commodityList
      })
      },
      getDataByType(val){
        this.goodsListT=val
      }
    }
}
</script>
<style lang="less">
.hot{
 .mall-top{
   background-color: @bg-color;
 }
 .tip-nomessage{
   height:200px;
   line-height:200px;
   text-align: center;
   width:100%
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
