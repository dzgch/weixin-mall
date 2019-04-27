<template>
    <div class="buy-money">
        <div class="loan-cell">
            <div class="loan-cell-title">总金额：</div>
            <div class="loan-cell-money">{{money}}</div>
            <!-- <div class="loan-cell-des">备注 : 租金仅供租赁机械</div> -->
        </div>
    </div>
</template>

<script>
export default {
    name:"buyMoney",
    components:{

    },
    props:{
        money:{
            type:[String,Number]
        }
    },
    data(){
        return {
        }
    }
}
</script>

<style lang="less" scoped>
.buy-money{
    .loan-cell{
        width: 659px;
	height: 313px;
	background-image: linear-gradient(-90deg, 
		#4bd964 0%, 
		#39b54f 100%), 
	linear-gradient(
		#f4f5fa, 
		#f4f5fa);
	background-blend-mode: normal, 
		normal;
    border-radius: 8px;
    margin:auto;
    
	letter-spacing: 0px;
	color: #ffffff;
        .loan-cell-title{
            font-size: 32px;
            text-align: left;
            padding: 20px 60px 0;
        }
        .loan-cell-money{
            font-size: 106px;
        }
        .loan-cell-des{
            font-size:28px;
            text-align: left;
            padding: 0 60px 0;
        }
    }
}
</style>
