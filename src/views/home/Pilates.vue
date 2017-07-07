<template>
    <div class="layout-body">
        <div class="container">
            <div class="bread-nav">
                <ui-goback></ui-goback>
                <ol class="breadcrumb">
                    <li><router-link :to="routeUrl">{{ $t('home') }}</router-link></li>
                    <li class="active">{{ $t('pilates') }}</li>
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
    import i18n from '@/i18n'

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
            },
        },
        mounted() {
            this.getData()

        },
        methods: {
            getData() {
                if (this.$route.params.lang === 'cn') {
                    this.article = {
                        title: '什么是普拉提',
                        content: '<h2>什么是普拉提？</h2><p>Pilates(普拉提）是以德国人约瑟夫•休伯特斯•普拉提(Joseph Hubertus Pilates)姓氏命名的一种运动方式和技能。普拉提是一项运动，也是一门艺术，更是一门自然科学。通过训练人体的肌肉群，强化和稳定核心，把我们的身体雕塑到最理想的状态。</p><h2>为什么要学习普拉提？</h2><p>普拉提对缓解腰背疼痛有惊人的作用，同时对身体的控制、平衡有极大的改善。它侧重于身体的正确排列、运动的流畅、专注、呼吸等。当你将所有的这些方面联系到一起时，普拉提练习就变成了一个身心灵的锻炼。</p><p>这种锻炼方法可以塑造一个强大的核心，普拉提运动可以改善关节的灵活性和柔韧性，减少肌肉损伤的风险。</p>'
                    }
                } else {
                    this.article = {
                        title: '紫然肌简介',
                        content: '<p>XSXXXXXXXX。</p>'
                    };
                }
            },
        }
    }
</script>