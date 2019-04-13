<template>
    <div class="sure-msg">
        <group :gutter="gutter" :label-align="labelAlign">
            <x-input v-for="k in xinputList" :key="k.title" :title="k.title" :name="k.name" :placeholder="k.placeholder" :keyboard="k.keyboard" :is-type="k.isType"></x-input>
        </group>
    </div>
</template>

<script>
import {  Group,XInput } from 'vux'

    let list=[{
      title:"留言：",
      name:"username",
      placeholder:"给卖家留言",
      keyboard:"",
      isType:""  
    }]
export default {
    name:"sureMsg",
    components:{
         Group,
        XInput
    },
    props:{
        xinputList:{
            default:()=>list
        }
    },
    data(){
        return {
            labelAlign:"left"//为子元素设定统一对齐方式
            ,labelWidth:"2.8rem"
            ,gutter:0
        }
    }
}
</script>

<style lang="less">

.sure-msg{
    height:100%;
    background-color: @bg-color;
    .weui-cell,
    .vux-cell-box .weui-cell{
        padding:30px 25px;
    }
    .weui-label{
        font-size: 30px;
        letter-spacing: 0px;
        color: @input-color;
        width:140px !important;
    }
    .weui-input{
        font-size: @input-font;
        color:@input-color;
        height:42px;
    }
    .vux-popup-picker-placeholder{
        color:@placeholder-color;
        font-size:@input-font;
    }
}
</style>
