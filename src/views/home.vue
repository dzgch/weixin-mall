<template>
<div class="home">
  <div class="c-home-head">
    <!-- 搜索框 -->
    <search-c top='0rem' @on-data="getSearchData" @on-all-data="getSearchAll"></search-c>
    <!-- 轮播图 -->
    <swiper-c class="c-swiper"  :swiper_list="lunboList"></swiper-c>
    <!-- 中间导航的标题 -->
    <mall-title></mall-title>
    <!-- 中间导航 -->
    <!-- <grid-c></grid-c> -->
  </div>
  <div class="c-home-goods">
    <!-- 内容标题 -->
    <content-title></content-title>
    <!-- 首页大图文 -->
    <panel-t v-show="goodsListT.length>0" :goodsList="goodsMain"></panel-t>
    <div v-show="goodsListT.length<=0" class="tip-nomessage">
      暂无数据
    </div>
  </div>
  <div class="c-home-goods-l">
    <!-- 首页商品小图文 -->
    <flexbox orient="horizontal" :gutter="0" wrap="wrap">
        <flexbox-item v-for="(k,i) in goodsListT" :key="i" :span="1/2" class="c-home-goods-p">
          <panel-s-t :goodsList="k"></panel-s-t>
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
          goodsListT:[]//商品列表
          ,goodsMain:{}
          ,lunboList:[]
        }
    },
    created(){
    },
    mounted(){
      this.getHomeData()
    },
    methods: {
      ...mapActions([
        'getHomeList'
      ]),
      getSearchData(data){
        this.goodsListT=data
      },
      getSearchAll(){
        this.getHomeData()
      },
      getHomeData(){
      this.getHomeList().then(res=>{
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
        this.goodsMain=this.goodsListT.length>0?this.goodsListT[0]:{}
      })
      }
  }
}
</script>
<style lang="less" scoped>
.home{
  .tip-nomessage{
    height:200px;
    line-height:200px;
  }
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
