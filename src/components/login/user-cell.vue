<template>
    <div class="invitation-cell">
      <div class="cell-block" v-for="k in xinputList" :key="k.name">
        <i :class="k.icon"></i>
        <group :gutter="gutter" :label-align="labelAlign" class="cell-group">
          <x-input  :title="k.title" :name="k.name" v-model="invitationCode" :placeholder="k.placeholder"></x-input>
        </group>
      </div>
          <x-button class="c-btn" type="default" text="确认" @click.native="getInvitation" :mini="true"></x-button>
      <div class='cell-no-invitation' v-show="isInvitation"><a @click="clickToHome">无邀请码，直接进入</a></div>
    </div>
</template>

<script>
import { Flexbox, FlexboxItem ,Group,XInput,XButton} from 'vux'
import {mapActions, mapMutations, mapState} from 'vuex'
export default {
    name:"user_cell",
    components:{
          Flexbox, 
      FlexboxItem,
      Group,XInput,
      XButton
    },
    props:{
        xinputList:{
            default:()=>([{
                        icon:"iconfont iconyonghu",
                        name:"code",
                        placeholder:"请填写邀请码"
                    }])
        },
        isInvitation:{
          type:Boolean
        }
    },
    data(){
        return {
            
          labelAlign:"left"//为子元素设定统一对齐方式
          ,gutter:0
          ,invitationCode:''
        }
    },
    methods:{
      ...mapActions([
        'getinvitation',
        'handleIsNotInvitation'
      ]),
      getInvitation(){
        this.getinvitation(this.invitationCode).then(res=>{
          this.handleIsNotInvitation(this.invitationCode)
          this.$router.push({
            path:'/'
          })
        })
      },
      clickToHome(){
        this.$emit("invitationChange",true)
        
      },
    }
}
</script>

<style lang="less" >
  .invitation-cell{
    height:650px;
    position: absolute;
    width:700px;
    background-color: @bg-color;
    border-radius: 10px;
    left:0;
    right:0;
    margin: auto;
    top:35%;
    padding:70px 70px 0 70px;
    .cell-no-invitation{
      margin-top:30px;
      text-align: left;
      a{
        color: @theme-color;
        font-size: 24px;
        text-decoration:underline;
        cursor: pointer;
      }
    }
    .c-btn{
      width: 540px;
      height: 90px;
      background-color: #fc932c;
      border-radius: 45px;
      margin-top:60px;
      color: #ffffff;
      font-size: 32px;
      line-height: 32px;
    }
    .cell-block{
      position: relative;
      margin-top:40px;
      .cell-group{
        padding-left:80px;
        .weui-cells:before{
          height:0;
          border:none;
        }
        .weui-cells:after{
          border-width:3px;
        }
        .weui-cell{
          padding:10px 0;
        }
        
      .vux-x-input{
        height:70px;
      }
      .weui-input{
         height:70px;
         line-height:70px;
         font-size:28px;
      }
      }
      .iconfont{
        color: #cccccc;
        font-size: 44px;
        position: absolute;
        left:0;
      }
    }
  }
</style>
