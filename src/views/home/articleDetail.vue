<template>
    <div class="layout-body">
        <div class="container">
            <div class="bread-nav">
                <ui-goback></ui-goback>
                <ol class="breadcrumb">
                    <li><router-link :to="'/'">{{ $t('home') }}</router-link></li>
                    <li><router-link :to="'/articles'">{{ $t('news') }}</router-link></li>
                    <li class="active">{{ article.title }}</li>
                </ol>
            </div>

            <div class="article-box2">
                <h1 class="article-title">{{ article.title }}</h1>
                <div class="article-time">{{ article.time }}</div>
            </div>
            <article class="article-content">
                <div v-html="article.content"></div>
            </article>

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
                article: null
            }
        },
        computed: {
            routeUrl () {
                return '/' + this.$route.params.lang + '/home';
            }
        },
        created: function () {
            console.log('获取语言' + this.$route.params.lang);
            this.article = {
                title: '这是文章的标题',
                time: '2017-6-2',
                content: '<p>这是文章的内容</p><p>这是第二段</p>'
            };
        },

        methods: {

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