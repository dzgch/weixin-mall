<template>
    <div>
        <flexbox :gutter="gutter" :orient="orient" class="c-flexbox">
            <flexbox-item>
            <div class="c-img-main" :style="{backgroundImage:'url('+ goodsList.img_url +')'}">
                
            </div>
            </flexbox-item>
            <flexbox-item>
                <flexbox :justify="justify" :gutter="0">
                    <flexbox-item :span="1/2">
                        <div class="c-content">
                            <div class="c-title">{{ goodsList.title }}</div>
                            <div class="c-money-title">{{ sign }}<span class="c-money">{{ goodsList.money }}</span>&nbsp;/起</div>
                        </div>
                    </flexbox-item>
                    <flexbox-item :psan="1/2" class="c-right">
                        <button-c :type="btn_buy_type" :text="btn_buy_text" :style="style"></button-c>
                        <button-c :type="btn_borrow_type" :text="btn_borrow_text" :style="style"></button-c>
                    </flexbox-item>
                </flexbox>
            </flexbox-item>
        </flexbox>
    </div>
</template>

<script>
// 首页大图文
import { Flexbox, FlexboxItem } from 'vux'
import ButtonC from '../basic/buttonC.vue'
let list={
img_url:require("@_a/images/首页banner.png"),
                title:"ELBE锂电采茶机",
                money:1233
}
export default {
    name:"PanelT",
    components:{
        Flexbox,
        FlexboxItem,
        ButtonC
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
            default:()=>list
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
    height:390px;
    border-radius: 4px;
}
.c-flexbox{
    padding-top:0;
}
</style>
