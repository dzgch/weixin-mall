<template>
    <div class="goods-details">
        {{goodsDetails.note}}
    </div>
</template>

<script>
import { Flexbox, FlexboxItem  } from 'vux'
export default {
    name:"goodsDetails",
    components:{
        Flexbox, 
        FlexboxItem
    },
    props:{
        goodsDetails:Object
    },
    data(){
        return {
            
        }
    }
}
</script>

<style lang="less" scoped>
.goods-details{
    background-color: @bg-color;
   padding:65px 40px;
   font-size: 24px;
	line-height: 38px;
	letter-spacing: 0px;
	color: #666666;
}
</style>
