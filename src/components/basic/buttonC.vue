<template>
    <x-button class="c-btn" :plain="plain" :type="type" :text="text" :disabled="disabled" :mini="mini" :link="link"></x-button>
</template>

<script>
import { XButton } from 'vux'
// 圆角按钮
export default {
    name:"buttonC",
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
        width:160px;
        padding:0 20px;
        height:50px;
        line-height: 50px;
    }
    .c-btn+.c-btn{
        margin-left:10px;
    }
</style>
