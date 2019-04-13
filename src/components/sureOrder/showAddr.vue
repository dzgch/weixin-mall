<template>
    <div class="show-order-addr">
        <flexbox :gutter="0" orient="horizontal" align="end">
            <flexbox-item :span="1/5" style="position:relative">
                <div class="c-name">
                    <span class="c-name-span">{{ name }}</span>
                </div>
                <div class="c-moren">
                    <div class="c-moren-show">默认</div>
                </div>
            </flexbox-item>
            <flexbox-item :span="4/5"> 
                <flexbox  orient="vertical" :gutter="0">
                    <flexbox-item class="c-left">
                        <flexbox  orient="horizontal" :gutter="0">
                            <flexbox-item class="c-left" :span="3/4">
                                <div class="c-phone"> {{ phone }}</div>
                            </flexbox-item>
                            <flexbox-item class="c-right" :span="1/4">
                                <div class="c-update">
                                    <i class="iconfont iconweibiaoti2010104"></i><span>修改</span>
                                </div>
                            </flexbox-item>
                        </flexbox>
                    </flexbox-item>
                    <flexbox-item class="c-left">
                        <div class="c-addr">{{ address }}</div>
                    </flexbox-item>
                </flexbox>
            </flexbox-item>
        </flexbox>
    </div>
</template>

<script>
import { Flexbox, FlexboxItem  } from 'vux'
export default {
    name:"showAddr",
    components:{
        Flexbox,
         FlexboxItem   
    },
    props:{
        name:{
            default:"XXX"
        },
        isMoren:{
            default:true
        },
        address:{
            default:"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
        },
        phone:{
            default:"133333333333"
        },
    },
    data(){
        return {

        }
    }
}
</script>

<style lang="less" scoped>
.show-order-addr{
    background-color: @bg-color;
    padding:35px 0;
    .c-common{
        font-size: 24px;
        color:#868686;
    }
    .c-name{
        padding-bottom:15px;
        .c-name-span{
            font-size:@input-font;
            color:@c_333;
        }
    }
    .c-moren{
        width: 64px;
        height: 34px;
        border: solid 2px #fd4141;
        text-align: center;
        .c-moren-show{
            font-size: 20px;
            color: #fd4141;
        }
    }
    .c-phone{
            font-size:24px;
            color:@c_333;
    }
    .c-update{
        .c-common;
        .iconfont{
            .c-common;
            padding-right:10px;
        }
    }
    .c-addr{
        padding-top:15px;
       width:80%;
       word-wrap: break-word;
       word-break: break-all;
       line-height: 26px;
            .c-common;
       
    }
}
</style>
