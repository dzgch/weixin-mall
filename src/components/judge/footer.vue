<template>
    <div class="grade-footer">
         <flexbox orient="vertical" :gutter="0">
            <flexbox-item class="c-right">
               <!-- <check-icon :value.sync="value">匿名评价</check-icon> -->
            </flexbox-item>
            <flexbox-item class="c-center">
                <div class="footer-btn-width">
                    <button-l text="提交评价" @click.native="send"></button-l>
                </div>
            </flexbox-item>
        </flexbox>
    </div>
</template>

<script>
import { Flexbox, FlexboxItem ,CheckIcon } from 'vux'
import ButtonL from "@/components/basic/buttonL"

export default {
    name:"gradeFooter",
    components:{
        Flexbox,
        FlexboxItem,
        CheckIcon,
        ButtonL
    },
    data(){
        return {
            value:true
        }
    },
    methods:{
        send(){
            this.$emit("on-updateRaise")
        }
    }
}
</script>

<style lang="less">
.grade-footer{
    background-color: @bg-color;
    padding:25px 0 45px;
    .footer-btn-width{
        width:45%;
        margin:auto;
        margin-top:15px;
    }
    .c-right{
        font-size: 26px;
        line-height: 38px;
        & span{
        color: @grade-color;
        }
        .weui-icon-success{
            color:@judge-color-true;
            font-size:30px;
            
        }
        .vux-check-icon > .weui-icon-success:before, .vux-check-icon > .weui-icon-success-circle:before{
                  color:@judge-color-true;
            }
    }
}
</style>
