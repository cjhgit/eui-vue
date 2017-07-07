<template>
    <div class="layout-body">
        <div class="admin-nav">
            <div class="container">
                <div class="bread-nav">
                    <ol class="breadcrumb">
                        <li class="active">文章管理</li>
                    </ol>
                </div>
                <router-link class="btn btn-primary" :to="routeUrl + '/articles/add'">新建文章</router-link>
            </div>
        </div>

        <ul class="row article-list">
            <li class="col-sm-4 article-item" v-for="article in articles">
                <div class="card-box">
                    <div class="card-header">
                        <input type="checkbox">
                        <span>{{ article.title }}</span>
                    </div>
                    <img class="article-image" :src="domainUrl + '/' + article.medias">
                    <div class="box-body">
                        <div class="article-content">{{ removeHtmlTag(article.content) }}</div>
                    </div>
                    <div class="box-footer">
                            <span class="left">
                                <ui-icon type="edit" v-tooltip="'2121ewd21212'"></ui-icon>
                            </span>
                        <span class="center">
                            <router-link class="btn btn-link" :to="routeUrl + '/articles/' + article.id + '/edit'">编辑</router-link>
                        </span>
                        <span class="right">
                            <a href="#" @click="remove(article.id)">删除</a>
                        </span>
                    </div>
                </div>

            </li>
        </ul>
    </div>
</template>

<script>
    import {domainUrl} from 'CONFIG/config'

    export default {
        data () {
            return {
                articles: [],
                search: function () {
                    //this
                },
                addArticle: function () {

                },
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
            this.getData(this.$route.params.lang);
        },
        methods: {
            getData(lang) {
                this.$http.get(domainUrl + '/admin/news/all', {
                    headers: {
                        'Lc-Lang': this.$route.params.lang === 'en' ? 'en' : 'zh',
                        'X-Auth-Token': localStorage.mytoken
                    },
                }).then(response => {
                    let body = response.body
                    console.log(body)
                    this.articles = body
                }, response => {
                    let body = response.body
                    console.log(body);
                    if (body.code === 101) {
                        localStorage.mytoken = ''
                        this.$router.push('/login') // TODO
                    }
                })
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
                    if (body.code === 101) {
                        localStorage.mytoken = ''
                        this.$router.push('/login') // TODO
                    }
                })
            },
            edit: function () {
                alert('编辑');
            },
            removeHtmlTag(str) {
                str = str.replace(/<\/?[^>]*>/g,''); //去除HTML tag
                str = str.replace(/[ | ]*\n/g,'\n'); //去除行尾空白
                //str = str.replace(/\n[\s| | ]*\r/g,'\n'); //去除多余空行
                str=str.replace(/&nbsp;/ig,'');//去掉&nbsp;
                str=str.replace(/\s/g,''); //将空格去掉
                return str;
            },
        }
    }
</script>

<style scoped>
    /**/
    .article-list {
        margin: 0 24px;
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
    .article-list .article-image {
        float: left;
        width: 100%;
        height: 120px;
        margin-right: 20px;
    }
    .article-list .btns {

    }
    .article-list .btns .btn {
        display: block;
    }

    /**/
    .card-box {
        margin-bottom: 24px;
        border: 1px solid #ccc;
    }
    .card-box .box-body {
        padding: 8px;
    }
    .card-box .box-footer {
        padding: 8px;
        background-color: #F3F1F3;
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