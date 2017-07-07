<template>
    <div class="layout-body">
        <div class="container">
            <div class="bread-nav">
                <ui-goback></ui-goback>
                <ol class="breadcrumb">
                    <li><router-link :to="routeUrl">{{ $t('home') }}</router-link></li>
                    <li><router-link :to="routeUrl + '/tutors'">{{ $t('tutorDesc') }}</router-link></li>
                    <li class="active">{{ tutor.name }}</li>
                </ol>
            </div>

            <div class="tutor-box">
                <img class="tutor-avatar" :src="coverUrl()">
                <div class="tutor-info">
                    <div class="tutor-name">{{ tutor.name }}</div>
                    <div class="tutor-desc">{{ tutor.introduction }}</div>
                </div>
            </div>

            <div class="swiper-box">
                <div class="left"  @click="swipeLeft">
                    <ui-icon type="left"></ui-icon>
                </div>
                <swiper class="swiper" :options="swiperOption" ref="mySwiper">
                    <!-- slides -->
                    <swiper-slide class="swiper-item" v-for="media in tutor.mediaList">
                        <img :src="domainUrl + '/' + media.url">
                    </swiper-slide>
                </swiper>
                <div class="right" @click="swipeRight">
                    <ui-icon type="right"></ui-icon>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import i18n from '@/i18n'
    import VueAwesomeSwiper from 'vue-awesome-swiper'
    import {domainUrl} from 'CONFIG/config'

    Vue.use(VueAwesomeSwiper)

    export default {
        i18n,
        data () {
            return {
                tutor: {},
                swiperOption: {
                    //loop: true,
                    slidesPerView : 4,
                    notNextTick: true,
                    onTransitionStart(swiper){
                        console.log(swiper)
                    },
                    // more Swiper configs and callbacks...
                    // ...
                }
            }
        },
        computed: {
            domainUrl() {
                return domainUrl
            },
            routeUrl () {
                return '/' + this.$route.params.lang + '/home'
            },
            swiper() {
                return this.$refs.mySwiper.swiper
            }
        },
        mounted() {
            // you can use current swiper instance object to do something(swiper methods)
            // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
            console.log('this is current swiper instance object', this.swiper)
            //this.swiper.slideTo(3, 1000, false)
            this.getData()
        },
        methods: {
            coverUrl() {
                if (this.tutor.mediaList && this.tutor.mediaList.length) {
                    for (let i = 0; i < this.tutor.mediaList.length; i++) {
                        if (this.tutor.mediaList[i].cover) {
                            return this.domainUrl + '/' + this.tutor.mediaList[i].url
                        }
                    }
                }
                return '/static/img/empty.png'
            },
            getData() {
                this.$http.get(domainUrl + '/teacher/' + this.$route.params.id, {
                    headers: {
                        'Lc-Lang': this.$route.params.lang === 'en' ? 'en' : 'zh',
                        'X-Auth-Token': localStorage.mytoken
                    },
                }).then(response => {
                    let body = response.body
                    console.log(body)
                    this.tutor = body
                }, response => {
                    let body = response.body
                    console.log(body);
                    if (body.code === 101) {
                        localStorage.mytoken = ''
                        this.$router.push('/login') // TODO
                    }
                })
            },
            swipeLeft() {
                console.log(this.swiper)
                //this.swiper.slideTo(3, 1000, false)
                this.swiper.slidePrev()
            },
            swipeRight() {
                this.swiper.slideNext()
            }
        }
    }
</script>

<style scoped>
    /**/
    .swiper-box {
        position: relative;
        width: 100%;
        height: 300px;
    }
    .swiper-box .left {
        position: absolute;
        left: 0;
        top: 25px;
        width: 120px;
        height: 100%;
    }
    .swiper-box .icon-left {
        display: block;
        margin-top: 60px;
        color: #999;
        font-size: 32px;
    }
    .swiper-box .right {
        position: absolute;
        right: 0;
        top: 25px;
        width: 120px;
    }
    .swiper-box .icon-right {
        display: block;
        float: right;
        margin-top: 60px;
        color: #999;
        font-size: 32px;
    }
    .swiper-box .swiper {
        position: absolute;
        left: 120px;
        right: 120px;
        height: 200px;
    }
    .swiper-box .swiper-item {
        width: 100px;
        padding-right: 16px;
    }
    .swiper-box .swiper-item img {
        width: 100%;
        height: 100%;
    }
    /**/
    .tutor-box {
        height: 300px;
        padding: 32px 48px;
        margin-top: 20px;
        margin-bottom: 48px;
        background-color: #F5F3F5;
    }
    .tutor-box .tutor-avatar {
        position: relative;
        top: -60px;
        float: left;
        width: 180px;
        height: 240px;
        margin-right: 40px;
    }
    .tutor-box .tutor-info {
    }
    .tutor-box .tutor-name {
        display: inline-block;
        padding-bottom: 2px;
        margin-bottom: 16px;
        font-size: 24px;
        border-bottom: 2px solid #2974B6;
    }
    .tutor-box .tutor-name:hover {
    }
    .tutor-box .tutor-desc {

    }
    /**/
    .tutor-img-list {
        overflow: hidden;
    }
    .tutor-img-list .img-item {

    }

</style>
