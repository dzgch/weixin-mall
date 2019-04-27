<template>
    <div class="panel-for-loan">
        <flexbox :gutter="0" orient="horizontal" class="c-line">
            <flexbox-item :span="4/10">
            <div class="c-img-main" :style="{backgroundImage:'url('+goodsList.picurl+')'}">
            </div>
            </flexbox-item>
            <flexbox-item :span="6/10">
                <flexbox orient="vertical" class="c-flexbox-hot">
                    <flexbox-item>
                        <div class="c-content">
                            <div class="c-title">{{ goodsList.name }}</div>
                            <div class="c-money-title">￥<span class="c-money">{{ (Number(goodsList.rentPrice)).toFixed(2) }}</span>&nbsp;/起</div>
                        </div>
                    </flexbox-item>
                    <flexbox-item class="c-left c-flexhot-footer">
                        <button-c type="primary" text="租赁" @click.native="clickLoan"></button-c>
                    </flexbox-item>
                </flexbox>
            </flexbox-item>
        </flexbox>
     <load-alert  :money="goodsList.deposit" :goodsMsg="goodsList"></load-alert>
    </div>
</template>

<script>
// 热卖图文
import { Flexbox, FlexboxItem } from 'vux'
import ButtonC from '@/components/basic/buttonCL.vue'
import LoadAlert from '@/components/dialog/loanAlert.vue'
import {mapState} from 'vuex'
export default {
    name:"PanelForHot",
    components:{ 
        Flexbox,
        LoadAlert,
        FlexboxItem,
        ButtonC
    },
    data(){
        return {
        }
    },
    props:{
        goodsList:{
            type:[Object,Array]
        }
    },
    methods:{
        clickLoan(){
            this.$store.commit("updateShowToast",true)
        }
    },
    computed:{
        ...mapState(['showToast'])
    }
    
}
</script>

<style lang="less" scoped>
@import '~vux/src/styles/1px.less';

.panel-for-loan{
    background-color: @bg-color;
    padding:30px 0;
    position: relative;
    .c-flexbox-hot{
        padding:0 35px;
    }
    .c-img-main{
        height:205px;
        border-radius: 4px;
        width:305px;
    }
    .c-flexhot-footer{
        padding-top:20px;
    }
     .c-line:before{
        height:0;
        border:none;
    }
}
</style>
