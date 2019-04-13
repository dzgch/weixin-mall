<template>
    <search class="c-search" @on-submit="onSubmit" :auto-fixed="auto_fixed" :auto-scroll-to-top="auto_scroll" :top="top" v-model="value" @on-focus="onFocus" @on-cancel="onCancel"></search>
</template>
<script>
import { Search } from 'vux'
export default {
    name:"SearchC",
    components:{
        Search
    },
    props:{
        auto_fixed:{
            default:false
        },
        top:{
            default:"1.2rem"
        },
        auto_scroll:{
            default:true
        }
    },
    methods: {
    resultClick (item) {
      window.alert('you click the result item: ' + JSON.stringify(item))
    },
    getResult (val) {
      this.results = val ? getResult(this.value) : []
    },
    onSubmit (val) {
      window.alert('on submit' + val)
    },
    onCancel () {
      console.log('on cancel')
    },
    onFocus () {
      console.log('on focus')
    }
  },
  data () {
    return {
      autoFixed: true,
      value: ''
    }
  }
}
</script>
<style lang="less">
//search
.c-search{
  padding:10px;
    .weui-icon-search{
    color:#4d4d4d;
    font-size: 24px;
    }
    .weui-search-bar__label span{
      font-size: 24px;
       color:#6e6e6e;
    }
    .weui-search-bar__box .weui-search-bar__input{
      height:35px;
      font-size: 24px;
      padding: 4px 10px;      
    }
    .weui-search-bar__box .weui-icon-search{
      line-height: 45px;
      left:-2px;
    }
    .weui-search-bar__box .weui-icon-clear{
      line-height: 45px;
      right:-10px;
    }
    .weui-search-bar__cancel-btn{
       line-height: 45px;
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

