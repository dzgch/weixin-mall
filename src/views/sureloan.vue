<template>
<div class="sureloan">
    <div class="mall-top">
      <header-c :title="headerTitle">
      </header-c>
    </div>
    <div class="mall-cell">
      <loan-money></loan-money>
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
      <button-l text="立即支付"></button-l>
    </div>
</div>
</template>
<script>
import { Flexbox, FlexboxItem,CheckIcon } from 'vux'
import HeaderC from '@/components/header'
import ButtonL from '@/components/basic/buttonL'
import LoanMoney from '@/components/loan/loanMoney'


export default {
    name:"sureloan",
    components:{
      Flexbox, 
      FlexboxItem,
      HeaderC,
      CheckIcon,
      LoanMoney,
      ButtonL
    },
    data(){
        return {
          headerTitle:"确认订单",
          checked:true
        }
    },
    created(){
    },
    methods: {
     
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
