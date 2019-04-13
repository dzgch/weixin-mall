<template>
<div class="goods-details">
    <div class="mall-top">
      <header-c :title="headerTitle">
      </header-c>
    </div>
    <div class="goods-panel">
      <p-for-goods-details></p-for-goods-details>
    </div>
    <div class="goods-grade">
      <div id="detailsTag">
      <goods-details-tag :class="searchBarFixed == true ? 'isFixed' :''"></goods-details-tag>
      </div>
      <goods-judge v-show="isShow==1"></goods-judge>
      <goods-details v-show="isShow==0"></goods-details>
      <goods-details v-show="isShow==0"></goods-details>
      <goods-details v-show="isShow==0"></goods-details>
      <goods-details v-show="isShow==0"></goods-details>
      <goods-details v-show="isShow==0"></goods-details>
      <goods-details v-show="isShow==0"></goods-details>
      <goods-details v-show="isShow==0"></goods-details>
      <goods-details v-show="isShow==0"></goods-details>
    </div>
    <div class="goods-footer">
        <goods-details-footer></goods-details-footer>
    </div>
</div>
</template>
<script>
import { Flexbox, FlexboxItem } from 'vux'
import HeaderC from '@/components/header'
import pForGoodsDetails from '@/components/panel/pForGoodsDetails'
import goodsDetails from '@/components/goodsDetails/goodsDetails'
import goodsDetailsFooter from '@/components/goodsDetails/goodsDetailsFooter'
import goodsDetailsTag from '@/components/goodsDetails/goodsDetailsTag'
import goodsJudge from '@/components/goodsDetails/goodsJudge'
import { mapState,mapGetters } from 'vuex'
export default {
    name:"goodsdetails",
    components:{
      HeaderC,
      Flexbox, 
      FlexboxItem,
      pForGoodsDetails,
      goodsJudge,
      goodsDetailsTag,
      goodsDetailsFooter,
      goodsDetails
    },
    data(){
        return {
          headerTitle:"商品详情",
          offsetTop:0,
          searchBarFixed:false
        }
    },
    created(){
    },
     
    mounted(){
      let self=this;
      document.querySelector("#vux_view_box_body").addEventListener('scroll', self.handleScroll,false)
    },
    destroyed () {
      let self=this;
       document.querySelector("#vux_view_box_body").removeEventListener('scroll',self.handleScroll,false); // 离开页面 关闭监听 不然会报错
    },
    methods: {
      handleScroll(){
        this.offsetTop= (document.querySelector('#detailsTag').offsetTop)- (document.querySelector(".mall-top").offsetHeight)
        this.searchBarFixed = (document.querySelector("#vux_view_box_body").scrollTop) >= this.offsetTop ?  true : false
        console.log(this.offsetTop,document.querySelector("#vux_view_box_body").scrollTop)
      }
    },
    computed:{
     
      ...mapGetters({
        isShow:"getTagType"
      })
    }
}
</script>
<style lang="less">
.goods-details{
  .mall-top{
    background-color: @bg-color;
  }
  .goods-panel{
    padding:0 25px;
    background-color: @bg-color;
  }
  .goods-footer{
        width: 100%;
    position: fixed;
    bottom: 0;
  }
  .goods-grade{
    margin:15px 0;
    .isFixed{
        position:fixed;
        top:90px;
        z-index:999;
        width:100%
      }
  }
}
</style>
