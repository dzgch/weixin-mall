<template>
<div class="goods-details">
    <div class="mall-top">
      <header-c :title="headerTitle">
      </header-c>
    </div>
    <div class="mall-center">
      <div class="goods-panel">
        <p-for-goods-details :goodsDetails="goodsDetails"></p-for-goods-details>
      </div>
      <div class="goods-grade">
        <div id="detailsTag">
        <goods-details-tag :class="searchBarFixed == true ? 'isFixed' :''"></goods-details-tag>
        </div>
        <div v-show="isShow==1" v-for="(k,i) in ariseList" :key="i">
        <goods-judge :ariseList="k"></goods-judge>
        </div>
        <div class="tip-nomessage" v-show="isShow==1&&ariseList.length<1">
          暂无评价
        </div>
        <goods-details v-show="isShow==0"  :goodsDetails="goodsDetails"></goods-details>
      </div>
    </div>
    <div class="mall-footer">
        <goods-details-footer  class="goods-footer" :goodsDetails="goodsDetails" ></goods-details-footer>
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
import { mapState,mapGetters, mapActions } from 'vuex'
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
          ,ariseList:[],
          id:this.$route.query.id,
          goodsDetails:{}
        }
    },
    created(){
    },
     
    mounted(){
      let self=this;
      this.getShopData()
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
      },
      ...mapActions([
        'getappraise',
        'getselectcommoditybyid'
    ]),
    getShopData(){
      this.goodsDetails={
          id:1,price:10,name:12,picurl:"http://localhost:8200/static/img/首页banner.2f7a7b0.png",
          count:2,
          deposit:20,
          type:1,
          rentPrice:2
        }
        this.getselectcommoditybyid(this.id).then(res=>{
            console.log(res)
            this.goodsDetails=res[0]
        })
        this.getappraise({string:this.id}).then(res=>{
            console.log(res)
            this.ariseList=res
        })
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
  .mall-center{

  }
  .goods-panel{
    padding:0 25px;
    background-color: @bg-color;
  }
  .mall-footer{
    height:114px;
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
