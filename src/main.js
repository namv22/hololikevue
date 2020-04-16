import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import VueFacebookPage from 'vue-facebook-page'
import VueYoutube from 'vue-youtube'

Vue.use(VueMaterial)

// The plugin is loaded here.
// You have to pass your FB app Id as a second parameter
 
Vue.use(VueFacebookPage, 219660669313598)

// The plugin to use youtube iframe
Vue.use(VueYoutube)

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
