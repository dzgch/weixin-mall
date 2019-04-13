<template>
    <div class="sure-cell">
        <group>
            <cell v-for="k in list" :key="k.title" :title="k.title" :link="k.link" :is-link="k.is_link" :value="k.money">
               
            </cell>
        </group>
    </div>
</template>

<script>
import { Cell, CellBox, CellFormPreview, Group, Badge } from 'vux'
let list=[
    {title:"商品总额：",is_link:false,money:"￥0.00"},
    {title:"优惠券",is_link:true,link:"/",money:"￥0.00"},
    {title:"运费：",is_link:false,money:"￥0.00"},
    {title:"实付金额：",is_link:false,money:"￥0.00"}
    ];
export default {
    name:"sureCell",
    components:{
        Cell,
        CellBox,
        Group,
        Badge,
        CellFormPreview
    },
    mounted () {
    setTimeout(() => {
      this.money = -1024
    }, 2000)
  },
  props:{

  },
  data(){
      return {
          money:null,
          list:list
      }
  },
   methods: {
    onClick () {
      console.log('on click')
    }
  }
}
</script>

<style lang="less">
.sure-cell{
    background-color: @bg-color;
    .weui-cells{
        margin-top:0;
        &::before,
         &::after{
            height:0;
            border:none;
        }

    }
    .weui-cell{
        text-align: left;
    }
     .weui-cell_access .weui-cell__ft{
        padding-right: 30px;
    }
    .weui-cell_access .weui-cell__ft:after{
        width:14px;
        height:14px;
        border-color:#999;
    }
    .vux-cell-bd.vux-cell-primary{
        padding-left: 0px;
        color:@c_333;
        font-size:28px;
        p{
            margin:20px 0;
        }
    }
    .weui-cell__ft{
        color:#fe4646;
        font-size:28px;
    }
    .iconfont{
        font-size:42px;
        background: -webkit-linear-gradient(bottom, #ff6c00, #f9a719);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    
}
</style>
