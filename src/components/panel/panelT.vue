<template>
    <div>
        <flexbox :gutter="gutter" :orient="orient" class="c-flexbox">
            <flexbox-item>
            <div  @click="clickToDetails" class="c-img-main" :style="{backgroundImage:'url('+ goodsList.picurl +')'}">
                
            </div>
            </flexbox-item>
            <flexbox-item>
                <flexbox :justify="justify" :gutter="0">
                    <flexbox-item :span="1/2">
                        <div class="c-content"  @click="clickToDetails">
                            <div class="c-title">{{ goodsList.name }}</div>
                            <div>
                                <div v-show="isBuy" class="c-money-title">购买：{{ sign }}<span class="c-money">{{ (Number(goodsList.price)).toFixed(2) }}</span>&nbsp;/起</div>
                                <div v-show="isLoan" class="c-money-title-rent">租赁：{{ sign }}<span class="c-money">{{ (Number(goodsList.rentPrice)).toFixed(2) }}</span>&nbsp;/起</div>

                            </div>
                        </div>
                    </flexbox-item>
                    <flexbox-item :psan="1/2" class="c-right">
                        <button-by-buy v-show="isBuy" :goodsList="goodsList"></button-by-buy>
                        <button-by-loan v-show="isLoan" :goodsList="goodsList"></button-by-loan>
                    </flexbox-item>
                </flexbox>
            </flexbox-item>
        </flexbox>
        <load-alert :money="goodsList.deposit" :goodsMsg="goodsList"></load-alert>
    </div>
</template>

<script>
// 首页大图文
import { Flexbox, FlexboxItem } from 'vux'
import ButtonC from '@/components/basic/buttonC.vue'
import LoadAlert from '@/components/dialog/loanAlert.vue'
import { mapState } from 'vuex'
import ButtonByLoan from '@/components/basic/buttonByLoan.vue'
import ButtonByBuy from '@/components/basic/buttonByBuy.vue'
let list={
    picurl:require("@_a/images/首页banner.png"),
    name:"ELBE锂电采茶机",
    price:1233
}
export default {
    name:"PanelT",
    components:{
        Flexbox,
        FlexboxItem,
        ButtonC,
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
            default:()=>list
        },
        sign:{
            default:"￥"
        }
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
.c-img-main{
    height:390px;
    border-radius: 4px;
}
.c-flexbox{
    padding-top:0;
}
</style>
