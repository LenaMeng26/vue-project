import Vue from 'vue'
import App from './layouts/App.vue'



import router from './plugins/router'

import './assets/css/base.css'
import './assets/css/index.css'
import './assets/js/font.js'

import './plugins/vant'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
