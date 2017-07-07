<template>
    <div class="main">
        <header id="app2" class="layout-header">
            <div class="container">
                <img class="logo" src="/static/img/logo.png" :alt="$t('siteName')">
                <ul class="header-nav-list">
                    <li :class="{active: isActive('') }"><router-link :to="routeUrl">{{ $t('home') }}</router-link></li>
                    <li :class="{active: isActive('courses') }">
                        <router-link :to="routeUrl + '/courses'">{{ $t('courseDesc') }}</router-link>
                        <ul>
                            <li><router-link :to="routeUrl + '/courses'">{{ $t('allCourse') }}</router-link></li>
                            <li><router-link :to="routeUrl + '/pilates'">{{ $t('pilates') }}</router-link></li>
                            <li><router-link :to="routeUrl + '/about'">{{ $t('about') }}</router-link></li>
                        </ul>
                    </li>
                    <li :class="{active: isActive('tutors') }"><router-link :to="routeUrl + '/tutors'">{{ $t('tutorDesc') }}</router-link></li>
                    <li :class="{active: isActive('playground') }"><router-link :to="routeUrl + '/playground'">{{ $t('playground') }}</router-link></li>
                    <li :class="{active: isActive('order') }"><router-link :to="routeUrl + '/order'">{{ $t('order') }}</router-link></li>
                    <li :class="{active: isActive('articles') }"><router-link :to="routeUrl + '/articles'">{{ $t('news') }}</router-link></li>
                    <li :class="{active: isActive('contact') }"><router-link :to="routeUrl + '/contact'">{{ $t('contactUs') }}</router-link></li>
                </ul>
                <div class="lang-box">
                    <a :class="{active: isChinese}" href="#" @click="changeLanguage('cn')">中文</a>/<a :class="{active: isEnglish}" href="#" @click="changeLanguage('en')">English</a>
                </div>
            </div>
        </header>

        <router-view></router-view>

        <footer class="layout-footer">
            <div class="container">
                <ul class="footer-nav-list">
                    <li><router-link :to="routeUrl">{{ $t('home') }}</router-link></li>
                    <li><router-link :to="routeUrl + '/courses'">{{ $t('courseDesc') }}</router-link></li>
                    <li><router-link :to="routeUrl + '/tutors'">{{ $t('tutorDesc') }}</router-link></li>
                    <li><router-link :to="routeUrl + '/playground'">{{ $t('playground') }}</router-link></li>
                    <li><router-link :to="routeUrl + '/order'">{{ $t('order') }}</router-link></li>
                    <li><router-link :to="routeUrl + '/articles'">{{ $t('news') }}</router-link></li>
                    <li><router-link :to="routeUrl + '/contact'">{{ $t('contactUs') }}</router-link></li>
                </ul>
                <img class="qrcode" src="http://www.8008mp.com/erweima/upload/28946/com/%B3%C2%D3%C2_RJ36988.png">
                <div class="info">{{ $t('qrcode') }}</div>
                <div class="info">{{ $t('contactPhone') }}：0760-88831122</div>
                <div class="info">{{ $t('address') }}：{{ address }}</div>
            </div>
        </footer>
    </div>
</template>

<script>
    import Vue from 'vue'
    import i18n from '@/i18n'

    export default {
        i18n,
        data () {
            return {
                address: '广东省广州市花都区新华镇XXX',
            }
        },
        mounted: function () {
            i18n.locale = this.$route.params.lang;
            console.log('挂债')
        },
        computed: {
            routeUrl () {
                return '/' + this.$route.params.lang + '/home';
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
                    return location.pathname === ('/' + this.$route.params.lang + '/home/' + url)
                } else {
                    return location.pathname === ('/' + this.$route.params.lang + '/home')
                }
            },
            login: function () {
                alert('登录成功');
                localStorage.token = '123456';
                localStorage.username = '陈建杭';

                //location.href = '/home';
//                this.$router.push('/home');
            },
            changeLanguage(lang) {
                console.log(location.href);
                location.href = location.href.replace(/en|cn/, lang);
                //this.$router.replace();
            },
            setActive(index) {
                var menu = ['/', 'courses', 'tutors', 'playground', 'order', 'articles', 'contact']
            }
        },
        watch: {
            $route: {
                immediate: true,
                handler (val, oldVal) {
                    var linkList = ['/', 'courses', 'tutors', 'playground', 'order', 'articles', 'contact']
                    console.log(val);
                    const links = linkList.join('|')
                    const reg = new RegExp(links)
                    this.isNeedSet = reg.test(val.path)

                    if (this.isNeedSet) {
                        console.log('需要')
                        localStorage.from = oldVal === undefined ? localStorage.from : oldVal.path
                    } else {
                        console.log('不需要')
                    }
                }
            }
        }
    }

    localStorage.token = null;
