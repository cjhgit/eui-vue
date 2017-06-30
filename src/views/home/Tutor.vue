<template>
    <div class="layout-body">
        <div class="container">

            <div class="bread-nav">
                <ui-goback></ui-goback>
                <ol class="breadcrumb">
                    <li><router-link :to="'/'">{{ $t('home') }}</router-link></li>
                    <li class="active">{{ $t('tutorDesc') }}</li>
                </ol>
            </div>

            <ul class="tutor-list row">
                <li class="col-sm-3" v-for="tutor in tutors">
                    <div class="tutor-item">
                        <router-link :to="routeUrl + '/tutors/' + tutor.id">
                            <div class="center">
                                <div class="hexagon">
                                    <div class="hexagon-in1">
                                        <div class="hexagon-in2"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="tutor-name">{{ tutor.name }}</div>
                            <div class="tutor-desc">{{ tutor.desc }}</div>
                        </router-link>
                    </div>
                </li>
            </ul>
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
                tutors: [

                ]
            }
        },
        computed: {
            routeUrl () {
                return '/' + this.$route.params.lang + '/home';
            }
        },
        created: function () {
            console.log('获取语言' + this.$route.params.lang);
            this.tutors = [
                {
                    id: new Date().getTime(),
                    name: '导师名称',
                    desc: '导师介绍'
                },
                {
                    id: new Date().getTime(),
                    name: '导师名称',
                    desc: '导师介绍'
                },
                {
                    id: new Date().getTime(),
                    name: '导师名称',
                    desc: '导师介绍'
                },
                {
                    id: new Date().getTime(),
                    name: '导师名称',
                    desc: '导师介绍'
                },
                {
                    id: new Date().getTime(),
                    name: '导师名称',
                    desc: '导师介绍'
                },
                {
                    id: new Date().getTime(),
                    name: '导师名称',
                    desc: '导师介绍'
                }
            ]
        },
        methods: {

        }
    }

</script>

<style scoped>
    .avatar {
        width: 80px;
        height: 80px;
        border-radius: 40px;
    }
    .tutor-list {
    }
    .tutor-list .tutor-item {
        height: 300px;
        padding: 16px;
        margin-bottom: 24px;
        border: 1px solid #ccc;
    }
    .tutor-list .tutor-item:hover {
        border-bottom: 4px solid #B5BF71;
    }
    .tutor-list .tutor-name {
        position: relative;
        top: -24px;
        margin-bottom: 16px;
        text-align: center;
        font-size: 18px;
        color: #000;
    }
    .tutor-list .tutor-desc {
        position: relative;
        top: -24px;
        color: #999;
    }
    .tutor-list .center {
        width: 160px;
        margin: auto;
        margin-top: -50px;
    }
    .tutor-list .hexagon {
        width: 160px;
        height: 320px;
        overflow: hidden;
        visibility: hidden;
        transform: rotate(120deg);
        cursor: pointer;
    }
    .tutor-list .hexagon-in1 {
        overflow: hidden;
        width: 100%;
        height: 100%;
        transform: rotate(-60deg);
    }
    .tutor-list .hexagon-in2 {
        width: 100%;
        height: 100%;
        visibility: visible;
        transform: rotate(-60deg);
        background: url(http://lorempixel.com/g/250/350/people);
        background-repeat: no-repeat;
        background-position: 50%;
    }
    @media (min-width: 768px) {
        .tutor-list .center {
            width: 100px;
            margin-top: -30px;
        }
        .tutor-list .hexagon {
            width: 100px;
            height: 200px;
        }
    }

</style>