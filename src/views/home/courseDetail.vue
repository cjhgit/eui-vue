<template>
    <div class="layout-body">
        <div class="container">
            <div class="bread-nav">
                <ui-goback></ui-goback>
                <ol class="breadcrumb">
                    <li><router-link :to="'/'">{{ $t('home') }}</router-link></li>
                    <li><router-link :to="routeUrl + '/courses'">{{ $t('allCourse') }}</router-link></li>
                    <li class="active">{{ article.title }}</li>
                </ol>
            </div>

            <article class="article-box">
                <div class="article-header">
                    <h1 class="article-title">{{ article.title }}</h1>
                </div>
                <div class="article-content">
                    <div v-html="article.content"></div>
                </div>
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
                content: '<h2>什么是XXX？</h2><p>这是文章的内容</p><h2>第二段的标题</h2><p>这是第二段</p>'
            };
        },

        methods: {

        }
    }

</script>

<style scoped>

</style>