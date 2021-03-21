import Vue from 'vue'
import App from './App.vue'
import { auth } from './firebase'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
