<template>
    <div class="layout-body">
        <div class="admin-nav border-bottom">
            <div class="container">
                <div class="bread-nav">
                    <ol class="breadcrumb">
                        <li class="active">媒体中心</li>
                    </ol>
                </div>
                <ui-file :url="domainUrl + '/admin/file/save'" :success="uploadSuccess">上传文件</ui-file>
            </div>
        </div>

        <div class="container">
            <ui-empty v-if="!files.length"></ui-empty>

            <ul class="row file-list">
                <li class="col-sm-3" v-for="file in files">
                    <div class="card-box">
                        <router-link :to="routeUrl + '/files/' + file.id">
                            <img class="card-image" :src="domainUrl + '/' + file.url" v-if="isImage(file.url)">
                            <img class="card-image" src="/static/img/empty.png" v-else>
                        </router-link>
                        <div class="box-body">
                            <div class="file-name">{{ file.url.replace('upload/', '') }}</div>
                        </div>
                        <div class="box-footer">
                            <span class="left">
                            </span>
                            <span class="center">
                            </span>
                            <span class="right">
                                    <i data-v-47dbc752="" class="icon icon-remove" @click="remove(file.id)"></i>
                            </span>
                        </div>
                    </div>
                </li>
            </ul>

            <ui-page :page="page" :total="totalPage" :gotoPage="gotoPage"></ui-page>
        </div>
    </div>
</template>

<script>
    import {domainUrl} from 'CONFIG/config'
    import Util from '@/util/util'

    export default {
        data () {
            return {
                page: 1,
                totalPage: 1,
                pageSize: 16,

                files: [],
            }
        },
        computed: {
            domainUrl() {
                return domainUrl;
            },
            routeUrl () {
                return '/' + this.$route.params.lang + '/admin';
            },
        },
        mounted() {
            this.getData(1);
        },
        methods: {
            gotoPage(page) {
                this.page = page
                this.getData(page)
            },
            getData(page) {
                this.$http.post(domainUrl + '/admin/file/list', {
                    page: page,
                    pageSize: this.pageSize
                }, {
                    headers: {
                        'Lc-Lang': this.$route.params.lang === 'en' ? 'en' : 'zh',
                        'X-Auth-Token': localStorage.mytoken
                    },
                }).then(response => {
                    let body = response.body
                    console.log(body)
                    this.files = body.data
                    this.totalPage = Math.ceil(body.total / this.pageSize)
                }, response => {
                    let body = response.body
                    console.log(body);
                    if (body.code === 101 || body.code === 103) {
                        localStorage.mytoken = ''
                        this.$router.push('/login') // TODO
                    }
                })
            },
            remove(id) {
                this.$http.delete(domainUrl + '/admin/file/' + id + '/delete', {
                    headers: {
                        'Lc-Lang': this.$route.params.lang === 'en' ? 'en' : 'zh',
                        'X-Auth-Token': localStorage.mytoken
                    },
                }).then(response => {
                    for (let i = 0; i < this.files.length; i++) {
                        if (this.files[i].id === id) {
                            this.files.splice(i, 1)
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
            update(course, status) {
                course.status = status;
                this.$http.post(domainUrl + '/admin/course/' + course.id + '/update', course, {
                    headers: {
                        'Lc-Lang': this.$route.params.lang === 'en' ? 'en' : 'zh',
                        'X-Auth-Token': localStorage.mytoken
                    },
                }).then(response => {

                }, response => {
                    let body = response.body
                    console.log(body)

                })
            },
            uploadSuccess(url, media) {
                this.files.unshift(media)
                console.log(media)
                this.uploadUrl = url
            },
            isImage(path) {
                return Util.fileType(path) === 'image'
            }
        }
    }
</script>

<style scoped>
    /**/
    .file-list {
        margin-top: 24px;
    }
    .file-list .playground-image {
        width: 100%;
        height: 160px;
    }
    .file-name {
        height: 40px;
        overflow: hidden;
    }
    
    /**/
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