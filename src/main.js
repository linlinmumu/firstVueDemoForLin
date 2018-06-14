// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import store from './vuex/store'
import router from './router'
import axios from 'axios'

import SvgIcon from '@/components/SvgIcon'// svg组件
Vue.component('svg-icon', SvgIcon)

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.prototype.$ajax = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
