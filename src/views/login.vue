<template>
    <div class="wrap">
        <div class="container">
            <div class="login-box">
                <h1 class="login-title">登录</h1>
                <div class="form-horizontal">
                    <div class="form-group">
                        <!--<label class="control-label col-sm-3">账号：</label>-->
                        <div class="col-sm-12">
                            <input v-model="account" v-validate="'required'" :class="{'form-control': true, 'is-danger': errors.has('account') }" name="name" placeholder="输入手机号">
                            <div v-show="errors.has('account')" class="help-block is-danger">{{ errors.first('account') }}</div>
                        </div>
                    </div>
                    <div class="form-group">
                        <!--<label class="control-label col-sm-3">密码：</label>-->
                        <div class="col-sm-12">
                            <input v-model="password" v-validate="'required'" :class="{'form-control': true, 'is-danger': errors.has('password') }" name="name" placeholder="密码">
                            <div v-show="errors.has('password')" class="help-block is-danger">{{ errors.first('password') }}</div>
                        </div>
                    </div>
                    <div class="form-group">
                        <router-link class="find-pwd" :to="'/find_password'">找回密码</router-link>
                    </div>
                    <div class="form-group">
                        <button class="btn btn-primary" @click="login">登录</button>
                    </div>
                </div>

                <div class="tip" v-if="tip">{{ tip }}</div>
            </div>
            <img class="bg-img" src="/static/img/bg-bottom.png">
        </div>
    </div>
</template>

<script>
    import {domainUrl} from 'CONFIG/config'

    console.log(domainUrl)

    export default {
        name: 'login',
        data () {
            return {
                comment: '',
                msg: '',
                account: '18588466638',
                password: '123456',
                tip: ''
            }
        },
        computed: {
            routeUrl () {
                return '/' + this.$route.params.lang + '/home';
            },
        },
        mounted() {
            document.addEventListener('keydown', this.handlerEnter)

            this.$http.get(domainUrl + '/admin/existSuper', {
            }).then(function(response) {
                if (!response.body) {
                    this.$router.push('/register');
                }
            });
        },
        methods: {
            login() {
                this.$validator.validateAll().then(() => {
                    this.$http.post(domainUrl + '/admin/login', {
                        phone: this.account,
                        password: this.password
//                    phone: '18588466637',
//                    password: '123456'
                    }, {
                        emulateJSON: true
                    }).then(function(response) {
                        var body = response.body
                        localStorage.mytoken = body.token
                        localStorage.user = body
                        localStorage.username = body.name
                        localStorage.authority = body.authority
                        localStorage.id = body.id
                        this.$router.push('/cn/admin')

                        console.log(body);
                    }, function(response){
                        this.tip = response.body.msg
                    });
                }).catch(() => {
                    // eslint-disable-next-line
                });
            },
            handlerEnter (e) {
                e = e || event;
                if (e.keyCode === 13) {
                    this.login();
                }
            },
            findPass() {

            },
            goRegister() {

            }
        }
    }
</script>

<style scoped>
    html,
    body {
        width: 100%;
        height: 100%;
    }
    .wrap {
        position: absolute;
        width: 100%;
        height: 100%;
        text-align: center;
        background-color: #2974b5;
    }
    .login-box {
        width: 400px;
        padding: 16px 32px;
        margin: 160px auto;
        background-color: #fff;
        border-radius: 4px;
    }
    .login-box .login-title {
        margin-bottom: 16px;
        font-size: 18px;
    }
    .bg-img {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
    }
    .find-pwd {
        float: right;
        margin-top: 8px;
        margin-right: 16px;
    }
</style>
