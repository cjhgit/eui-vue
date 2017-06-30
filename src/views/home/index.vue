<template>
    <div class="layout-body">
        <!-- banner -->
        <swipe class="my-swipe">
            <swipe-item class="swipe-item" v-for="banner in banners">
                <img :src="banner.image" alt="">
            </swipe-item>
        </swipe>
        <!-- 导师 -->
        <section class="index-box">
            <div class="container">
                <header>
                    <h3 class="title">导师</h3>
                    <div class="sub-title">TUTOR</div>
                </header>
                <ul class="tutor-list row">
                    <li class="tutor-item col-sm-4" v-for="tutor in tutors">
                        <img class="avatar" src="/static/img/avatar.jpg">
                        <router-link :to="routeUrl + '/tutors/' + tutor.id">
                            <div class="tutor-name">{{ tutor.name }}</div>
                            <div class="tutor-desc">{{ tutor.desc }}</div>
                        </router-link>
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
                        </div>
                        <div class="col-sm-4"><img class="classroom-img" :src="playgrounds[0].image"></div>
                        <div class="col-sm-4"><img class="classroom-img" :src="playgrounds[1].image"></div>
                    </div>
                    <div class="row">
                        <div class="col-sm-4">
                            <img class="classroom-img" :src="playgrounds[2].image">
                            <img class="classroom-img" :src="playgrounds[3].image">
                        </div>
                        <div class="col-sm-4">
                            <img class="classroom-img-lg" :src="playgrounds[4].image">
                        </div>
                        <div class="col-sm-4">
                            <img class="classroom-img" :src="playgrounds[5].image">
                            <img class="classroom-img" :src="playgrounds[6].image">
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
                            <router-link :to="routeUrl + '/courses/' + course.id">
                                <div class="course-name">{{ course.name }}</div>
                                <img class="course-img" src="/static/img/avatar.jpg">
                                <div class="course-desc">{{ course.desc }}</div>
                            </router-link>
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
            routeUrl () {
                return '/' + this.$route.params.lang + '/home';
            }
        },
        mounted: function () {
            console.log(this.$i18n);
            this.tutors = [
                {
                    id: new Date().getTime(),
                    name: '导师名称',
                    desc: '导师介绍'
                },
                {
                    id: new Date().getTime(),
                    name: '导师名称',
                    desc: '导师介绍'
                },
                {
                    id: new Date().getTime(),
                    name: '导师名称',
                    desc: '导师介绍'
                }
            ];
            this.courses = [
                {
                    id: new Date().getTime(),
                    name: '课程名称',
                    desc: '课程介绍'
                },
                {
                    id: new Date().getTime(),
                    name: '课程名称',
                    desc: '课程介绍'
                },
                {
                    id: new Date().getTime(),
                    name: '课程名称',
                    desc: '课程介绍'
                }
            ];
            this.playgrounds = [
                {
                    image: 'http://pic.58pic.com/58pic/11/77/72/58PIC9w58PICC9P.jpg'
                },
                {
                    image: 'http://s16.sinaimg.cn/mw690/b3b843e0gdf408436f34f&690'
                },
                {
                    image: 'http://s11.sinaimg.cn/mw690/0046logVty6LEhJixDQca&690'
                },
                {
                    image: '/static/img/avatar.jpg'
                },
                {
                    image: '/static/img/avatar.jpg'
                },
                {
                    image: '/static/img/avatar.jpg'
                },
                {
                    image: '/static/img/avatar.jpg'
                },
            ];
            this.banners = [
                {
                    url: 'http://www.baidu.com',
                    image: 'http://pic.58pic.com/58pic/11/77/72/58PIC9w58PICC9P.jpg'
                },
                {
                    url: 'http://www.baidu.com',
                    image: 'http://pic.58pic.com/58pic/11/77/72/58PIC9w58PICC9P.jpg'
                },
                {
                    url: 'http://www.baidu.com',
                    image: 'http://pic.58pic.com/58pic/11/77/72/58PIC9w58PICC9P.jpg'
                }
            ];
        },
        components: {
            'swipe': Swipe,
            'swipe-item': SwipeItem
        }
    }

    console.log(this)
    console.log(this.$i18n)

</script>

<style scoped>

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
        padding: 32px 0;
    }
    .index-box .title {
        text-align: center;
        font-size: 20px;
    }
    .index-box .sub-title {
        margin-bottom: 36px;
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
        float: left;
        /*width: 33.3%;
        padding: 0 16px;*/
    }
    .tutor-list .tutor-item img {
        width: 100%;
        height: 320px;
    }
    .tutor-list .tutor-name {
        text-align: left;
        color: #555;
    }
    .tutor-list .tutor-desc {
        text-align: left;
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
        text-align: left;
    }
    .classroom-box .sub-title {
        text-align: left;
        margin-bottom: 8px;
    }
    /**/
    .course-list {
        overflow: hidden;
    }
    .course-list .course-item {
        background-color: #ccc;
        height: 280px;
    }
    .course-list .course-name {

    }
    .course-list .course-img {

    }
    .course-list .course-desc {

    }
</style>