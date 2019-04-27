<template>
    <div class="p-for-goods-details">
        <flexbox :gutter="0" orient="vertical" class="c-flexbox">
            <flexbox-item>
            <div class="c-img-main" :style="{backgroundImage:'url('+goodsDetails.picurl+')'}">
                
            </div>
            </flexbox-item>
            <flexbox-item>
                <flexbox :justify="justify" :gutter="0" align="end">
                    <flexbox-item :span="3/4">
                        <div class="c-content">
                            <div class="c-title">{{ goodsDetails.name }}</div>
                            
                            <div class="c-money-goods" v-show="isBuy">
                                <span class="c-money">购买：￥{{ (Number(goodsDetails.price)).toFixed(2) }}</span>
                                <span class="c-money-no">￥{{ (Number(goodsDetails.price)).toFixed(2) }}</span>
                            </div>
                            <div class="c-money-goods" v-show="isLoan">
                                <span class="c-money">租赁：￥{{ (Number(goodsDetails.rentPrice)).toFixed(2) }}</span>
                            </div>
                        </div>
                    </flexbox-item>
                    <!-- <flexbox-item :psan="1/4" class="c-right c-right-icon">
                        <i class="iconfont iconfenxiang1"></i>
                    </flexbox-item> -->
                </flexbox>
            </flexbox-item>
            <flexbox-item>
               <flexbox :justify="justify" :gutter="0" >
                    <!-- <flexbox-item class="c-left">
                        <div class="c-cuxiao">
                            限时促销
                        </div>
                    </flexbox-item>
                    <flexbox-item class="c-right">
                        <span class="c-addr">{{addr}}</span>
                    </flexbox-item> -->
                </flexbox>
            </flexbox-item>
        </flexbox>
    </div>
</template>

<script>
// 商品详情图文
import { Flexbox, FlexboxItem } from 'vux'
import { mapState } from 'vuex';

export default {
    name:"PForGoodsDetails",
    components:{
        Flexbox,
        FlexboxItem
    },
    data(){
        return {
            btn_buy_type: 'primary',
            btn_borrow_type:'warn',
            btn_buy_text:'立即购买',
            btn_borrow_text:'租赁',
            style:{}
        }
    },
    props:{
        justify:{
            default:"space-between"
        },
        img_url:{
            default:require("@_a/images/首页banner.png")
        },
        goodsDetails:Object
    },
    computed:{
        isLoan(){
            return this.goodsDetails.type==3||this.goodsDetails.type==1
        },
        isBuy(){
            return this.goodsDetails.type==3||this.goodsDetails.type==2
        }
    }
    
}
</script>

<style lang="less" scoped>
@import '~vux/src/styles/1px.less';
.p-for-goods-details{
    .c-img-main{
        height:430px;
        // border-radius: 4px;
    }
    .c-flexbox{
        padding-top:0;
    }
    .iconfenxiang1{
        font-size:36px;
    }
    .c-right-icon{
        padding-top:15px;
    }
    .c-content{
        .c-title{
            font-size: 36px;
            color:#353535;
            padding: 20px 0 0;
            line-height: 47px;
        }
    }
    .c-money-goods{
        padding:10px 0;
        .c-money{
            font-size:36px;
            color: #de2e2e;
        }
        .c-money-no{
            font-size:26px;
            color: #999;
            text-decoration: line-through;
            padding-left:30px;
        }
    }
    .c-cuxiao{
        width: 123px;
        height: 37px;
        background-color: #df463c;
        border-radius: 2px;
        font-size: 26px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 35px;
        letter-spacing: 0px;
        color: #ffffff;
        text-align:center;
    }
    .c-addr{
        font-size: 26px;
        letter-spacing: 0px;
        color: #999999;
    }
}

</style>
