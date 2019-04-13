<template>
    <div class="panel-car c-line">
        <div class="check-c" v-show="isShow">
            <check-icon :value.sync="checked"></check-icon>
        </div>
        <div class="c-img-main" :style="{backgroundImage:'url('+img_url+')'}">
            
        </div>
        <div class="c-content">
            <div class="c-title">{{ title }}</div>
            <div class="c-car-money">
                <span class="c-money">￥{{ (Number(money)).toFixed(2) }}</span>
            </div>
        </div>
        <div class="car-num">
                <inline-x-number :min="0" v-model="roundValue"></inline-x-number>
        </div>
    </div>
</template>

<script>
// 购物车图文
import { Flexbox, FlexboxItem,Group,XNumber,InlineXNumber,CheckIcon } from 'vux'
export default {
    name:"PanelForCar",
    components:{
        Flexbox,
        FlexboxItem
        ,Group,XNumber
        ,InlineXNumber
        ,CheckIcon
    },
    props:{
        gutter:{
            default:0
        },
        orient:{
            default:"horizontal"
        },
        img_url:{
            default:require("@_a/images/首页banner.png")
        },
        title:{
            default:"ELBE锂电采茶机"
        },
        
        money:{
            default:12.33
        },
         isShow:{
            default:false
        }
    },
    data(){
        return {
            sign:"￥",
            roundValue:10,
            checked:false
        }
    }
    
}
</script>

<style lang="less">
@import '~vux/src/styles/1px.less';

@car-height:130px;
.panel-car{
    padding:15px 0;
    background-color: @bg-color;
    position: relative;
    .check-c{
      display: inline-block;
      line-height: @car-height;
    }
    &.c-line:after{
        height:0;
        border:none;
    }
    
    .c-img-main {
        width: 160px;
        height: @car-height;
        border-radius: 4px;
        vertical-align: top;
    }
   
    .car-num{
        display: inline-block;
        position: absolute;
        right: 10px;
        vertical-align: middle;
        top: 62%;
        
            // .vux-inline-x-number{
            //     position: absolute;
            //     right:20px;
            // }
        .vux-number-selector {
            height: 35px;
            font-size: 24px;
            line-height: 24px;
            color: #444;
            border: solid 1px #999999;
            & svg{
                fill:#444;
            }
        }
        a.vux-number-selector:first-child{
            border-radius: 6px 0 0 6px;
        }
        a.vux-number-selector:last-child{
            border-radius: 0px 6px 6px 0;
        }
        .vux-number-input{
            .vux-number-selector;
            border-left:none;
            border-right:none;
        }
    }
    .c-content{
        height:@car-height;
        position: relative;
        display: inline-block;
        vertical-align: top;
        .c-title{
            margin-top:15px;
            padding:0 10px;
        }
        .c-car-money{
            position: absolute;
            bottom: 20px;
            width:100%;
            .c-money{
                	font-size: 26px;
                    letter-spacing: 1px;
                    color: @theme-color;
            }
            
        }
    
    }
}

</style>
