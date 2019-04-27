<template>
<div class="order-judge">
    <div class="mall-head">
      <header-c :title="headerTitle">
      </header-c>
    </div>
    <div class="mall-top">
      <panel-for-order :goodsList="goodsList"></panel-for-order>
      <judge @on-judge="addJudge" @on-judgeText="addText"></judge>
    </div>
    <div class="mall-cell">
      <grade @on-grade="addGrade"></grade>
    </div>
    <div class="mall-cell">
      <judge-footer @on-updateRaise="sendAppraiseAdd"></judge-footer>
    </div>
</div>
</template>
<script>
import { Flexbox, FlexboxItem } from 'vux'
import HeaderC from '@/components/header'
import judgeFooter from '@/components/judge/footer'
import grade from '@/components/judge/grade'
import judge from '@/components/judge/judge'
import panelForOrder from '@/components/panel/panelForOrder'
import { mapActions } from 'vuex';
export default {
    name:"order_details",
    components:{
      Flexbox, 
      FlexboxItem,
      HeaderC,
      judgeFooter,
      grade,
      judge,
      panelForOrder
    },
    data(){
        return {
          headerTitle:"订单评价",
          goodsList:{},
          id:this.$route.query.id,
          grade:0,
          text:"",
          describe:0,
          logistics:0,
          service:0
        }
    },
    mounted(){
      this.getShopById()
    },
    methods: {
     ...mapActions([
       'getappraiseAdd',
       'getselectcommoditybyid'
     ]),
     sendAppraiseAdd(data){
       if(this.describe<1){
         this.$vux.toast.text("请给描述相符打分",'cneter')
         return false
       }
       if(this.logistics<1){
         this.$vux.toast.text("请给物流服务打分",'cneter')
          return false
       }
       if(this.service<1){
         this.$vux.toast.text("请给服务态度打分",'cneter')
          return false
       }
       this.getappraiseAdd({appraise:{
         thingID:this.id,
         grade:this.grade,
          text:this.text,
          describe:this.describe,
          logistics:this.logistics,
          service:this.service
       }
       }).then(res=>{
          this.$router.go(-1)

       })
     },
     getShopById(){
       this.getselectcommoditybyid(this.id).then(res=>{
         this.goodsList=res[0]
       })
     },
     addJudge(val){
       this.grade=val
     },
     addText(val){
       this.text=val
     },
     addGrade(val){
       this.describe=val[0].starData
       this.logistics=val[1].starData
       this.service=val[2].starData
     }
    }
}
</script>
<style lang="less">
.order-judge{
  .mall-top{
  padding:0 50px 20px;
     background-color: @bg-color;
  }
 .mall-cell{
  padding:0 50px;
    background-color: @bg-color;
  //  padding:0 10px;
   margin-top:15px;
   
 }
}
</style>
