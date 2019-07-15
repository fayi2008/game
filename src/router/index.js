import Vue from 'vue'
import Router from 'vue-router'

//路由
import index from '../components/index'//首页
import zhuce from '../components/zhuce'//首页




Vue.use(Router)


//CAL	未封账日历组



export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/zhuce',
      name: 'zhuce',
      component: zhuce
    },
  ]
})
