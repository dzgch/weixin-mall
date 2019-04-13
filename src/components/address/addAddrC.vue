<template>
    <div class="addr">
        <div class="c-location">
            <i class="iconfont icontarget-lock"></i><span>定位到当前位置</span>
        </div>
        <group :gutter="gutter" :label-align="labelAlign">
            <x-input v-for="k in xinputList" :key="k.title" :title="k.title" :name="k.name" :placeholder="k.placeholder" :keyboard="k.keyboard" :is-type="k.isType"></x-input>
            <x-address :title="xaddrList.title" v-model="xaddrList.value" :list="xaddrList.addressData" :placeholder="xaddrList.placeholder" ></x-address>
      <x-textarea v-model="xtextList.value" :name="xtextList.name" :show-counter="xtextList.showCounter" :placeholder="xtextList.placeholder"></x-textarea>

    </group>
    <group :gutter="gutter" :label-align="labelAlign" class="c-switch">
      <x-switch :title="xswitchList.title" :value-map="xswitchList.valueMap" v-model="xswitchList.value"></x-switch>
    </group>
    </div>
</template>

<script>
import {  Group,XInput,XTextarea ,XSwitch ,XAddress, ChinaAddressV4Data, XButton, Value2nameFilter as value2name } from 'vux'

    let list=[{
      title:"收货人",
      name:"username",
      placeholder:"请填写姓名",
      keyboard:"",
      isType:"china-name"  
    },
    {
      title:"联系电话",
      name:"mobile",
      placeholder:"请填写联系电话",
      keyboard:"number",
      isType:"china-mobile"  
    }]
export default {
    name:"addAddrC",
    components:{
         Group,
        XInput,
        XAddress ,
        XTextarea ,
        XSwitch
    },
    props:{
        xinputList:{
            default:()=>list
        },
        xaddrList:{
            default:()=>({title:"配送地址",value:[],addressData:ChinaAddressV4Data,placeholder:"请选择省、市、区"})
        },
        xtextList:{
                default:()=>({value:"",name:"addr",showCounter:false,placeholder:"请填写详细地址(街道、楼牌号等)"})
            },
        xswitchList:{
            default:()=>({value:"",title:"设为默认值",valueMap:['0','1']})
        }
    },
    data(){
        return {
            labelAlign:"left"//为子元素设定统一对齐方式
            ,labelWidth:"2.8rem"
            ,gutter:15
        }
    }
}
</script>

<style lang="less">

.addr{
    .c-location{
        font-size: 30px;
        color: @theme-color;
        height: 85px;
        line-height: 85px;
        background-color: @bg-color;
        .iconfont{
            font-size: 36px;
            margin-right:10px;
        }
    }
    .weui-cell,
    .vux-cell-box .weui-cell{
        padding:30px 25px;
    }
    .c-switch{
        .weui-cell{
            padding:40px 25px;
        }
    }
    .weui-label{
        font-size: 30px;
        letter-spacing: 0px;
        color: @input-color;
        width:210px !important;
    }
    .weui-input{
        font-size: @input-font;
        color:@input-color;
        height:42px;
    }
    .weui-textarea{
        font-size: @input-font;
        color:@input-color;
    }
    
   
    .vux-popup-picker-placeholder{
        color:@placeholder-color;
        font-size:@input-font;
    }
}
</style>
