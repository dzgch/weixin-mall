<template>
    <x-button  class="c-btn" :plain="plain" :type="type" :text="text" :disabled="disabled" :mini="mini" :link="link"></x-button>
</template>

<script>
import { XButton } from 'vux'
// 正常按钮
export default {
    name:"buttonR",
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
        border-radius:10px;
        width:140px;
        padding:0 10px;
        margin-top:0;
        height:60px;
        line-height:60px;
    }
    .c-btn+.c-btn{
        margin-left:10px;
    }
</style>
