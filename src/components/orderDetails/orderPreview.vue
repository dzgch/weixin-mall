<template>
    <div class="c-order-preview">
        <div class="c-order-hd">
            <flexbox  orient="horizontal" class=" c-date" :gutter="0">
                <flexbox-item class="c-left">
                    <i class="iconfont iconshijian"></i>
                    <span>{{ orderList.payOrdertime?orderList.payOrdertime.split(" ")[0]:'' }}</span>
                </flexbox-item>
                <flexbox-item class="c-right">
                    <span>{{ orderList.payOrdertime?orderList.payOrdertime.split(" ")[1]:'' }}</span>
                </flexbox-item>
            </flexbox>
        </div>
        <div class="c-order-bd c-line"  @click="clickToDetails">
        <flexbox :gutter="0" orient="horizontal">
            <flexbox-item :span="1/5" style="position:relative">
                <div class="c-img-main" :style="{backgroundImage:'url('+orderList.picurl+')',borderRadius:'4px'}">
                </div>
            </flexbox-item>
            <flexbox-item :span="4/5"> 
                <flexbox  orient="vertical" :gutter="0">
                    <flexbox-item class="c-left">
                        <flexbox  orient="horizontal" :gutter="0">
                            <flexbox-item class="c-left" :span="3/4">
                                <div class="c-title c-content"> {{ orderList.commodityName }}</div>
                            </flexbox-item>
                            <flexbox-item class="c-right" :span="1/4" 
                            v-show="orderList.totalPrice!=null&&orderList.totalPrice!=orderList.payMoney">
                                <div class="c-money-title-no">￥<span class="c-money">
                                    {{ Number(orderList.totalPrice).toFixed(2) }}
                            </span></div>
                            </flexbox-item>
                        </flexbox>
                    </flexbox-item>
                    <flexbox-item class="c-right c-num-bottom">
                         <flexbox  orient="horizontal" :gutter="0">
                            <flexbox-item class="c-left">
                                 <div class="c-num">数量：<span>{{ orderList.count }}</span></div>
                            </flexbox-item>
                            <flexbox-item class="c-right">
                                 <div class="c-money-title-yes">实付: ￥<span class="c-money">{{ Number(orderList.payMoney).toFixed(2) }}</span></div>
                            </flexbox-item>
                        </flexbox>
                    </flexbox-item>
                </flexbox>
            </flexbox-item>
        </flexbox>
        </div>
        <div class="c-order-ft">
            <flexbox  orient="horizontal" :gutter="0">
                <flexbox-item class="c-left">
                    <div class="c-status">{{ statusList[orderList.status] }}</div>
                </flexbox-item>
                <flexbox-item class="c-right">
                    <button-r v-show="cancelShow" type="default" text="取消订单" @click.native="clickToCancel"></button-r>
                    <button-r v-show="deleteShow" type="default" text="删除订单" @click.native="clickToDelete"></button-r>
                    <!-- <button-r v-show="viewShow" type="default" text="查看物流" @click.native="clickToView"></button-r> -->
                    <button-r v-show="afterShow" type="primary" text="申请售后" @click.native="clickToAfter"></button-r>
                    <button-r v-show="payShow" type="primary" text="去支付" @click.native="clickToPay"></button-r>
                    <button-r v-show="judgeShow" type="primary" text="去评价" @click.native="clickToJudge"></button-r>
                    <button-r v-show="sureShow" type="primary" text="确认收货" @click.native="clickToSure"></button-r>
                </flexbox-item>
            </flexbox>
        </div>
    </div>
