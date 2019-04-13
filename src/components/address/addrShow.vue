<template>
    <div class="addr-show">
        <div class="addr-show-top c-line">
            <div class="addr-show-top-msg">
                <span class="addr-show-top-name">{{msg.username}}</span>{{msg.userphone}}
                <div class="addr-show-top-status">
                    <i class="iconfont iconicon" v-show="msg.checked"></i>
                    <button type="button"  v-show="!msg.checked" class="addr-show-use">使用</button>
                </div>
            </div>
            <div class="addr-show-top-addr">{{msg.useraddress}}</div>
        </div>
        <div class="addr-show-bottom">
            <check-icon :value.sync="msg.checked" :class="{'check-status':msg.checked}">{{msg.checked?'已设为默认':'设为默认' }}</check-icon>
            <div class="addr-show-bottom-operate">
                <i class="iconfont iconbianji"></i>编辑
                <i class="iconfont iconshanchu"></i>删除
            </div>
        </div>
    </div>
</template>
<script>
// 我的订单
import { FormPreview,Flexbox, FlexboxItem ,CheckIcon } from 'vux'

export default {
    name:"addrShow",
    components:{
        FormPreview,
        Flexbox, 
        FlexboxItem,
        CheckIcon
    },
    props:{
         isShow:{
            default:false
        },
        msg:{
            default:()=>({
                username:"wodeasd",
                useraddress:"AAAAAAAAAAAAAAAAAAAAAAA",
                userphone:"123123123123"
                ,checked:true
            })
        }
    }
}
</script>
<style lang="less">
.addr-show{
    background-color: @bg-color;
    position: relative;
    color: #292621;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    .addr-show-top{
            position: relative;
            &.c-line:before{
                height: 0;
                border:none;
            }
        .addr-show-top-msg{
            font-size: 32px;
            padding:10px 0;
            .addr-show-top-name{
            }
            .addr-show-top-status{
                display: inline-block;
                position: absolute;
                right: 0;
                .iconfont{
                    font-size: 35px;
                    background: -webkit-linear-gradient(bottom, #ff3000, #f96819);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .addr-show-use{
                    width: 100px;
                    height: 46px;
                    border-radius: 23px;
                    border: solid 1px #8a857c;
                    font-size: 24px;
                    line-height: 36px;
                    letter-spacing: 0px;
                    color: #8a857c;
                    background-color: @bg-color;
                }
            }
        }
        .addr-show-top-addr{
            font-size: 28px;
            padding:0 0 20px;
            width:80%;
        }
    }
    .addr-show-bottom{
        position: relative;
        font-size: 24px;
        color:#8a857c;
        height:80px;
        line-height: 80px;
        .addr-show-bottom-operate{
            position: absolute;
            right:0;
            top:0;
        }
        .check-status.vux-check-icon > span{
            color:#ff6262!important;
            font-size: 24px;
        }
        .vux-check-icon > span{
            color:#8a857c!important;
            font-size: 24px;
        }
        .iconfont{
            font-size: 24px;
                padding-right: 5px;
    padding-left: 20px;
            &.iconbianji{
                font-weight: bold;
            }
        }
    }
}
</style>
