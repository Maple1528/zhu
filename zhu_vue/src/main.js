import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/font/font.css'

Vue.config.productionTip = false

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(r => r.meta.requireAuth)) {
//     if (store.state.token) {
//       next()
//     } else {
//       next({
//         path: '/login',
//         query: {
//           redirect: to.fullPath
//         }
//       })
//     }
//   } else {
//     next()
//   }
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
