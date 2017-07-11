<template>
    <div class="layout-body">
        <div class="container">
            <div class="bread-nav">
                <ui-goback></ui-goback>
                <ol class="breadcrumb">
                    <li><router-link :to="routeUrl">{{ $t('home') }}</router-link></li>
                    <li class="active">{{ $t('playground') }}</li>
                </ol>
            </div>

            <ul class="row playground-list row-sm">
                <li class="col-sm-4" v-for="playground in playgrounds">
                    <div class="playground-item" @click="showImage(domainUrl + '/' + playground.url)">
                        <img class="playground-img" :src="domainUrl + '/' + playground.url">
                        <div class="playground-name">{{ playground.name }}</div>
                        <div class="mask">
                            <ui-icon type="zoomin"></ui-icon>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="viewbox" v-if="viewboxVisible">
            <div class="mask" @click="hideViewbox">
                <div class="img-wrap">
                    <ui-icon type="close"></ui-icon>
                    <img class="viewbox-image" :src="viewboxImg">
                </div>
            </div>
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
                playgrounds: [],
                viewboxVisible: false,
                viewboxImage: '/static/img/playground.jpg'
            }
        },
        computed: {
            domainUrl() {
                return domainUrl;
            },
            routeUrl () {
                return '/' + this.$route.params.lang + '/home';
            }
        },
        mounted: function () {
            this.getData()
        },

        methods: {
            getData() {
                this.$http.get(domainUrl + '/location/all', {
                    headers: {
                        'Lc-Lang': this.$route.params.lang === 'en' ? 'en' : 'zh'
                    },
                }).then(response => {
                    let body = response.body
                    console.log(body)
                    this.playgrounds = body
                }, response => {
                    let body = response.body
                    console.log(body);
                    if (body.code === 101) {
                        localStorage.mytoken = ''
                        this.$router.push('/login') // TODO
                    }
                })
            },
            hideViewbox() {
                this.viewboxVisible = false;
            },
            showImage(src) {
                this.viewboxImg = src;
                this.viewboxVisible = true;
            }
        }
    }

</script>

<style scoped>

    /**/
    .viewbox {

    }
    .viewbox .mask {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(0, 0, 0, .6);
    }
    .viewbox .img-wrap {
        position: relative;
        display: block;
        max-width: 500px;
        margin: 240px auto;
    }
    .viewbox .viewbox-image {
        width: 100%;
    }
    .viewbox .icon-close {
        position: absolute;
        top: 8px;
        right: 8px;
        z-index: 100;
        color: #fff;
        cursor: pointer;
    }
        /**/
    .playground-list {

    }
    .playground-list .playground-item {
        position: relative;
        height: 280px;
        margin-bottom: 16px;
    }
    .playground-list .playground-item:hover {
        cursor: pointer;
    }
    .playground-list .playground-img {
        width: 100%;
        height: 100%;
    }
    .playground-list .playground-name {
        position: absolute;
        bottom: 8px;
        left: 16px;
        color: #fff;
    }
    .playground-list .mask {
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .6);
        transition: all .3s;
    }
    .playground-list .playground-item:hover .mask {
        display: block;
    }
    .playground-list .icon {
        position: absolute;
        display: block;
        width: 30px;
        margin-left: -15px;
        margin-top: -15px;
        left: 50%;
        top: 50%;
        color: #fff;
        font-size: 30px;
    }
</style>