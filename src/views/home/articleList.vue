<template>
    <div class="layout-body">
        <div class="container">
            <div class="bread-nav">
                <ui-goback></ui-goback>
                <ol class="breadcrumb">
                    <li><router-link :to="routeUrl">{{ $t('home') }}</router-link></li>
                    <li class="active">{{ $t('news') }}</li>
                </ol>
            </div>
            <ul class="row article-list">
                <li class="col-sm-4" v-for="article in articles">
                    <div class="article-item">
                        <img class="article-img" :src="article.image" :alt="article.title">
                        <router-link class="article-info" :to="routeUrl + '/articles/1'">
                            <h2 class="article-title">{{ article.title }}</h2>
                            <div class="article-time">{{ article.time }}</div>
                            <div class="article-content">{{ article.content }}</div>
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
                articles: [],
            }
        },
        computed: {
            routeUrl () {
                return '/' + this.$route.params.lang + '/home';
            },
        },
        mounted() {
            this.getData();
        },
        methods: {
            getData() {
                this.$http.post(domainUrl + '/news/list', {
                    page: 1,
                    pageSize: 12
                }, {
                    headers: {
                        'Lc-Lang': this.$route.params.lang === 'en' ? 'en' : 'zh'
                    },
                }).then(response => {
                    let body = response.body
                    console.log(body)
                    this.articles = body.data
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
    /**/
    .article-list {

    }
    .article-list .article-item {
        margin-bottom: 24px;
        background-color: #F5F3F5;
        border: 1px solid #fff;
    }
    .article-list .article-item:hover {
        border: 1px solid #A9517A;
    }
    .article-list .article-img {
        display: block;
        width: 100%;
        height: 200px;
    }
    .article-list .article-info {
        position: relative;
        display: block;
        padding: 16px;
    }
    .article-list .article-title {
        max-width: 160px;
        color: #000;
        font-size: 18px;
        margin-bottom: 8px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .article-list .article-time {
        position: absolute;
        top: 18px;
        right: 20px;
        float: right;
        color: #999;
    }
    .article-list .article-content {
        max-height: 60px;
        color: #999;
        text-overflow: ellipsis;
        overflow: hidden;
    }
</style>