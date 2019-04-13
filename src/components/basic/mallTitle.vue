<template>
    <div class="mall-title c-center">
        <group-title class="g-title">{{ title }}</group-title>
    </div>
</template>

<script>
import { GroupTitle } from 'vux'
export default {
    name:"mallTitle",
    components:{
GroupTitle
    },
    props:{
       title:{
            default:'一站式园林服务平台'
        }
    },
    data(){
        return {
            
        }
    }
}
</script>

<style lang="less">
.mall-title{
    background-color: @bg-color;
       .g-title{
        font-size:32px;
        color:#393939;
        padding:30px 0 10px;
    }
    
    .weui-cells__title{
        margin:0 !important;
    }
}
</style>
