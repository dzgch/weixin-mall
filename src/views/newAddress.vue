<template>
<div class="add-address">
    <div class="mall-top">
      <header-c :title="headerTitle">
        <a slot="header-right" @click="clickManager">{{ headerRight }}</a>
      </header-c>
    </div>
    <div class="mall-cell">
      <add-addr-c></add-addr-c>
    </div>
</div>
</template>
<script>
import { Flexbox, FlexboxItem,CheckIcon } from 'vux'
import HeaderC from '@/components/header'
import AddAddrC from '@/components/address/addAddrC'

export default {
    name:"newAddress",
    components:{
      Flexbox, 
      FlexboxItem,
      AddAddrC,
      HeaderC,
      CheckIcon
    },
    data(){
        return {
          headerTitle:"新增收货地址",
          isShow:false,
          headerRight:"完成"
        }
    },
    created(){
    },
    methods: {
      clickManager(){
        this.isShow= !this.isShow;
      }
    }
}
</script>
<style lang="less">
.add-address{
  
  .mall-top{
     background-color: @bg-color;
  }


  .mall-cell{
    margin-top:15px;
  }

}
</style>
