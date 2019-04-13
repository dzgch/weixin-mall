<template>
    <x-button class="c-btn" :plain="plain" :type="type" :text="text" :disabled="disabled" :mini="mini" :link="link"></x-button>
</template>

<script>
import { XButton } from 'vux'
// 圆角按钮
export default {
    name:"buttonCL",
    components:{
         XButton
    },
    props:{
        type:{
            default:'default'
        },
        disabled:{
            default:false
        },
        text:{
            default:'点我'
        },
        mini:{
            default:true
        },
        plain:{
            default:true
        },
        link:{
            default:""
        }
    }
}
</script>

<style lang="less" scoped>
    .c-btn{
        border-radius:25px;
        width:135px;
        padding:0 10px;
        height: 44px;
        line-height: 44px;
    }
    .c-btn+.c-btn{
        margin-left:10px;
    }
</style>
