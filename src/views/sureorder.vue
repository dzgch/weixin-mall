<template>
<div class="sureorder">
    <div class="mall-top">
      <header-c :title="headerTitle">
      </header-c>
    </div>
    <div class="mall-cell">
      <div class="show-addr"><show-addr></show-addr></div>
      <div class="sure-panel"><panel-for-sure-order></panel-for-sure-order></div>
      <div class="sure-cell"><sure-cell></sure-cell></div>
    </div>
      <sure-msg class="sure-msg"></sure-msg>
    <div class="mall-footer">
      <sure-submit></sure-submit>
    </div>
</div>
</template>
<script>
import { Flexbox, FlexboxItem,CheckIcon } from 'vux'
import HeaderC from '@/components/header'
import PanelForSureOrder from '@/components/panel/panelForSureOrder'
import ShowAddr from '@/components/sureOrder/showAddr'
import SureCell from '@/components/sureOrder/sureCell'
import SureMsg from '@/components/sureOrder/sureMsg'
import SureSubmit from '@/components/sureOrder/sureSubmit'

export default {
    name:"sureloan",
    components:{
      Flexbox, 
      FlexboxItem,
      ShowAddr,
      HeaderC,
      CheckIcon,
      SureCell,
      SureMsg,
      SureSubmit,
      PanelForSureOrder
    },
    data(){
        return {
          headerTitle:"确认订单"
        }
    },
    created(){
    },
    methods: {
     
    }
}
</script>
<style lang="less">
.sureorder{
  
  .mall-top{
     background-color: @bg-color;
  }


  .mall-cell{
    margin-top:15px;
    .show-addr{
    background-color: @bg-color;
      padding:0 25px;
    }
    .sure-panel{
    background-color: #f8f8f8;
      padding: 0 25px;
    }
    .sure-cell{
    background-color: @bg-color;
      padding: 0 5px;
    }
  }
  .sure-msg{
    margin-top:15px;
    
  }
 .mall-footer{
   margin-top:15px;
   width:100%;
   position: fixed;
   bottom: 0;
  background-color: #f4f4f4;
 }
}
</style>
