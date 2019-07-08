import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in subMenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if false, the item will hidden in breadcrumb(default is true)
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index')
    }]
  },

  {
    path: '/dashboard',
    component: Layout,
    name: 'Dashboard',
    meta: { title: '首页', icon: 'index', affix: true }
  },

  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: 'Example', icon: 'example' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: 'Table', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Tree', icon: 'tree' }
      }
    ]
  },

  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: 'Form', icon: 'form' }
      }
    ]
  },

  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: 'Nested',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: 'Menu1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: 'menu2' }
      }
    ]
  },
  {
    path: '/newsManage',
    component: Layout,
    name: 'newsManage',
    redirect: '/newsManage/newsList',
    meta: { title: '新闻管理', icon: 'manage' },
    children: [
      {
        path: 'newsList',
        name: 'newsList',
        component: () => import('@/views/newsManage/list'),
        meta: { title: '新闻列表' }
      },
      {
        path: 'addNews',
        name: 'addNews',
        component: () => import('@/views/newsManage/create'),
        meta: { title: '添加新闻' }
      },
      {
        path: 'editNews/:id(\\d+)',
        name: 'EditArticle',
        hidden: true,
        meta: { title: '编辑新闻' },
        component: () => import('@/views/newsManage/edit')
      }
    ]
  },
  {
    path: '/systemManage',
    component: Layout,
    meta: {
      title: '系统管理',
      roles: ['admin'],
      icon: 'lock'
    },
    children: [{
      path: 'character',
      name: 'Character',
      component: () => import('@/views/systemManage/user'),
      meta: {
        title: '角色管理'
      }
    },
    {
      path: 'user',
      name: 'User',
      meta: {
        title: '用户管理'
      }
    }]
  },
  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://github.com/nbh520/vue-news-manage',
        meta: { title: '项目地址', icon: 'link' }
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRoutes = [
  {
    path: '/systemManage',
    component: () => import('@/views/systemManage/user'),
    name: 'Role',
    meta: {
      title: '系统管理',
      roles: ['admin']
    },
    children: [{
      path: 'character',
      meta: {
        title: '角色管理'
      }
    },
    {
      path: 'user',
      meta: {
        title: '用户管理'
      }
    }]
  },
  {
    path: '/test',
    component: Layout,
    meta: { title: 'test', icon: 'link' },
    name: 'Test',
    children: [
      {
        path: 'https://github.com/nbh520/vue-news-manage',
        meta: { title: 'test', icon: 'link' }
      }
    ]
  }
]
