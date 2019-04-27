<template>
<div class="sureloan">
    <div class="mall-top">
      <header-c :title="headerTitle">
      </header-c>
    </div>
    <div class="mall-cell">
      <!-- 租金 -->
      <!-- <keep-alive> -->
      <buy-money  :money="this.$route.query.price"></buy-money>
      <!-- <loan-money v-show="this.$route.query.loan" :money="this.$route.query.deposit"></loan-money> -->
      <!-- </keep-alive> -->
    </div>
    <div class="mall-choose">
      <div class="mall-choose-title">选择付款方式</div>
      <div class="mall-choose-cont">
        <div class="mall-choose-weixin"><i class="iconfont iconweixinzhifu"></i> 微信支付</div>
        <div class="mall-choose-checked">
           <check-icon :value.sync="checked" type="plain"></check-icon>
        </div>
      </div>
    </div>
    <div class="mall-footer">
      <button-l text="立即支付" @click.native="gotoBuy"></button-l>
    </div>
    <toast v-model="isToast" :time="2000" width="3rem" type="text">{{tip}}</toast>
</div>
</template>
<script>
import { Flexbox, FlexboxItem,CheckIcon ,Toast} from 'vux'
import HeaderC from '@/components/header'
import ButtonL from '@/components/basic/buttonL'
import LoanMoney from '@/components/loan/loanMoney'
import BuyMoney from '@/components/loan/buyMoney'
import { mapActions,mapGetters } from 'vuex';

export default {
    name:"sureloan",
    components:{
      Flexbox, 
      FlexboxItem,
      Toast,
      HeaderC,
      CheckIcon,
      LoanMoney,
      ButtonL,
      BuyMoney
    },
    data(){
        return {
          headerTitle:"确认订单",
          checked:true,
          goodsList:this.$route.params.goodsList,
          tip:'',
          isToast:false
        }
    },
    created(){
      console.log(this.$route.params)
    },
    computed:{
     ...mapGetters([
       'getRent',
       'getBuy'
     ])
    },
    methods: {
      ...mapActions([
        'getbatchorder',
        'batchrentorder'
      ]),
      gotoBuy(){
        // s租赁支付
        if(!this.checked){
          this.tip="请选择一种付款方式！"
          this.isToast = true
        }
        let buyList=[],rentList=[];
        for(let i=0;i<this.getBuy.length;i++){
          buyList.push({
            commodityID:this.getBuy[i].id,
            price:this.getBuy[i].price,
            count:this.getBuy[i].count,
            orderPrice:this.getBuy[i].priceAll,
            addrid:this.getBuy[i].addrid
          })
        }
        for(let i=0;i<this.getRent.length;i++){
          rentList.push({
            commodityID:this.getRent[i].id,
            rentPrice:this.getRent[i].rentPrice,
            count:this.getRent[i].count,
            orderPrice:this.getRent[i].rentPriceAll+this.getRent[i].depositAll,
            addrid:this.getRent[i].addrid
          })
        }
        // 直接支付
        if(this.$route.query.buy){
          // 提交购买订单
          this.getbatchorder({order:buyList}).then(res=>{
            
          })
          // 支付成功
          // 提交订单信息
          // 支付失败，进行提示
        }
        // 租赁
        if(this.$route.query.loan) {
          // 租赁成功，进入提交订单信息页面
          this.batchrentorder({order:rentList}).then(res=>{

          })
        }
      }
    }
}
</script>
<style lang="less">
.sureloan{
  background-color: @bg-color;
  .mall-top{
     
  }
  .mall-choose{
    padding: 20px 50px;
    .mall-choose-title{
      color:#444444;;
      font-size: 32px;
      text-align: left;
    }
    .mall-choose-cont{
      text-align: left;
    position: relative;
    line-height: 80px;
    padding:20px 0;
    .mall-choose-checked{
      position: absolute;
    right: 0;
    vertical-align: top;
    display: inline-block;
       .weui-icon-circle{
        font-size: 40px !important;
    }
    .vux-check-icon > .weui-icon-success:before, .vux-check-icon > .weui-icon-success-circle:before{
    font-size: 40px !important;
    color: #09BB07!important;
}
    }
    .mall-choose-weixin{
      font-size: 32px;
    vertical-align: top;
    display: inline-block;
    .iconfont{
      font-size: 46px;
    color: #4bd964;
        padding-right: 15px;
    vertical-align: -6px;
    }
    }
    }
  }

  .mall-cell{
    padding:20px 0px ;    
  }
 .mall-footer{
   width:80%;
   margin:auto;
   padding: 90px 0;


 }
}
</style>
