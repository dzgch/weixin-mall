<template>
<div class="btn-by-loan">
    <x-button class="c-btn" :plain="plain" :type="type" :text="text" :disabled="disabled" :mini="mini" :link="link"  @click.native="clickLoan"></x-button>
            <load-alert  :money="goodsList.deposit" :goodsMsg="goodsList"></load-alert>
</div>
</template>

<script>
import { XButton } from 'vux'
import LoadAlert from '@/components/dialog/loanAlert.vue'
// 圆角按钮
export default {
    name:"buttonByLoan",
    components:{
         XButton,
         LoadAlert
    },
    props:{
        type:{
            default:'warn'
        },
        disabled:{
            default:false
        },
        text:{
            default:'租赁'
        },
        mini:{
            default:true
        },
        plain:{
            default:true
        },
        link:{
            default:""
        },
        goodsList:{
            type:Object
        }
    },
    methods:{
        clickLoan(){
            this.$router.push({
                path:'/sureorder',
                name:'sureorder',
                query:{
                    deposit:this.goodsList.deposit,
                    id:this.goodsList.id,loan:true
                    },
                params:{ goodsList: this.goodsList } 
            })
            
            // this.$store.commit("updateShowToast",true)
        },
    }
}
</script>

<style lang="less" scoped>
.btn-by-loan{
    display: inline-block;
}
    .c-btn{
        border-radius:25px;
        width:135px;
        padding:0 10px;
        height: 44px;
        line-height: 44px;
    }
    .c-btn+.c-btn{
        margin-left:10px;
    }
</style>
