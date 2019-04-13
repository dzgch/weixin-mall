<template>
    <div class="goods-details-footer">
        <flexbox  orient="horizontal" :gutter="0" class="c-goods-flexbox">
            <flexbox-item class="c-center" :span="4/14">
                <grid :show-lr-borders="false" :show-vertical-dividers="false" :cols="3">
                    <grid-item  v-for="i in gridList" :key="i.label" :label="i.label" :link="i.link">
                        <i slot="icon" :class="i.img"></i>
                    </grid-item>
                </grid>
            </flexbox-item>
            <flexbox-item class="c-center" :span="10/14">
                <div class="c-to-car"><x-button  class="c-btn" type="default" text="加入购物车" :mini="true" :link="link"></x-button></div>
                <div class="c-to-buy"><x-button @click.native="clickBuy" class="c-btn1" type="default" text="立即购买" :mini="true" :link="link"></x-button></div>
            </flexbox-item>
        </flexbox>
    </div>
</template>

<script>
import { Flexbox, FlexboxItem,XButton,Grid ,GridItem } from 'vux'
const baseList=[
    {
        link:'/',
        label:"首页",
        img:["iconfont","iconshouye"]
    },
    {
        link:'/',
        label:"客服",
        img:["iconfont","iconkefu"]
    },
    {
        link:'/',
        label:"收藏",
        img:["iconfont","icontubiao_wuxing-"]
    }
]
export default {
    name:"goodsDetailFooter",
    components:{
        Flexbox, 
        FlexboxItem,
        XButton,
        Grid ,GridItem
    },
    props:{
        link:{
            default:""
        },
        money:{
            default:"108"
        }
    },
    data(){
        return {
            gridList:baseList
        }
    },
    methods:{
        clickBuy(){
            console.log(this.$router);
            this.$router.push({
                path:"/sureorder"
            })
        }
    }
}
</script>

<style lang="less">
.goods-details-footer{
    background-color: @bg-color;
 
    .c-goods-flexbox{
        box-shadow: 0px -10px 13px 0px 
		rgba(0, 0, 0, 0.04);
    }
    .weui-grids:before{
        height:0;
        border:none;
    }
    .weui-grid{
        padding: 15px 10px;
    }
  
    .weui-grid:after{
        height:0;
        border:none;
    }
    .c-all-money{
            font-size: 30px;
        color: @c_333;
        padding-left:25px;
        .c-money{
            color:#fe4646;
        }
    }
    .iconfont{
        font-size: 37px;
        color: #666666;
    }
    .weui-grid__icon{
        height: 45px;
        width: 45px;
    }
    .weui-grid__label{
        color: #666666;
        font-size: 20px;
         margin-bottom:5px;
    }
    .c-to-buy{
        padding-left:10px;
        display: inline-block;
    }
    .c-to-car{
        .c-to-buy;
        padding-left:20px;
    }
    .c-btn1{
        width: 243px;
        height: 81px;
        background-image: linear-gradient(90deg, 
            #e66e0d 0%, 
            #de443a 100%), 
        linear-gradient(
            #de443a, 
            #de443a);
        background-blend-mode: normal, 
            normal;
        border-radius: 40px;
        border:none;
        font-size: 28px;
        letter-spacing: 2px;
        color: #ffffff;
    }
    .c-btn{
        width: 220px;
        height: 81px;
        padding:0 10px;
        background-image: linear-gradient(
            #b1b1b1, 
            #b1b1b1), 
        linear-gradient(90deg, 
            #e66e0d 0%, 
            #de443a 100%), 
        linear-gradient(
            #de443a, 
            #de443a);
        background-blend-mode: normal, 
            normal, 
            normal;
        border-radius: 40px;
        border:none;
        font-size: 28px;
        letter-spacing: 2px;
        color: #ffffff;
    }
}
</style>
