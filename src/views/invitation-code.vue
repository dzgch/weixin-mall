<template>
<div class="invitation-code">
    <!-- 背景 -->
  <user-bg>
      <!-- 需填写的内容 -->
   <user-cell slot="invitationCell" @invitationChange="change" :isInvitation="true"></user-cell>
  </user-bg>
</div>
</template>
<script>
import UserCell from '@_c/login/user-cell'
import UserBg from '@_c/login/user-bg'
import {mapActions, mapMutations} from 'vuex'
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
     
    },
    methods:{
        ...mapActions([
            'getnoinvitationcode'
        ]),
        change(){
            this.setInvitation(true)
            this.getnoinvitationcode()
            this.$router.push({
            path:this.$store.state.homePath
            });
        },
      ...mapMutations([
        'setInvitation'
      ])
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
