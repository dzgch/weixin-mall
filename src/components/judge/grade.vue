<template>
    <div class="grade">
        <div class="c-grade c-left"><div><div class="c-circle"></div><span class="c-grade-title">评分</span></div></div>
         <flexbox orient="vertical" class="c-grade-flex" :gutter="0">
            <flexbox-item v-for="k in judgeList" :key="k.text" class="c-left c-boot">
                <div>
                    <span class="c-grade-title">{{ k.text}}</span>
                    <!-- <i v-for="i in k.fillNum" :class="k.iconFillClass" @click="clickStar"></i>
                    <i v-for="i in k.strokeNum" :class="k.iconStrokeClass"></i> -->
                    
                <rater v-model="k.starData" active-color="#ff4343" star="<i class='iconfont icontubiao_wuxing-'></i>"></rater>
                </div>
            </flexbox-item>
        </flexbox>
    </div>
</template>

<script>
import { Flexbox, FlexboxItem ,Rater } from 'vux'
let judgeList=[{
                starData:0,
                text:"描述相符",
            },
            {
                starData:0,
                text:"物流服务",
            },
            {
                starData:0,
                text:"服务态度"
            }];
export default {
    name:"grade",
    components:{
        Flexbox,
        FlexboxItem,
        Rater
    },
    data(){
        return {
            judgeList:judgeList,
            starData:0
        }
    },
    mounted(){
        this.judgeList=[{
                starData:0,
                text:"描述相符",
            },
            {
                starData:0,
                text:"物流服务",
            },
            {
                starData:0,
                text:"服务态度"
            }]
        console.log(this.judgeList)
    },
    methods:{
        clickStar(event){
            console.log(event);
        }
    },
    watch:{
        judgeList:{
            handler:function(newval){
                this.$emit("on-grade",newval)
            },
            deep:true
        }
    }
}
</script>

<style lang="less">
@grade-color:#333;
.grade{
    background-color: @bg-color;
    padding-bottom:20px;
    .c-boot{
        margin-bottom:30px;
    }
    .vux-rater a{
        font-size:35px !important;
        margin-right:30px !important;
        // color:#ff4343 !important;
        width: 35px !important;
	height: 35px !important;
	line-height: 35px !important;
    }
    .c-grade{
            height:100px;
            line-height:100px;
        .c-circle{
            height: 30px;
            width: 4px;
            display: inline-block;
            background-color: #ff4343;
            border-radius: 2px;
            vertical-align: -4px;
            margin-right:10px;
        }
        .c-grade-title{
            font-size: 30px;
            color: @grade-color;
        }
    }
    .c-grade-flex{
        .c-grade-title{
            font-size: 28px;
            color: @grade-color;
            margin-right:70px;
            line-height: 38px;
        }
        .iconfont{
            font-size: 33px;
            margin-right:30px;
        }
        // .icontubiao_wuxing-{
        //     color:#ff4343 ;
        // }
        .icontubiao_wuxing-1{
            color:#c3c3c3 ;
        }
    }
}
</style>
