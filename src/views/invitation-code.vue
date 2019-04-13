<template>
<div class="invitation-code">
  <user-bg>
   <user-cell slot="invitationCell"></user-cell>
  </user-bg>
</div>
</template>
<script>
import UserCell from '@_c/login/user-cell'
import UserBg from '@_c/login/user-bg'
export default {
    name:"invitation_code",
    components:{
    UserBg,
    UserCell
    },
    data(){
        return {
          
        }
    },
    created(){
    },
    computed: {
     
    }
}
</script>
<style lang="less" >
.invitation-code{
  position: relative;
    background-color: @bg-color;
    height:100%;
 
}
</style>
