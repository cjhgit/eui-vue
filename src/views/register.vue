<template>
    <div class="wrap">
        <div class="container">
            <div class="register-box">
                <h1 class="register-title">注册</h1>
                <div class="form-horizontal">
                    <div class="form-group">
                        <!--<label class="control-label col-sm-3">账号：</label>-->
                        <div class="col-sm-12">
                            <input v-model="name" v-validate="'required'" :class="{'form-control': true, 'is-danger': errors.has('name') }" name="name" placeholder="用户名">
                            <div v-show="errors.has('name')" class="help-block is-danger">{{ errors.first('name') }}</div>
                        </div>
                    </div>
                    <div class="form-group">
                        <!--<label class="control-label col-sm-3">账号：</label>-->
                        <div class="col-sm-12">
                            <input v-model="phone" v-validate="'required'" :class="{'form-control': true, 'is-danger': errors.has('phone') }" name="phone" placeholder="手机号">
                            <div v-show="errors.has('phone')" class="help-block is-danger">{{ errors.first('phone') }}</div>
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
                        <button class="btn btn-blue" @click="register">注册</button>
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
                name: 'superstar',
                phone: '18588466637',
                password: '123456',
                tip: ''
            }
        },
        mounted: function () {
            document.addEventListener('keydown', this.handlerEnter)
        },
        methods: {
            register: function () {
                if (!this.name) {
                    this.tip = '请输入用户名'
                    return;
                }
                if (!this.phone) {
                    this.tip = '请输入手机号'
                    return;
                }
                if (!this.password) {
                    this.tip = '请输入密码'
                    return;
                }

                /*if (this.password !== '123') {
                    this.tip = '密码错误（密码：123）'
                    return;
                }*/

                //this.tip = '登录成功'

                this.$http.post(domainUrl + '/admin/initSuper', {
                    name: this.name,
                    phone: this.phone,
                    password: this.password
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'ass': 'asas'
                    },
                    //emulateJSON: true
                }).then(response => {
                    var body = response.body;
                    console.log(response.body);

                    if (body.code) {
                        this.tip = body.msg
                    }
                    /*localStorage.mytoken = body.token;
                    localStorage.username = body.name;
                    this.$router.push('/cn/admin');*/
                }, response => {
                    var body = response.body;
                    console.log(12)
                    if (body.code) {
                        this.tip = body.msg
                    }
                    // 响应错误回调
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
    .register-box {
        width: 400px;
        padding: 16px 32px;
        margin: 160px auto;
        background-color: #fff;
        border-radius: 4px;
    }
    .register-box .register-title {
        margin-bottom: 16px;
        font-size: 18px;
    }
    .bg-img {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
    }
</style>
