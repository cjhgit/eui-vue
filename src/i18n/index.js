import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n);

const messages = {
    //cn: {},
    cn: {
        siteName: '紫然肌',
        about: '关于紫然肌',
        pilates: '什么是普拉提？',

        home: '首页',
        message: {
            hello: '你好，世界'
        },
        welcome: '欢迎访问企业官网',

        // 首页
        qrcode: '客服号二维码',
        contactPhone: '联系电话',
        address: '地址',

        // 导师模块
        tutorDesc: '导师介绍',

        // 课程模块
        courseDesc: '课程介绍',
        allCourse: '所有课程',
        detail: '更多详情',

        news: '行业资讯',

        playground: '场地展示',

        order: '预约评估',
        name: '姓名',
        sex: '性别',
        phone: '电话号码',
        email: '电子邮箱',
        orderTime: '预约时间',
        submit: '提交',
        male: '男',
        female: '女',

        contactUs: '联系我们'
    },
    en: {
        courseDesc: 'Courses',
        home: 'Home',
        message: {
            hello: 'hello world'
        },
        welcome: 'Welcome to visit',
        // 导师模块
        tutorDesc: 'Tutors Introdution',

        // 课程模块
        courseDesc: 'Courses',
    }
}

const i18n = new VueI18n({
    locale: 'cn',
    fallbackLocale: 'cn',
    messages
})

export default i18n;