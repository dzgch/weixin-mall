<template>
    <div class="panel-sure-order">
        <flexbox :gutter="gutter" align="flex-start">
            <flexbox-item :span="3/11">
            <div class="c-img-main" :style="{backgroundImage:'url('+img_url+')'}">
                
            </div>
            </flexbox-item>
            <flexbox-item :span="8/11" class="c-panel-car-flex">
                <div class="c-content">
                    <div class="c-title">{{ title }}</div>
                    <div class="c-car-money">
                        <span class="c-money">￥{{ (Number(money)).toFixed(2) }}</span>
                        <div class="c-x-number"><inline-x-number :min="0" v-model="roundValue"></inline-x-number></div>
                    </div>
                </div>
            </flexbox-item>
        </flexbox>
    </div>
</template>

<script>
// 确认购买页图文
import { Flexbox, FlexboxItem,Group,XNumber,InlineXNumber } from 'vux'
export default {
    name:"PanelForSureOrder",
    components:{
        Flexbox,
        FlexboxItem
        ,Group,XNumber
        ,InlineXNumber
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
    },
    data(){
        return {
            sign:"￥",
            roundValue:10
        }
    }
    
}
</script>

<style lang="less">
@import '~vux/src/styles/1px.less';

@car-height:188px;
.panel-sure-order{
    padding:45px 0 50px;
    background-color: @main-bg-color;
    position: relative;

    .c-img-main {
        width: 207px;
        height: @car-height;
        border-radius: 4px;
    }
    .c-panel-car-flex{
        height:@car-height;
        .c-content{
        height:100%;
        position: relative;
        .c-title{
            padding:5px 25px;
        }
        .c-car-money{
            position: absolute;
            bottom: 20px;
            width:100%;
            
             padding:0 30px;
            .vux-inline-x-number{
                display: block;
            }
            .c-money{
                	font-size: 26px;
                    letter-spacing: 1px;
                    color: @judge-color-true;
                    display: block;
                    margin-bottom: 20px;
            }
            .c-x-number{

            }
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
    }
    }
}

</style>
