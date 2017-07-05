<template>
    <div class="layout-body">
        <div class="container">
            <div class="bread-nav">
                <ui-goback></ui-goback>
                <ol class="breadcrumb">
                    <li><router-link :to="routeUrl">{{ $t('home') }}</router-link></li>
                    <li class="active">{{ $t('about') }}</li>
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

            <div class="row">
                <div class="col-sm-12">


                    <p>{{count}}
                        <button @click="inc">+</button>
                        <button @click="dec">-</button>
                    </p>





                </div>
            </div>
        </div>
    </div>
</template>


<script>
    import i18n from '@/i18n'

    import Vue from 'vue'
    import Vuex from 'vuex'
    import store from '@/store'
    Vue.use(Vuex);

    //Vue.use(vuex)

    /*const store = new Vuex.Store({
        state: {
            count: 0
        },
        mutations: {
            inc: state => state.count++,
            dec: state => state.count--
        }
    })*/

    export default {
        i18n,
        data () {
            return {
                article: null
                //count: 0,

            }
        },
        computed: {
            routeUrl () {
                return '/' + this.$route.params.lang + '/home';
            },
            count () {
                return store.state.count
            }
        },
        mounted() {
            this.article = {
                title: '这是文章的标题',
                content: '<h2>什么是XXX？</h2><p>这是文章的内容</p><h2>第二段的标题</h2><p>这是第二段</p>'
            };
        },
        methods: {
            inc() {
                store.commit('inc')
//                this.count++
            },
            dec () {
                store.commit('dec')
//                this.count--
            },
        }
    }
</script>
<!--

<style lang="sass">
    .demo {
        margin-top: 60px;
        padding: 20px;
        background-color: #f00;
    }
    select {
        border: solid 1px #000;
    }
</style>
-->
