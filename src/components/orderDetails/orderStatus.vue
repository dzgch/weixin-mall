<template>
    <div class="order-status" :style="{backgroundImage:'url('+img_url+')'}">
        <span class="c-status-text">{{ statusText }}</span>
    </div>
</template>

<script>
export default {
    name:"orderStatus",
    props:{
      statusText:{
          default:'订单成功'
      }  
    },
    data(){
        return {
            img_url:require("@_a/images/订单详情.jpg")
        }
    }
}
</script>

<style lang="less" scoped>

.order-status{
    @img-height:186px;

    position: relative;
    width: 100%;
	height: @img-height;
	background-image: linear-gradient(-90deg, 
		#4bd964 0%, 
		#39b54f 100%), 
	linear-gradient(
		#ffffff, 
		#ffffff);
	background-blend-mode: normal, 
        normal;
    background: center center no-repeat;
    background-size: cover;
    .c-status-text{
        position: absolute;
        left: 20px;
        font-size: 36px;
        letter-spacing: 0px;
        color: #ffffff;
        line-height: @img-height;
    }
}
</style>
