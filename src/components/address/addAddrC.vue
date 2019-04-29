<template>
    <div class="addr">
        <!-- <div class="c-location">
            <i class="iconfont icontarget-lock"></i><span>定位到当前位置</span>
        </div> -->
        <group :gutter="gutter" :label-align="labelAlign">
            <x-input  
             title="收货人" 
            name="username" placeholder="请填写姓名" 
            v-model="address.username"
             is-type="china-name" 
             @on-blur="bulrUser" >
            </x-input>
            <x-input  
             title="联系电话" 
             v-model="address.phone"
            name="phone" placeholder="请填写联系电话" 
            keyboard="number" is-type="china-mobile"
            @on-blur="bulrPhone"
            >
            </x-input>
            <x-address :title="xaddrList.title" 
            v-model="address.address1" 
            :list="xaddrList.addressData" 
            :placeholder="xaddrList.placeholder"
            :raw-value="true"
            @on-shadow-change="addressChange"
            @on-hide="bulrAddres" ></x-address>
      <x-textarea v-model="address.address2" 
      :name="xtextList.name" 
      @on-change="bulrAddrSmall"
      :show-counter="xtextList.showCounter" 
      :placeholder="xtextList.placeholder"></x-textarea>

    </group>
    <group :gutter="gutter" :label-align="labelAlign" class="c-switch">
      <x-switch :title="xswitchList.title" 
      :value-map="xswitchList.valueMap"
       v-model="address.main"></x-switch>
    </group>
    </div>
</template>

<script>
import {  Group,XInput,XTextarea ,XSwitch ,XAddress, ChinaAddressV4Data, XButton, Value2nameFilter as value2name } from 'vux'
import { mapActions } from 'vuex';

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
        address:{
            type:Object,
            default:()=>({
                username:"",
                phone:"",
                address2:"",
                address1:["北京市", "市辖区", "东城区"],
                main:0
            })
        }
    },
    data(){
        return {
            labelAlign:"left"//为子元素设定统一对齐方式
            ,labelWidth:"2.8rem"
            ,gutter:15,
            addressL:[],
            xaddrList:{
                title:"配送地址",
                
                addressData:ChinaAddressV4Data,
                placeholder:"请选择省、市、区"
            },
            xtextList:{
                name:"addr",
                showCounter:false,
                placeholder:"请填写详细地址(街道、楼牌号等)"
            },
            xswitchList:{
                title:"设为默认值",
                valueMap:[0,1]
            }
        }
    },
    mounted(){
        if(this.$route.query.isAdd){
            this.handleClearAddr()
        }
    },
    methods:{
        ...mapActions([
            'handleAddrUser',
            'handleAddrPhone',
            'handleAddrLarge',
            'handleAddrSmall',
            'handleAddrMain',
            'handleClearAddr'
        ]),
        bulrUser(val){
            this.handleAddrUser(val)
        },
        bulrPhone(val){
            this.handleAddrPhone(val)
        },
        bulrAddres(val){
        },
        bulrAddrSmall(val){
            console.log(val)
            this.handleAddrSmall(val)
        },
        addressChange(ids,names){
            this.addressL=names
            let data=this.addressL.join(" ")
            this.handleAddrLarge(data)
        }
    },
    watch:{
        'address.main'(newVal,oldVal){
            this.handleAddrMain(newVal)
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
    
   .vux-popup-picker-value{
       font-size: 28px;
   }
    .vux-popup-picker-placeholder{
        color:@placeholder-color;
        font-size:@input-font;
    }
}
.vux-popup-header-left,
.vux-popup-header-right{
    font-size: 28px;
}
.vux-popup-dialog .vux-popup-header{
    height:75px;
    line-height:75px;
}
</style>
