<template>
    <div class="center-top">
        <div class="c-setting" @click="logoutPopup"><i class="iconfont iconshezhi"></i></div>
        <div v-transfer-dom>
            <popup v-model="show"  position="bottom">
                <div class="popup-p">
                    <x-button :gradients="[ '#FF9500','#FF5E3A']" class="btn-logout" @click.native="logout">退出登录</x-button>
                </div>
            </popup>
        </div>
        <flexbox orient="vertical" :gutter="0">
            <flexbox-item>
                <div class="head-img" :style="{backgroundImage:'url('+img_url+')'}"></div>
            </flexbox-item>
            <flexbox-item  class="c-center">
                <div class="c-padding"><span class="c-center-name"> {{ name }} </span></div>
            </flexbox-item>
            <!-- <flexbox-item  class="c-center">
                <div class="c-center-addr"><i class="iconfont icondizhi"></i><span> {{ address }} </span></div>
            </flexbox-item> -->
          </flexbox>
          <div></div>
    </div>
</template>

<script>
import { Flexbox, FlexboxItem,TransferDom,XButton,Popup } from 'vux'
import { mapActions } from 'vuex';
import { setToken, getToken,getInvitation,setInvitation,getCode,setCode } from '@/libs/util'

export default {
    name:"centerTop",
    components:{
        Flexbox,
        FlexboxItem,
        XButton,Popup
    },
    directives: {
    TransferDom
  },
    props:{
        img_url:{
            default:require("@_a/images/首页banner.png")
        },
        address:{
            default:"这是我的地址"
        },
        name:{
            default:"我的名字"
        }
    },
    data(){
        return {
            show:false
        }
    },
    methods:{
        ...mapActions([
            'getuserlogout'
        ]),
        logout(){
            this.getuserlogout().then(res=>{
                window.close()
                setToken("")
                setInvitation("")
            })
        },
        logoutPopup(){
            this.show=true
        }
    }
}
</script>

<style lang="less" scoped>
.vux-popup-dialog{
.popup-p{
        height:120px;
    }
    .btn-logout{
        border-radius: 60px;
        font-size: 30px;
    }
    .weui-btn{
        height:90px;
    }
}
.center-top{
    height:400px;
    background-color: @bg-color;
    background-color: #08bf60;
    
    .c-setting{
        text-align: right;
        padding-right: 40px;
        padding-top:25px;
        .iconfont{
            font-size:37px;
            color:#fff;
        }
    }
    .head-img{
        height:143px;
        width:143px;
        background-color: #ffffff;
	    box-shadow: 0px 3px 7px 0px 
		rgba(116, 116, 116, 0.46);
        border: solid 6px #ededed;
        border-radius: 50%;
        margin:auto;
    }
    .c-padding{

        padding:25px 0 10px;
        .c-center-name{
            color:@c_444;
            font-size: 32px;
        }
    }
    .c-center-addr{
        color: #999999;
        font-size: 24px;
        .iconfont{
            font-size:40px;
        }
    }
}
</style>
