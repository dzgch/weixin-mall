<template>
    <div class="order-pay-msg">
        <form-preview :header-label="headerLabel" :body-items="list"></form-preview>
        <div class="order-status">实付金额： ￥{{ order_status}}</div>
    </div>
</template>
<script>

import { FormPreview,Flexbox, FlexboxItem  } from 'vux'

export default {
    name:"orderPayMsg",
    components:{
        FormPreview,
        Flexbox, 
        FlexboxItem 
    },
    props:{
        orderNum:{
            default:"123123123123123"
        },
        orderTime:{
            default:"2019/2/2 20:00"
        }
    },
    data(){
        return {
            list: [{
                label: '商品总额',
                value: '￥12.00'
            }, {
                label: '运费',
                value: '+￥0'
            }, {
                label: '交易状态',
                value: '-￥0'
            }],
            headerLabel:"支付信息",
            order_status:"22.00"
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
