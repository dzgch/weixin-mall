<template>
<div class="header">
    <x-header
    slot="header"
    style="width:100%;position:absolute;left:0;top:0;z-index:100;"
    :left-options="leftOptions"
    :right-options="rightOptions"
    :title="title"
    @on-click-more="onClickMore">
    <i slot="overwrite-left" @click="clickBack" class="iconfont iconfanhui"></i>
        <slot slot="right" name="header-right"></slot>
    </x-header>
</div>
</template>

<script>
import { XHeader } from 'vux'
export default {
    name:'Header',
    components:{
        XHeader
    },
    props:{
        title:{
            default:"我的"
        }
    },
    data () {
        return {
            showMenu:false
        }
    },
    methods:{
        onClickMore () {
            this.showMenu = true
        },
        clickBack(){
            this.$router.go(-1);
        }
    },
    computed:{
        leftOptions () {
            return {
                showBack: true,
                backText:''
            }
        },
        rightOptions () {
            return {
                showMore: false
            }
        }
    }
}
</script>
<style lang="less">
.header{
    height:90px;
    .iconfont{
        font-size: 32px;
    }
    .vux-header{
        padding:25px 0 25px;
    }
    .vux-header-title-area, .vux-header .vux-header-title{
        
        font-size:32px;
    }
    .vux-header .vux-header-left, .vux-header .vux-header-right{
        padding:20px 0px 25px;
        font-size: 32px;
    }
    .vux-header .vux-header-right{
        line-height: 32px;
        padding:15px 10px 0 0;
    }
}
</style>

