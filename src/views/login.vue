<template>
    <div class="wrap">
        <div class="container">
            <div class="row">
                <div class="col-sm-6">
                    <router-link to="/">返回首页</router-link>
                    <h1>登录</h1>
                    <!--<validator name="validation">
                        <input type="text" v-model='comment' id='comment' v-validate:comment="{ minlength: 3, maxlength: 15 }">
                        <div>
                            <span v-show="$validation.comment.minlength">不得少于3个字符</span>
                            <span v-show="$validation.comment.maxlength">不得大于15个字符</span>
                        </div>
                    </validator>-->

                    <vue-panel>
                            <vue-form>
                                <vue-form-item>
                                    <label slot="label">账号</label>
                                    <vue-vinput v-model="account"   :class="{'input': true, 'is-danger': errors.has('email') }" placeholder="账号"></vue-vinput>
                                    <!--<vue-vinput id="cell_phone" v-model="phone" placeholder="请输入手机号" v-validate="{rules:'required|cell_phone',scope:'phoneLogin'}" :msg="errors.first('phoneLogin.cell_phone')"></vue-vinput>
                                    -->
                                </vue-form-item>
                                <vue-form-item>
                                    <label slot="label">密码</label>
                                    <vue-vinput v-model="password" placeholder="密码"></vue-vinput>
                                    <a href="javascript:;" style="color: #b0afaf;margin-left: 5px;" tabindex="-1" @click="findPass">忘记密码?</a>
                                </vue-form-item>

                            </vue-form>

                            <!--<div>
                                <p v-if="$validation1.message.required">Required your message.</p>
                                <p v-if="$validation1.message.minlength">Too short message.</p>
                            </div>-->

                        <div slot="pfooter" class="login-footer">
                            <button class="btn btn-blue" @click="login">登录</button>
                            <a href="javascript:;" class="btn-register" @click="goRegister">注册>></a>
                        </div>
                    </vue-panel>


                    <div class="tip" v-if="tip">{{ tip }}</div>
                </div>
            </div>

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
                account: '18588466637',
                password: '123456',
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
        beforeDestroy () {
            document.removeEventListener('keydown', this.handlerEnter);
        },
        methods: {
            login: function () {
                if (!this.account) {
                    this.tip = '请输入手机号'
                    return;
                }
                if (!this.password) {
                    this.tip = '请输入密码（密码：123）'
                    return;
                }

                /*if (this.password !== '123') {
                    this.tip = '密码错误（密码：123）'
                    return;
                }*/

                //this.tip = '登录成功'

                this.$http.post(domainUrl + '/admin/login', {
                    phone: this.account,
                    password: this.password
//                    phone: '18588466637',
//                    password: '123456'
                }, {
                    //method: 'POST',
                    //url: domainUrl + '/admin/login',
                    /*data:{

                    },*/
                   /* headers: {
                        "X-Requested-With": "XMLHttpRequest"
                    },*/
                    emulateJSON: true
                }).then(function(response) {
                    var body = response.body;
                    localStorage.mytoken = body.token;
                    localStorage.username = body.name;
                    this.$router.push('/cn/admin');

                    console.log(response.body);
                }, function(response){
                    this.tip = '手机号或密码错误'
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
        position: relative;
        width: 100%;
        height: 100%;
        min-height: 678px;
        text-align: center;
        background-color: #2974b5;
        background: url(/dist/41a0498bb2971d4386468304d9002514.png) no-repeat #2974b5;
        background-position: 50% 250px;
    }
</style>
