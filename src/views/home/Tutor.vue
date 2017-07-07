<template>
    <div class="layout-body">
        <div class="container">

            <div class="bread-nav">
                <ui-icon><b>哈哈哈</b></ui-icon>
                <ui-goback></ui-goback>
                <ol class="breadcrumb">
                    <li><router-link :to="routeUrl">{{ $t('home') }}</router-link></li>
                    <li class="active">{{ $t('tutorDesc') }}</li>
                </ol>
            </div>

            <ul class="tutor-list row row-sm">
                <li class="col-sm-3" v-for="tutor in tutors">
                    <div class="tutor-item">
                        <router-link :to="routeUrl + '/tutors/' + tutor.id">
                            <div class="avatar-box">
                                <img class="avatar-img" :src="domainUrl + '/' + tutor.media">
                                <img class="mask" src="/static/img/shape-6.png">
                            </div>
                            <div class="tutor-name">{{ tutor.name }}</div>
                            <div class="tutor-desc">{{ tutor.introduction }}</div>
                        </router-link>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import i18n from '@/i18n'
    import {domainUrl} from 'CONFIG/config'

    export default {
        i18n,
        data () {
            return {
                tutors: [

                ]
            }
        },
        computed: {
            domainUrl() {
                return domainUrl;
            },
            routeUrl () {
                return '/' + this.$route.params.lang + '/home';
            }
        },
        mounted: function () {
            console.log('获取语言' + this.$route.params.lang);
            this.getData();
        },
        methods: {
            getData() {
                this.$http.post(domainUrl + '/teacher/list', {
                    page: 1,
                    pageSize: 12
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
            },
        }
    }

</script>

<style scoped>
    .avatar-box {
        position: relative;
        width: 100%;
        max-width: 160px;
        height: 160px;
        margin: 16px auto 16px auto;
    }
    .avatar-box .avatar-img {
        width: 100%;
        height: 100%;
    }
    .avatar-box .mask {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .tutor-list {
    }
    .tutor-list .tutor-item {
        height: 340px;
        padding: 16px;
        margin-bottom: 24px;
        border: 1px solid #ccc;
    }
    .tutor-list .tutor-item:hover {
        border-bottom: 4px solid #B5BF71;
    }
    .tutor-list .tutor-item:hover .tutor-name {
        color: #A9517A;
    }
    .tutor-list .tutor-name {
        margin-bottom: 16px;
        text-align: center;
        font-size: 18px;
        color: #000;
    }
    .tutor-list .tutor-desc {
        color: #666;
        color: #666;
        height: 60px;
        overflow: hidden;
    }
    @media (min-width: 768px) {
        .tutor-list .center {
            width: 100px;
            margin-top: -30px;
        }
        .tutor-list .hexagon {
            width: 100px;
            height: 200px;
        }
    }

</style>