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

        <ul class="admin-tab border-bottom">
            <div class="container">
                <router-link class="tab-item" :to="routeUrl + '/resources/banner'">海报素材</router-link>
                <router-link class="tab-item active" :to="routeUrl + '/resources/playground'">场地素材</router-link>
            </div>
        </ul>

        <!--<div class="admin-header">
            <div class="container">
                <input class="select-all" type="checkbox"> 全选
                <button class="btn btn-primary">删除</button>
            </div>
        </div>-->

        <div class="container">
            <ui-empty v-if="!playgrounds.length"></ui-empty>

            <ul class="row playground-list">
                <li class="col-sm-3" v-for="playground in playgrounds">
                    <div class="card-box">
                        <img class="card-image" :src="domainUrl + '/' + playground.url">
                        <div class="box-body">
                            <input type="checkbox"> {{ playground.name }}
                        </div>

                        <ui-popover
                                ref="popover4"
                                placement="right"
                                width="400"
                                trigger="click">
                            <div>12121212</div>
                        </ui-popover>

                        <div class="box-footer">
                            <span class="left">
                                <ui-popover
                                        placement="top"
                                        width="180"
                                        v-model="playground.visible"
                                        trigger="click">
                                        <div class="popover-box">
                                            <div class="title">编辑名称</div>
                                            <input class="form-control" :value="playground.name">
                                            <div>
                                                <button class="btn btn-primary btn-xs" @click="update">确定</button>
                                                <button class="btn btn-default btn-xs" @click="playground.visible = false">取消</button>
                                            </div>
                                        </div>
                                    <i class="icon icon-edit" v-tooltip="'2121ewd21212'" type="warning"
                                       slot="reference"></i>
                                    <!--<ui-button type="warning" icon="delete" size="mini"-->
                                    <!--slot="reference">删除</ui-button>-->
                                </ui-popover>

                                <!--<ui-icon type="edit"></ui-icon>-->
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
    import { Button } from 'element-ui'
    import { Popover } from 'element-ui'

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
        components: {
            'ui-button': Button,
            'ui-popover': Popover
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
                    if (body.code === 101 || body.code === 103) {
                        localStorage.mytoken = ''
                        this.$router.push('/login') // TODO
                    }
                })
            },
            uploadSuccess(url) {
                this.uploadUrl = url

                this.$http.post(domainUrl + '/admin/location/create', {
                        name: '图片',
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
            update() {

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
                    if (body.code === 101 || body.code === 103) {
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
    .popover-box {
        padding: 8px;
    }
    .popover-box .title {
        margin-bottom: 8px;
    }
    .popover-box .form-control {
        height: 28px;
        margin-bottom: 8px;
    }
    .popover-box .btn {
        width: 48%;
        /*height: 28px;*/
    }
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