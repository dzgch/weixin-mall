<template>
    <x-button  @click.native="clickBuy" class="c-btn" :plain="plain" :type="type" :text="text" :disabled="disabled" :mini="mini" :link="link"></x-button>
</template>

<script>
import { XButton } from 'vux'
import { mapState, mapActions } from 'vuex';
// 圆角按钮
export default {
    name:"buttonByBuy",
    components:{
         XButton
    },
    props:{
        type:{
            default:'primary'
        },
        disabled:{
            default:false
        },
        text:{
            default:'立即购买'
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
         clickBuy(){
            this.$router.push({name:this.$store.state.gotoBuyName,query:{id:this.goodsList.id} })
        }
    }
}
</script>

<style lang="less" scoped>
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
