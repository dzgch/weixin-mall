<template>
    <div class="panel-for-hot">
        <flexbox :gutter="0" orient="horizontal" class="c-line">
            <flexbox-item :span="4/10">
            <div class="c-img-main" :style="{backgroundImage:'url('+goodsList.picurl+')'}">
            </div>
            </flexbox-item>
            <flexbox-item :span="6/10">
                <flexbox orient="vertical" class="c-flexbox-hot">
                    <flexbox-item>
                        <div class="c-content">
                            <div class="c-title">{{ goodsList.name }}</div>
                            <div class="c-money-title">￥<span class="c-money">{{ (Number(goodsList.price)).toFixed(2) }}</span>&nbsp;/起</div>
                        </div>
                    </flexbox-item>
                    <flexbox-item class="c-left c-flexhot-footer">
                                <button-by-buy  v-show="goodsList.type==3||goodsList.type==2"  :goodsList="k"></button-by-buy>
                                <button-by-loan v-show="goodsList.type==3||goodsList.type==1" :goodsList="k"></button-by-loan>
                    </flexbox-item>
                </flexbox>
            </flexbox-item>
        </flexbox>
    </div>
</template>

<script>
// 热卖图文
import { Flexbox, FlexboxItem } from 'vux'
import ButtonC from '@/components/basic/buttonCL.vue'
import ButtonByBuy from '@/components/basic/buttonByBuy'
export default {
    name:"PanelForHot",
    components:{ 
        Flexbox,
        FlexboxItem,
        ButtonC,
        ButtonByBuy
    },
    data(){
        return {
            btn_buy_type: 'primary',
            btn_buy_text:'立即购买',
            style:{}
        }
    },
    props:{
        goodsList:{
            type:[Object,Array]
        }
    }
    
}
</script>

<style lang="less" scoped>
@import '~vux/src/styles/1px.less';

.panel-for-hot{
    background-color: @bg-color;
    padding:30px 0;
    position: relative;
    .c-flexbox-hot{
        padding:0 35px;
    }
    .c-img-main{
        height:205px;
        border-radius: 4px;
        width:305px;
    }
    .c-flexhot-footer{
        padding-top:20px;
    }
     .c-line:before{
        height:0;
        border:none;
    }
}
</style>
