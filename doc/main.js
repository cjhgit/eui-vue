import Vue from 'vue'
import App from './App'
import router from './router'
import ui from '../src/index'
import ui2 from './component/index'
import './scss/main.scss'

Vue.config.productionTip = false
Vue.use(ui)
Vue.use(ui2)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
