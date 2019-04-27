<template>
    <div class="sure-submit">
        <flexbox  orient="horizontal" :gutter="0">
            <flexbox-item class="c-center c-bg" >
                <div class="c-all-money">实付金额： <span class="c-money">￥{{ (Number(price)).toFixed(2)}}</span></div>
            </flexbox-item>
            <flexbox-item class="c-center">
                <x-button @click.native="clickToBuy" class="c-btn" type="default" text="提交订单" :mini="true" :link="link"></x-button>
            </flexbox-item>
        </flexbox>
    </div>
</template>

<script>
import { Flexbox, FlexboxItem,XButton } from 'vux'
export default {
    name:"sureSubmit",
    components:{
        Flexbox, 
        FlexboxItem,
        XButton
    },
    props:{
        link:{
            default:""
        },
        price:{
            default:"0"
        },
    },
    data(){
        return {
            
        }
    },
    methods:{
        clickToBuy(){
            this.$emit("on-clicktobuy")
        }
    }
}
</script>

<style lang="less" scoped>
.sure-submit{
    .c-bg{
        background-color: #f4f4f4;
    }
    .c-all-money{
            font-size: 30px;
        color: @c_333;
        padding-left:25px;
        .c-money{
            color:#fe4646;
        }
    }
    .c-btn{
        width: 375px;
        height: 98px;
        background-image: linear-gradient(90deg, 
            #e66e0d 0%, 
            #de443a 100%), 
        linear-gradient(
            #fe4646, 
            #fe4646);
        background-blend-mode: normal, 
            normal;
        color:#fff;
        font-size: 30px;
        letter-spacing: 3px;
        border-radius: 0;
    }
}
</style>
