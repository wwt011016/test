import axios from 'axios'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.prototype.axios = axios
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: (h) => h(App),
  beforeCreate () {
    // 挂载全局总线程
    Vue.prototype.$bus = this
  }
}).$mount('#app')
