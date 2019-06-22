import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index/index' // 首页
import ProjectIntroduction from '@/views/projectIntroduction/index' // 项目介绍
import Policy from '@/views/policy/index'
import ConsultAndAdvice from '@/views/consultAndAdvice/index'
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
    },
    {
      path: '/ProjectIntroduction',
      name: 'ProjectIntroduction',
      component: ProjectIntroduction
    },
    {
      path: '/Policy',
      name: 'Policy',
      component: Policy
    },
    {
      path: '/ConsultAndAdvice',
      name: 'ConsultAndAdvice',
      component: ConsultAndAdvice
    }
  ]
})
