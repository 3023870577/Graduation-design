import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: () => import('pages/home/index')
  }, {
    path: '/city',
    name: 'city',
    component: () => import('pages/city/index')
  }, {
    path: '/detail/:detailId',
    name: 'detail',
    component: () => import('pages/detail/index'),
    props: true
  }, {
    path: '/comment/:detailId',
    name: 'comment',
    component: () => import('pages/comment/index'),
    props: true
  }, {
    path: '/login',
    name: 'login',
    component: () => import('pages/login/index'),
    props: true
  }, {
    path: '/register',
    name: 'register',
    component: () => import('pages/register/index'),
    props: true
  }]
})
