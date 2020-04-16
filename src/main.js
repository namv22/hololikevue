import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import VueFacebookPage from 'vue-facebook-page'
import VueYoutube from 'vue-youtube'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueMaterial)

// The plugin is loaded here.
// You have to pass your FB app Id as a second parameter
 
Vue.use(VueFacebookPage, 219660669313598)

// The plugin to use youtube iframe
Vue.use(VueYoutube)

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
