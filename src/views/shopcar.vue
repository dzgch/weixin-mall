<template>
<div class="shop-car">
    <div class="mall-top">
      <header-c :title="headerTitle">
        <a slot="header-right" @click="clickManager">{{ headerRight }}</a>
      </header-c>
    </div>
    <div class="mall-cell">
      <flexbox orient="vertical" :gutter="0" wrap="wrap">
        <flexbox-item v-for="(k,i) in carList" :key="i" class="c-mall-goods-p">
          <panel-for-car ref="panelCar" :isShow="isShow" :carList="k"  :checked="checked" @on-update="loadCarList"></panel-for-car>
        </flexbox-item>
        <div v-show="carList.length<=0" class="tip-nomessage">
          您还没有添加商品到购物车哟~
      </div>
      </flexbox>
    </div>
    <div class="mall-footer">
      <flexbox :gutter="0" wrap="wrap">
        <flexbox-item :span="2/3">
            <!-- <check-icon :value.sync="checkedAll">全选</check-icon> -->
        </flexbox-item>
        <flexbox-item class="c-delete-flex">
            <button-l  v-show="!isShow" text="结算" class="c-delete" @click.native="buyGoods"></button-l>
            <button-l  v-show="isShow" text="删除" class="c-delete" @click.native="delCar"></button-l>
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
import { mapActions, mapMutations, mapState, mapGetters } from 'vuex';
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
          headerRight:"管理",
          carList:[],
          checked:false
        }
    },
    mounted(){
      this.loadCarList()
      this.setShopdelListNone()
    },
    computed:{
      ...mapGetters([
        'getAllCheckCar',
        'getShopDel'
      ]),
      checkedAll:{
        get(){
          return this.getAllCheckCar
        },
        set(v){
          this.setAllCheckCar(v)
        }
      }
    },
    methods: {
      ...mapMutations([
        'setAllCheckCar',
        'setShopdelListNone'
        ]),
      loadCarList(){
        this.getshopcar().then(res=>{
        this.carList=res
      
      })
      },
      clickManager(){
        this.isShow= !this.isShow;
        this.headerRight=this.isShow?"完成":"管理"
        this.setAllCheckCar(false)
        this.setShopdelListNone()
         // 设置子组件不选
        this.checked=false
        for(var i=0;i<this.$refs.panelCar.length;i++){
          this.$refs.panelCar[i].changeCheck()
        }
      },
      ...mapActions([
        'getshopcar',
        'getshopcarRemove'
      ]),
      delCar(){
        let list=this.getShopDel
        if(list.length<1){
          this.$vux.toast.show({
            text: '您还没有选择商品哦！',
            time:2000,
            type:'text',
            width:'2.7rem'
          })
        }else {
          this.getshopcarRemove().then(res=>{
            this.loadCarList()
          })
        }
      },
      buyGoods(){
        let list=this.getShopDel
        console.log(list)
        if(list.length<1){
          this.$vux.toast.show({
            text: '您还没有选择商品哦！',
            time:2000,
            type:'text',
            width:'2.7rem'
          })
        }else {
          let shopid=this.carList.map(res=>{
            return res.commodityid
          })
          // 去结算
          this.$router.push({
            path:"/sureorderforcar",
            query:{
              carid:this.getShopDel.join("!"),
              shopid:shopid.join("!"),
              carList:JSON.stringify(this.carList)
            }
          })
        }
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
     // background-color: @bg-color;
   // padding:0 10px;
    //margin-top:15px;
    .c-mall-goods-p{
      //padding:0 10px;
    }
  }
 .mall-footer{
  //  background-color: @bg-color;
   padding:20px;
   width:100%;
   position: fixed;
   bottom: 0;
   background-color: #ededed;
   .weui-btn{
     margin-top:0 !important;
   }
   .weui-btn+.weui-btn{
     margin-left:0 !important
   }
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
