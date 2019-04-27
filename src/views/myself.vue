<template>
<div class="myself">
    <div class="myself-top">
      <center-top :img_url="$store.state.wx.heatimgurl" :name="$store.state.wx.username" ></center-top>
    </div>
    <div class="myself-cell">
      <center-cell :list="linkList" :moneyLink="moneyLink"></center-cell>
    </div>
</div>
</template>
<script>
import { Flexbox, FlexboxItem } from 'vux'
import CenterTop from '@/components/myCenter/centerTop'
import CenterCell from '@/components/myCenter/centerCell'

export default {
    name:"myself",
    components:{
      Flexbox, 
      FlexboxItem,
      CenterTop,
      CenterCell
    },
    data(){
        return {
          
        }
    },
    created(){
    },
    computed: {
      linkList(){
        console.log(this.$store.state)
        return this.$store.state.myCenterList
      },
      moneyLink(){
        console.log(this.$store.state.moneyLink)
        return this.$store.state.moneyLink
      }
    }
}
</script>
<style lang="less" scoped>
.myself{
 .myself-cell{
   margin-top:15px;
 }
}
</style>
