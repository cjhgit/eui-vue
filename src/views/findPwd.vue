<template>
    <div class="wrap">
        <div class="container">
            <div class="login-box">
                <h1 class="login-title">登录</h1>
                <div class="form-horizontal">
                    <div class="form-group">
                        <div class="col-sm-7">
                            <input v-model="phone" v-validate="'required'" :class="{'form-control': true, 'is-danger': errors.has('phone') }" name="phone" placeholder="手机号">
                            <div v-show="errors.has('phone')" class="help-block is-danger">{{ errors.first('phone') }}</div>
                            <div class="help-block is-danger" v-if="phoneTip">{{ phoneTip }}</div>
                        </div>
                        <div class="col-sm-5">
                            <button class="btn btn-default" @click="send">获取验证码</button>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-12">
                            <input v-model="code" v-validate="'required'" :class="{'form-control': true, 'is-danger': errors.has('code') }" name="code" placeholder="验证码">
                            <div v-show="errors.has('code')" class="help-block is-danger">{{ errors.first('code') }}</div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-12">
                            <input v-model="password" v-validate="'required'" :class="{'form-control': true, 'is-danger': errors.has('password') }" name="password" placeholder="新密码">
                            <div v-show="errors.has('password')" class="help-block is-danger">{{ errors.first('password') }}</div>
                        </div>

                    </div>
                    <div class="form-group">
                        <button class="btn btn-primary" @click="reset">重置密码</button>
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
                phone: '',
                code: '',
                password: '',

                phoneTip: '',
                tip: ''
            }
        },
        mounted: function () {
            document.addEventListener('keydown', this.handlerEnter)

            this.$http.get(domainUrl + '/admin/existSuper', {
            }).then(function(response) {
                if (!response.body) {
                    this.$router.push('/register');
                }
            });
        },
        methods: {
            send() {
                this.phoneTip = ''
                if (!this.phone) {
                    this.phoneTip = '手机号不能为空'
                    return
                }

                this.$http.get(domainUrl + '/admin/sendMsgCode?phone=' + this.phone).then(response => {
                    console.log('1212');
                }, response => {
                    this.tip = response.body.msg
                })
            },
            reset() {
                this.$validator.validateAll().then(() => {
                    this.$http.post(domainUrl + '/admin/resetPassword', {
                        phone: this.phone,
                        code: this.code,
                        password: this.password
//                    phone: '18588466637',
//                    password: '123456'
                    }, {
                        emulateJSON: true
                    }).then(response => {
                        this.tip = '重置密码成功'
                        let _this = this
                        setTimeout(function () {
                            _this.$router.push('/login')
                        }, 500)
                        /*
                        var body = response.body
                        localStorage.mytoken = body.token
                        localStorage.user = body
                        localStorage.username = body.name
                        localStorage.authority = body.authority
                        localStorage.id = body.id
                        this.$router.push('/cn/admin')

                        console.log(body);*/
                    }, response => {
                        this.tip = response.body.msg
                    })
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
</style>
