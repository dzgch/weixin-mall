<template>
<div class="address">
    <div class="mall-top">
      <header-c :title="headerTitle">
      </header-c>
    </div>
    <div class="mall-cell">
      <flexbox orient="vertical" :gutter="0" wrap="wrap">
        <flexbox-item v-for="k in 5" :key="k" class="c-mall-goods-p">
          <addr-show :isShow="isShow"></addr-show>
        </flexbox-item>
      </flexbox>
    </div>
    <div class="mall-footer">
      <button-l text="手动添加" @click.native="toNewAddr"></button-l>
    </div>
</div>
</template>
<script>
import { Flexbox, FlexboxItem,CheckIcon } from 'vux'
import HeaderC from '@/components/header'
import addrShow from '@/components/address/addrShow'
import ButtonL from '@/components/basic/buttonL'
export default {
    name:"addressC",
    components:{
      Flexbox, 
      FlexboxItem,
      addrShow,
      HeaderC,
      ButtonL,
      CheckIcon
    },
    data(){
        return {
          headerTitle:"收货地址",
          isShow:false,
        }
    },
    created(){
    },
    methods: {
      clickManager(){
        this.isShow= !this.isShow;
      },
      toNewAddr(){
        console.log(this.$router);

        this.$router.push({
          name:"newAddress",
          path:'/address/newaddress'
        })
      }
    }
}
</script>
<style lang="less">
.address{
  padding-bottom:170px;
  .mall-top{
     background-color: @bg-color;
  }
 .mall-grid-c{
   .weui-grid__icon{
     width:108px;
     height: 108px;
   }
 }

  .mall-cell{
    .vux-flexbox .c-mall-goods-p{
    margin-top:15px!important;
      padding:0 20px;
      background-color: @bg-color;
    }
  }
 .mall-footer{
  //  background-color: @bg-color;
   padding:40px;
   width:100%;
   position: fixed;
   bottom: 0;
   background-color: #ededed;
   .c-delete-flex{
     padding:0 20px;
   }
   .c-delete{
    //  width:30%;
     height:55px;
     font-size: 28px;
   }
 }
}
</style>
