import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n);

const messages = {
    cn: {
        courseDesc: '课程介绍',
        home: '首页',
        message: {
            hello: '你好，世界'
        },
        welcome: '欢迎访问企业官网'
    },
    en: {
        courseDesc: 'Courses',
        home: 'Home',
        message: {
            hello: 'hello world'
        },
        welcome: 'Welcome to visit'
    }
}

const i18n = new VueI18n({
    locale: 'cn',
    fallbackLocale: 'cn',
    messages
})

export default i18n;