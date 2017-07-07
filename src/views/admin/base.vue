<template>
    <div height="100%">
        <div class="layout-side">
            <div class="logo-box">
                <img class="logo" src="/static/img/logo-purple.png">
                <h1 class="title">后台管理系统</h1>
            </div>
            <ul class="sidenav-list">
               <!-- <li><router-link to="/cn/admin">后台首页</router-link></li>
                <li><router-link to="/admin/setting">我的设置</router-link></li>
                <li><router-link to="/admin/info">我的信息</router-link></li>-->
                <li>
                    <span class="title"><i class="icon icon-app"></i> 管理</span>
                    <ul>
                        <li :class="{active: isActive('courses') }"><router-link :to="routeUrl + '/courses'">课程管理</router-link></li>
                        <li :class="{active: isActive('tutors') }"><router-link :to="routeUrl + '/tutors'">导师信息管理</router-link></li>
                        <li :class="{active: isActive('orders') }"><router-link :to="routeUrl + '/orders'">预约信息管理</router-link></li>
                    </ul>
                </li>
                <li>
                    <span class="title"><i class="icon icon-app"></i> 行业信息管理</span>
                    <ul>
                        <li :class="{active: isActive('resources') }"><router-link :to="routeUrl + '/resources'">素材管理</router-link></li>
                        <li :class="{active: isActive('articles') }"><router-link to="/cn/admin/articles">文章管理</router-link></li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="layout-content">
            <header class="layout-header">
                <div class="container">
                    <div class="lang-box">
                        <a :class="{active: isChinese}" href="#" @click="changeLanguage('cn')">中文</a>/<a :class="{active: isEnglish}" href="#" @click="changeLanguage('en')">English</a>
                    </div>
                    <div class="right-nav">
                        <a href="#">账号</a> | <a href="#"  @click="loginout">退出</a>
                    </div>
                </div>
            </header>
            <router-view></router-view>
            <!--<footer class="layout-footer">
                <div class="container">

                    这是页脚
                    <div>我们强烈建议您<a href="#" @click="showNotification">开启浏览器通知</a></div>

                </div>
            </footer>-->
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'

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
        computed: {
            routeUrl () {
                return '/' + this.$route.params.lang + '/admin';
            },
            isChinese() {
                return this.$route.params.lang === 'cn';
            },
            isEnglish() {
                return this.$route.params.lang === 'en';
            }
        },
        methods: {
            isActive(url) {
                console.log(location.pathname);
                //return true;
                if (url) {
                    return location.pathname === ('/' + this.$route.params.lang + '/admin/' + url)
                } else {
                    return location.pathname === ('/' + this.$route.params.lang + '/admin')
                }
            },
            loginout: function () {
                localStorage.mytoken = '';
                localStorage.username = '';

                this.$router.push('/login');
            },
            changeLanguage(lang) {
                console.log(location.href);
                location.href = location.href.replace(/en|cn/, lang);
                //this.$router.replace();
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
        }
    }

    if(window.Notification && Notification.permission !== "denied") {

    }

    console.log('后台权限', localStorage.token)


</script>

<style>
    html,body {
        height: 100%;
        overflow: hidden;
    }
    body {
        position: relative;
    }
    .layout-body {
        position: absolute;
        top: 66px;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        overflow: auto;
    }
    .layout-footer-btn {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 24px;
        border-top: 1px solid #ccc;
    }
    .layout-footer-btn .btn {
        float: right;
        margin-left: 32px;
    }
    .container {
        width: 100%;
        padding-right: 40px;
        padding-left: 40px;
    }
    /**/
    .admin-nav {
        padding: 16px 0;
        overflow: hidden;
    }
    .admin-nav.border-bottom {
        border-bottom: 1px solid #ccc;
    }
    .admin-nav .bread-nav {
        float: left;
        min-width: 300px;
        border-bottom: none;
        font-size: 18px;
        padding: 0;
        margin-bottom: 0;
    }
    .admin-nav .bread-nav .breadcrumb {
        padding: 0 0;
        margin-bottom: 0;
    }
    .admin-nav .bread-nav .breadcrumb a {
        color: #999;
    }
    .admin-nav .bread-nav .breadcrumb .active {
        color: #333;
    }
    .admin-nav .btn {
        float: right;
    }
        /**/
    .layout-side {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 200px;
        border-right: 1px solid #ccc;
    }
    .sidenav-list {

    }
    .sidenav-list .title {
        display: block;
        padding: 8px 16px 8px 32px;
        color: #999;
        border-top: 1px solid #ccc;
    }
    .sidenav-list > li {

    }
    .sidenav-list > li ul {

    }
    .sidenav-list > li ul li {
    }
    .sidenav-list .active a {
        color: #fff;
        background-color: #A9517A;
    }
    .sidenav-list > li ul a {
        display: block;
        padding: 8px 16px 8px 56px;
        color: #333;
        font-size: 16px;
    }
    .sidenav-list > li ul a:hover {
        color: #fff;
        background-color: #ca7c8a;
    }
    /**/
    .logo-box {
        padding: 8px;
        /*border-bottom: 1px solid #ccc;*/
    }
    .logo-box .logo {
        display: block;
        width: 80px;
        margin: 0 auto;
    }
    .logo-box .title {
        text-align: center;
    }
    /**/
    .layout-header {
        height: 64px;
        padding-top: 20px;
        border-bottom: 1px solid #ccc;
    }
    .right-nav {
        float: right;
    }
    .right-nav a {
        color: #666;
    }
    .layout-footer {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 80px;
        border-top: 1px solid #ccc;
    }

    .layout-content {
        position: absolute;
        left: 200px;
        top: 0;
        bottom: 0;
        right: 0;
    }

    /**/
    .bread-nav .breadcrumb {
        padding: 16px 0;
        background-color: transparent;
    }
    .bread-nav .breadcrumb li a {
        color: #666;
    }
    .bread-nav {
        padding: 0 16px;
        /*overflow: hidden;*/
        border-bottom: 1px solid #ccc;
    }
    .bread-nav .icon-back {
        float: left;
        padding-top: 4px;
        margin-right: 8px;
        font-size: 20px;
    }
    .bread-nav .bread-list {
        float: left;
        margin-bottom: 16px;
    }
    .bread-nav .bread-item {
        float: left;
        margin-right: 16px;
    }
    .bread-nav .bread-item.active {
        color: #000 !important;
    }
    .bread-nav > li + li:before {
        padding: 0 5px;
        color: #ccc;
        content: "/\00a0";
    }
    /**/
    .lang-box {
        position: relative;
        left: -8px;
        float: left;
        color: #666;
    }
    .lang-box a {
        margin: 0 8px;
        color: #666;
    }
    .lang-box .active {
        color: #A9517A;
        border-bottom: 1px solid #A9517A;
    }

    /**/
    .admin-tab {
        margin-bottom: 12px;
    }
    .admin-tab .tab-item {
        padding: 8px 0;
        margin-right: 16px;
        color: #333;
        font-size: 18px;
    }
    .admin-tab .tab-item.active {
        border-bottom: 2px solid #A9517A;
    }


    /**/
    .admin-form {
        padding: 16px 0;
    }
    .form-horizontal .control-label {
        text-align: left;
    }

</style>
