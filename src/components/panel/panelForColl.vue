<template>
    <div class="panel-for-coll c-line">
        <!-- <flexbox :gutter="0">
            <flexbox-item :span="1/16" v-show="isShow">
                <check-icon :value.sync="checked"></check-icon>
            </flexbox-item>
            <flexbox-item>
                <flexbox :gutter="gutter" :orient="orient" class="c-flexbox c-line">
                    <flexbox-item :span="7/16">
                    <div class="c-img-main" :style="{backgroundImage:'url('+img_url+')'}">
                    </div>
                    </flexbox-item>
                    <flexbox-item>
                        <flexbox orient="vertical">
                            <flexbox-item>
                                <div class="c-content">
                                    <div class="c-title">{{ title }}</div>
                                    <div class="c-money-title">{{ sign }}<span class="c-money">{{ money }}</span>/起</div>
                                </div>
                            </flexbox-item>
                            <flexbox-item class="c-left">
                                <button-c :type="btn_buy_type" :text="btn_buy_text" :style="style"></button-c>
                                <button-c :type="btn_borrow_type" :text="btn_borrow_text" :style="style"></button-c>
                            </flexbox-item>
                        </flexbox>
                    </flexbox-item>
                </flexbox>
            </flexbox-item>
        </flexbox> -->
        <div class="check-c" v-show="isShow">
            <check-icon :value.sync="checkedOne"
             @click.native="getChecked(checkedOne)"
             ></check-icon>
        </div>
        <div class="c-img-main" @click="clickToDetails" :style="{backgroundImage:'url('+goodsList.picurl+')'}">
        </div>
        <div class="c-content">
            <span class="c-title" @click="clickToDetails">{{goodsList.name}}</a></span>
            <template v-if="isBuy&&!isLoan">
                <div class="c-money-title-rent" @click="clickToDetails">
                </div>
                <div class="c-money-title" @click="clickToDetails">
                        <span>购买：￥<span class="c-money">{{ (Number(goodsList.price)).toFixed(2)}}</span>/起
                        </span>
                    </div>
            </template>
            <template v-else-if="isLoan&&!isBuy">
                <div class="c-money-title" @click="clickToDetails">
                </div>
                    <div class="c-money-title-rent" @click="clickToDetails">
                        <span >租赁：￥<span class="c-money">{{ (Number(goodsList.rentPrice)).toFixed(2)}}</span>/起
                        </span>
                    </div>
            </template>
            <template v-else-if="isLoan&&isBuy">
                <div class="c-money-title" @click="clickToDetails">
                    <span >购买：￥<span class="c-money">{{ (Number(goodsList.price)).toFixed(2)}}</span>/起
                    </span>
                </div>
                <div class="c-money-title-rent" @click="clickToDetails">
                <span> 租赁：￥<span class="c-money">{{ (Number(goodsList.rentPrice)).toFixed(2)}}</span>/起
                </span>
                </div>
            </template>
            <button-by-buy  v-show="isBuy"  :goodsList="goodsList"></button-by-buy>
            <button-by-loan v-show="isLoan" :goodsList="goodsList"></button-by-loan>
        </div>
    </div>
</template>

<script>
// 收藏管理图文
import { Flexbox, FlexboxItem,CheckIcon } from 'vux'
import ButtonC from '@/components/basic/buttonCL.vue'
import ButtonByLoan from '@/components/basic/buttonByLoan.vue'
import ButtonByBuy from '@/components/basic/buttonByBuy.vue'
import {mapGetters, mapMutations} from 'vuex'
export default {
    name:"PanelForColl",
    components:{ 
        Flexbox,
        FlexboxItem,
        ButtonC,
        CheckIcon,
        ButtonByLoan,
        ButtonByBuy
    },
    data(){
        return {
            checkedOne:this.checked
        }
    },
    props:{
        isShow:{
            default:false
        },
        goodsList:{
            type:Object
        },
         checked:{
             type:Boolean
         },
         collect:false
    },
    mounted(){
        console.log("mounted")
    },
    methods:{
        clickToDetails(){
            this.$router.push({
                path:this.$store.state.goodsDetailsPath,
                query:{
                    id:this.collect?this.goodsList.commodityid:this.goodsList.id
                }
            })
        },
        ...mapMutations([
            'setAllCheckColl',
            'setColldelList',
            'removeColldelList'
        ]),
        changeCheck(){
            this.checkedOne=false
        },
        getChecked(val){
            console.log(val)
             if(val){
                  this.setColldelList(this.goodsList.id)
              }else{
                  this.removeColldelList(this.goodsList.id)

              }
            //   this.checkedOne=!val
          
        }
    },
    computed:{
      ...mapGetters([
        'getAllCheckColl',
        'getCollDel',
        'getCollList'
      ]),
        isLoan(){
            return this.goodsList.type==3||this.goodsList.type==1
        },
        isBuy(){
            return this.goodsList.type==3||this.goodsList.type==2
        }
    //   checkedOne:{
    //       get(){
    //       return this.checked
    //       },
    //       set(v){
    //           console.log(v)
    //       }
    //   }
    },
    
}
</script>

<style lang="less">
@import '~vux/src/styles/1px.less';

.panel-for-coll{
    position: relative;
    padding:30px 0;
    .c-img-main{
    height:210px;
    border-radius: 4px;
    width:300px;
    vertical-align: top;
    display: inline-block;
}
    &.c-line:after{
        height:0;
        border:none;
    }
    .check-c{
      display: inline-block;
      line-height: 210px;
    }
    .c-content{
        display: inline-block;
        vertical-align: top;
        padding:20px 0 0 20px;
        width:47%;
    }
    .c-money-title,.c-money-title-rent{
        // padding:20px 0;
        // margin-top:0;
    }
    .weui-btn + .weui-btn{
        margin-top:0;
    }
   
}
</style>
