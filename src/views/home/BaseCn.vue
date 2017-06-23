<template>
    <div class="main">
        <header id="app2" class="layout-header">
            <div class="container">
                <h1><router-link to="/">首页</router-link> | <a href="#" @click="changeLanguage('cn')">中文</a> | <a href="#" @click="changeLanguage('en')">English</a> </h1>
                <h1>{{ $t("welcome") }}</h1>
                <router-link :to="routeUrl">{{ $t('home') }}</router-link>
                <router-link :to="routeUrl + '/courses'">课程介绍</router-link>
                <router-link :to="routeUrl + '/toturs'">导师介绍</router-link>
                <router-link :to="routeUrl + '/playground'">场地展示</router-link>
                <router-link :to="routeUrl + '/order'">预约评估</router-link>
                <router-link :to="routeUrl + '/articles'">行业资讯</router-link>
                <router-link :to="routeUrl + '/contact'">联系我们</router-link>

                <router-link to="/login">登录</router-link>
                <router-link to="/admin">后台管理</router-link>
            </div>
        </header>

        <router-view></router-view>

        <lc-footer></lc-footer>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Footer from '@/components/lcFooter'
    import i18n from '@/i18n'

    console.log(i18n.locale)



    export default {
        i18n,
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        mounted: function () {
            i18n.locale = this.$route.params.lang;
                console.log('挂债')
        },
        computed: {
            routeUrl () {
                //return '/' + this.$root.lang
                //return '/cn';
//                return '/' + this.$i18n.locale;
                console.log(this.$router)

                return '/' + this.$route.params.lang;
            }
        },
        components: {
            'lc-footer': Footer
        },
        methods: {
            login: function () {
                alert('登录成功');
                localStorage.token = '123456';
                localStorage.username = '陈建杭';

                //location.href = '/home';
//                this.$router.push('/home');
            },
            changeLanguage: function (lang) {
                console.log(location.href);
                location.href = location.href.replace(/en|cn/, lang);
                //this.$router.replace();
            }
        }
    }

    localStorage.token = null;
</script>

<style scoped>
    .layout-header {
        height: 80px;
        background-color: #fff;
        border-bottom: 1px solid #ccc;
    }
    .layout-footer {
        height: 80px;
        padding: 16px;
        color: #fff;
        background-color: #555;
    }
</style>
