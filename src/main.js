import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import VueFacebookPage from 'vue-facebook-page'

Vue.use(VueMaterial)

// The plugin is loaded here.
// You have to pass your FB app Id as a second parameter
 
Vue.use(VueFacebookPage, 219660669313598)

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
