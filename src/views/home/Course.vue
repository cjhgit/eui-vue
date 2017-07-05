<template>
    <div class="layout-body">
        <div class="container">
            <div class="bread-nav">
                <ui-goback></ui-goback>
                <ol class="breadcrumb">
                    <li><router-link :to="routeUrl">{{ $t('home') }}</router-link></li>
                    <li class="active">{{ $t('allCourse') }}</li>
                </ol>
            </div>

            <ul class="row course-list">
                <li class="col-sm-3" v-for="course in courses">
                    <div class="course-item">
                        <img class="course-img" :src="course.media">
                        <div class="hr"></div>
                        <div class="course-name">{{ course.name }}</div>
                        <div class="course-desc">{{ course.introduction }}</div>
                        <router-link class="btn course-link" :to="routeUrl + '/courses/' + course.id">{{ $t('detail') }}</router-link>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import i18n from '@/i18n'
    import {domainUrl} from 'CONFIG/config'

    export default {
        i18n,
        data() {
            return {
                courses: []
            }
        },
        computed: {
            routeUrl () {
                return '/' + this.$route.params.lang + '/home';
            }
        },
        mounted: function () {
            this.getData();
        },
        methods: {
            getData() {
                this.$http.post(domainUrl + '/course/list', {
                    page: 1,
                    pageSize: 12
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
            },
        }
    }
</script>

<style scoped>
    .course-list {

    }
    .course-list .course-item {
        padding: 16px;
        margin-bottom: 24px;
        border: 1px solid #ccc;
        text-align: center;
    }
    .course-list .course-item:hover {
        border-color: #A9517A;
    }
    .course-list .hr {
        height: 1px;
        margin: 16px 0;
        background-color: #ccc;
    }
    .course-list .course-img {
        width: 100%;
        height: 160px;
        max-width: 160px;
        border-radius: 50%;
        background-color: #f9f9f9;
    }
    .course-list .course-name {
        margin-bottom: 8px;
        color: #000;
        font-size: 16px;
        text-align: center;
    }
    .course-list .course-desc {
        margin-bottom: 8px;
        text-align: center;
    }
    .course-list .course-link {
        color: #fff;
        background-color: #A9517A;
        border-radius: 0;
    }
    .course-list .course-link:hover {
        border-color: #A9517A;
        background-color: transparent;
        color: #A9517A;
    }
</style>