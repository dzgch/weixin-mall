import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home.vue'//首页
import Myself from '@/views/myself.vue'//个人中心
import Mall from '@/views/mall.vue'//商城
import New from '@/views/new.vue'//新品
import Hot from '@/views/hot.vue'//热卖
import Loan from '@/views/loan.vue'//租赁
import Collect from '@/views/collect.vue'//收藏
import Shopcar from '@/views/shopcar.vue'//购物车
import GoodsDetails from '@/views/goodsdetails.vue'//商品详情
import Order from '@/views/order.vue'//订单
import Address from '@/views/address.vue'//收获地址
import NewAddress from '@/views/newAddress.vue'//添加新收获地址
import SureOrder from '@/views/sureorder.vue'//确认订单
import SureLoan from '@/views/sureloan.vue'//确认租赁
import InvitationCode from '@/views/invitation-code.vue'//邀请码

Vue.use(Router)
console.log(Home)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      // 是否开启底部导航
      meta: {
        // 路由层级，数值越大层级越深，以此决定转场动画的前进和后退 大于前进，小于后退
        index: 0,
        showFooter: true
      }
    },
    {
      path: '/myself',
      name: 'myself',
      component: Myself,
      meta: {
        index: 0,
        showFooter: true
      }
    },
    {
      path: '/mall',
      name: 'mall',
      component: Mall,
      meta: {
        index: 0,
        showFooter: true
      }
    },
    {
      path: '/new',
      name: 'new',
      component: New,
      meta: {
        index: 0,
        showFooter: true
      }
    },
    {
      path: '/hot',
      name: 'hot',
      component: Hot,
      meta: {
        index: 0,
        showFooter: true
      }
    },
    {
      path: '/loan',
      name: 'loan',
      component: Loan,
      meta: {
        index: 0,
        showFooter: true
      }
    },
    {
      path: '/collect',
      name: 'collect',
      component: Collect,
      meta: {
        index: 1,
        showFooter: false
      }
    },
    {
      path: '/shopcar',
      name: 'shopcar',
      component: Shopcar,
      meta: {
        index: 1,
        showFooter: false
      }
    },
    {
      path: '/goodsdetails',
      name: 'goodsdetails',
      component: GoodsDetails,
      meta: {
        index: 1,
        showFooter: false
      }
    },
    {
      path: '/order',
      name: 'order',
      component: Order,
      meta: {
        index: 1,
        showFooter: false
      }
    },
    {
      path: '/address',
      name: 'address',
      component: Address,
      meta: {
        index: 1,
        showFooter: false
      }
    },
    {
      path: '/address/newaddress',
      name: 'newAddress',
      component: NewAddress,
      meta: {
        index: 2,
        showFooter: false
      }
    },
    {
      path: '/sureorder',
      name: 'sureOrder',
      component: SureOrder,
      meta: {
        index: 2,
        showFooter: false
      }
    },
    {
      path: '/sureloan',
      name: 'sureLoan',
      component: SureLoan,
      meta: {
        index: 2,
        showFooter: false
      }
    },
    {
      path: '/invitation_code',
      name: 'invitation_code',
      component: InvitationCode,
      meta: {
        index: 0,
        showFooter: false
      }
    }
  ]
})
