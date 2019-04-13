import httpRequest from './http'

// 微信接口
export const getSdkSign= p => httpRequest.post('/userlogin', p)
export const getauthorize= p => httpRequest.post('/authorize', p)
// 注册
export const usersigup= p => httpRequest.post('/usersigup', p)
// 登录
export const userlogin= p => httpRequest.post('/userlogin', p)
// 注销
export const userlogout= p => httpRequest.post('/userlogout', p)
// 首页
export const getHome= p => httpRequest.get('/home', p)
// 电动机械
export const mechanical= p => httpRequest.post('/home/mechanical', p)
// 园林药剂
export const medicament= p => httpRequest.post('/home/medicament', p)
// 技术支持
export const technical= p => httpRequest.post('/home/technical', p)
// 关于我们
export const abouts= p => httpRequest.post('/home/aboutus', p)
// 商品
export const getShop= p => httpRequest.post('/shop', p)
// 新品
export const newshop= p => httpRequest.post('/shop/newshop', p)
// 热卖
export const hotshop= p => httpRequest.post('/shop/hotshop', p)
// 租赁
export const selectRentCommodity= p => httpRequest.post('/shop/selectRentCommodity', p)
// 全部
export const selectcommodity= p => httpRequest.post('/shop/selectcommodity', p)
// 个人中心-我的订单
export const getOrder= p => httpRequest.post('/usercenter/order', p)
// 代付款
export const nopay= p => httpRequest.post('/usercenter/order/nopay', p)
// 待发货
export const pay= p => httpRequest.post('/usercenter/order/pay', p)
//购物车
export const shopcar= p => httpRequest.post('/usercenter/shopcar', p)
//购物车管理	
export const shopcarManage= p => httpRequest.post('/usercenter/shopcar/manage', p)
//我的收藏	
export const collect= p => httpRequest.post('/usercenter/collect', p)
//收藏夹管理
export const collectManage= p => httpRequest.post('/usercenter/collect/manage', p)
    
  