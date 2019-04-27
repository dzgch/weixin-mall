<template>
<div class="sureorder">
    <div class="mall-top">
      <header-c :title="headerTitle">
      </header-c>
    </div>
    <div class="mall-cell">
      <!-- 默认地址 -->
      <div class="show-addr">
        <show-addr  v-show="showAddress" :addrList="buyAddress"></show-addr>
          <div  v-show="!showAddress" @click="toAddr" class="show-addr-add">请选择地址</div>
        </div>
      <!-- 订单图文 -->
      <div class="sure-panel">
        <template>
          <panel-for-sure-order @on-carSure="onCarSure"  @on-ordernum="getOrderNum" :goodsList="goodsDetails"></panel-for-sure-order>
        </template>
        </div>
      <!-- 价格显示 -->
      <div class="sure-cell"><sure-cell :goodsList="priceList"></sure-cell></div>
    </div>
    <!-- 留言 -->
      <!-- <sure-msg class="sure-msg"></sure-msg> -->
    <div class="mall-footer">
      <!-- 按钮 -->
      <sure-submit 
      @on-clicktobuy="onClickToBuy" 
      :price="priceList.allMoney" 
      ></sure-submit>
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
import { mapState ,mapActions, mapMutations } from 'vuex';

export default {
    name:"sureorder",
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
          headerTitle:"确认订单",
          goodsDetails:{},
          mainAddress:{},
          priceList:{
            prePrice:0,
            deposit:0,
            allMoney:0,
          },
          priceListMsg:{},
          count:1,
          buytype:"1"
        }
    },
    mounted(){
      this.getShopById()
      this.getaddressGetmain().then(res=>{
        this.mainAddress=res||{}
        this.changeAddress(res||{})
      })
    },
    methods: {
      ...mapActions([
        'getselectcommoditybyid',
        'handleGoodsDetails',
        'handleAllMoney',
            'handlePrePrice',
            'handleFare',
            'getaddressGetmain',
            'handleRent',
            'handleBuy'
      ]),
      ...mapMutations([
        'changeAddress'
      ]),
      // 去选择地址
      toAddr(){
        this.$router.push({
                name:this.$store.state.addressName,
                query:{
                    isChoose:true
                }
            })
      },
      // 判断是购买还是租赁
      onCarSure(val,id){
        this.priceList={
            prePrice:0,
            deposit:0,
            allMoney:0,
          }
          this.buytype=val
          if(this.goodsDetails.type==3){
            if(val=="1"){
              this.priceList.prePrice=Number(this.goodsDetails.price)*Number(this.count)
            }
            if(val=="2"){
              this.priceList.prePrice=Number(this.goodsDetails.rentPrice)*Number(this.count)
                this.priceList.deposit=Number(this.goodsDetails.deposit)*Number(this.count)
            }
          }

          this.priceList.allMoney=Number(this.priceList.prePrice)+Number(this.priceList.deposit)
      },
      getShopById(){
        this.getselectcommoditybyid(this.$route.query.id).then(res=>{
          console.log(res[0])
          this.goodsDetails=res[0]
            this.setOrder()
            // 计算价格
            if(this.goodsDetails.type==1){
              this.buytype="2"
              this.priceList.prePrice=Number(this.goodsDetails.rentPrice)*Number(this.count)
                this.priceList.deposit=Number(this.goodsDetails.deposit)*Number(this.count)
            }
            if(this.goodsDetails.type==2){
              this.buytype="1"
              this.priceList.prePrice=Number(this.goodsDetails.price)*Number(this.count)
            }
            if(this.goodsDetails.type==3){
              this.buytype="1"
              this.priceList.prePrice=Number(this.goodsDetails.price)*Number(this.count)
            }
            this.priceList.allMoney=this.priceList.prePrice+this.priceList.deposit
        })
      },
      // 计算提交订单得值
      setOrder(){
        if(this.goodsDetails.type==1){
              this.priceListMsg={
                id:this.goodsDetails.id,
                  rentPriceAll:Number(this.goodsDetails.rentPrice)
                              *Number(this.count),
                  priceAll:0,
                  depositAll:Number(this.goodsDetails.deposit)*
                            Number(this.count),
                  addrid:this.buyAddress.id||'',
                  count:this.count,
                  rentPrice:this.goodsDetails.rentPrice,
                  deposit:this.goodsDetails.deposit
              }
            }
            if(this.goodsDetails.type==2){
              this.priceListMsg={
                id:this.goodsDetails.id,
                rentPriceAll:0,
                priceAll:Number(this.goodsDetails.price)
                            *Number(this.count),
                depositAll:0,
                addrid:this.buyAddress.id||'',
                count:this.count,
                price:this.goodsDetails.price,
              }
            }
            if(this.goodsDetails.type==3){
              this.priceListMsg={
                id:this.goodsDetails.id,
                rentPriceAll:Number(this.goodsDetails.rentPrice)
                            *Number(this.count),
                priceAll:Number(this.goodsDetails.price)
                            *Number(this.count),
                depositAll:Number(this.goodsDetails.deposit)*
                          Number(this.count),
                  addrid:this.buyAddress.id||'',
                count:this.count,
                rentPrice:this.goodsDetails.rentPrice,
                price:this.goodsDetails.price,
                deposit:this.goodsDetails.deposit
              }
            }
      },
      // 去购买
      onClickToBuy(){
        if(this.buyAddress.id==null || this.buyAddress.id==undefined ){
          this.$vux.toast.show({
              text: '请选择地址',
              type:"text",
              time:2000
          })
          return false
        }
          let buy=[],rent=[];
        if(this.buytype=="1"){
           buy.push(this.priceListMsg)
           console.log("price",this.priceListMsg)
          this.handleBuy(buy)
            this.$router.push({
              name:this.$store.state.loanName,
              query:{
                price:this.priceList.allMoney,
              id:this.$route.query.id,
              buy:true,
              loan:false}
          })
            
        }
        if(this.buytype=="2"){
           rent.push(this.priceListMsg)
            this.handleRent(rent)
             this.$router.push({
              name:this.$store.state.loanName,
              query:{
                price:this.priceList.allMoney,
              id:this.$route.query.id,
              buy:false,
              loan:true}
          })
            
        }


      },
      // 商品数量选择重新计算商品金额
      getOrderNum(val){
        console.log(val)
        this.count=val
        this.onCarSure(this.buytype)
        this.setOrder()
      }
    },
    computed:{
      ...mapState([
        'buyAddress',
        'goodsSureMsg'
      ]),
      showAddress(){
        if(this.buyAddress.id!=undefined&&this.buyAddress.id!=null){
          return true
        }else{
          return false
        }
      },
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
      .show-addr-add{
        height:150px;
        line-height:150px;
        font-size: 30px;
        color:@theme-color;
      }
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
    height:280px;
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
