<template>
    <div class="main">
        <header id="app2" class="layout-header">
            <div class="container">
                <h1>欢迎访问企业官网</h1>
                <router-link to="/">首页</router-link>
                <router-link to="/articles">文章列表</router-link>
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

    import VueI18n from 'vue-i18n'
    Vue.use(VueI18n);

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

    //new Vue({ i18n }).$mount('#app2')

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
        background-color: #f00;
    }
    .layout-footer {
        height: 80px;
        padding: 16px;
        color: #fff;
        background-color: #555;
    }
</style>
