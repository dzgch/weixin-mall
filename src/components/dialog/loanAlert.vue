<template>
    <div class="loan-alert">
      <x-dialog v-model="showToast">
          <div class="dialog-demo">
            <div @click="clickShow" class="loan-close">
            <i class="iconfont iconClose"></i>
            </div>
            <div class="loan-text">
            <!-- <x-button @click.native="doShowToast" type="primary">show toast</x-button> -->
            <span>如需租赁器械，请支付押金{{ money }}元</span>
            </div>
            <div class="loan-buy">
                <button-l text="立即支付" @click.native="clickToLoan"></button-l>
            </div>
          </div>
      </x-dialog>
    </div>
</template>

<script>
import { XDialog, XButton } from 'vux'
import ButtonL from '@/components/basic/buttonLL'
import { mapGetters } from 'vuex';

export default {
    name:"loanAlert",
    components:{
        XDialog, XButton ,
        ButtonL
    },
    props:{
        goodsMsg:{
            type:Object
        },
        money:{
            default:"0"
        }
    },
    data(){
        return {
        }
    },
    methods:{
        clickShow(){
            this.$store.commit("updateShowToast",false)
        },
        clickToLoan(){
            this.$router.push({name:this.$store.state.loanName,query:{deposit:this.goodsMsg.deposit,id:this.goodsMsg.id,loan:true},params:{ goodsList: this.goodsMsg} })
            this.$store.commit("updateShowToast",false)
        }
    },
    computed:{
        ...mapGetters({showToast:'getShowToast'})
    }
}
</script>

<style lang="less">
.loan-alert{
    .weui-dialog{
        max-width: unset;
        background-color: unset;
        width:100%;
    }
    .weui-mask{
        background: rgba(0, 0, 0, 0.1);
    }
    .dialog-demo{
        width: 625px;
        height: 335px;
        margin:auto;
        background-image: linear-gradient(
            #ffffff, 
            #ffffff), 
        linear-gradient(-90deg, 
            #ff3000 0%, 
            #f96819 100%), 
        linear-gradient(
            #000000, 
            #000000);
        background-blend-mode: normal, 
            normal, 
            normal;
        border-radius: 8px;
        .loan-close{
            height: 60px;
            line-height: 60px;
            position: relative;
            .iconfont{
                font-size: 40px;
                position: absolute;
                right:20px;
            }
        }

        .loan-text{
            font-size: 32px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 1px;
        padding:45px 10px;
        color: #444444;
        }
        .loan-buy{
            width: 70%;
            margin: auto;
        }
    }
}
</style>
