<template>
    <div class="panel-s-t">
        <flexbox :gutter="gutter" :orient="orient" class="c-flexbox">
            <flexbox-item>
                <!-- 商品图 -->
            <div  @click="clickToDetails" class="c-img-main" :style="{backgroundImage:'url('+goodsList.picurl+')'}">
                
            </div>
            </flexbox-item>
            <flexbox-item>
                <flexbox :orient="orient" :gutter="0">
                    <flexbox-item>
                        <!-- 商品内容 -->
                        <div class="c-content"  @click="clickToDetails">
                            <div class="c-title">{{ goodsList.name }}</div>
                            <template v-if="isBuy&&!isLoan">
                                <div class="c-money-title-rent">
                                </div>
                                <div class="c-money-title">
                                        <span>购买：{{ sign }}<span class="c-money">{{ (Number(goodsList.price)).toFixed(2)}}</span>/起
                                        </span>
                                    </div>
                            </template>
                            <template v-else-if="isLoan&&!isBuy">
                                <div class="c-money-title">
                                </div>
                                    <div class="c-money-title-rent">
                                        <span >租赁：{{ sign }}<span class="c-money">{{ (Number(goodsList.rentPrice)).toFixed(2)}}</span>/起
                                        </span>
                                    </div>
                            </template>
                            <template v-else-if="isLoan&&isBuy">
                                <div class="c-money-title">
                                    <span >购买：{{ sign }}<span class="c-money">{{ (Number(goodsList.price)).toFixed(2)}}</span>/起
                                    </span>
                                </div>
                                <div class="c-money-title-rent">
                                <span> 租赁：{{ sign }}<span class="c-money">{{ (Number(goodsList.rentPrice)).toFixed(2)}}</span>/起
                                </span>
                                </div>
                            </template>
                         </div>
                    </flexbox-item>
                    <!-- 按钮操作 -->
                    <flexbox-item class="c-left">
                        <button-by-buy  v-show="isBuy" :goodsList="goodsList"></button-by-buy>
                        <button-by-loan v-show="isLoan" :goodsList="goodsList"></button-by-loan>
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
import ButtonByLoan from '@/components/basic/buttonByLoan.vue'
import ButtonByBuy from '@/components/basic/buttonByBuy.vue'
import LoadAlert from '@/components/dialog/loanAlert.vue'
import { mapState } from 'vuex'
import { isString } from 'util';

export default {
    name:"PanelST",
    components:{ 
        Flexbox,
        FlexboxItem,
        ButtonCL,
        LoadAlert,
        ButtonByLoan,
        ButtonByBuy
    },
    data(){
        return {
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
                picurl:require("@_a/images/首页banner.png"),
                name:"ELBE锂电采茶机",
                price:1233
            })
        },
        sign:{
            default:"￥"
        }
    },
    mounted(){
        console.log(this.goodsList)
    },
    methods:{
        clickToDetails(){
            this.$router.push({
                path:this.$store.state.goodsDetailsPath,
                query:{
                    id:this.goodsList.id
                }
            })
        }
    },
    computed:{
        ...mapState(['showToast']),
        isLoan(){
            return this.goodsList.type==3||this.goodsList.type==1
        },
        isBuy(){
            return this.goodsList.type==3||this.goodsList.type==2
        }
    }
}
</script>

<style lang="less" scoped>
@import '~vux/src/styles/1px.less';
.panel-s-t{
.c-img-main{
    height:230px;
    border-radius: 4px;
}
.c-flexbox{
    padding-top:0;
   
}


}

</style>
