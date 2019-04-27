<template>
    <div class="hot-choose">
        <div class="c-money-range"><span class="c-label">价格区间</span>
            <input type="text" class="c-input-hot" v-model="price">
            <div class="c-l"></div>
            <input  type="text" class="c-input-hot" v-model="price1"/>
        </div>
        <group>
            <cell
            title="电动机械"
            is-link
            :border-intent="false"
            :arrow-direction="showContent ? 'up' : 'down'"
            @click.native="showContent = !showContent"></cell>

            <div class="slide" :class="showContent?'animate':''">
                <checker v-model="checkValue" type="checkbox" @on-change="onChange" default-item-class="default-item" selected-item-class="selected-item">
                    <checker-item :value="item" v-for="(item, index) in dzjxlist" :key="index">{{item.classStr}}</checker-item>
                </checker>
            </div>
            <cell
            title="园林药剂"
            is-link
            :border-intent="false"
            :arrow-direction="showContent1 ? 'up' : 'down'"
            @click.native="showContent1 = !showContent1"></cell>

            <div class="slide" :class="showContent1?'animate':''">
                <checker v-model="checkValue1" type="checkbox" default-item-class="default-item" selected-item-class="selected-item">
                    <checker-item :value="item" v-for="(item, index) in dzjxlist1" :key="index">{{item.classStr}}</checker-item>
                </checker>
            </div>
        </group>
        <slot name="chooseBtn"></slot>
    </div>
</template>

<script>
import { Cell, CellBox, CellFormPreview, Group, Badge ,Checker, CheckerItem} from 'vux'
import { mapActions } from 'vuex';
export default {
    name:"hotChoose",
    components:{
        Group,
        Cell,
        CellFormPreview,
        CellBox,
        Badge,
        Checker, CheckerItem
    },
    props:{
        },
    data(){
        return {
            dzjxlist:[],
            dzjxlist1:[],
            showContent: true,
            showContent1: true,
            checkValue:[],
            checkValue1:[],
            price:'',
            price1:''
        }
    },
    mounted(){
        this.getClass()
    },
    methods:{
        ...mapActions([
            'getclasslist',
            'getselect'
        ]),
        getClass(){
            this.getclasslist().then(res=>{
                this.dzjxlist=res.mechanical//机械mechanical
                this.dzjxlist1=res.agentia//药剂
            })
        },
        reset(){
            this.checkValue=[]
            this.checkValue1=[]
        },
        onChange(val){
            console.log(this.checkValue)
        },
        selectByType(){
            let string=[],string1=[],data=[]
            string=this.checkValue.map(val=>{ return val.classId })
            string1=this.checkValue1.map(val=>{ return val.classId })
            data=[...string,...string1]
            let price=this.price+"!"+this.price1
            if(data.length>0||price.length>1){
                this.getselect({one:data.join("!"),two:price}).then(res=>{
                    this.$emit("on-chooseData",res)
                })
            }else{
                this.$emit("on-chooseData")
            }
        }
    }
}
</script>

<style lang="less" scoped>
.hot-choose{
    background-color: @bg-color;
    .c-money-range{
        height: 120px;
        font-size: 25px;
        line-height: 19px;
        letter-spacing: -1px;
        color: #000000;
        padding:20px 0px 35px;
        .c-input-hot{
            width: 231px;
            height: 62px;
            background-color: #ffffff;
            border: solid 1px #afafaf;
            padding:0 20px;
            margin:0 20px;
            font-size:25px;
            color:#333;
        }
        .c-l{
            display: inline-block;
            width: 19px;
            height: 2px;
            border: solid 1px #afafaf;
            vertical-align: middle;
        }
    }
    .slide {
    padding: 0 30px 10px;
    overflow: hidden;
    max-height: 0;
    transition: 0 .5s cubic-bezier(0, 1, 0, 1) -.1s;
    float:left;
    width:100%;
    display: none;
    }
    .animate {
    max-height: 9999px;
    transition-timing-function: cubic-bezier(0.5, 0, 1, 0);
    transition-delay: 0s;
    display: block;
    }
    .item{
        width: 109px;
	    height: 45px;
        border-radius: 22px;
        font-size: 23px;
        line-height: 45px;
        letter-spacing: -1px;
        margin-right: 20px;
        margin-bottom:20px;
        float:left;
    }
    .default-item{
        .item;
        background-color: #e6e6e6;
        color: #646464;
    }
    .selected-item{
        .item;
        background-image: linear-gradient(202deg, 
            #2ea45d 0%, 
            #46bf5a 100%), 
        linear-gradient(
            #ff9c00, 
            #ff9c00);
        background-blend-mode: normal, 
            normal;
        color: #ffffff;
    }
}
</style>
