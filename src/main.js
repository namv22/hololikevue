import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMaterial from 'vue-material'
import { MdTabs } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import VueFacebookPage from 'vue-facebook-page'
import VueYoutube from 'vue-youtube'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import _ from 'lodash'

Vue.use(VueMaterial);
Vue.use(MdTabs);

Vue.use(Vuetify);

// The plugin is loaded here.
// You have to pass your FB app Id as a second parameter

Vue.use(VueFacebookPage, 219660669313598)

// The plugin to use youtube iframe
Vue.use(VueYoutube)

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  Vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')
