<template>
    <div class="wrap">
        <div class="container">
            <div class="row">
                <div class="col-sm-6">
                    <router-link to="/">返回首页</router-link>
                    <h1>登录</h1>
                    <vue-panel>
                        <vue-form>
                            <vue-form-item>
                                <label slot="label">账号</label>
                                <vue-vinput v-model="account" :class="{'input': true, 'is-danger': errors.has('email') }" placeholder="账号"></vue-vinput>
                                <!--<vue-vinput id="cell_phone" v-model="phone" placeholder="请输入手机号" v-validate="{rules:'required|cell_phone',scope:'phoneLogin'}" :msg="errors.first('phoneLogin.cell_phone')"></vue-vinput>
                                -->
                            </vue-form-item>
                            <vue-form-item>
                                <label slot="label">密码</label>
                                <vue-vinput v-model="password" placeholder="密码"></vue-vinput>
                                <a href="javascript:;" style="color: #b0afaf;margin-left: 5px;" tabindex="-1" @click="findPass">忘记密码?</a>
                            </vue-form-item>

                        </vue-form>
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
