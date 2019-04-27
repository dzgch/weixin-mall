import httpRequest from './http'

// 微信接口
export const getwxuserinfo= p => httpRequest.post('/wxuserinfo', p)
// 上传code
export const getauthorize= p => httpRequest.post('/authorize', p)
// 填写邀请码
export const getinvitation= p => httpRequest.post('/addinvitationcode', p)
// 无邀请码登录
export const noinvitationcode= p => httpRequest.post('/noinvitationcode', p)
// 注册
export const usersigup= p => httpRequest.post('/usersigup', p)
// 登录
export const userlogin= p => httpRequest.post('/userlogin', p)
// 注销
export const userlogout= p => httpRequest.post('/userlogout', p)
// 首页
export const getHome= p => httpRequest.post('/home', p)
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
export const selectRentCommodity= p => httpRequest.post('/shop/selectrentcommodity', p)
// 全部
export const selectcommodity= p => httpRequest.post('/shop/selectcommodity', p)

// 查询分类
export const classlist= p => httpRequest.post('/shop/classlist', p)
// 根据分类查询物品	
export const select= p => httpRequest.post('/shop/classlist/select', p)
// 根据名称查询物品	(搜索)
export const selectByName= p => httpRequest.post('/shop/classlist/selectbyname', p)
// 根据id查询物品	
export const selectcommoditybyid= p => httpRequest.post('/shop/selectcommoditybyid', p)

// 个人中心-我的订单
export const getOrder= p => httpRequest.post('/usercenter/order', p)
// 代付款
export const nopay= p => httpRequest.post('/usercenter/order/nopay', p)
// 已付款
export const pay= p => httpRequest.post('/usercenter/order/pay', p)
// 待发货	
export const nosend= p => httpRequest.post('/usercenter/order/nosend', p)
// 待收货
export const issend= p => httpRequest.post('/usercenter/order/issend', p)
// 待评价
export const orderAappraise= p => httpRequest.post('/usercenter/order/appraise', p)
// 订单详情
export const orderDetails= p => httpRequest.post('/usercenter/order/particulars', p)

// 删除订单
export const removeOrder= p => httpRequest.post('/usercenter/order/appraise', p)

// 确认收货
export const sureShop= p => httpRequest.post('/usercenter/order/appraise', p)
// 购物车结算		/usercenter/shopcar/settle			UserTokenOne，string为购物车id，多个购物车用！隔开						

export const settle= p => httpRequest.post('/usercenter/shopcar/settle', p)
//购物车
export const shopcar= p => httpRequest.post('/usercenter/shopcar', p)
//购物车管理	
export const shopcarRemove= p => httpRequest.post('/usercenter/shopcar/remove', p)
// 加入购物车
export const shopcarAdd= p => httpRequest.post('/usercenter/shopcar/add', p)
// 更新购物车
export const shopcarUpdate= p => httpRequest.post('/usercenter/shopcar/update', p)
//我的收藏	
export const collect= p => httpRequest.post('/usercenter/collect', p)
//收藏夹删除
export const collectRemove= p => httpRequest.post('/usercenter/collect/remove', p)
// 加入收藏夹
export const collectAdd= p => httpRequest.post('/usercenter/collect/add', p)
// 商品评论
export const appraise= p => httpRequest.post('/usercenter/appraise', p)
// 我的评论
export const myappraise= p => httpRequest.post('/usercenter/appraise/myappraise', p)
// 添加评论
export const appraiseAdd= p => httpRequest.post('/usercenter/appraise/add', p)
// 删除评论
export const appraiseRemove= p => httpRequest.post('/usercenter/appraise/remove', p)
// 地址管理
// 增加
export const addressAdd= p => httpRequest.post('/usercenter/address/add', p)
// 删除
export const addressRemove= p => httpRequest.post('/usercenter/address/remove', p)
// 更新
export const addressUpdate= p => httpRequest.post('/usercenter/address/update', p)
// 查询
export const addressSelect= p => httpRequest.post('/usercenter/address/select', p)
// 设为默认地址
export const addressSetmain= p => httpRequest.post('/usercenter/address/setmain', p)
// 获取默认地址
export const addressGetmain= p => httpRequest.post('/usercenter/address/getmain', p)

// 购买商品(废弃)
export const buycommodity= p => httpRequest.post('/shop/buycommodity', p)
// 确认够买(废弃)
export const pushorder= p => httpRequest.post('/shop/pushorder', p)
// 租赁商品(废弃)
export const rentcommodity= p => httpRequest.post('/shop/rentcommodity', p)
// 确认租赁商品(废弃)
export const pushrentorder= p => httpRequest.post('/shop/pushrentorder', p)


//   批量提交订单		/shop/commodity/batchorder			OrderBatchInfo，order为Order列表						
export const batchorder= p => httpRequest.post('/shop/commodity/batchorder', p)
// 批量提交租赁订单		/shop/commodity/batchrentorder			RentOrderBatchInfo，rentOrder为RentOrder列表						
export const batchrentorder= p => httpRequest.post('/shop/commodity/batchrentorder', p)


// 取消订单		/usercenter/order/cancel			UserTokenOne，string为订单号						
export const ordercancel= p => httpRequest.post('/usercenter/order/cancel', p)
// 取消租赁订单		/usercenter/rentorder/cancel			UserTokenOne，string为订单号						
export const rentordercancel= p => httpRequest.post('/usercenter/rentorder/cancel', p)

// 我的租赁订单		/usercenter/rentorder			UserToken						
export const rentorder= p => httpRequest.post('/usercenter/rentorder', p)
// 租赁订单详情		/usercenter/rentorder/particulars			UserTokenOne，string为订单号						
export const rentorderparticulars= p => httpRequest.post('/usercenter/rentorder/particulars', p)
// 租赁待付款		/usercenter/rentorder/nopay			UserToken						
export const rentordernopay= p => httpRequest.post('/usercenter/rentorder/nopay', p)
// 租赁已付款		/usercenter/rentorder/pay			UserToken						
export const rentorderpay= p => httpRequest.post('/usercenter/rentorder/pay', p)
// 租赁待发货		/usercenter/rentorder/nosend			UserToken						
export const rentordernosend= p => httpRequest.post('/usercenter/rentorder/nosend', p)
// 租赁待收货		/usercenter/rentorder/issend			UserToken						
export const rentorderissend= p => httpRequest.post('/usercenter/rentorder/issend', p)
// 租赁待评价		/usercenter/rentorder/appraise			UserToken						
export const rentorderappraise= p => httpRequest.post('/usercenter/rentorder/appraise', p)
