<template>
    <div>
        <flexbox :gutter="gutter" :orient="orient" class="c-flexbox">
            <flexbox-item>
            <div class="c-img-main" :style="{backgroundImage:'url('+goodsList.img_url+')'}">
                
            </div>
            </flexbox-item>
            <flexbox-item>
                <flexbox :orient="orient">
                    <flexbox-item>
                        <div class="c-content">
                            <div class="c-title">{{ goodsList.title }}</div>
                            <div class="c-money-title">{{ sign }}<span class="c-money">{{ goodsList.money }}</span>&nbsp;/起</div>
                        </div>
                    </flexbox-item>
                    <flexbox-item class="c-left">
                        <button-c-l :type="btn_buy_type" :text="btn_buy_text" :style="style"></button-c-l>
                        <button-c-l :type="btn_borrow_type" :text="btn_borrow_text" :style="style"></button-c-l>
                    </flexbox-item>
                </flexbox>
            </flexbox-item>
        </flexbox>
    </div>
</template>

<script>
// 首页小图文
import { Flexbox, FlexboxItem } from 'vux'
import ButtonCL from '@/components/basic/buttonCL.vue'

export default {
    name:"PanelST",
    components:{ 
        Flexbox,
        FlexboxItem,
        ButtonCL
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
        gutter:{
            default:10
        },
        justify:{
            default:"space-between"
        },
        orient:{
            default:"vertical"
        },
        goodsList:{
            default:()=>({
                img_url:require("@_a/images/首页banner.png"),
                title:"ELBE锂电采茶机",
                money:1233
            })
        },
        sign:{
            default:"￥"
        }
    }
    
}
</script>

<style lang="less" scoped>
@import '~vux/src/styles/1px.less';
.c-img-main{
    height:230px;
    border-radius: 4px;
}
.c-flexbox{
    padding-top:0;
}
</style>