</template>
<script>
// 我的订单
import { FormPreview,Flexbox, FlexboxItem  } from 'vux'
import ButtonR from '@/components/basic/buttonR'
import { mapActions, mapGetters } from 'vuex';
let staList=['交易已取消','等待您的支付','已支付','待发货','待收货','待评价','交易完成']
export default {
    name:"orderPreview",
    components:{
        FormPreview,
        Flexbox, 
        FlexboxItem ,
        ButtonR
    },
    data(){
        return {
            cancelShow:false,
            payShow:false,
            afterShow:false,
            deleteShow:false,
            viewShow:false,
            judgeShow:false,
            sureShow:false,
            statusList:staList,
        }
    },
    created(){
    },
    mounted(){
        this.showButton()
    },
    props:{
        orderList:{
            type:[Object,Array]
        }
    },
    computed:{
        ...mapGetters([
            'getOrderState',
            'getOrderTagType'
        ]),
        
    },
    watch:{
        orderList:{
            handler:function(newval){
                this.showButton()
            },
            deep:true
        }
    },
    methods:{
        // 显示按钮操作
        showButton(){
            if(this.orderList.status==1){
                this.deleteShow=true
                this.payShow=true
                this.cancelShow=false
                this.afterShow=false
                this.viewShow=false
                this.judgeShow=false
                this.sureShow=false
            }
            if(this.orderList.status==2){
                this.cancelShow=true
                this.deleteShow=false
                this.payShow=false
                this.afterShow=false
                this.viewShow=false
                this.judgeShow=false
                this.sureShow=false
            }
            if(this.orderList.status==3){
                this.cancelShow=true
                this.viewShow=true
                this.deleteShow=false
                this.payShow=false
                this.afterShow=false
                this.judgeShow=false
                this.sureShow=false
            }
            if(this.orderList.status==4){
                this.viewShow=true
                this.sureShow=true
                this.cancelShow=false
                this.deleteShow=false
                this.payShow=false
                this.afterShow=false
                this.judgeShow=false
            }
            if(this.orderList.status==5){
                this.judgeShow=true
                this.viewShow=true
                this.deleteShow=false
                this.sureShow=false
                this.cancelShow=false
                this.payShow=false
                this.afterShow=false
            }
            if(this.orderList.status==6){
                this.afterShow=true
                this.deleteShow=true
                this.viewShow=false
                this.sureShow=false
                this.cancelShow=false
                this.payShow=false
                this.judgeShow=false
            }
            if(this.orderList.status==7){
                this.deleteShow=true
                this.afterShow=false
                this.viewShow=false
                this.sureShow=false
                this.cancelShow=false
                this.payShow=false
                this.judgeShow=false
            }
        },
        ...mapActions([
            'getremoveOrder'//删除订单
            ,'getsureShop'//确认收货
        ]),
        // 取消订单
        clickToCancel(){
            this.$router.push({
                path:'/cancel-order',
                query:{
                    id:this.orderList.orderNumber
                }
            })
        },
        // 去支付
        clickToPay(){
            // 直接调用支付接口
        },
        // 申请售后
        clickToAfter(){},
        // 删除订单
        clickToDelete(){
            this.getremoveOrder(this.orderList.orderNumber).then(res=>{
                this.$emit("on-updateorder")
            })
        },
        // 确认收获
        clickToSure(){
            this.getsureShop(this.orderList.orderNumber).then(res=>{
                this.$emit("on-updateorder")
            })
        },
        // 查看物流
        clickToView(){},
        // 去评价
        clickToJudge(){
            this.$router.push({
                path:"/order-judge",
                query:{
                    id:this.orderList.commodityID
                }
            })
        },
        clickToDetails(){
            this.$router.push({
                path:'/order-details',
                query:{
                    id:this.orderList.orderNumber
                }
            })
        },
    }
}
</script>
<style lang="less" scoped>
    .c-title{
        padding-left:10px;
    }
    .c-num{
            font-size: 22px;
            letter-spacing: 1px;
            color: #444;
            padding-left:10px;
    }
    .c-status{
            font-size: 24px;
            letter-spacing: 1px;
            color: @theme-color;
            padding-left:10px;
    }
    .c-order-bd{
        position: relative;
        padding-top:25px;
        padding-bottom: 15px;
    }
    .c-order-hd{
        padding:15px 0;
    }
    .c-order-ft{
        padding:20px 0;
    }
    .c-order-preview{
        padding:0 20px;
        background-color: #fff;
    }
    .c-money-title-no{
        font-size: 18px;
        letter-spacing: 1px;
        color: #797979;
        text-decoration:line-through;
    }
    .c-money-title-yes{
        font-size: 24px;
        letter-spacing: 1px;
        color: @theme-color;
    }
    .c-num-bottom{
        margin-top:20px;
    }
    .c-date,.c-date i{
        font-size: 24px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 1px;
        color: #797979;
    }
    .c-img-main{
        height:120px;
        width:142px;
    }
</style>
