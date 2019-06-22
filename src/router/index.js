import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index/index' // 首页
import ProjectIntroduction from '@/views/projectIntroduction/index' // 项目介绍
import Policy from '@/views/policy/index' // 政策法规
import ConsultAndAdvice from '@/views/consultAndAdvice/index' // 咨询建议
import OperatingServices from '@/views/operatingServices/index' // 运营服务
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
    },
    {
      path: '/OperatingServices',
      name: 'OperatingServices',
      component: OperatingServices
    }
  ]
})
