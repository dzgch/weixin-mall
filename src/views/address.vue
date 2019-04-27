<template>
<div class="address">
    <div class="mall-top">
      <header-c :title="headerTitle">
      </header-c>
    </div>
    <div class="mall-cell">
      <flexbox orient="vertical" :gutter="0" wrap="wrap">
        <flexbox-item v-for="k in data" :key="k.id" class="c-mall-goods-p">
          <addr-show :isShow="isShow" :address="k" :isChoose="isChoose" @on-changeAddr="changeAddrShow"></addr-show>
        </flexbox-item>
        <div v-show="data.length<=0" class="tip-nomessage">
          暂无地址，请手动添加
      </div>
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
import { mapActions } from 'vuex'
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
          isChoose:this.$route.query.isChoose,
          data:[]
        }
    },
    mounted(){
      this.getAddress()
    },
    methods: {
      ...mapActions([
        'getaddressSelect',
        'handleClearAddr',
        ]),
      getAddress(){
        this.getaddressSelect().then(res=>{
          this.data=res
        })
      },
      clickManager(){
        this.isShow= !this.isShow;
      },
      toNewAddr(){
        this.handleClearAddr()
        this.$router.push({
          path:'/newaddress',
          query:{
            isAdd:true
          }
        })
      },
      changeAddrShow(){
        this.getAddress()
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
