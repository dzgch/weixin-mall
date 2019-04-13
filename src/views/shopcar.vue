<template>
<div class="shop-car">
    <div class="mall-top">
      <header-c :title="headerTitle">
        <a slot="header-right" @click="clickManager">{{ headerRight }}</a>
      </header-c>
    </div>
    <div class="mall-cell">
      <flexbox orient="vertical" :gutter="0" wrap="wrap">
        <flexbox-item v-for="k in 5" :key="k" class="c-mall-goods-p">
          <panel-for-car :isShow="isShow"></panel-for-car>
        </flexbox-item>
      </flexbox>
    </div>
    <div class="mall-footer" v-show="isShow">
      <flexbox :gutter="0" wrap="wrap">
        <flexbox-item :span="2/3">
            <check-icon :value.sync="checkedAll">全选</check-icon>
        </flexbox-item>
        <flexbox-item class="c-delete-flex">
            <button-l text="删除" class="c-delete"></button-l>
        </flexbox-item>
      </flexbox>
    </div>
</div>
</template>
<script>
import { Flexbox, FlexboxItem,CheckIcon } from 'vux'
import HeaderC from '@/components/header'
import PanelForCar from '@/components/panel/panelForCar'
import ButtonL from '@/components/basic/buttonL'
export default {
    name:"shopcar",
    components:{
      Flexbox, 
      FlexboxItem,
      PanelForCar,
      HeaderC,
      ButtonL,
      CheckIcon
    },
    data(){
        return {
          headerTitle:"我的购物车",
          isShow:false,
          checkedAll:false,
          headerRight:"管理"
        }
    },
    created(){
    },
    methods: {
      clickManager(){
        this.isShow= !this.isShow;
        this.headerRight=this.isShow?"完成":"管理";
      }
    }
}
</script>
<style lang="less">
.shop-car{
  padding-bottom:100px;
  .mall-top{
     background-color: @bg-color;
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
 .mall-footer{
  //  background-color: @bg-color;
   padding:20px;
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
