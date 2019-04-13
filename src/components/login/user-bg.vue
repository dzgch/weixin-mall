<template>
    <div class="user-bg">
        <div class="invitation-top">
        </div>
        <div class="invitation-footer">
        </div>
        <div class="invitation-user"><i class="iconfont iconyonghu"></i></div>   
        <slot name="invitationCell"></slot>
    </div>
</template>

<script>
export default {
    name:"user_bg",
    components:{

    },
    props:{

    },
    data(){
        return {
            
        }
    }
}
</script>

<style lang="less" scoped>
.user-bg{
    height:100%;
    .invitation-top{
    width:100%;
    height: 43%;
    background-color: #08bf60;
  }
    .invitation-footer{
    height:57%;
    background-color: #e8e8e8;
  }
    .invitation-user{
      height:143px;
      width:143px;
      position: absolute;
      left:0;
      right:0;
      margin: auto;
      top:11%;
      background-color: @bg-color;
      border-radius: 50%;
    .iconfont{
      color:#08bf60;
      font-size: 100px;
      line-height: 143px;
    }
  }
}
 
</style>
