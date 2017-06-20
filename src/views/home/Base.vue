<template>
    <div class="main">
        <header class="layout-header">
            <div class="container">
                <h1>欢迎访问企业官网</h1>
                <router-link to="/">首页</router-link>
                <router-link to="/articles">文章列表</router-link>
                <router-link to="/login">登录</router-link>
                <router-link to="/admin">后台管理</router-link>
            </div>
        </header>

        <router-view></router-view>

        <lc-footer></lc-footer>
    </div>
</template>

<script>
    import Footer from '@/components/lcFooter'

    export default {
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
        background-color: #f00;
    }
    .layout-footer {
        height: 80px;
        padding: 16px;
        color: #fff;
        background-color: #555;
    }
</style>
