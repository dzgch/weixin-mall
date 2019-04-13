<template>
    <div class="order-num">
        <flexbox  orient="vertical" :gutter="0">
            <flexbox-item class="c-left">
                <div class="c-order-num">订单编号 ：<span>{{ orderNum }}</span></div>
            </flexbox-item>
            <flexbox-item class="c-left">
                <div class="c-order-time">下单时间 ：<span>{{ orderTime }}</span></div>
            </flexbox-item>
        </flexbox>
    </div>
</template>
<script>

import { FormPreview,Flexbox, FlexboxItem  } from 'vux'
import ButtonR from '@/components/basic/buttonR'

export default {
    name:"orderNum",
    components:{
        FormPreview,
        Flexbox, 
        FlexboxItem ,
        ButtonR
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
