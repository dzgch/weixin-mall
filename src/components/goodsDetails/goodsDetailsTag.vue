<template>
    <div class="goods-details-tag">
        <div class="c-sticky c-line">
        <!-- <sticky scroll-box="vux_view_box_body" :disabled="disabled" :check-sticky-support="false" class="c-sticky c-line"> -->
            <tab :line-width=0>
                <tab-item :selected="demo == index" v-for="(item, index) in list" @on-item-click="showTag" @click="demo = index" :key="index">{{item}}</tab-item>
            </tab>
        </div>
        <!-- </sticky> -->
    </div>
</template>

<script>
import { Tab, TabItem, Sticky} from 'vux'
export default {
    name:"goodsDetailsTag",
    components:{
    Tab, TabItem, Sticky
    },
    props:{

    },
    data(){
        return {
            disabled: typeof navigator !== 'undefined' && /iphone/i.test(navigator.userAgent) && /ucbrowser/i.test(navigator.userAgent)

        }
    },
    computed:{
        list(){
            return this.$store.state.mine.tagList;
        },
        demo(){
            return this.$store.state.mine.tagType
        }
    },
    methods:{
        showTag(index){
            this.$store.commit("updateTagType",index);
        }
    }
}
</script>

<style lang="less">
.goods-details-tag{
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
    .c-sticky{
        // top:80px !important;
        
        height:@height;
       background-color: @bg-color;
        .vux-tab-container{
            height:@height;
             width:55%;
            .vux-tab{
                height:@height;
                padding-left:30px;
                .vux-tab-item{
                    line-height: @height;
                    font-size: 28px;
                    color: #333333;
                    text-align: left;
                    border:none;
                    height:0;
                }
                .vux-tab-item.vux-tab-selected{
                    color: #df463c;
                }
                .vux-tab-ink-bar{
                    height:0 !important;
                }
            }
        }
    }
}
</style>
