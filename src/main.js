import Vue from 'vue'
import App from './App.vue'
import { auth } from './firebase'
import router from './router'

Vue.config.productionTip = false

let app
auth.onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }
})
