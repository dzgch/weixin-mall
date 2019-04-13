<template>
    <div class="panel-for-coll c-line">
        <!-- <flexbox :gutter="0">
            <flexbox-item :span="1/16" v-show="isShow">
                <check-icon :value.sync="checked"></check-icon>
            </flexbox-item>
            <flexbox-item>
                <flexbox :gutter="gutter" :orient="orient" class="c-flexbox c-line">
                    <flexbox-item :span="7/16">
                    <div class="c-img-main" :style="{backgroundImage:'url('+img_url+')'}">
                    </div>
                    </flexbox-item>
                    <flexbox-item>
                        <flexbox orient="vertical">
                            <flexbox-item>
                                <div class="c-content">
                                    <div class="c-title">{{ title }}</div>
                                    <div class="c-money-title">{{ sign }}<span class="c-money">{{ money }}</span>/起</div>
                                </div>
                            </flexbox-item>
                            <flexbox-item class="c-left">
                                <button-c :type="btn_buy_type" :text="btn_buy_text" :style="style"></button-c>
                                <button-c :type="btn_borrow_type" :text="btn_borrow_text" :style="style"></button-c>
                            </flexbox-item>
                        </flexbox>
                    </flexbox-item>
                </flexbox>
            </flexbox-item>
        </flexbox> -->
        <div class="check-c" v-show="isShow">
            <check-icon :value.sync="checked"></check-icon>
        </div>
        <div class="c-img-main" :style="{backgroundImage:'url('+img_url+')'}">
        </div>
        <div class="c-content">
            <span class="c-title" @click="clickToDetails">{{title}}</a></span>
            <div class="c-money-title">{{ sign }}<span class="c-money">{{ money }}</span>&nbsp;/起</div>
            
            <button-c :type="btn_buy_type" :text="btn_buy_text" :style="style"></button-c>
            <button-c :type="btn_borrow_type" :text="btn_borrow_text" :style="style"></button-c>
        </div>
    </div>
</template>

<script>
// 收藏管理图文
import { Flexbox, FlexboxItem,CheckIcon } from 'vux'
import ButtonC from '@/components/basic/buttonCL.vue'

export default {
    name:"PanelForColl",
    components:{ 
        Flexbox,
        FlexboxItem,
        ButtonC,
        CheckIcon
    },
    data(){
        return {
            btn_buy_type: 'primary',
            btn_borrow_type:'warn',
            btn_buy_text:'立即购买',
            btn_borrow_text:'租赁',
            style:{},
            checked:false
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
            default:"horizontal"
        },
        img_url:{
            default:require("@_a/images/首页banner.png")
        },
        title:{
            default:"ELBE锂电采茶机"
        },
        sign:{
            default:"￥"
        },
        money:{
            default:1233
        },
        isShow:{
            default:false
        }
    },
    methods:{
        clickToDetails(){
            this.$router.push({
                path:this.$store.state.goodsDetailsPath
            })
        }
    }
    
}
</script>

<style lang="less">
@import '~vux/src/styles/1px.less';

.panel-for-coll{
    position: relative;
    padding:30px 0;
    .c-img-main{
    height:210px;
    border-radius: 4px;
    width:300px;
    vertical-align: top;
    display: inline-block;
}
    &.c-line:after{
        height:0;
        border:none;
    }
    .check-c{
      display: inline-block;
      line-height: 210px;
    }
    .c-content{
        display: inline-block;
        vertical-align: top;
        padding:20px 0 0 20px;
        width:50%;
    }
    .c-money-title{
        padding:20px 0;
        margin-top:0;
    }
    .weui-btn + .weui-btn{
        margin-top:0;
    }
   
}
</style>
