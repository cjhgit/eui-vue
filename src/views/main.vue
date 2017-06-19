<template>
    <div class="main">
        <header class="layout-header">
            <h1>欢迎访问企业官网</h1>
            <a href="/admin">登录</a>
        </header>
        <div class="layout-body">
            <h2>文章列表</h2>
            <li><router-link to="/articles/1">文章1</router-link></li>
            <li><router-link to="/articles/2">文章2</router-link></li>
        </div>
        <footer class="layout-footer">
            <a href="/about">关于我们</a>
            <a href="/contact">联系我们</a>
            <div>这是页脚</div>
        </footer>
    </div>
</template>

<script>
    export default {
        name: 'login',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
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
