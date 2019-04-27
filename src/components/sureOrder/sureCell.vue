<template>
    <div class="sure-cell">
        <group v-show="!shopcar">
            <cell title="商品总额："  :is-link="false" :value="'￥'+(Number(goodsList.prePrice)).toFixed(2)">
            </cell>
            <!-- <cell title="优惠券" link="/" :is-link="true" :value="'￥'+(Number(goodsSureMsg.disPrice)).toFixed(2)">
            </cell> -->
            <!-- <cell title="运费："  :is-link="false" :value="'￥'+(Number((goodsSureMsg.fare||0))).toFixed(2)">
            </cell> -->
             <cell title="押金："  :is-link="false" :value="'￥'+(Number((goodsList.deposit||0))).toFixed(2)">
            </cell>
            <cell title="实付金额：" :is-link="false" :value="'￥'+(Number(goodsList.allMoney)).toFixed(2)">
            </cell>
        </group>
        <group v-show="shopcar">
            <cell title="商品总额："  :is-link="false" :value="'￥'+(Number(goodsList.prePrice)).toFixed(2)">
            </cell>
            <!-- <cell title="优惠券" link="/" :is-link="true" :value="'￥'+(Number(goodsSureMsg.disPrice)).toFixed(2)">
            </cell> -->
            <!-- <cell title="运费："  :is-link="false" :value="'￥'+(Number((goodsList.fare||0))).toFixed(2)">
            </cell> -->
            <cell title="押金："  :is-link="false" :value="'￥'+(Number((goodsList.deposit||0))).toFixed(2)">
            </cell>
            <cell title="实付金额：" :is-link="false" :value="'￥'+(Number(goodsList.allMoney)).toFixed(2)">
            </cell>
        </group>
    </div>
</template>

<script>
import { Cell, CellBox, CellFormPreview, Group, Badge } from 'vux'
import { mapState, mapMutations, mapActions } from 'vuex';
export default {
    name:"sureCell",
    components:{
        Cell,
        CellBox,
        Group,
        Badge,
        CellFormPreview
    },
    computed:{
        ...mapState([
            'goodsSureMsg'
        ]),

    },
    mounted () {

    },
    props:{
        goodsList:{
            type:Object
        },
        shopcar:false
    },
    data(){
        return {
        }
    },
    methods: {
        onClick () {
        console.log('on click')
        },
    }
}
</script>

<style lang="less">
.sure-cell{
    background-color: @bg-color;
    .weui-cells{
        margin-top:0;
        &::before,
         &::after{
            height:0;
            border:none;
        }

    }
    .weui-cell{
        text-align: left;
    }
     .weui-cell_access .weui-cell__ft{
        padding-right: 30px;
    }
    .weui-cell_access .weui-cell__ft:after{
        width:14px;
        height:14px;
        border-color:#999;
    }
    .vux-cell-bd.vux-cell-primary{
        padding-left: 0px;
        color:@c_333;
        font-size:28px;
        p{
            margin:20px 0;
        }
    }
    .weui-cell__ft{
        color:#fe4646;
        font-size:28px;
    }
    .iconfont{
        font-size:42px;
        background: -webkit-linear-gradient(bottom, #ff6c00, #f9a719);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    
}
</style>
