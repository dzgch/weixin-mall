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
        <template v-for="(v,k) in goodsDetails">
          <panel-for-sure-order @on-carSure="onCarSure" :goodsList="v" :shopcar="true"></panel-for-sure-order>
        </template>
        </div>
      <!-- 价格显示 -->
      <div class="sure-cell"><sure-cell :goodsList="goodsMsg" :shopcar="true"></sure-cell></div>
    </div>
    <!-- 留言 -->
      <!-- <sure-msg class="sure-msg"></sure-msg> -->
    <div class="mall-footer">
      <!-- 按钮 -->
      <sure-submit @on-clicktobuy="onClickToBuy" 
      :price="goodsMsg.allMoney" ></sure-submit>
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
    name:"sureorderForCar",
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
          carid:this.$route.query.carid,
          shopid:this.$route.query.shopid,
          goodsMsg:{
            prePrice:0,
            deposit:0,
            allMoney:0,
          },
          goodsType:[],
          carList:JSON.parse(this.$route.query.carList)
        }
    },
    mounted(){
      this.getShopById()
      this.getaddressGetmain().then(res=>{
        this.mainAddress=res
        this.changeAddress(res)
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
      toAddr(){
        this.$router.push({
                name:this.$store.state.addressName,
                query:{
                    isChoose:true
                }
            })
      },
      
      onClickToBuy(){
        if(this.goodsMsg.count<1){
                this.$vux.toast.show({
                    text: '请选择商品',
                    type:"text",
                    time:2000
                })
            }else{
              if(this.buyAddress.id==null || this.buyAddress.id==undefined ){
                this.$vux.toast.show({
                    text: '请选择地址',
                    type:"text",
                    time:2000
                })
                return false
              }
              let buy=[],rent=[];
                for(var i=0;i<this.goodsType.length;i++){
                  if(this.goodsType[i].buytype=="1"){//购买
                      buy.push(this.goodsType[i])

                  }
                  if(this.goodsType[i].buytype=="2"){
                    rent.push(this.goodsType[i])
                  }
                }
                this.handleRent(rent)
                this.handleBuy(buy)

                this.$router.push({
                    name:this.$store.state.loanName,
                    query:{price:this.goodsMsg.allMoney,
                    id:this.shopid,
                    buy:true,
                    loan:true}
                })
            }
      },
      // 判断购买还是租赁，重新计算价格
      onCarSure(val,id){
        this.goodsMsg={
            prePrice:0,
            deposit:0,
            allMoney:0,
          }
          for(var i=0;i<this.goodsType.length;i++){
            if(this.goodsType[i].id==id){
              this.goodsType[i]=Object.assign(this.goodsType[i],{buytype:val})
              if(val==1){
                this.goodsMsg.prePrice+=this.goodsType[i].priceAll
                }else{
                this.goodsMsg.prePrice+=this.goodsType[i].rentPriceAll
                this.goodsMsg.deposit+=this.goodsType[i].depositAll
              }
            }else{
              if(this.goodsType[i].buytype==1){
                this.goodsMsg.prePrice+=this.goodsType[i].priceAll
                }else{
                this.goodsMsg.prePrice+=this.goodsType[i].rentPriceAll
                this.goodsMsg.deposit+=this.goodsType[i].depositAll
              }
            }
          }
          this.goodsMsg.allMoney=Number(this.goodsMsg.prePrice)+Number(this.goodsMsg.deposit)
      },
      getShopById(){
         
        this.getselectcommoditybyid(this.shopid).then(res=>{
          this.goodsDetails=res
          for(let i=0;i<this.goodsDetails.length;i++){
            for(let j=0;j<this.carList.length;j++){
              if(this.goodsDetails[i].id==this.carList[j].commodityid){
                this.goodsDetails[i].count=this.carList[j].count
              }
              
            }
          }
          this.setGoodsType()
          // 初始金额计算
          for(var i=0;i<this.goodsDetails.length;i++){
            if(this.goodsDetails[i].type==1){
                this.goodsMsg.deposit+=Number(this.goodsDetails[i].deposit)
                                              *Number(this.goodsDetails[i].count)
                this.goodsMsg.prePrice+=Number(this.goodsDetails[i].rentPrice)
                                              *Number(this.goodsDetails[i].count)
            }
            if(this.goodsDetails[i].type==2){
                this.goodsMsg.prePrice+=Number(this.goodsDetails[i].price)
                                              *Number(this.goodsDetails[i].count)
           }
            if(this.goodsDetails[i].type==3){
                this.goodsMsg.prePrice+=Number(this.goodsDetails[i].price)
                                             *Number(this.goodsDetails[i].count)
            }
          }
         this.goodsMsg.allMoney=this.goodsMsg.prePrice+this.goodsMsg.deposit
        })
      },
      // 计算提交订单参数
      setGoodsType(){
        this.goodsType=[]
          for(var i=0;i<this.goodsDetails.length;i++){
            if(this.goodsDetails[i].type==1){//租赁
              this.goodsType.push({
                id:this.goodsDetails[i].id,
                buytype:"2",
                rentPriceAll:Number(this.goodsDetails[i].rentPrice)
                            *Number(this.goodsDetails[i].count),
                priceAll:0,
                depositAll:Number(this.goodsDetails[i].deposit)*
                          Number(this.goodsDetails[i].count),
                addrid:this.buyAddress.id,
                count:this.goodsDetails[i].count,
                rentPrice:this.goodsDetails[i].rentPrice,
                deposit:this.goodsDetails[i].deposit
                })
           
            }
            if(this.goodsDetails[i].type==2){//购买
              this.goodsType.push({
                id:this.goodsDetails[i].id,
                buytype:"1",
                rentPriceAll:0,
                priceAll:Number(this.goodsDetails[i].price)
                            *Number(this.goodsDetails[i].count),
                depositAll:0,
                addrid:this.buyAddress.id,
                count:this.goodsDetails[i].count,
                price:this.goodsDetails[i].price,
                })
            }
            if(this.goodsDetails[i].type==3){//购买和租赁
              this.goodsType.push({
                id:this.goodsDetails[i].id,
                buytype:"1",
                rentPriceAll:Number(this.goodsDetails[i].rentPrice)
                            *Number(this.goodsDetails[i].count),
                priceAll:Number(this.goodsDetails[i].price)
                            *Number(this.goodsDetails[i].count),
                depositAll:Number(this.goodsDetails[i].deposit)*
                          Number(this.goodsDetails[i].count),
                  addrid:this.buyAddress.id,
                count:this.goodsDetails[i].count,
                rentPrice:this.goodsDetails[i].rentPrice,
                price:this.goodsDetails[i].price,
                deposit:this.goodsDetails[i].deposit
                })
            }
          }
      }
    },
    computed:{
      ...mapState([
        'buyAddress',
        'goodsSureMsg'
      ]),
      showAddress(){
        console.log(this.buyAddress.id)
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
