import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index/index' // 首页
import ProjectIntroduction from '@/views/projectIntroduction/index' // 项目介绍
import Policy from '@/views/policy/index' // 政策法规
import ConsultAndAdvice from '@/views/consultAndAdvice/index' // 咨询建议
import OperatingServices from '@/views/operatingServices/index' // 运营服务-幼托
import Kindergarten from '@/views/kindergarten/index' // 运营服务-幼儿园
import K9 from '@/views/k9/index' // 运营服务-k9
import Highschool from '@/views/highschool/index' // 运营服务-高中
import Train from '@/views/train/index' // 运营服务-培训
import ProjectDetail from '@/views/projectDetail/index' // 项目详情介绍
Vue.use(Router)
export default new Router({
  mode: 'history',
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
    },
    {
      path: '/Kindergarten',
      name: 'Kindergarten',
      component: Kindergarten
    },
    {
      path: '/K9',
      name: 'K9',
      component: K9
    },
    {
      path: '/Highschool',
      name: 'Highschool',
      component: Highschool
    },
    {
      path: '/Train',
      name: 'Train',
      component: Train
    },
    {
      path: '/ProjectDetail',
      name: 'ProjectDetail',
      component: ProjectDetail
    }
  ]
})
