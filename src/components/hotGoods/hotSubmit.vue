<template>
    <div class="sure-submit">
        <flexbox  orient="horizontal" :gutter="0">
            <flexbox-item class="c-center c-bg" >
                <x-button  class="c-btn" type="default" text="重置" :mini="true" :link="link"></x-button>
            </flexbox-item>
            <flexbox-item class="c-center">
                <x-button  class="c-btn1" type="default" text="确认" :mini="true" :link="link"></x-button>
            </flexbox-item>
        </flexbox>
    </div>
</template>

<script>
import { Flexbox, FlexboxItem,XButton } from 'vux'
export default {
    name:"hotSubmit",
    components:{
        Flexbox, 
        FlexboxItem,
        XButton
    },
    props:{
        link:{
            default:""
        },
        money:{
            default:"108"
        }
    },
    data(){
        return {
            
        }
    }
}
</script>

<style lang="less" scoped>
.sure-submit{
    .c-bg{
        background-color: #f4f4f4;
    }
    .c-btn-com{
         color:#fff;
        font-size: 30px;
        letter-spacing: 3px;
        border-radius: 0;
         width: 100%;
        height: 98px;
    }
    .c-btn{
        .c-btn-com;
        background-color: #a0a0a0;
    }
    .c-btn1{
         .c-btn-com;
        background-image: linear-gradient(
		#f46e0b, 
		#f46e0b), 
        linear-gradient(202deg, 
            #fd9a7a 0%, 
            #fd734e 100%), 
        linear-gradient(
            #ff9c00, 
            #ff9c00);
        background-blend-mode: normal, 
            normal, 
            normal;
    }
}
</style>
