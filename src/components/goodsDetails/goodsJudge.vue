<template>
    <div class="goods-judge">
        <flexbox  orient="vertical" :gutter="0" class="c-goods-flexbox">
            <flexbox-item class="c-left c-flex-one">
                <div class="head-img" :style="{backgroundImage:'url('+img_url+')'}"></div>
                <span class="c-name">{{ariseList.username}}</span>
            </flexbox-item>
            <flexbox-item class="c-left">
                <div class="c-description">{{ariseList.text}}</div>
            </flexbox-item>
            <flexbox-item class="c-left c-flex-three">
                <!-- <div class="c-show" v-for="k in imgList">
                    <div class="c-show-img" :style="{backgroundImage:'url('+k+')'}"></div>
                </div> -->
            </flexbox-item>
        </flexbox>
    </div>
</template>

<script>
import { Flexbox, FlexboxItem  } from 'vux'
import { mapActions } from 'vuex';
let baseList=[require("@_a/images/首页banner.png"),require("@_a/images/首页banner.png"),require("@_a/images/首页banner.png")];
export default {
    name:"goodsJudge",
    components:{
        Flexbox, 
        FlexboxItem
    },
    props:{
        img_url:{
            default:require("@_a/images/首页banner.png")
        },
        imgList:{
            default:()=>baseList
        },
        ariseList:Object
    },
    data(){
        return {
            
        }
    },
   
}
</script>

<style lang="less" scoped>
.goods-judge{
    background-color: @bg-color;
    .c-flex-one{
        padding:15px 40px 10px;
    }
     .head-img{
        height:46px;
        width:46px;
        background-color: #ffffff;
	    //box-shadow: 0px 3px 7px 0px 
		//rgba(116, 116, 116, 0.46);
        //border: solid 6px #ededed;
        border-radius: 50%;
        margin:auto;
        display: inline-block;
    }
    .c-name{
        font-size: 28px;
        line-height: 24px;
        letter-spacing: 0px;
        color: #212121;
        line-height: 45px;
    vertical-align: top;
    padding-left: 10px;
    }
    .c-description{
        font-size: 24px;
        line-height: 24px;
        letter-spacing: 0px;
        color: #666666;
        line-height: 26px;
        padding:0 45px 10px;
    }
    .c-show{
            display: inline-block;
            padding:0 5px;
        .c-show-img{
            width: 208px;
            height: 120px;
            padding:0 5px;
            display: inline-block;
        }
    }
   
    .c-flex-three{
        padding: 0 40px 10px;
    }
}
</style>
