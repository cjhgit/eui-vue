<template>
    <div class="layout-body">
        <div class="admin-nav border-bottom">
            <div class="container">
                <div class="bread-nav">
                    <ol class="breadcrumb">
                        <li class="active">文章管理</li>
                    </ol>
                </div>
                <router-link class="btn btn-primary" :to="routeUrl + '/articles/add'">新建文章</router-link>
            </div>
        </div>

        <div class="container">
            <ui-empty v-if="!articles.length"></ui-empty>

            <ul class="row article-list">
                <li class="col-sm-4 article-item" v-for="article in articles">
                    <div class="card-box">
                        <!--<div class="card-header">
                            &lt;!&ndash;<input type="checkbox">&ndash;&gt;

                        </div>-->
                        <div class="box-body">
                            <span class="card-title">{{ article.title }}</span>
                            <div class="article-time">日期：{{ simpleDate(article.time) }}</div>
                            <div class="img-box">
                                <img class="article-image" :src="domainUrl + '/' + article.medias">
                                <div class="mask" @click="view(article)">
                                    <div class="mask-text">预览全文</div>
                                </div>
                            </div>
                            <div class="article-content">{{ removeHtmlTag(article.content) }}</div>
                        </div>
                        <div class="box-footer">
                            <span class="left">
                                <a class="publish" href="#" @click="update(article, 2)" v-if="article.status !== 2">发布</a>
                                <a href="#" @click="update(article, 1)" v-if="article.status === 2">已发布</a>
                            </span>
                            <span class="center">
                                <router-link :to="routeUrl + '/articles/' + article.id + '/edit'">编辑</router-link>
                            </span>
                            <span class="right">
                                <a href="#" @click="remove(article.id)">删除</a>
                            </span>
                        </div>
                    </div>

                </li>
            </ul>

            <ui-page :page="page" :total="totalPage" :gotoPage="gotoPage"></ui-page>
        </div>

    </div>
</template>

<script>
    import {domainUrl} from 'CONFIG/config'
    import Util from '@/util/util'

    export default {
        data () {
            return {
                page: 1,
                totalPage: 1,
                pageSize: 12,

                articles: [],
            }
        },
        computed: {
            domainUrl() {
                return domainUrl;
            },
            routeUrl () {
                return '/' + this.$route.params.lang + '/admin';
            },
        },
        mounted() {
            this.getData(1);
        },
        methods: {
            gotoPage(page) {
                this.page = page
                this.getData(page)
            },
            getData(page) {
                this.$http.post(domainUrl + '/admin/news/list', {
                    page: page,
                    pageSize: this.pageSize
                }, {
                    headers: {
                        'Lc-Lang': this.$route.params.lang === 'en' ? 'en' : 'zh',
                        'X-Auth-Token': localStorage.mytoken
                    },
                }).then(response => {
                    let body = response.body
                    console.log(body)
                    this.articles = body.data
                    this.totalPage = Math.ceil(body.total / this.pageSize)
                }, response => {
                    let body = response.body
                    console.log(body);
                    if (body.code === 101 || body.code === 103) {
                        localStorage.mytoken = ''
                        this.$router.push('/login')
                    }
                })
            },
            update(article, status) {
                article.status = status;
                this.$http.post(domainUrl + '/admin/news/' + article.id + '/update', article, {
                    headers: {
                        'Lc-Lang': this.$route.params.lang === 'en' ? 'en' : 'zh',
                        'X-Auth-Token': localStorage.mytoken
                    }
                }).then(response => {

                }, response => {
                    let body = response.body
                    console.log(body)
                })
            },
            view(article) {
                window.open('/' + this.$route.params.lang + '/home/articles/' + article.id)
            },
            remove(id) {
                this.$http.delete(domainUrl + '/admin/news/' + id + '/delete', {
                    headers: {
                        'Lc-Lang': this.$route.params.lang === 'en' ? 'en' : 'zh',
                        'X-Auth-Token': localStorage.mytoken
                    },
                }).then(response => {
                    for (let i = 0; i < this.articles.length; i++) {
                        if (this.articles[i].id === id) {
                            this.articles.splice(i, 1)
                        }
                    }
                }, response => {
                    let body = response.body
                    console.log(body)
                    if (body.code === 101 || body.code === 103) {
                        localStorage.mytoken = ''
                        this.$router.push('/login') // TODO
                    }
                })
            },
            edit: function () {
                alert('编辑');
            },
            simpleDate(str) {
                return str.split(' ')[0]
            },
            removeHtmlTag(str) {
                return Util.removeHtmlTag(str)
            },
        }
    }
</script>

<style scoped>
    /**/
    .article-list {
        margin-top: 24px;
    }
    .article-list .article-item {
        margin-bottom: 24px;
    }
    .article-list .item-header {
        padding: 16px;
        border-bottom: 1px solid #ccc;
    }
    .article-list .item-body {
        padding: 16px;
        overflow: hidden;
    }
    .article-list .article-content {
        float: left;
        width: 100%;
        height: 40px;
        overflow: hidden;
    }
    .article-list .article-time {
        margin-bottom: 8px;
        color: #999;
    }
    .article-list .img-box {
        position: relative;
        width: 100%;
        height: 160px;
        margin-right: 20px;
        margin-bottom: 16px;
    }
    .article-list .article-image {
        width: 100%;
        height: 100%;
    }
    .article-list .mask {
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #666;
        cursor: pointer;
    }
    .article-list .img-box:hover .mask {
        display: block;
    }
    .article-list .mask-text {
        color: #fff;
        line-height: 160px;
        text-align: center;
    }
    .article-list .publish {
        color: #333 !important;
    }

    /**/
    .card-box {
        margin-bottom: 24px;
        border: 1px solid #ccc;
    }
    .card-box .card-header {
        padding: 16px;
    }
    .card-box .box-body {
        padding: 16px;
        overflow: hidden;
    }
    .card-box .card-title {
        display: block;
        padding-bottom: 8px;
        font-size: 18px;
        overflow: hidden;
        white-space: nowrap;
        margin-bottom: 8px;
        text-overflow: ellipsis;
        border-bottom: 1px solid #ccc;
    }
    .card-box .box-footer {
        padding: 16px;
        background-color: #F3F1F3;
        overflow: hidden;
    }
    .card-box .box-footer a {
        color: #999;
        font-size: 18px;
    }
    .card-box .box-footer .icon {
        color: #999;
        font-size: 20px;
        cursor: pointer;
    }
    .left {
        display: inline-block;
        width: 33.3%;
        text-align: left;
    }
    .right {
        display: inline-block;
        width: 33.3%;
        text-align: right;
    }
    .center {
        display: inline-block;
        width: 28%;
        text-align: center;
    }
</style>