<template>
    <div class="main">
        <h1>登录</h1>
        <input class="form-control" placeholder="账号">
        <input class="form-control" placeholder="密码">
        <button class="btn btn-primary" @click="login">登录</button>
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

                this.$router.push('/home');
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
