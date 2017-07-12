<template>
    <div class="layout-body">
        <!-- banner -->
        <swipe class="my-swipe">
            <swipe-item class="swipe-item" v-for="banner in banners">
                <img :src="domainUrl + '/' + banner.url" alt="">
            </swipe-item>
        </swipe>
        <!-- 导师 -->
        <section class="index-box" style="position: relative">
            <div class="tutor-bg">
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
            </div>
            <div class="container">
                <header>
                    <h3 class="title">导师</h3>
                    <div class="sub-title">TUTOR</div>
                </header>
                <ul class="tutor-list row">
                    <li class="col-sm-4" v-for="tutor in tutors">
                        <div class="tutor-item">
                            <img class="avatar" :src="domainUrl + '/' + tutor.media">
                            <div class="tutor-info">
                                <div class="clearfix">
                                    <div class="tutor-name">{{ tutor.name }}</div>
                                    <router-link class="btn" :to="routeUrl + '/tutors/' + tutor.id">详情</router-link>
                                </div>
                                <div class="tutor-desc">{{ tutor.introduction }}</div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
        <!-- 教室环境 -->
        <section class="index-box bg-gray">
            <div class="container">
                <div class="classroom-box">
                    <div class="row">
                        <div class="col-sm-4">
                            <div class="sub-title">CLASSROOM</div>
                            <h3 class="title">教室环境</h3>
                            <ui-icon type="playground"></ui-icon>
                        </div>
                        <div class="col-sm-4"><img class="classroom-img" :src="domainUrl + '/' + playgrounds[0].url"  v-if="playgrounds[0]"></div>
                        <div class="col-sm-4"><img class="classroom-img" :src="domainUrl + '/' + playgrounds[1].url" v-if="playgrounds[1]"></div>
                    </div>
                    <div class="row">
                        <div class="col-sm-4">
                            <img class="classroom-img" :src="domainUrl + '/' + playgrounds[2].url"  v-if="playgrounds[2]">
                            <img class="classroom-img" :src="domainUrl + '/' + playgrounds[3].url"  v-if="playgrounds[3]">
                        </div>
                        <div class="col-sm-4">
                            <img class="classroom-img-lg" :src="domainUrl + '/' + playgrounds[4].url" v-if="playgrounds[4]">
                        </div>
                        <div class="col-sm-4">
                            <img class="classroom-img" :src="domainUrl + '/' + playgrounds[5].url" v-if="playgrounds[5]">
                            <img class="classroom-img" :src="domainUrl + '/' + playgrounds[6].url" v-if="playgrounds[6]">
                        </div>
                    </div>

                </div>
            </div>
        </section>
        <!-- 课程信息 -->
        <section class="index-box">
            <div class="container">
                <header>
                    <h3 class="title">课程信息</h3>
                    <div class="sub-title">COURSE INFORMATION</div>
                </header>
                <ul class="course-list row">
                    <li class="col-sm-4" v-for="course in courses">
                        <div class="course-item">
                            <div class="mask"></div>
                            <div class="content">
                                <router-link :to="routeUrl + '/courses/' + course.id">
                                    <div class="course-name">{{ course.name }}</div>
                                    <img class="course-img" :src="domainUrl + '/' + course.media">
                                    <div class="course-desc">{{ course.introduction }}</div>
                                </router-link>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>

<script>
    import Vue from 'vue'
    import i18n from '@/i18n'
    import { Swipe, SwipeItem } from 'vue-swipe';
    import {domainUrl} from 'CONFIG/config'

    require('@/test.css');
    require('vue-swipe/dist/vue-swipe.css');

    Vue.component('swipe', Swipe);
    Vue.component('swipe-item', SwipeItem);

//    // in Global variable
//    const { Swipe, SwipeItem } = VueSwipe;

//    const vueSwipe = VueSwipe.Swipe;
//    const vueSwipeItem = VueSwipe.SwipeItem;

    export default {
        i18n,
        data() {
            return {
                tutors: [],
                courses: [],
                playgrounds: [],
                banners: []
            }
        },
        computed: {
            domainUrl() {
                return domainUrl
            },
            routeUrl () {
                return '/' + this.$route.params.lang + '/home'
            }
        },
        mounted: function () {
            this.getData()
        },
        methods: {
            getData() {
                // 教室环境
                this.$http.get(domainUrl + '/location/all', {
                    headers: {
                        'Lc-Lang': this.$route.params.lang === 'en' ? 'en' : 'zh'
                    },
                }).then(response => {
                    let body = response.body
                    console.log(body)
                    this.playgrounds = body
                }, response => {
                    let body = response.body
                    console.log(body);
                    if (body.code === 101) {
                        localStorage.mytoken = ''
                        this.$router.push('/login') // TODO
                    }
                })

                // banner
                this.$http.get(domainUrl + '/banner/all', {
                    headers: {
                        'Lc-Lang': this.$route.params.lang === 'en' ? 'en' : 'zh'
                    },
                }).then(response => {
                    let body = response.body
                    console.log(body)
                    this.banners = body
                }, response => {
                    let body = response.body
                    console.log('banner')
                    console.log(body);
                    if (body.code === 101) {
                        localStorage.mytoken = ''
                        this.$router.push('/login') // TODO
                    }
                })

                // 获取导师数据
                this.$http.post(domainUrl + '/teacher/list', {
                    page: 1,
                    pageSize: 3
                }, {
                    headers: {
                        'Lc-Lang': this.$route.params.lang === 'en' ? 'en' : 'zh'
                    },
                }).then(response => {
                    let body = response.body
                    console.log(body)
                    this.tutors = body.data
                }, response => {
                    let body = response.body
                    console.log(body);
                    if (body.code === 101) {
                        localStorage.mytoken = ''
                        this.$router.push('/login') // TODO
                    }
                })

                // 课程信息
                this.$http.post(domainUrl + '/course/list', {
                    page: 1,
                    pageSize: 3
                }, {
                    headers: {
                        'Lc-Lang': this.$route.params.lang === 'en' ? 'en' : 'zh'
                    },
                }).then(response => {
                    let body = response.body
                    console.log(body)
                    this.courses = body.data
                }, response => {
                    let body = response.body
                    console.log(body);
                    if (body.code === 101) {
                        localStorage.mytoken = ''
                        this.$router.push('/login') // TODO
                    }
                })
            }
        },
        components: {
            'swipe': Swipe,
            'swipe-item': SwipeItem
        }
    }

    console.log(this)
    console.log(this.$i18n)

