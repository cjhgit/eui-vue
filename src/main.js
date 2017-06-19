
import App from './App'
import Vue from 'vue'
//import Vuex from 'vuex'
import VueI18n from 'vue-i18n'
import router from './router/router.js'
import './assets/utf8-php/ueditor.config.js'
import './assets/utf8-php/ueditor.all.min.js'
import './assets/utf8-php/lang/zh-cn/zh-cn.js'
import './assets/utf8-php/ueditor.parse.min.js'

//Vue.use(vuex)
Vue.use(VueI18n)


const messages = {
    cn: {
        message: {
            hello: '你好，世界'
        }
    },
    en: {
        message: {
            hello: 'hello world'
        }
    },
    ja: {
        message: {
            hello: 'こんにちは、世界'
        }
    }
}

// Create VueI18n instance with options
const i18n = new VueI18n({
    locale: 'cn', // set locale
    messages, // set locale messages
})






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
    i18n,
    el: '#app',
    router,
    template: '<App/>',
    components: { App },
    methods: {
        nav: function () {
            alert('1');
        }
    }
})
