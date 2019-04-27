<template>
    <div class="panel-sure-order">
        <flexbox :gutter="gutter" align="flex-start">
            <flexbox-item :span="3/11">
            <div class="c-img-main" :style="{backgroundImage:'url('+goodsList.picurl+')'}">
                
            </div>
            </flexbox-item>
            <flexbox-item :span="8/11" class="c-panel-car-flex">
                <div class="c-content">
                    <div class="c-title">{{ goodsList.name }}</div>
                    <div class="c-car-money">
                        <span class="c-money" 
                        v-show="goodsList.type==2||goodsList.type==3">购买：￥{{ (Number(goodsList.price)).toFixed(2) }}</span>
                        <span class="c-money"
                        v-show="goodsList.type==1||goodsList.type==3">租赁：￥{{ (Number(goodsList.rentPrice)).toFixed(2) }}</span>
                        <div>
                        <checker
                            v-model="buyType"
                            default-item-class="demo5-item"
                            selected-item-class="demo5-item-selected"
                            :radio-required="true"
                            type="radio"
                            @on-change="OnChange"
                            >
                            <checker-item value="1"
                            v-show="goodsList.type==2||goodsList.type==3">购买</checker-item>
                            <checker-item value="2"
                            v-show="goodsList.type==1||goodsList.type==3">租赁</checker-item>
                            </checker>
                        <div class="c-x-number" v-show="!shopcar"><inline-x-number :min="1" :max="goodsList.inventory" v-model="ordernum" @on-change="change"></inline-x-number></div>
                    </div>
                    </div>
                </div>
            </flexbox-item>
        </flexbox>
    </div>
</template>

<script>
// 确认购买页图文
import { Flexbox, FlexboxItem,Group,XNumber,InlineXNumber,Checker, CheckerItem } from 'vux'
import { mapState, mapMutations } from 'vuex';
import active from '@/assets/active.png'
export default {
    name:"PanelForSureOrder",
    components:{
        Flexbox,
        FlexboxItem
        ,Group,XNumber
        ,InlineXNumber
        ,Checker, CheckerItem
    },
    props:{
        gutter:{
            default:0
        },
        orient:{
            default:"horizontal"
        },
        shopcar:false,
        goodsList:Object
    },
    mounted(){
        console.log(this.goodsList)
        if(this.goodsList.type==1){
            this.buyType="2"
        }
        if(this.goodsList.type==2||this.goodsList.type==3){
            this.buyType="1"
        }
    },
    data(){
        return {
            sign:"￥",
            ordernum:1,
            buyType:"1"
        }
    },
    methods:{
        change(val){
            console.log(val)
            // 提交到服务器
            this.setOrdernum(val)
            this.$emit("on-ordernum",val)
        },
        ...mapMutations([
            'setOrdernum'
        ]),
        OnChange(val){
            this.$emit("on-carSure",val,this.goodsList.id)
        }
    }
    
}
</script>

<style lang="less">
@import '~vux/src/styles/1px.less';

@car-height:188px;
.panel-sure-order{
    padding:45px 0 50px;
    background-color: @main-bg-color;
    position: relative;
    .vux-checker-box{
        display: inline-block;
    vertical-align: top;
    }
.demo5-item {
  width: 120px;
  height: 45px;
//   line-height: 45px;
  text-align: center;
  border-radius: 3px;
  border: 1px solid #ccc;
  background-color: #fff;
  margin-right: 6px;
}
.demo5-item-selected {
  background: #ffffff url(../../assets/active.png) no-repeat right bottom;
  border-color: #ff4a00;
}
    .c-img-main {
        width: 207px;
        height: @car-height;
        border-radius: 4px;
    }
    .c-panel-car-flex{
        height:@car-height;
        .c-content{
        height:100%;
        position: relative;
        .c-title{
            padding:5px 25px;
        }
        .c-car-money{
            position: absolute;
            bottom: 20px;
            width:100%;
            
             padding:0 30px;
            .vux-inline-x-number{
                display: block;
            }
            .c-money{
                	font-size: 26px;
                    letter-spacing: 1px;
                    color: @judge-color-true;
                    display: inline-block;
                    margin-bottom: 20px;
            }
            .c-x-number{
                display: inline-block;
            }
        //     .vux-number-selector {
        //         height: 35px;
        //         font-size: 24px;
        //         line-height: 24px;
        //         color: #444;
        //         border: solid 1px #999999;
        //         width:38px;
        //         & svg{
        //         width:18px;
        //             fill:#444;
        //         }
        //     }
        //     .vux-number-selector.vux-number-disabled svg{
        //         fill:#ccc;
        //     }
        //     a.vux-number-selector:first-child{
        //         border-radius: 6px 0 0 6px;
        //     }
        //     a.vux-number-selector:last-child{
        //         border-radius: 0px 6px 6px 0;
        //     }
        //    .vux-number-input{
        //        .vux-number-selector;
        //         border-left:none;
        //         border-right:none;
        //     }
        }
    }
    }
}

</style>
