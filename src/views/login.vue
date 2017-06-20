<template>
    <div class="layout-body">
        <div class="container">
            <div class="row">
                <div class="col-sm-6">
                    <router-link to="/">返回首页</router-link>
                    <h1>登录</h1>
                    <input class="form-control" v-model="account" placeholder="账号">
                    <input class="form-control" v-model="password" placeholder="密码">
                    <button class="btn btn-primary" @click="login">登录</button>
                    <div class="tip" v-if="tip">{{ tip }}</div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'login',
        data () {
            return {
                account: '',
                password: '',
                tip: ''
            }
        },
        methods: {
            login: function () {
                if (!this.password) {
                    this.tip = '请输入密码（密码：123）'
                    return;
                }

                if (this.password !== '123') {
                    this.tip = '密码错误（密码：123）'
                    return;
                }

                this.tip = '登录成功'

                localStorage.token = '123456';
                localStorage.username = '陈建杭';
                this.$router.push('/admin');
            }
        }
    }
</script>

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
