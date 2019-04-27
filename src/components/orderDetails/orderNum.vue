<template>
    <div class="order-num">
        <flexbox  orient="vertical" :gutter="0">
            <flexbox-item class="c-left">
                <div class="c-order-num">订单编号 ：<span>{{ orderDetails.orderNumber }}</span></div>
            </flexbox-item>
            <flexbox-item class="c-left">
                <div class="c-order-time">下单时间 ：<span>{{ time }}</span></div>
            </flexbox-item>
        </flexbox>
    </div>
</template>
<script>

import { FormPreview,Flexbox, FlexboxItem  } from 'vux'
import ButtonR from '@/components/basic/buttonR'
import { getHour24 } from '@/libs/util'
export default {
    name:"orderNum",
    components:{
        FormPreview,
        Flexbox, 
        FlexboxItem ,
        ButtonR
    },
    props:{
          orderDetails:Object
    },
    data(){
        return {
            // time:getHour24(this.orderDetails.payOrdertime)
        }
    },
    computed:{
        time(){
            return getHour24(this.orderDetails.payOrdertime)
        }
    }
}
</script>
<style lang="less" scoped>


.order-num{
    background-color: #fff;
    padding:25px 20px;
    font-size: 26px;
	color: #868686;
    
}

   
</style>
