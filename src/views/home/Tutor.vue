<template>
    <div class="layout-body">
        <div class="container">

            <div class="bread-nav">
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

            <ui-page :page="page" :total="totalPage" :gotoPage="gotoPage"></ui-page>
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
                page: 1,
                totalPage: 1,
                pageSize: 12,

                tutors: []
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
            this.getData(1);
        },
        methods: {
            gotoPage(page) {
                this.page = page
                this.getData(page)
            },
            getData(page) {
                this.$http.post(domainUrl + '/teacher/list', {
                    page: page,
                    pageSize: this.pageSize
                }, {
                    headers: {
                        'Lc-Lang': this.$route.params.lang === 'en' ? 'en' : 'zh'
                    },
                }).then(response => {
                    let body = response.body
                    console.log(body)
                    this.tutors = body.data
                    this.totalPage = Math.ceil(body.total / this.pageSize)
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