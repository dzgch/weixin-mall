<template>
    <div class="order-goods-detail">
        <div class="c-order-hd">
            <flexbox  orient="horizontal" class=" c-top-title">
                <flexbox-item class="c-left">
                    <span>{{ topTitle }}</span>
                </flexbox-item>
            </flexbox>
        </div>
        <div class="c-order-bd c-line">
        <flexbox :gutter="0" orient="horizontal"  align="end">
            <flexbox-item :span="3/10" style="position:relative">
                <div class="c-img-main" :style="{backgroundImage:'url('+(orderDetails.url||img_url)+')'}">
                </div>
            </flexbox-item>
            <flexbox-item :span="7/10" class="c-bd-flex"> 
                <flexbox  orient="vertical" :gutter="0">
                    <flexbox-item class="c-left">
                        <div class="c-title"> {{ orderDetails.commodityName }}</div>
                    </flexbox-item>
                    <flexbox-item class="c-left">
                            <div class="c-money">￥<span>{{ Number(orderDetails.price).toFixed(2) }}</span></div>
                    </flexbox-item>
                    <flexbox-item class="c-left">
                            <div class="c-num">数量：<span>{{ orderDetails.count }}</span></div>
                    </flexbox-item>
                </flexbox>
            </flexbox-item>
        </flexbox>
        </div>
        <div class="c-order-ft">
            <button-l :text="btn_text" class="c-ft-btn-width" @click.native="askShop"></button-l>
        </div>
    </div>
</template>
<script>

import { FormPreview,Flexbox, FlexboxItem  } from 'vux'
import ButtonL from '@/components/basic/buttonL'

export default {
    name:"orderGoodsDetail",
    components:{
        FormPreview,
        Flexbox, 
        FlexboxItem ,
        ButtonL
    },
    props:{
        img_url:{
            default:require("@_a/images/首页banner.png")
        },
          orderDetails:Object
    },
    data(){
        return {
            btn_text:"联系客服",
            topTitle:"商品信息"
        }
    },
    methods:{
        askShop(){
            this.$vux.toast.show({
                text: '客服不在线哟',
                type:"text",
                time:2000
            })
        }
    }
}
</script>
<style lang="less">

    .order-goods-detail{
        @img-height:170px;
        padding:0 20px;
        background-color: #fff;
        .c-img-main{
            height:@img-height;
            width:100%;
            border-radius: 4px;
        }
        .c-title{
            padding:10px 0;
        }
        .c-num{
            font-size: 22px;
            letter-spacing: 1px;
            color: #444;
            padding-left:10px;
        }
        .c-order-bd{
            position: relative;
            padding-top:25px;
            padding-bottom: 15px;
            .c-bd-flex{
                height:@img-height;
                padding-left:20px;
                .vux-flexbox{
                    height:100%;
                }
            }
            .c-money{
                font-size:@input-font;
                color:@judge-color-true;
                font-family: PingFang-SC-Bold;
            }
        }
        .c-order-hd{
            padding:20px 0;
            .c-top-title{
                 font-size:@input-font;
                color:@grade-color;
            }
        }
        .c-order-ft{
            padding:45px 0 20px;
            width:95%;
            margin:auto;
        }
    }

  
</style>
