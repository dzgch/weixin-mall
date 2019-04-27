<template>
    <div class="goods-details-footer">
        <flexbox  orient="horizontal" :gutter="0" class="c-goods-flexbox">
            <flexbox-item class="c-center" :span="4/14">
                <grid :show-lr-borders="false" :show-vertical-dividers="false" :cols="3">
                    <grid-item label="首页" link="/">
                        <i slot="icon" class="iconfont iconshouye"></i>
                    </grid-item>
                     <!-- <grid-item label="客服" link="/">
                        <i slot="icon" class="iconfont iconkefu"></i>
                    </grid-item> -->
                     <grid-item label="收藏">
                        <i slot="icon" class="iconfont icontubiao_wuxing-" :class="collect?'collected':''" @click="addCollect"></i>
                    </grid-item>
                </grid>
            </flexbox-item>
            <flexbox-item class="c-center" :span="10/14">
                <div class="c-to-car"><x-button @click.native="addCar" class="c-btn" type="default" text="加入购物车" :mini="true"></x-button></div>
                <div class="c-to-buy"><x-button @click.native="clickBuy" class="c-btn1" type="default" text="立即购买" :mini="true"></x-button></div>
            </flexbox-item>
        </flexbox>
    </div>
</template>

<script>
import { Flexbox, FlexboxItem,XButton,Grid ,GridItem } from 'vux'
import { mapActions, mapState } from 'vuex';
export default {
    name:"goodsDetailFooter",
    components:{
        Flexbox, 
        FlexboxItem,
        XButton,
        Grid ,GridItem
    },
    props:{
        collected:{
            type:[Boolean,String]
        },
        goodsDetails:Object
    },
    data(){
        return {
            collect:this.collected
        }
    },
    computed:{
    },
    mounted(){
    },
    methods:{
        ...mapActions([
            'getcollectAdd',
            'getshopcarAdd'
        ]),
        // 立即购买
        clickBuy(){
            console.log(this.$router);
            this.$router.push({
                path:"/sureorder",
                query:{
                    id:this.goodsDetails.id
                }
            })
        },
        // 加入收藏
        addCollect(){
            this.getcollectAdd({commodityid:this.goodsDetails.id}).then(res=>{
                this.collect=!this.collect
                this.$vux.toast.show({
                text: '添加成功',
                type:"text",
                time:2000
            })
            })
        },
        addCar(){
            this.getshopcarAdd({commodityid:this.goodsDetails.id}).then(res=>{
                this.$vux.toast.show({
                text: '添加成功',
                type:"text",
                time:2000
            })
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
    
    .iconfont{
        font-size: 37px;
        color: #666666;
        &.collected{
        color:@theme-color;
    }
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
