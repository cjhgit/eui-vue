<template>
    <div class="layout-body">
        <div class="container">
            <div class="bread-nav">
                <ui-goback></ui-goback>
                <ol class="breadcrumb">
                    <li><router-link :to="'/'">{{ $t('home') }}</router-link></li>
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
        created() {
            console.log('获取语言' + this.$route.params.lang);
            this.articles = [
                {
                    id: new Date().getTime(),
                    title: '文章标题' + new Date().getTime(),
                    image: 'http://localhost:1234/static/img/playground.jpg',
                    time: '2016-6-28',
                    content: '每天选择有每天选择有每天选择有每天选择有每天选择有每天选择有每天选择有每天选择有每天选择有每天选择有每天选择有每天选择有每天选择有每天选择有'
                },
                {
                    id: new Date().getTime(),
                    title: '文章标题' + new Date().getTime(),
                    image: 'http://localhost:1234/static/img/playground.jpg',
                    time: '2016-6-28',
                    content: '每天选择有每天选择有每天选择有每天选择有每天选择有每天选择有每天选择有每天选择有每天选择有每天选择有每天选择有每天选择有每天选择有每天选择有'
                },
                {
                    id: new Date().getTime(),
                    title: '文章标题' + new Date().getTime(),
                    image: 'http://localhost:1234/static/img/playground.jpg',
                    time: '2016-6-28',
                    content: '每天选择有每天选择有每天选择有每天选择有每天选择有每天选择有每天选择有每天选择有每天选择有每天选择有每天选择有每天选择有每天选择有每天选择有'
                },
                {
                    id: new Date().getTime(),
                    title: '文章标题' + new Date().getTime(),
                    image: 'http://localhost:1234/static/img/playground.jpg',
                    time: '2016-6-28',
                    content: '每天选择有每天选择有每天选择有每天选择有每天选择有每天选择有每天选择有每天选择有每天选择有每天选择有每天选择有每天选择有每天选择有每天选择有'
                },
                {
                    id: new Date().getTime(),
                    title: '文章标题' + new Date().getTime(),
                    image: 'http://localhost:1234/static/img/playground.jpg',
                    time: '2016-6-28',
                    content: '每天选择有每天选择有每天选择有每天选择有每天选择有每天选择有每天选择有每天选择有每天选择有每天选择有每天选择有每天选择有每天选择有每天选择有'
                },
                {
                    id: new Date().getTime(),
                    title: '文章标题' + new Date().getTime(),
                    image: 'http://localhost:1234/static/img/playground.jpg',
                    time: '2016-6-28',
                    content: '每天选择有每天选择有每天选择有每天选择有每天选择有每天选择有每天选择有每天选择有每天选择有每天选择有每天选择有每天选择有每天选择有每天选择有'
                },
            ]
        },
        methods: {

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
        color: #000;
        font-size: 18px;
        margin-bottom: 8px;
    }
    .article-list .article-time {
        position: absolute;
        top: 16px;
        right: 16px;
        float: right;
        color: #999;
    }
    .article-list .article-content {
        color: #999;
    }
</style>