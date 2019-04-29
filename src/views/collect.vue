<template>
<div class="collect">
    <div class="mall-top">
      <header-c :title="headerTitle">
        <a slot="header-right" @click="clickManager">{{ headerRight }}</a>
      </header-c>
    </div>
    <div class="mall-cell">
      <flexbox orient="vertical" :gutter="0" wrap="wrap">
        <flexbox-item v-for="(k,i) in collectList" :key="i" class="c-mall-goods-p">
          <panel-for-coll :collect="true" ref="panelColl" :isShow="isShow" :goodsList="k" :checked="checked"></panel-for-coll>
          
        </flexbox-item>
        <div v-show="collectList.length<=0" class="tip-nomessage">
          暂无收藏品
      </div>
      </flexbox>
    </div>
    <div class="mall-footer" v-show="isShow">
      <flexbox :gutter="0" wrap="wrap">
        <flexbox-item :span="2/3">
            <!-- <check-icon :value.sync="checkedAll">全选</check-icon> -->
        </flexbox-item>
        <flexbox-item class="c-delete-flex">
            <button-l text="删除" class="c-delete" @click.native="removeColl"></button-l>
        </flexbox-item>
      </flexbox>
    </div>
</div>
</template>
<script>
import { Flexbox, FlexboxItem,CheckIcon } from 'vux'
import HeaderC from '@/components/header'
import PanelForColl from '@/components/panel/panelForColl'
import ButtonL from '@/components/basic/buttonL'
import { mapActions, mapGetters, mapMutations } from 'vuex';
export default {
    name:"new",
    components:{
      Flexbox, 
      FlexboxItem,
      PanelForColl,
      HeaderC,
      ButtonL,
      CheckIcon
    },
    data(){
        return {
          headerTitle:"我的收藏",
          isShow:false,
          headerRight:"管理",
          collectList:[],
          checked:false
        }
    },
    mounted(){
      this.getCollect()
    },
    methods: {
      getCollect(){
this.getcollect().then(res=>{
        this.collectList=res
      })
      },
      clickManager(){
        this.isShow= !this.isShow;
        this.headerRight=this.isShow?"完成":"管理";
        // 全选
        this.setAllCheckColl(false)
        this.setColldelListNone()
        // 设置子组件不选
        this.checked=false
        for(var i=0;i<this.$refs.panelColl.length;i++){
          this.$refs.panelColl[i].changeCheck()
        }
      },
      ...mapActions([
        'getcollect',
        'getcollectRemove'
      ]),
      ...mapMutations([
        'setAllCheckColl',
        'setColldelListNone'
      ]),
      removeColl(){
        let list=this.collectList
        if(list.length<1){
          this.$vux.toast.show({
            text: '您还没有选择商品哦！',
            time:2000,
            type:'text',
            width:'2.7rem'
          })
        }else {
        this.getcollectRemove().then(res=>{
          this.getCollect()
          this.clickManager()
        })
        }
      }
    },
    computed:{
      ...mapGetters([
        'getAllCheckColl'
      ]),
      checkedAll:{
        get(){
          return this.getAllCheckColl
        },
        set(v){
          this.setAllCheckColl(v)
        }
      },
    }
}
</script>
<style lang="less">
.collect{
  padding-bottom:100px;
  .mall-top{
     background-color: @bg-color;
  }
 .mall-grid-c{
   .weui-grid__icon{
     width:108px;
     height: 108px;
   }
 }
 .new-swiper-c{
   padding:0 20px;
 }
  .mall-cell{
      background-color: @bg-color;
    padding:0 10px;
    margin-top:15px;
    .c-mall-goods-p{
      padding:0 10px;
    }
  }
 .mall-footer{
  //  background-color: @bg-color;
   padding:20px;
   width:100%;
   position: fixed;
   bottom: 0;
   background-color: #ededed;
   .c-delete-flex{
     padding:0 20px;
   }
   .c-delete{
    //  width:30%;
     height:55px;
     font-size: 28px;
   }
 }
}
</style>
