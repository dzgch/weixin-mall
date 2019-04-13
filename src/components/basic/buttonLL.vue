<template>
    <x-button  class="c-btn" :plain="plain" :type="type" :text="text" :disabled="disabled" :mini="mini" :link="link"></x-button>
</template>

<script>
import { XButton } from 'vux'
// 渐变按钮
export default {
    name:"buttonLL",
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
            default:'提交'
        },
        mini:{
            default:true
        },
        plain:{
            default:false
        },
        link:{
            default:""
        }
    }
}
</script>

<style lang="less" scoped>
.c-btn{
        // width: 314px;
        width:100%;
        height: 72px;
        background-image: linear-gradient(90deg, 
            #e66e0d 0%, 
            #de443a 100%), 
        linear-gradient(
            #ff4343, 
            #ff4343);
        background-blend-mode: normal, 
            normal;
        border-radius: 42px;
        font-size: 36px;
        line-height: 72px;
        color: #ffffff;
        font-weight: 100;
        font-stretch: normal;
        letter-spacing: 0px;
    }
    .c-btn+.c-btn{
        margin-left:10px;
    }
</style>
