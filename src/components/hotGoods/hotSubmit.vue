<template>
    <div class="sure-submit">
        <flexbox  orient="horizontal" :gutter="0">
            <flexbox-item class="c-center c-bg" >
                <x-button  class="c-btn" type="default" @click.native="reset" text="重置" :mini="true"></x-button>
            </flexbox-item>
            <flexbox-item class="c-center">
                <x-button  class="c-btn1" type="default" @click.native="sendSelect" text="确认" :mini="true" ></x-button>
            </flexbox-item>
        </flexbox>
    </div>
</template>

<script>
import { Flexbox, FlexboxItem,XButton } from 'vux'
import { mapActions } from 'vuex';
export default {
    name:"hotSubmit",
    components:{
        Flexbox, 
        FlexboxItem,
        XButton
    },
    methods:{
        
        sendSelect(){
            this.$emit("on-select")
        },
        reset(){
            this.$emit("on-reset")
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
