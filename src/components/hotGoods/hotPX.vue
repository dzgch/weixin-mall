<template>
    <div class="hot-p-x">
        <flexbox orient="horizontal" :gutter="0" class="hot-p-x-flexbox">
            <flexbox-item>
                <a @click="clickZongh" :class="{click:isClickZong}">综合</a>
            </flexbox-item>
            <!-- <flexbox-item>
                <a style="position:relative;top:3px;"  @click="clickPrice">价格
                    <div class="hot-line">
                        <i class="iconfont iconshangjiantou1" :class="isClick?'click':''"></i>
                        <i class="iconfont iconxiajiantou1" :class="isClick?'':'click'"></i></div>
                </a>
            </flexbox-item>
            <flexbox-item >
                <a @click="clickXiaol" :class="{click:isClickXiao}">销量</a>
            </flexbox-item> -->
            <flexbox-item >
                 <a @click="clickShow">筛选<i class="iconfont iconshaixuan"></i></a>
            </flexbox-item>
        </flexbox>
        <hot-choose v-show="isShowChoose" ref="choose" @on-chooseData="chooseData">
            <hot-submit slot="chooseBtn" @on-reset="getReset" @on-select="getDataType"></hot-submit>
        </hot-choose>
    </div>
</template>

<script>
import { FlexboxItem, Flexbox} from 'vux'
import HotChoose from '@_c/hotGoods/hotChoose'
import HotSubmit from '@_c/hotGoods/hotSubmit'
export default {
    name:"hotPX",
    components:{
        Flexbox,
        FlexboxItem,
        HotChoose,
        HotSubmit
    },
    props:{
      
    },
    data(){
        return {
            isClick:false,
            isClickZong:true,
            isClickXiao:false,
            isShowChoose:false
        }
    },
    methods:{
        clickPrice(){
            this.isClick= !this.isClick;
            console.log(this.isClick);
        }
        ,clickXiaol(){
            this.isClickXiao=true;
            this.isClickZong=false;
        }
         ,clickZongh(){
            this.isClickXiao=false;
            this.isClickZong=true;
        },
        clickShow(){
            this.isShowChoose=!this.isShowChoose
        },
        getReset(){
            this.$refs.choose.reset()
        },
        getDataType(){
            this.$refs.choose.selectByType()
        },
        chooseData(val){
            this.clickShow()
            if(val)
            this.$emit("on-getDataByType",val)
        }
    }
}
</script>

<style lang="less" scoped>
.hot-p-x{
    background-color: @bg-color;
    padding:0 20px;
    .hot-p-x-flexbox{
        height: 80px;
    line-height: 80px;
    font-size: 28px;
    color: #666;
    padding: 0 10px;
    }
    .iconfont{
        font-size: 29px;
    padding-left: 5px;
    color:#a9a9a9;
    }
    .common{
        color:#a9a9a9;
        font-size: 17px;
    }
    .iconshangjiantou1{
        .common;
        position: absolute;
    left: 0px;
    top: -6px;
    }
    .iconxiajiantou1{
        .common;

    }
    .hot-line{
        display: inline-block;
        position: relative;
        top:4px;
    }
    .click{
        color:#e64239;
    }
}
</style>
