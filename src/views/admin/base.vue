<template>
    <div height="100%">
        <div class="layout-side">
            <ul>
                <li><router-link to="/admin">后台首页</router-link></li>
                <li><router-link to="/admin/setting">我的设置</router-link></li>
                <li><router-link to="/admin/info">我的信息</router-link></li>

                <li><router-link to="/admin/courses">课程内容管理</router-link></li>
                <li><router-link to="/admin/toturs">导师信息管理</router-link></li>
                <li><router-link to="/admin/articles">行业讯息发布</router-link></li>
                <li><router-link to="/admin/orders">预约信息管理</router-link></li>
            </ul>
        </div>
        <div class="layout-content">
            <header class="layout-header">
                <div class="container">
                    <div class="container">
                        <h1>EUI-vue 做最好的VUE UI</h1>
                        <li><router-link to="/">网站首页</router-link></li>
                        <button @click="loginout">退出登录</button>
                    </div>
                </div>
            </header>
            <div class="layout-body">
                <div class="container">
                    <div class="col-sm-12">
                        <h1>内容</h1>
                        <div>
                            <!--<Tag :message="121212" type="primary">asd</Tag>-->
                            <!--<Asd :message="121212" type="primary">asd</Asd>-->
                            <!--<Icon type="start"/>-->
                            <!--<Alert type="success">123</Alert>-->

                        </div>
                        <router-view></router-view>
                    </div>
                </div>
            </div>

            <footer class="layout-footer">
                <div class="container">

                    这是页脚
                    <div>我们强烈建议您<a href="#" @click="showNotification">开启浏览器通知</a></div>

                </div>
            </footer>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
//    import Tag from './components/tag'
//    import Asd from './components/asd'
    //import Tag from './components/icon'
    //import Icon from './components/icon/index.js'
//    import Alert from './components/Alert'
//    import Tab from './components/Alert'


//    Vue.use(Tag);
    //Vue.use(Asd);
    //Vue.use(Icon);
//    Vue.use(Alert);


    export default {
        data: function () {
            return {
                token: null,
                username: '',
                uid: '1231212',
                appKey: 'asd123456',
                editor: null
            }
        },
        methods: {
            loginout: function () {
                console.log('退出登录');
                localStorage.token = null;
                localStorage.username = '';

                this.$router.push('/login');

               // window.open('/login');
            },
            showNotification: function () {
                if (window.Notification) {
                    console.log('支持');
                    if (Notification.permission === "denied") {
                        alert('你已经禁用浏览器通知，请在浏览器中开启。');
                        return;
                    }
                    // 支持


                    Notification.requestPermission(function(status) {
                        var n = new Notification('通知标题', { body: '这里是通知内容！' });
                    });
                } else {
                    alert('你的浏览器不支持通知')
                    console.log('不支持');
                    // 不支持
                }
            },
            getEditorContent: function() {
                console.log(this.editor.getContent());
            }
        },
        components: {
//            Alert,
//            Asd,
//            Tab,
            //'Tag': Tag,
            //'Icon': Icon
        },
    }

    if(window.Notification && Notification.permission !== "denied") {

    }


</script>

<style scoped>
    html,body {
        height: 100%;
        overflow: hidden;
    }
    body {
        position: relative;
    }
    .layout-side {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 240px;
        padding: 16px;
        background-color: #f9f9f9;
        border-right: 1px solid #ccc;
    }
    .layout-header {
        height: 80px;
        background-color: #f00;
    }
    .layout-footer {
        height: 80px;
        background-color: #f90;
    }

    .layout-content {
        position: absolute;
        left: 240px;
        top: 0;
        bottom: 0;
        right: 0;
    }
</style>
