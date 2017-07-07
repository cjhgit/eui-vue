<template>
    <div class="layout-body">
        <div class="admin-nav ">
            <div class="container">
                <div class="bread-nav">
                    <ol class="breadcrumb">
                        <li class="active">素材管理</li>
                    </ol>
                </div>
                <ui-file :url="domainUrl + '/admin/file/save'" :success="uploadSuccess">本地上传</ui-file>
                <!--<router-link class="btn btn-primary" :to="routeUrl + '/tutors/add'">本地上传</router-link>-->
            </div>
        </div>

        <div class="container">
            <ul class="admin-tab">
                <router-link class="tab-item" :to="routeUrl + '/resources/banner'">海报素材</router-link>
                <router-link class="tab-item active" :to="routeUrl + '/resources/playground'">场地素材</router-link>
            </ul>
        </div>

        <!--<div class="admin-header">
            <div class="container">
                <input class="select-all" type="checkbox"> 全选
                <button class="btn btn-primary">删除</button>
            </div>
        </div>-->

        <div class="container">
            <ul class="row playground-list">
                <li class="col-sm-3" v-for="playground in playgrounds">
                    <div class="card-box">
                        <img class="card-image" :src="domainUrl + '/' + playground.url">
                        <div class="box-body">
                            <input type="checkbox"> {{ playground.name }}
                        </div>
                        <div class="box-footer">
                            <span class="left">
                                <ui-icon type="edit" v-tooltip="'2121ewd21212'"></ui-icon>
                            </span>
                            <span class="center">
                                <!--<ui-icon type="sort" v-tooltip="'排序'"></ui-icon>-->
                            </span>
                            <span class="right">
                                <i data-v-47dbc752="" class="icon icon-remove" @click="remove(playground.id)"></i>
                                <!--<ui-icon type="remove" v-tooltip="'删除'" @click="remove(playground.id)"></ui-icon>-->
                            </span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
    import {domainUrl} from 'CONFIG/config'

    export default {
        data () {
            return {
                playgrounds: [],
            }
        },
        computed: {
            domainUrl() {
                return domainUrl
            },
            routeUrl () {
                return '/' + this.$route.params.lang + '/admin'
            },
        },
        mounted() {
            this.getData()
        },
        methods: {
            getData() {
                this.$http.get(domainUrl + '/admin/location/all', {
                    headers: {
                        'Lc-Lang': this.$route.params.lang === 'en' ? 'en' : 'zh',
                        'X-Auth-Token': localStorage.mytoken
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
            uploadSuccess(url) {
                this.uploadUrl = url

                this.$http.post(domainUrl + '/admin/location/create', {
                        name: '图片1',
                        url: this.uploadUrl
                    },
                    {
                        headers: {
                            'Lc-Lang': this.$route.params.lang === 'en' ? 'en' : 'zh',
                            'X-Auth-Token': localStorage.mytoken
                        },
                    }
                ).then(response => {
                    this.playgrounds.push(response.body)
                    this.$router.push(this.routeUrl + '/resources/playground')
                });
            },
            remove(id) {
                this.$http.delete(domainUrl + '/admin/location/' + id + '/delete', {
                    headers: {
                        'Lc-Lang': this.$route.params.lang === 'en' ? 'en' : 'zh',
                        'X-Auth-Token': localStorage.mytoken
                    },
                }).then(response => {
                    for (let i = 0; i < this.playgrounds.length; i++) {
                        if (this.playgrounds[i].id === id) {
                            this.playgrounds.splice(i, 1)
                        }
                    }
                }, response => {
                    let body = response.body
                    console.log(body)
                    if (body.code === 101) {
                        localStorage.mytoken = ''
                        this.$router.push('/login') // TODO
                    }
                })
            },
            edit: function () {
                alert('编辑');
            }
        }
    }
</script>

<style scoped>
    /**/
    .admin-header {
        background-color: #F1EFF1;
        padding: 12px 0;
        margin-bottom: 24px;
        overflow: hidden;
    }
    .admin-header .select-all {
        margin-right: 16px;
    }

    .playground-list {

    }
    .playground-list .playground-image {
        width: 100%;
        height: 160px;
    }

    .card-box {
        margin-bottom: 24px;
        border: 1px solid #ccc;
    }
    .card-box .box-body {
        padding: 8px;
    }
    .card-box .box-footer {
        padding: 8px;
        background-color: #F3F1F3;
    }
    .card-box .box-footer .icon {
        color: #999;
        font-size: 20px;
        cursor: pointer;
    }
    .card-box .card-image {
        width: 100%;
        height: 160px;
    }
    .card-box .left {
        display: inline-block;
        width: 33.3%;
        text-align: left;
    }
    .card-box .right {
        display: inline-block;
        width: 33.3%;
        text-align: right;
    }
    .card-box .center {
        display: inline-block;
        width: 28%;
        text-align: center;
    }
</style>