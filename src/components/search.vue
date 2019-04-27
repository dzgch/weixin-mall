<template>
<div>
    <search class="c-search" 
    :auto-fixed="auto_fixed" 
    :auto-scroll-to-top="auto_scroll" 
    :top="top" v-model="value" 
    cancel-text=" "
    @on-focus="onFocus"
    @on-change="onChange"
    @on-clear="onClear"
    ref="search"
    @on-cancel="onCancel">
    <span slot="right" class="serch-span" v-show="isShow" @click="onSubmit">搜索</span>
    </search>
</div>
</template>
<script>
import { Search } from 'vux'
import { mapActions } from 'vuex';
export default {
    name:"SearchC",
    components:{
        Search
    },
    props:{
        auto_fixed:{
            default:true
        },
        top:{
            default:"1.2rem"
        },
        auto_scroll:{
            default:true
        },
        
    },
  data () {
    return {
      value: '',
      ctext:"",
      cvalue:"",
      isShow:false
    }
  },
    methods: {
      ...mapActions([
        'getselectByName'
      ]),
    onChange (val) {
      if(this.value!=''){
        this.isShow=true
      }else{
        this.isShow=false
      }
    },
    onSubmit () {
      this.sendData()
    },
    onFocus(){
    },
    onCancel () {
      
    },
    onClear () {
      this.$emit("on-all-data")
    },
    sendData(){
        this.getselectByName(this.value).then(res=>{
          this.$emit("on-data",res)
        })
    }
  }
}
</script>
<style lang="less">
//search
.c-search{
  padding:10px;
  .serch-span{
    font-size: 28px;
    line-height: 50px;
  }
    .weui-icon-search{
    color:#4d4d4d;
    font-size: 30px;
    }
    .weui-search-bar__label span{
      font-size: 30px;
       color:#6e6e6e;
    }
    .weui-search-bar__box .weui-search-bar__input{
      height:55px;
      font-size: 30px;
      padding: 4px 10px;      
    }
    .weui-search-bar__box .weui-icon-search{
      line-height: 60px;
      left:-2px;
    }
    .weui-search-bar__box .weui-icon-clear{
      line-height: 60px;
      right:-10px;
      font-size: 28px;
    }
    .weui-search-bar__cancel-btn{
       line-height: 60px;
    }
    .weui-search-bar__label{
        background:#f1f1f1;
    }
    
    .weui-search-bar:after{
        height:0;
        border:0;
    }
    .weui-search-bar:before{
        height:0;
        border:0;
    }
    .weui-search-bar__form:after{
        background: #f1f1f1;
        // border-radius: 30px;
        height:65px;
        border:none;
    }
    .weui-search-bar{
      background-color: #f1f1f1;
    border-radius: 30px;
    }
}

</style>

