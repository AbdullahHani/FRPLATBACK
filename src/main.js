import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import jQuery from 'jquery'

import PortalVue from 'portal-vue'

Vue.use(PortalVue)

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap'

// global.jQuery = jQuery

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import './custom.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
