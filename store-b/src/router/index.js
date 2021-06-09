import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '@/views/Login.vue';
import Default from '@/views/Default.vue';
import DataSale from '@/views/DataAnalys/DataSale.vue';
import store from '@/store/index.js'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Default',
    component: Default,
    redirect: '/data/sale',
    children: [
      {
        path: '/data/sale',
        name: 'DataSale',
        component: DataSale,
      },
      {
        path: '/data/conver',
        name: 'DataConver',
        component: () => import('@/views/DataAnalys/DataConver.vue'),
      },
      {
        path: '/goods/add',
        name: 'GoodsAdd',
        component: () => import('@/views/goods/GoodsAdd.vue'),
      },
      {
        path: '/goods/change',
        name: 'GoodsChange',
        component: () => import('@/views/goods/GoodsChange.vue'),
      },
      {
        path: '/goods/delete',
        name: 'GoodsDelete',
        component: () => import('@/views/goods/GoodsDelete.vue'),
      },
      {
        path: '/goods/list',
        name: 'GoodsList',
        component: () => import('@/views/goods/GoodsList.vue'),
      },
      {
        path: '/order/create',
        name: 'OrderCreate',
        component: () => import('@/views/order/OrderCreate.vue'),
      },
      {
        path: '/order/change',
        name: 'OrderChange',
        component: () => import('@/views/order/OrderChange.vue'),
      },
      {
        path: '/order/return',
        name: 'OrderReturn',
        component: () => import('@/views/order/OrderReturn.vue'),
      },
      {
        path: '/show/baner',
        name: 'ShowBaner',
        component: () => import('@/views/ShowManage/Baner.vue'),
      },
      {
        path: '/show/carousel',
        name: 'Carousel',
        component: () => import('@/views/ShowManage/Carousel.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
];

const router = new VueRouter({
  routes,
});
router.beforeEach((to,from,next)=>{
  if(to.path !=='/login'){
    if(store.state.user.appkey && store.state.user.username && store.state.user.email && store.state.user.role){
      return next();
    }else{
      return next('login')
    }
    
  }else{
    return next()
  }
})
export default router;
