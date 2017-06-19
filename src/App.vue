<template>
    <div id="app">
        <div class="layout-side">
            <h2>导航</h2>
            <ul>
                {{ $t("message.hello") }}
                <li><router-link to="/home">首页</router-link></li>
                <li><router-link to="/home/setting">我的设置</router-link></li>
                <li><router-link to="/home/info">我的信息</router-link></li>

                <hr>
                <li><router-link to="/">首页</router-link></li>
                <li><router-link to="/asd">测试404</router-link></li>
                <li><a href="/login">登陆a</a> </li>
                <li><router-link to="/login">登陆页面</router-link></li>
                <li><router-link to="/foo">Go to Foo</router-link></li>
                <li><router-link to="/bar">Go to Bar</router-link></li>
                <li><router-link to="/about">关于</router-link></li>
                <li><router-link to="/test">测试</router-link></li>
                <li><router-link to="/user/1">用户1</router-link></li>
                <li><router-link to="/user/2/">用户2</router-link></li>
                <li><router-link to="/user/1/profile">用户1信息</router-link></li>
                <li><router-link to="/user/1/posts">用户1文章</router-link></li>
                <li><router-link to="/components/button">按钮</router-link></li>
                <li><router-link to="/components/aside">Aside（侧栏）</router-link></li>
            </ul>
        </div>
        <div class="layout-content">
            <header class="layout-header">
                <div class="container">
                    <div class="container">
                        <h1>EUI-vue 做最好的VUE UI</h1>

                        <button @click="loginout">退出登录</button>
                    </div>
                </div>
            </header>
            <div class="layout-body">
                <div class="container">
                    <div class="col-sm-4">

                    </div>
                    <div class="col-sm-8">
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
            <script id="editor" type="text/plain"></script>
            <footer class="layout-footer">
                <div class="container">
                    <div @click="getEditorContent">获取编辑器内容</div>
                    这是页脚
                    <div>我们强烈建议您<a href="#" @click="showNotification">开启浏览器通知</a></div>

                </div>
            </footer>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Tag from './components/tag'
    import Asd from './components/asd'
    //import Tag from './components/icon'
    //import Icon from './components/icon/index.js'
    import Alert from './components/Alert'
    import Tab from './components/Alert'


    Vue.use(Tag);
    Vue.use(Asd);
    //Vue.use(Icon);
    Vue.use(Alert);


    export default {
        name: 'app',
        data: function () {
            return {
                editor: null
            }
        },
        mounted: function () {
//            this.editor = UE.getEditor('editor');
        },
        destroyed: function () {
//            this.editor.destroy();
        },
        methods: {
            loginout: function () {
                console.log('退出登录');
                localStorage.token = null;
                localStorage.username = '';

                this.$router.push('/login');

                window.open('/login');
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
           Alert,
            Asd,
            Tab,
            //'Tag': Tag,
            //'Icon': Icon
        },
    }




    if(window.Notification && Notification.permission !== "denied") {

    }


</script>

<style>

</style>
