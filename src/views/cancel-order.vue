<template>
<div class="cancel-order">
    <div class="mall-head">
      <header-c :title="headerTitle">
      </header-c>
    </div>
    <div class="mall-top">
      <group>
        <x-textarea placeholder="请填写取消原因" :rows="15" v-model="value"></x-textarea>
    </group>
    </div>
    <div class="mall-cell">
      <x-button :gradients="[ '#FF9500','#FF5E3A']" class="btn-logout" @click.native="cancel">提交</x-button>
    </div>
</div>
</template>
<script>
import { Flexbox, FlexboxItem,XButton,Group,XTextarea } from 'vux'
import HeaderC from '@/components/header'
import { mapActions, mapGetters } from 'vuex';
export default {
    name:"new",
    components:{
      Flexbox, 
      FlexboxItem,
      HeaderC,
      XButton,Group,XTextarea
    },
    data(){
        return {
          headerTitle:"取消订单",
          value:'',
          id:this.$route.query.id
        }
    },
    mounted(){
    },
    methods: {
      ...mapActions([
        'rentordercancel',
        'ordercancel'
      ]),
       cancel(){
          if(this.getTypeTagType==0){
            this.ordercancel({
              one:this.id,
              two:this.value
            }).then(res=>{
              this.$router.go(-1)
            })
          }else{
            this.rentordercancel({
              one:this.id,
              two:this.value
            }).then(res=>{
              this.$router.go(-1)
            })
          }
       }
    },
    computed:{
      ...mapGetters([
        'getTypeTagType'
      ])
    }
}
</script>
<style lang="less">
.cancel-order{
  .weui-label{
    font-size: 30px;
  }
  .weui-textarea{
    font-size: 30px;
    background-color: @main-bg-color;
    padding:20px;
  }
  .btn-logout{
    font-size: 30px;
  }
  .mall-top{
    padding:10px 20px;
    background-color: @bg-color;
    margin-top:20px;
    
    }
 
 .mall-cell{
  padding:20px;
   margin-top:20px;
 }
}
</style>
