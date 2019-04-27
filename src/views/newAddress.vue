<template>
<div class="add-address">
    <div class="mall-top">
      <header-c :title="headerTitle">
        <a slot="header-right" @click="clickManager">{{ headerRight }}</a>
      </header-c>
    </div>
    <div class="mall-cell">
      <add-addr-c :address="address"></add-addr-c>
    </div>
</div>
</template>
<script>
import { Flexbox, FlexboxItem,CheckIcon } from 'vux'
import HeaderC from '@/components/header'
import AddAddrC from '@/components/address/addAddrC'
import { mapGetters, mapActions } from 'vuex';

export default {
    name:"newAddress",
    components:{
      Flexbox, 
      FlexboxItem,
      AddAddrC,
      HeaderC,
      CheckIcon
    },
    data(){
        return {
          headerTitle:"编辑收货地址",
          headerRight:"完成",
          address:this.getOneAddress
        }
    },
    mounted(){
      this.headerTitle=this.$route.query.isAdd?"新增收货地址":"修改收货地址"
    },
    methods: {
      ...mapActions([
        'getaddressAdd',
        'handleClearAddr',
        'getaddressUpdate'
      ]),
      clickManager(){
        console.log(this.getAddrLarge)
        if(this.getAddrUser==""){
          // 显示文字
          this.$vux.toast.text('收货人不能为空', 'center')
          return false
        }
        if(this.getAddrPhone==""){
          // 显示文字
          this.$vux.toast.text('收货人电话号码不能为空', 'center')
          return false
        }
        if(this.getAddrLarge==""){
          // 显示文字
          this.$vux.toast.text('收货人地址不能为空', 'center')
          return false
        }
        if(this.getAddrSmall==""){
          // 显示文字
          this.$vux.toast.text('收货人详细地址不能为空', 'center')
          return false
        }
        if(this.$route.query.isAdd){
          
        // 提交地址
        this.getaddressAdd().then(res=>{
          // 成功后清空地址数据，跳转到地址管理
          this.handleClearAddr()
          this.$router.go(-1)
        })
        }else{
        // 提交地址
        this.getaddressUpdate().then(res=>{
          // 成功后清空地址数据，跳转到地址管理
          this.handleClearAddr()
          this.$router.go(-1)
        })
        }
      },
    },
    computed:{
      ...mapGetters([
        'getOneAddress',
        'getAddrUser',
        'getAddrPhone',
        'getAddrLarge',
        'getAddrSmall'
      ])
    }
}
</script>
<style lang="less">
.add-address{
  
  .mall-top{
     background-color: @bg-color;
  }


  .mall-cell{
    margin-top:15px;
  }

}
</style>
