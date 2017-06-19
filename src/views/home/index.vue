<template>
    <div class="main">
        <header class="layout-header">
            <h1>欢迎访问企业官网</h1>
            <a href="/login">登录</a>
            <a href="/admin">后台管理</a>
        </header>
        <div class="layout-body">
            <h2>文章列表</h2>
            <li><router-link to="/articles/1">文章1</router-link></li>
            <li><router-link to="/articles/2">文章2</router-link></li>
        </div>
        <lc-footer></lc-footer>
    </div>
</template>

<script>
    import Footer from '@/components/lcFooter'

    export default {
        name: 'login',
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
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
