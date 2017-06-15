// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

const Home = { template: '<p>home page</p>' }
const About = { template: '<p>about page</p>' }
const routes = {
    '/': Home,
    '/about': About
}
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
