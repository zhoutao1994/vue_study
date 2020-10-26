import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
// import Vuex from 'vuex'

Vue.config.productionTip = false

new Vue({
  router,
  // store: Vuex,
  render: h => h(App),
}).$mount('#app')