</script>

<style>

</style>

<style scoped>
    .layout-header {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        background-color: rgba(169, 81, 122, .5)
    }

    @media (min-width: 1200px) {
        .container {
            width: 1024px;
        }
    }
    /**/
    .my-swipe {
        height: 500px;
        color: #fff;
        font-size: 30px;
        text-align: center;
    }

    .swipe-item {
        width: 100%;
        height: 100%;
    }
    .swipe-item img {
        width: 100%;
        height: 100%;
    }
    /**/
    .index-box {
        padding: 40px 0;
    }
    .index-box .title {
        text-align: center;
        font-size: 20px;
    }
    .index-box .sub-title {
        margin-bottom: 40px;
        color: #999;
        font-size: 14px;
    }
    .index-box {
        text-align: center;
        font-size: 16px;
    }
    .index-box.bg-gray {
        background-color: #F9F7F9;
    }

    /**/
    .tutor-list {
        overflow: hidden;
    }
    .tutor-list .tutor-item {
        /*width: 33.3%;
        padding: 0 16px;*/
        border: 1px solid #fff;
    }
    .tutor-list .tutor-item:hover {
        border: 1px solid #ccc;
    }

    .tutor-list .tutor-item img {
        width: 100%;
        height: 400px;
        box-shadow: -2px 4px 2px 2px rgba(0,0,0,.1)
    }
    .tutor-info {
        padding: 16px;
        overflow: hidden;
    }
    .tutor-list .tutor-name {
        float: left;
        display: block;
        text-align: left;
        color: #555;
        font-size: 18px;
        line-height: 34px;
    }
    .tutor-list .btn {
        float: right;
        color: #B5BF71;
        border-color: #B5BF71;
    }
    .tutor-list .tutor-desc {
        text-align: left;
        height: 40px;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .tutor-list .clearfix {
        margin-bottom: 16px;
        overflow: hidden;
    }
    /**/
    .tutor-bg {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        width: 100%;
        height: 200px;
        padding-top: 200px;
    }
    .tutor-bg .line1 {
        width: 100%;
        height: 100px;
        margin-bottom: 20px;
        background-color: rgba(230, 228, 230, .5);
    }
    .tutor-bg .line2 {
        width: 100%;
        height: 50px;
        margin-bottom: 20px;
        background-color: rgba(230, 228, 230, .5);
    }
    .tutor-bg .line3 {
        width: 100%;
        height: 40px;
        margin-bottom: 20px;
        background-color: rgba(230, 228, 230, .5);
    }
    /**/
    .classroom-box .classroom-img {
        width: 100%;
        height: 200px;
        margin-bottom: 16px;
    }
    .classroom-box .classroom-img-lg {
        width: 100%;
        height: 416px;
    }
    @media (max-width: 768px) {
        .classroom-box .classroom-img {
            height: 160px;
        }
        .classroom-box .classroom-img-lg {
            width: 100%;
            height: 336px;
        }
    }
    .classroom-box .title {
        margin-bottom: 16px;
        text-align: left;
    }
    .classroom-box .sub-title {
        text-align: left;
        margin-bottom: 8px;
    }
    .classroom-box .icon-playground {
        display: block;
        width: 32px;
        font-size: 32px;
        color: #A9517A;
    }
    /**/
    .course-list {
        overflow: hidden;
    }
    .course-list .course-item {
        position: relative;
        background: url("/static/img/playground.jpg");
        background-size: 100% 100%;
        background-color: #ccc;
        height: 360px;
    }
    .course-list .course-item:hover .mask {
        background-color: rgba(174, 173, 100, .8);
    }
    .course-list .course-item:hover .course-name,
    .course-list .course-item:hover .course-desc {
        color: #333;
    }
    .course-list .course-item a {
        display: block;
        color: #fff;
    }
    .course-list .course-name {
        font-size: 20px;
        margin-bottom: 24px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .course-list .course-img {
        width: 120px;
        height: 120px;
        margin-bottom: 24px;
        border-radius: 60px;
    }
    .course-list .course-desc {
        height: 60px;
        overflow: hidden;
    }
    .course-list .mask {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(100, 100, 100, .5);
    }
    .course-list .content {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 32px;
    }
</style>