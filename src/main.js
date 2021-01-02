import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
// import jQuery from 'jquery'

axios.defaults.baseURL = 'http://localhost:5000/api'
// axios.defaults.baseURL = 'https://texxen-backend.herokuapp.com/api'
// axios.defaults.baseURL = process.env.VUE_APP_BASE_API || 'https://texxen-backend.herokuapp.com/api'
axios.defaults.headers.common.Authorization = localStorage.getItem('token')

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
  beforeCreate() {
    this.$store.commit('initializeStore')
  },
  render: h => h(App)
}).$mount('#app')
