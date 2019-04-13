<template>
    <div class="content-title c-center">
        <div class="through-line1"></div>{{title}}<div class="through-line2"></div>
    </div>
</template>

<script>
export default {
    name:"contentTitle",
    components:{

    },
    props:{
        title:{
            default:"今日特惠"
        }
    },
    data(){
        return {
            
        }
    }
}
</script>

<style lang="less" scoped>
.content-title{
    background-color: @bg-color;
        font-size: 32px;
        color:#444;
        line-height: 24px;
        padding:30px 0;
    .through-line{
        display: inline-block;
        width: 34px;
        height: 3px;
        border-top: 3px solid #555;
        vertical-align: middle;
        margin-right: 20px;
        border-radius: 7px;
    }
    .through-line1{
        .through-line;
        margin-right: 20px;
    }
    .through-line2{
        .through-line;
        margin-left: 20px;
    }
}
</style>
