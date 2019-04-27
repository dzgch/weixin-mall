<template>
    <div class="order-status" :style="{backgroundImage:'url('+img_url+')'}">
        <span class="c-status-text">{{ orderState[orderDetails.status] }}</span>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
let staList=['交易已取消','等待您的支付','已支付','待发货','待收货','待评价','交易完成']
export default {
    name:"orderStatus",
    props:{
        orderDetails:Object
    },
    data(){
        return {
            img_url:require("@_a/images/订单详情.jpg"),
            orderState:staList
        }
    },
    computed:{
        ...mapGetters([
            'getOrderState'
        ])
    }
}
</script>

<style lang="less" scoped>

.order-status{
    @img-height:186px;

    position: relative;
    width: 100%;
	height: @img-height;
	background-image: linear-gradient(-90deg, 
		#4bd964 0%, 
		#39b54f 100%), 
	linear-gradient(
		#ffffff, 
		#ffffff);
	background-blend-mode: normal, 
        normal;
    background: center center no-repeat;
    background-size: cover;
    .c-status-text{
        position: absolute;
        left: 20px;
        font-size: 36px;
        letter-spacing: 0px;
        color: #ffffff;
        line-height: @img-height;
    }
}
</style>
