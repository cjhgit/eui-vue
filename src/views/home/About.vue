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
                <div class="ui-article">
                    <div v-html="article.content"></div>
                </div>
            </article>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Vuex from 'vuex'
    import store from '@/store'
    import i18n from '@/i18n'
    import Util from '@/util/util'

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
                article: {}
            }
        },
        computed: {
            routeUrl () {
                return '/' + this.$route.params.lang + '/home'
            },
            count () {
                return store.state.count
            }
        },
        mounted() {
            this.getData()

            console.log('测试开始')
            let html = '<img src="aaa"/> <img asd="asasa" src="bbb"> <p>12121212121212212</p> '
            console.log(Util.getImagesFromHtml(html))
        },
        methods: {
            getData() {
                if (this.$route.params.lang === 'cn') {
                    this.article = {
                        title: '紫然肌简介',
                        content: '<p>紫然肌身活馆创立于2015年,致力打造中山首家专业普拉提健身机构,引进国外最先进的普拉提健身器械,协同最资深的普拉提健身导师,引进加拿大安普拉提瑜伽教育中心最新最专业的课程,为热爱普拉提,追求健康的你们提供名流明星们最推崇的健身塑身体验。</p><p>紫然肌身活馆本着“专业，健康，快乐，舒适”的理念，以真诚的心去创造一个和谐的普拉提交流平台，结合国外最专业的普拉提课程，帮助您把身体调整至自然、理想、健康的状态，达到训练深层肌群、稳定骨骼、修正肌肉收缩模式、减缓老化的效果，还你一个健康的身体。</p><p>风靡欧洲的普拉提由于具有“减肥效果”“修身塑形”而颇受关注，本馆开设了“普拉提基础班”“普拉提肩颈酸痛改善班”“马甲线雕塑班”“永不复胖姿势调整班”等课程，快速塑型，重点雕塑，让你由内到外变得既柔韧又结实，给你一个真正的美丽身姿。</p>'
                    };
                } else {
                    this.article = {
                        title: '紫然肌简介',
                        content: '<p>XSXXXXXXXX。</p>'
                    };
                }
            },
        }
//        methods: {
//            inc() {
//                store.commit('inc')
////                this.count++
//            },
//            dec () {
//                store.commit('dec')
////                this.count--
//            },
//        }
    }
</script>

<style scoped>

</style>