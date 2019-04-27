<template>
    <div class="c-order-addr">
        <div class="c-order-hd">
            <!-- 头部 -->
            <flexbox  orient="horizontal" class=" c-top-title">
                <flexbox-item class="c-left">
                    <span class="">{{ topTitle }}</span>
                </flexbox-item>
            </flexbox>
        </div>
        <div class="c-order-bd c-line">
        <flexbox :gutter="0" orient="horizontal">
            <flexbox-item :span="1/9" style="position:relative;text-align:center">
                <i class="iconfont icondizhi"></i>
            </flexbox-item>
            <flexbox-item :span="8/9"> 
                <flexbox  orient="vertical" :gutter="20">
                    <flexbox-item class="c-left">
                        <div class="c-title c-content"> <span class="c-name">{{ orderDetails.ownerName }}</span>
                        <span>{{ orderDetails.phone }}</span></div>
                    </flexbox-item>
                    <flexbox-item class="c-left">
                        <div class="c-addr"><span>{{ orderDetails.addr }}</span></div>
                    </flexbox-item>
                </flexbox>
            </flexbox-item>
        </flexbox>
        </div>
    </div>
</template>
<script>

import { FormPreview,Flexbox, FlexboxItem  } from 'vux'

export default {
    name:"orderDetailAddr",
    components:{
        FormPreview,
        Flexbox, 
        FlexboxItem 
    },
    props:{
          orderDetails:Object
    },
    data(){
        return {
            topTitle:"收货信息"
        }
    }
}
</script>
<style lang="less" scoped>
.c-addr{
        font-size: 26px;
        color: #444;
        padding-left:10px;
    }
    .c-title{
        padding-left:10px;
        .c-addr;
        .c-name{
            padding-right:30px;
        }
    }
    
    .c-order-bd{
        position: relative;
        padding:15px 20px;
        .icondizhi{
            font-size: 35px;
            color: #666666;
        }
    }
    
    .c-order-addr{
        background-color: #fff;
        .c-order-hd{
            padding:20px 20px;
            
            .c-top-title{
                font-size: 26px;
                letter-spacing: 1px;
                color: @grade-color;
            }
        }
    
        .c-line:before{
            height:2px;
        }
        .c-line:after{
            height:0;
            border:none;
        }
    }

   
</style>
