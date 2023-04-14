import { createRouter, createWebHashHistory } from 'vue-router'
import layout from '@/layout'
import store from '@/store'

const routes = [
  {
    path: '/login',
    component: () => import('@/views/login/index')
  },
  {
    path: "/",
    component: layout,
    redirect: '/welcome',
    meta: {title: 'welcome'},
    children: [
      {
        path: '/404',
        name: '404',
        component: () =>
          import(/* webpackChunkName: "error-page" */ '@/views/error-page/404')
      },
      {
        path: '/welcome',
        component: () =>
        import('@/views/welcome')
      },
      {
        path: '/article',
        component: () => {
          import('@/views/airticle')
        }
      },
      {
        path: '/studioInfo',
        component: () => {
          import('@/views/studio-info')
        }
      }
    ]
  },
  {
    path: '/user',
    component: layout,
    redirect: '/user/manage',
    name: 'userManage',
    children: [
      {
        path: '/user/manage',
        component: () => import('@/views/user-manage'),
        meta: {title: '用户管理'},

      },
    ]
  },
  {
    path: '/signup',
    component: layout,
    redirect: '/signup/createTable',
    name: 'signup',
    meta: {title: '报名'},

    children: [
      {
        path: '/signup/createTable',
        component: () => import('@/views/sign-up'),
        meta: {title: '创建报名表'}
      },
      {
        path: '/signup/manage',
        component: () => import('@/views/signup-manage'),
        meta: {title: '报名人管理'}
      }
    ]
  },
  {
    path: '/assessment',
    component: layout,
    redirect: '/assessment/list',
    name: 'assessment',
    meta: {title: '考核'},
    children: [
      {
        path: '/assessment/list',
        component: () => import('@/views/assessment-list'),
        meta: {title: '考核列表'},
      },
      {
        path: '/assessment/toServer',
        component: () => import('@/views/assessment-toServer'),
        meta: {title: '考核审批'},
      },
      {
        path: '/assessment/answer',
        component: () => import('@/views/assessment-answer'),
        meta: {title: '考核答案'},
      },
      {
        path: '/assessment/stuAnswer',
        component: () => import('@/views/assessment-stu-answer'),
        meta: {title: '学生答案'},

      }
    ]
  }



]



const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const token = store.getters.token
  console.log(token)
  
  if (token || to.path === '/login') {
    next()
  } else {
    console.log('User not authenticated, redirecting to login page...')
    next('/login')
  }
})

export default router
