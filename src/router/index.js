import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index/index' // 首次贷款实名身份验证

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'Index'
    },
    {
      path: '/Index',
      name: 'Index',
      component: Index
    }
  ]
})
