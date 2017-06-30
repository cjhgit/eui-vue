<template>
    <div class="layout-body">
        <div class="container">
            <div class="bread-nav">
                <ui-goback></ui-goback>
                <ol class="breadcrumb">
                    <li><router-link :to="'/'">{{ $t('home') }}</router-link></li>
                    <li class="active">{{ $t('playground') }}</li>
                </ol>
            </div>

            <ul class="row playground-list">
                <li class="col-sm-4" v-for="playground in playgrounds">
                    <div class="playground-item" @click="showImage(playground.image)">
                        <img class="playground-img" :src="playground.image">
                        <div class="playground-name">主要工作区</div>
                        <div class="mask">
                            <ui-icon type="zoomin"></ui-icon>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="viewbox" v-if="viewboxVisible">
            <div class="mask" @click="hideViewbox">
                <img class="viewbox-image" src="/static/img/playground.jpg">
            </div>
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
                playgrounds: [

                ],
                viewboxVisible: false
            }
        },
        computed: {
            routeUrl () {
                return '/' + this.$route.params.lang + '/home';
            }
        },
        created: function () {
            console.log('获取语言' + this.$route.params.lang);
            this.playgrounds = [
                {
                    id: new Date().getTime(),
                    image: '/static/img/playground.jpg'
                },
                {
                    id: new Date().getTime(),
                    image: '/static/img/playground.jpg'
                },
                {
                    id: new Date().getTime(),
                    image: '/static/img/playground.jpg'
                },
                {
                    id: new Date().getTime(),
                    image: '/static/img/playground.jpg'
                },
                {
                    id: new Date().getTime(),
                    image: '/static/img/playground.jpg'
                },
                {
                    id: new Date().getTime(),
                    image: '/static/img/playground.jpg'
                },
            ]
        },

        methods: {
            hideViewbox() {
                this.viewboxVisible = false;
            },
            showImage(src) {
                this.viewboxVisible = true;
            }
        }
    }

</script>

<style scoped>
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
    .viewbox-image {
        display: block;
        margin: 300px auto;
    }
    /**/
    .playground-list {

    }
    .playground-list .playground-item {
        position: relative;
        margin-bottom: 24px;
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
        display: block;
        width: 30px;
        margin: 100px auto;
        color: #fff;
        font-size: 30px;
    }
</style>