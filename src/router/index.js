import Vue from 'vue'
import App from '@/App'
import Router from 'vue-router'
import login from '@/views/login/index'
import layout from '@/views/layout/layout'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: App,
      children: [
        {
          path: '/login',
          component: login
        },
        {
          path: '/layout',
          component: layout
        }
      ]
    }
  ]
})
