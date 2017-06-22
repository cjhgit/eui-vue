import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n);

const messages = {
    cn: {
        home: '首页',
        message: {
            hello: '你好，世界'
        },
        welcome: '欢迎访问企业官网'
    },
    en: {
        home: 'Home',
        message: {
            hello: 'hello world'
        },
        welcome: 'Welcome to visit'
    }
}

// Create VueI18n instance with options
const i18n = new VueI18n({
    locale: 'cn', // set locale
    messages, // set locale messages
})

export default i18n;