<template>
    <div class="judge">
        <flexbox orient="horizontal" class="c-judge-flex">
            <flexbox-item v-for="(k,i) in judgeList" :key="k.text" class="c-center">
                <div :class="k.textClass" @click="clickJudge(i)"><i :class="k.iconClass"></i><span>{{ k.text}}</span></div>
            </flexbox-item>
        </flexbox>
        <group gutter="0" class="c-judge-group">
          <x-textarea v-model="xtextList.value"
           :name="xtextList.name" :show-counter="xtextList.showCounter" 
           @on-change="clickText"
           :placeholder="xtextList.placeholder"></x-textarea>
          <!-- <flexbox orient="horizontal" class="c-judge-photo">
            <flexbox-item>
                <div>
                    <div v-for="i in gridList" :key="i.text" class="c-goto-photo">
                    <div><i slot="icon" :class="i.iconClass"></i></div>
                    <div>{{i.label}}</div>
                </div>
                </div>
                
            </flexbox-item>
          </flexbox> -->
        </group>
    </div>
</template>

<script>
import { Flexbox, FlexboxItem,XTextarea,Group,Grid, GridItem   } from 'vux'
import { isIP } from 'net';
export default {
    name:"judge",
    components:{
        Flexbox,
        FlexboxItem,
        XTextarea,
        Group,Grid, GridItem 
    },
    props:{
    },
    data(){
        return {
            judgeList:[{
                iconClass:["iconfont","iconhaoping"],
                text:"好评",
                textClass:["c-judge-status-1"]
            },
            {
                iconClass:["iconfont","iconzhongchaping"],
                text:"中评",
                textClass:["c-judge-status-2"]
            },
            {
                iconClass:["iconfont","iconzhongchaping"],
                text:"差评",
                textClass:["c-judge-status-2"]
            }],
            xtextList:{
            value:"",name:"area",showCounter:false,placeholder:"请填写宝贝评价"
            },
            cols:2
            ,show_lr_borders:false
            ,show_vertical_dividers:false
            ,gridList:[{
                link:'/',
                label:"照片",
                iconClass:["iconfont","iconxiangji"]
            },
            {
                link:'/',
                label:"视频",
                iconClass:["iconfont","iconshipin-m"]
            }]
        }
    },
    methods:{
        clickJudge(val){
            for(var i=0;i<this.judgeList.length;i++){
                if(val==i){
                let type=Object.assign(this.judgeList[i],{textClass:["c-judge-status-1"]})
                    this.$set(this.judgeList,i,type)
                }else{
                let type=Object.assign(this.judgeList[i],{textClass:["c-judge-status-2"]})
                    this.$set(this.judgeList,i,type)
                }
            }
            this.$emit("on-judge",val)
        },
        clickText(val){
            this.$emit("on-judgeText",val)
        }
    },
    computed:{
    }
}
</script>

<style lang="less">
@font-size:26px;
@icon-size:35px;
.judge{
    .c-judge-flex{
        padding:15px 0;
        background-color: @bg-color;
    }
    .c-judge-photo{
        font-size:(@font-size)-10;
        color:@judge-color-false;
          background-color: @main-bg-color;
        .iconfont{
            font-size:(@font-size)+5;
            color:#c3c3c3;
        }
        .weui-grid__label{
            color:@judge-color-false;
            margin-top:10px;
        }
        
        .c-goto-photo{
            display: inline-block;
            text-align: center;
            height: 90px;
            width: 90px;
            border: 1px dashed #c3c3c3;
            vertical-align: top;
            margin:20px;
            &>div:first-child{
                margin-top:8px;
            }
            &:last-child{
                margin: 20px 0;
            }
        }
    }
    .c-judge-status-1{
        font-size:@font-size;
        color:@judge-color-true;
        .iconfont{
            font-size:@icon-size;
            margin-right:15px;
        }
    }
    .c-judge-status-2{
        font-size:@font-size;
        color:@judge-color-false;
         .iconfont{
            font-size:@icon-size;
            margin-right:15px;
        }
    }
    .c-judge-group{
        background-color:@main-bg-color;
        .weui-textarea{
            // height:155px;//有照片功能
            height:265px;//无照片功能
            padding:20px 30px;
            background-color:@main-bg-color;

        }
        .weui-cells{
            margin-top:0;
            &:before{
                height:0;
                border:none;
            }
             &:after{
                height:0;
                border:none;
            }
        }
        .vux-x-textarea.weui-cell{
            padding:0;
        }
    }
    textarea::-webkit-input-placeholder{
        font-size:(@input-font)-4;
        color: @placeholder-color;
        background-color: @main-bg-color;
    }
    textarea::-moz-placeholderr{
        font-size: (@input-font)-4;
        color: @placeholder-color;
        background-color: @main-bg-color;
    }
    textarea:-moz-placeholder{
        font-size:(@input-font)-4;
        color: @placeholder-color;
        background-color: @main-bg-color;
    }
    textarea:-ms-input-placeholder{
        font-size:(@input-font)-4;
        color: @placeholder-color;
        background-color: @main-bg-color;
    }
}
</style>
