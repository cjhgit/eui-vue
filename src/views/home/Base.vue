<template>
    <div class="main">
        <header id="app2" class="layout-header">
            <div class="container">
                <h1>{{ $t("welcome") }}</h1>
                <router-link to="/">{{ $t('home') }}</router-link>
                <router-link to="/courses">课程介绍</router-link>
                <router-link to="/toturs">导师介绍</router-link>
                <router-link to="/playground">场地展示</router-link>
                <router-link to="/order">预约评估</router-link>
                <router-link to="/articles">行业资讯</router-link>
                <router-link to="/contact">联系我们</router-link>

                <router-link to="/login">登录</router-link>
                <router-link to="/admin">后台管理</router-link>
                <p>{{ $t("message.hello") }}</p>
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


    export default {
        i18n,
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
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
