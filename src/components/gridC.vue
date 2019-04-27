<template>
    <div class="grid-center">
        <grid :show-lr-borders="show_lr_borders" :show-vertical-dividers="show_vertical_dividers" :cols="cols">
            <grid-item  v-for="i in gridList" :key="i.img" :label="i.label" :link="i.link">
                <img slot="icon" :src="i.img">
            </grid-item>
        </grid>
    </div>
</template>

<script>
import { Grid ,GridItem,GroupTitle } from 'vux'
const baseList=[
    {
        link:'/goods?type=2',
        label:"电动机械",
        img:require("@/assets/images/首页-电动机械.png")
    },
    {
        link:'/goods?type=3',
        label:"园林药剂",
        img:require("@/assets/images/首页-飘绿药剂.png")
    },
    {
        link:'/',
        label:"技术支持",
        img:require("@/assets/images/首页-技术支持.png")
    },
    {
        link:'/',
        label:"关于我们",
        img:require("@/assets/images/关于我们.png")
    }
]
export default {
    name:"gridC"
    ,components:{
        Grid 
        ,GridItem
        ,GroupTitle
    }
    ,props:{
        cols:{
            default:4
        }
        ,show_lr_borders:{
            default:false
        }
        ,show_vertical_dividers:{
            default:false
        }
        ,gridList:{
            default:()=>baseList
        }
    }
}
</script>

<style lang="less">
.grid-center{
    background-color: @bg-color;
    
    .weui-grid__icon{
        width:126px;
        height:125px;
    }
    .weui-grids:before{
        height:0;
        border:none;
    }
    .weui-grid__label{
        font-size: 24px;
        color:@default-color;
        margin-bottom:0;
    }
    .weui-grid:after{
        height:0;
        border:none;
    }
}
</style>
