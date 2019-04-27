<template>
    <div class="order-pay-msg">
        <form-preview :header-label="headerLabel" :body-items="list"></form-preview>
        <div class="order-status">实付金额： ￥{{ (Number(this.orderDetails.payMoney)).toFixed(2)}}</div>
    </div>
</template>
<script>

import { FormPreview,Flexbox, FlexboxItem  } from 'vux'
import { mapGetters, mapState } from 'vuex';
let staList=['交易已取消','等待您的支付','已支付','待发货','待收货','待评价','交易完成']
export default {
    name:"orderPayMsg",
    components:{
        FormPreview,
        Flexbox, 
        FlexboxItem 
    },
    props:{
          orderDetails:Object
    },
    data(){
        return {
            headerLabel:"支付信息",
            statusList:staList
        }
    },
    mounted(){
        console.log(this.orderDetails.totalPrice)
    },
    computed:{
        ...mapGetters([
            'getOrderState'
        ]),
        list(){
            
        let state=this.statusList[this.orderDetails.status]
            return [
            {
                label: '商品总额',
                value: '￥'+ (Number(this.orderDetails.totalPrice).toFixed(2))
            },
            //  {
            //     label: '运费',
            //     value: '+￥'+(Number(this.orderDetails.freight)).toFixed(2)
            // },
             {
                label: '交易状态',
                value: state
            }
        ]
        }
    }
}
</script>
<style lang="less">


.order-pay-msg{
    background-color: #fff;
    padding:0px 20px;
    font-size: 26px;
    color: #868686;
    .weui-form-preview:before{
        height:0;
        border:none;
    }
    .weui-form-preview__hd .weui-form-preview__label{
        color:#333;
        font-size: 26px;
    }
    .weui-form-preview__bd{
        font-size: 26px;
    }
    .order-status{
        height:80px;
        text-align: right;
        color:@judge-color-true;
        font-size:30px;
        line-height: 80px;
    }
}

   
</style>
