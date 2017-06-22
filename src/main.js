
import App from './App'
import Vue from 'vue'


import router from './router/router.js'
import VueResource from 'vue-resource'
import VeeValidate from 'vee-validate'

//import auth from 'directives/auth'

// UI
import liangchuanUi from '@liangchuan/liangchuan-ui'
import { Message, Loading, Tree, Dropdown, DropdownMenu, DropdownItem } from 'element-ui'
//import vueModal from 'COMPONENT/vueModal'
//import './sass/main.scss'
//import './sass/test.scss'

// UEditor
import './assets/utf8-php/ueditor.config.js'
import './assets/utf8-php/ueditor.all.min.js'
import './assets/utf8-php/lang/zh-cn/zh-cn.js'
import './assets/utf8-php/ueditor.parse.min.js'

import dictionary from './i18n/dictionary'

import VueI18n from 'vue-i18n'
Vue.use(VueI18n);


Vue.use(VueResource);
Vue.use(liangchuanUi)
/*Vue.use(VeeValidate, {
    locale: 'cn',
    dictionary: {
        cn: { messages: dictionary }
    }
});*/




// 全局注册指令
//Vue.directive('auth', auth)




// 全局消息组件, copy自element
Vue.use(Loading.directive);
Vue.prototype.$loading = Loading.service;
Vue.prototype.$message = Message;



// 全局注册组件
import Tag from './components/tag';
Vue.component('Tag', Tag);

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


