<template>
    <div class="center-cell">
        <group>
            <cell title="账户余额" @click.native="onClick"  :link="moneyLink" :value="money">
                <i slot="icon" class="iconfont iconqian"></i>
            </cell>
            <cell v-for="k in list" :key="k.title" :title="k.title" :link="k.link" :is-link="k.is_link">
                <i slot="icon" :class="k.iconClass"></i>
            </cell>
        </group>
    </div>
</template>

<script>
import { Cell, CellBox, CellFormPreview, Group, Badge } from 'vux'

export default {
    name:"centerCell",
    components:{
        Cell,
        CellBox,
        Group,
        Badge,
        CellFormPreview
    },
    mounted () {
    setTimeout(() => {
      this.money =0;
    }, 2000)
  },
  props:{
      list:{
          default:()=>([])
      },
      moneyLink:{
          default:""
      }
  },
  data(){
      return {
          money:0,
          
      }
  },
   methods: {
    onClick () {
    //   this.$router.push({
    //       path:this.moneyLink
    //   });
    }
  }
}
</script>

<style lang="less">
.center-cell{
    background-color: @bg-color;
    padding:0 55px;
    .weui-cells{
        margin-top:0;
    }
    .weui-cell{
        text-align: left;
    }
    .weui-cell_access .weui-cell__ft:after{
        width:23px;
        height:22px;
        border-color:@c_333;
        margin-top:-10px;
    }
    .vux-cell-bd.vux-cell-primary{
        padding-left: 30px;
        color:@c_444;
        font-size:30px;
    }
    .weui-cell__ft{
        color:@c_444;
        font-size:30px;
        margin-top:7px;
        padding-right:30px!important;
    }
    .iconfont{
        font-size:42px;
        background: -webkit-linear-gradient(bottom, #ff6c00, #f9a719);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    
}
</style>
