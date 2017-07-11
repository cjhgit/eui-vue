<template>
    <div class="layout-body">
        <div class="container">
            <div class="bread-nav">
                <ui-goback></ui-goback>
                <ol class="breadcrumb">
                    <li><router-link :to="routeUrl">{{ $t('home') }}</router-link></li>
                    <li><router-link :to="routeUrl + '/articles'">{{ $t('news') }}</router-link></li>
                    <li class="active">{{ article.title }}</li>
                </ol>
            </div>

            <div class="article-box2">
                <h1 class="article-title">{{ article.title }}</h1>
                <div class="article-time">{{ article.time }}</div>
            </div>
            <article class="ui-article">
                <div v-html="article.content"></div>
            </article>

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
                article: {}
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
                this.$http.get(domainUrl + '/news/' + this.$route.params.id, {
                    headers: {
                        'Lc-Lang': this.$route.params.lang === 'en' ? 'en' : 'zh',
                        'X-Auth-Token': localStorage.mytoken
                    },
                }).then(response => {
                    let body = response.body
                    console.log(body)
                    this.article = body
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
    .article-box2 {}
    .article-box2 .article-title {
        margin-bottom: 8px;
        font-size: 26px;
        font-weight: 400;
    }
    .article-box2 .article-time {
        color: #999;
        padding-bottom: 16px;
        margin-bottom: 16px;
        border-bottom: 1px solid #ccc;
    }
    .article-box2 .article-content {

    }
</style>