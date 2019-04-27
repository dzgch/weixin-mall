<template>
<div class="new">
    <div class="mall-head">
      <header-c :title="headerTitle">
      </header-c>
    </div>
    <div class="mall-top">
      <div class="mall-search">
      <search-c  @on-data="getSearchData" @on-all-data="getSearchAll"></search-c>
      </div>
      <hot-p-x  @on-getDataByType="getDataByType"></hot-p-x>
    </div>
    <div class="mall-cell">
      <flexbox orient="vertical" :gutter="0" wrap="wrap">
        <flexbox-item v-for="(k,i) in goodsList" :key="i" class="c-mall-goods-p">
          <panel-for-coll :goodsList="k"></panel-for-coll>
        </flexbox-item>
        <div class="tip-nomessage" v-show="goodsList.length<1">
          暂无数据
        </div>
      </flexbox>
    </div>
</div>
</template>
<script>
import { Flexbox, FlexboxItem } from 'vux'
import SearchC from '@/components/search'
import HeaderC from '@/components/header'
import SwiperC from '@/components/swiper'
import PanelForColl from '@/components/panel/panelForColl'
import ContentTitle from '@/components/basic/contentTitle'
import HotPX from '@/components/hotGoods/hotPX'
import { mapActions } from 'vuex';
export default {
    name:"goods",
    components:{
      Flexbox, 
      FlexboxItem,
      HeaderC,
      SearchC,
      SwiperC,
      PanelForColl,
      ContentTitle,
      HotPX
    },
    data(){
        return {
          headerTitle:"",
          goodsList:[]
        }
    },
    mounted(){
      console.log(this.$route.query)
  this.getShopData()
    },
    methods: {
      ...mapActions([
        'getselectcommodity',
        'getmechanical',
        'getmedicament'
        ]),
         getDataByType(val){
        this.goodsList=val
      },
      getSearchData(data){
        this.goodsList=data
      },
      getSearchAll(){
        this.getShopData()
      },
      getShopData(){
              if(this.$route.query.type==1){
          this.headerTitle="全部商品"
          this.getselectcommodity().then(res=>{
            this.goodsList=res.commodity
          })
      }
      if(this.$route.query.type==2){
          this.headerTitle="电动机械"
          this.getmechanical().then(res=>{
            this.goodsList=[...res]
          })
      }
      if(this.$route.query.type==3){
          this.headerTitle="园林药剂"
          this.getmedicament().then(res=>{
            this.goodsList=[...res]
          })
      }
      }
    }
}
</script>
<style lang="less">
.new{
  .mall-top{
     background-color: @bg-color;
     .mall-search{
       height:80px;
     }
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
   margin-top:15px;
   .c-mall-goods-p{
     padding:0 10px;
   }
 }
}
</style>
