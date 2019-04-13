<template>
    <div class="goods-details">
        {{description}}
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
        
        description:{
            default:`1、绿篱修剪机、高枝锯、高枝剪、打草机、割灌机、草坪修剪机等多款性能全球名列前茅的电动园林工具,
                    2、一贝集团所有专业级电动园林工具均采用锂电池作为能源`
        }
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