</script>

<style>
    .layout-body {
        min-height: 600px;
    }
    /**/
    .row-sm {
        margin-right: -8px;
        margin-left: -8px;
    }
    .row-sm .col-sm-3,
    .row-sm .col-sm-4 {
        padding-right: 8px;
        padding-left: 8px;
    }


    .layout-header {
        height: 56px;
        /*padding: 16px 0;*/
        background-color: #A9517A;
        border-bottom: 1px solid #ccc;
    }
    .layout-header:after {
        display: table;
        content: " ";
        clear: both;
    }
    .layout-header .container {
        height: 100%;
    }
    .layout-header .logo {
        float: left;
        width: 100px;
        margin-right: 16px;
        margin-top: 12px;
    }
    .lang-box {
        float: right;
        padding-top: 16px;
        color: #eee;
    }
    .lang-box a {
        margin: 0 8px;
        color: rgba(255, 255, 255, .5);
    }
    .lang-box .active {
        color: #fff;
        border-bottom: 1px solid #fff;
    }

    .header-nav-list {
        float: left;
        margin-top: 16px;
        height: 100%;
    }
    .header-nav-list > li {
        position: relative;
        height: 100%;
        float: left;
        margin-right: 16px;
    }
    .header-nav-list > li > a {
        padding: 4px 0px;
        color: #fff;
        border-bottom: 2px solid transparent;
    }
    .header-nav-list > li:hover > a,
    .header-nav-list .active > a {
        border-bottom: 2px solid #B5BF71;
    }
    .header-nav-list > li > ul {
        display: none;
        position: absolute;
        top: 40px;
        z-index: 100;
        background-color: #fff;
        width: 160px;
        border: 1px solid #ccc;
    }
    .header-nav-list ul li a {
        display: block;
        padding: 8px 16px;
        color: #666;
    }
    .header-nav-list ul li a:hover {
        color: #fff;
        background-color: #A9517A;
    }
    .header-nav-list > li:hover ul {
        display: block;
    }
    /**/
    .layout-body {
        padding-bottom: 64px;
    }
    .layout-body:before {
        display: table;
        content: " ";
        clear: both;
    }
    /**/
    .layout-footer {
        padding: 24px;
        color: #fff;
        background-color: #262325;
    }
    .layout-footer .qrcode {
        display: block;
        width: 80px;
        height: 80px;
        margin: 0 auto 8px auto;
    }
    .layout-footer .info {
        margin-bottom: 8px;
        text-align: center;
    }
    /**/
    .footer-nav-list {
        padding-bottom: 16px;
        margin-bottom: 24px;
        text-align: center;
        border-bottom: 1px solid #524F51;
    }
    .footer-nav-list li {
        display: inline-block;
        margin-right: 24px;
    }
    .footer-nav-list li a {
        color: #fff;
    }
    /**/
    .bread-nav {
        overflow: hidden;
    }
    .bread-nav .breadcrumb {
        float: left;
        padding: 16px 0;
        background-color: transparent;
    }
    .bread-nav .breadcrumb li a {
        color: #666;
    }
    .bread-nav .icon-back {
        float: left;
        padding-top: 16px;
        margin-right: 8px;
        font-size: 20px;
    }

    /**/
    .form-control {
        border-radius: 0;
    }
    .form-control:focus {
        border-color: #ca7b9f;
        box-shadow: none;
    }
    .form-horizontal .control-label {
        text-align: left;
        width: 100px;
    }
    .btn {
        border-radius: 0;
    }

    .article-box {

    }
    .article-box .article-header {
        text-align: center;
    }
    .article-box .article-title {
        display: inline-block;
        padding-bottom: 6px;
        margin-bottom: 48px;
        font-size: 22px;
        color: #000;
        border-bottom: 2px solid #A9517A;
    }
    .article-box .article-content h2 {
        margin: 8px 0;
        font-size: 18px;
        font-weight: bold;
    }
    .article-box .article-content p {
        line-height: 1.6;
        margin-bottom: 24px;
    }


</style>
