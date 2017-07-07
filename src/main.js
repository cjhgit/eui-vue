
import App from './App'
import Vue from 'vue'

import router from './router/router.js'
import VueResource from 'vue-resource'
import VeeValidate from 'vee-validate'

import auth from './directives/auth'

import './validators/validators'

// UI
import liangchuanUi from '@liangchuan/liangchuan-ui'
import { Message, Loading, Tree, Dropdown, DropdownMenu, DropdownItem } from 'element-ui'
//import vueModal from 'COMPONENT/vueModal'
//import './sass/main.scss'
//import './sass/test.scss'

import liangchuanUi2 from './components'

// UEditor
import './assets/utf8-jsp/ueditor.config.js'
import './assets/utf8-jsp/ueditor.all.min.js'
import './assets/utf8-jsp/lang/zh-cn/zh-cn.js'
import './assets/utf8-jsp/ueditor.parse.min.js'

import dictionary from './i18n/dictionary'

import VueI18n from 'vue-i18n'

import { VTooltip } from 'v-tooltip'

Vue.use(VueI18n);
Vue.use(VueResource);
Vue.use(liangchuanUi);
Vue.use(liangchuanUi2);

Vue.use(VeeValidate, {
    locale: 'zh_CN',
    dictionary: {
        'zh_CN': { messages: dictionary }
    }
});

Vue.directive('auth', auth)
Vue.directive('tooltip', VTooltip)

// 全局消息组件, copy自element
Vue.use(Loading.directive);
Vue.prototype.$loading = Loading.service;
Vue.prototype.$message = Message;

// 全局注册组件
const Home = { template: '<p>home page</p>' }
const About = { template: '<p>about page</p>' }
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }




//Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({

    el: '#app',
    router,
    template: '<App/>',
    components: { App },
    methods: {
        nav: function () {
            alert('1');
        },

    }
})


