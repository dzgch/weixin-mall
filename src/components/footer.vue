<template>
   <tabbar class="footer">
      <tabbar-item v-for= "item in footerList" :key="item.name" :show-dot="item.show_dot" :selected="item.selected" :link="item.link" :badge="item.badge" @on-item-click="footerItem">
        <i slot="icon" :class="item.imgUrl"></i>
        <span slot="label">{{item.name}}</span>
      </tabbar-item>
    </tabbar> 
</template>
<script>
import { Tabbar, TabbarItem ,ViewBox} from 'vux'
import { mapActions, mapMutations, mapState, mapGetters } from 'vuex'
// import img1 from '../assets/images/icon_nav_button.png'
// import img2 from '../assets/images/icon_nav_msg.png'
// import img3 from '../assets/images/icon_nav_article.png'
// import img4 from '../assets/images/icon_nav_cell.png'
export default {
   name: 'Footer',
  components: {
    Tabbar,
    TabbarItem,
    ViewBox
  },
  data(){
    return {
    }
  },
  computed:{
    ...mapState([
      'footerList'
    ]),
  },
  created() {
    // this.handleChangeFooter(0)
  },
  methods:{
    footerItem(index){
      console.log(index)
      this.handleChangeFooter(index)
    },
    ...mapActions([
      'handleChangeFooter'
    ])
  }
}
</script>
<style lang="less">
.footer{
  .iconfont{
    font-size: 42px;
  }
  .weui-tabbar__icon{
    width:42px;
    height: 42px;
  }
  .weui-tabbar__label{
    font-size: 24px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 24px;
    letter-spacing: 0px;
    color: #393b3a;
        margin: 0;
    padding: 10px 10px 20px;
  }
  .weui-tabbar__item{
    border-top:1px solid #cecece;
    &:not(:last-child){
    border-right:1px solid #cecece;

    }
    
  }
  .weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon,
   .weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon > i, 
   .weui-tabbar__item.weui-bar__item_on .weui-tabbar__label{
// color:@theme-color;
 background: -webkit-linear-gradient(bottom, #ff6c00, #f9a719);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
  }
}
</style>

