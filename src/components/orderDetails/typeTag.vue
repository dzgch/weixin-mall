<template>
    <div class="type-tag c-sticky c-line" >
        <!-- <sticky scroll-box="vux_view_box_body" :disabled="disabled" :offset="offset" :check-sticky-support="false" class="c-sticky"> -->
            <tab :line-width=3>
                <tab-item :selected="demo == index" v-for="(item, index) in list" @on-item-click="showTag" @click="demo = index" :key="index">{{item}}</tab-item>
            </tab>
        <!-- </sticky> -->
    </div>
</template>

<script>
import { Tab, TabItem, Sticky} from 'vux'
export default {
    name:"typeTag",
    components:{
    Tab, TabItem, Sticky
    },
    props:{
        offset:{
            default:'1.2'
        }
    },
    data(){
        return {
            disabled: typeof navigator !== 'undefined' && /iphone/i.test(navigator.userAgent) && /ucbrowser/i.test(navigator.userAgent)
            
        }
    },
    computed:{
        list(){
            console.log(this.$store.state)
            return this.$store.state.mine.typeTagList;
        },
        demo(){
            return this.$store.state.mine.typeTagType;
        }
    },
    
    methods:{
        showTag(index){
            this.$store.commit("updateTypeTagType",index);
        }
    }
}
</script>

<style lang="less">
.type-tag{
    @height:75px;
    background-color: @bg-color;
    position: relative;
    height:@height;
    .c-line:after{
        color:#eee;
        border-top:2px solid #eee;
    }
    .c-line:before{
        height:0;
        border:none;
    }
    &.c-sticky{
        // top:80px !important;
        
        height:@height;
        .vux-tab-container{
            height:@height;
            .vux-tab{
                height:@height;
                .vux-tab-item{
                    line-height: @height;
                    font-size: 28px;
                    color: #333333;
                    background-size:0;
                }
                .vux-tab-item.vux-tab-selected{
                    color: @theme-color;
                }
                .vux-tab-ink-bar{
                    background-color: unset;
                }
            }
        }
        .scrollable .vux-tab-item{
            flex:20%;
        }
        .c-line:after{
        border:none;
        height:0;
    }
    }
}
</style>
