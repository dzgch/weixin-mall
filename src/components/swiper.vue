<template>
    <swiper 
    :loop="loop" 
    :auto="auto" 
    :list="swiper_list" 
    :index="swiper_index" 
    :height="height" 
    :interval="interval" 
    :duration="duration"
    :show-dots="show_dots"
    :show-desc-mask="show_desc_mask"
    :dots-position="dots_position"
    :aspect-ratio="aspect_ratio"
    >
    </swiper>
</template>

<script>
import { Swiper } from 'vux'

const baseList = [{
  url: 'javascript:',
  img: require("@/assets/images/首页banner.png"),
  title: ''
}, {
  url: 'javascript:',
  img: require("@/assets/images/首页banner.png"),
  title: ''
}, {
  url: 'javascript:',
  img: require("@/assets/images/首页banner.png"), 
  title: '',
  fallbackImg: require("@/assets/images/首页banner.png")//404
}]


export default {
    name:"SwiperC",
    components:{
        Swiper
    },
props:{
        swiper_list:{
            default:()=>baseList
        },
        swiper_index:{
            default:0
        },
        loop:{
             default:true
        },//是否循环播放
        auto:{
            default:true
        },//是否自动播放
        show_dots:{
            default:true
        },//是否显示点
        show_desc_mask:{
            default:true
        },//是否显示半遮罩透明层
        dots_position:{
            default:"center"
        },//提示点位置
        interval:{
            default:3000
        },//轮播停留时长
        duration:{
            default:300
        },//切换动画时间
        height:{
            default:"5.2rem"
        },//高度值
        aspect_ratio:{
            default:2
        }
    },
    data(){
        return {
            
        }
    }
}
</script>

<style lang="less" scoped>

</style>
