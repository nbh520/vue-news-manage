// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Cookies from 'js-cookie'
import Element from 'element-ui'
import App from './App'
// import store from './store'
import router from './router'


import './icons'
import './errorLog'
import './permission'

Vue.config.productionTip = false

Vue.use(Element, {
  size: Cookies.get('size') || 'medium'
  /* eslint-disable */
  // i18n: (key, value) => i18n.t(key, value)
  /* eslint-enable */
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  // store,
  template: '<App/>'
})
