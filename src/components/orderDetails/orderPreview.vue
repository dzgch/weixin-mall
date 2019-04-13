<template>
    <div class="c-order-preview">
        <div class="c-order-hd">
            <flexbox  orient="horizontal" class=" c-date">
                <flexbox-item class="c-left">
                    <i class="iconfont iconshijian"></i>
                    <span>{{ date }}</span>
                </flexbox-item>
                <flexbox-item class="c-right">
                    <span>{{ time }}</span>
                </flexbox-item>
            </flexbox>
        </div>
        <div class="c-order-bd c-line">
        <flexbox :gutter="0" orient="horizontal">
            <flexbox-item :span="1/5" style="position:relative">
                <div class="c-img-main" :style="{backgroundImage:'url('+img_url+')',borderRadius:'4px'}">
                </div>
            </flexbox-item>
            <flexbox-item :span="4/5"> 
                <flexbox  orient="vertical" :gutter="20">
                    <flexbox-item class="c-left">
                        <flexbox  orient="horizontal">
                            <flexbox-item class="c-left" :span="3/4">
                                <div class="c-title c-content"> {{ title }}</div>
                            </flexbox-item>
                            <flexbox-item class="c-right" :span="1/4">
                                <div class="c-money-title-no">{{ sign }}<span class="c-money">{{ Number(no_money).toFixed(2) }}</span></div>
                            </flexbox-item>
                        </flexbox>
                    </flexbox-item>
                    <flexbox-item class="c-right">
                         <flexbox  orient="horizontal">
                            <flexbox-item class="c-left">
                                 <div class="c-num">数量：<span>{{ goods_num }}</span></div>
                            </flexbox-item>
                            <flexbox-item class="c-right">
                                 <div class="c-money-title-yes">实付：{{ sign }}<span class="c-money">{{ Number(yes_money).toFixed(2) }}</span></div>
                            </flexbox-item>
                        </flexbox>
                    </flexbox-item>
                </flexbox>
            </flexbox-item>
        </flexbox>
        </div>
        <div class="c-order-ft">
            <flexbox  orient="horizontal">
                <flexbox-item class="c-left">
                    <div class="c-status">{{ goods_status }}</div>
                </flexbox-item>
                <flexbox-item class="c-right">
                    <button-r v-for="k in buttonList" :type="k.type" :text="k.text" :key="k.type"></button-r>
                </flexbox-item>
            </flexbox>
        </div>
    </div>
</template>
<script>
// 我的订单
import { FormPreview,Flexbox, FlexboxItem  } from 'vux'
import ButtonR from '@/components/basic/buttonR'

export default {
    name:"orderPreview",
    components:{
        FormPreview,
        Flexbox, 
        FlexboxItem ,
        ButtonR
    },
    props:{
        img_url:{
            default:require("@_a/images/首页banner.png")
        },
        buttonList:{
            default:()=>[{
                type:"default",
                text:"取消订单"
            },{
                type:"primary",
                text:"去支付"
            }]
        },
        goods_num:{
            default:0
        },
         title:{
            default:"ELBE锂电采茶机"
        },
        sign:{
            default:"￥"
        },
        no_money:{
            default:12.33
        },
        yes_money:{
            default:(10.00).toFixed(2)
        },
        date:{
            default:"2019-2-2"
        },
        time:{
            default:"12.22"
        },
        goods_status:{
            default:"交易完成"
        }
    }
}
</script>
<style lang="less" scoped>
    .c-title{
        padding-left:10px;
    }
    .c-num{
            font-size: 22px;
            letter-spacing: 1px;
            color: #444;
            padding-left:10px;
    }
    .c-status{
            font-size: 24px;
            letter-spacing: 1px;
            color: @theme-color;
            padding-left:10px;
    }
    .c-order-bd{
        position: relative;
        padding-top:25px;
        padding-bottom: 15px;
    }
    .c-order-hd{
        padding:15px 0;
    }
    .c-order-ft{
        padding:20px 0;
    }
    .c-order-preview{
        padding:0 20px;
        background-color: #fff;
    }
    .c-money-title-no{
        font-size: 18px;
        letter-spacing: 1px;
        color: #797979;
        text-decoration:line-through;
    }
    .c-money-title-yes{
        font-size: 24px;
        letter-spacing: 1px;
        color: @theme-color;
    }
    .c-date,.c-date i{
        font-size: 24px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 1px;
        color: #797979;
    }
    .c-img-main{
        height:120px;
        width:142px;
    }
</style>
