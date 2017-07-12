<template>
    <div class="layout-body">
        <div class="container">
            <div class="bread-nav">
                <ui-goback></ui-goback>
                <ol class="breadcrumb">
                    <li><router-link :to="routeUrl">{{ $t('home') }}</router-link></li>
                    <li><router-link :to="routeUrl + '/courses'">{{ $t('allCourse') }}</router-link></li>
                    <li class="active">{{ article.name }}</li>
                </ol>
            </div>

            <article class="article-box">
                <div class="article-header">
                    <h1 class="article-title">{{ article.name }}</h1>
                </div>
                <div class="ui-article">
                    <div v-html="article.introduction"></div>
                </div>
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
                return '/' + this.$route.params.lang + '/home'
            }
        },
        mounted: function () {
            this.getData()
        },
        methods: {
            getData() {
                this.$http.get(domainUrl + '/course/' + this.$route.params.id, {
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
            }
        }
    }

</script>

<style scoped>

</style>