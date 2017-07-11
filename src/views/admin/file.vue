<template>
    <div class="layout-body">
        <div class="admin-nav">
            <div class="bread-nav">
                <ol class="breadcrumb">
                    <li class="active">素材管理</li>
                </ol>
            </div>
            <router-link class="btn btn-primary" :to="routeUrl + '/courses/add'">添加课程</router-link>
        </div>
        <ul class="admin-header">
            <li class="col-image">图片</li>
            <li class="col-sex">性别</li>
            <li class="col-tel">电话</li>
            <li class="col-desc">介绍</li>
            <li class="col-operate">操作</li>
        </ul>

        <div class="course-box">
            <ul class="course-list">
                <li class="course-item" v-for="file in files">
                    <div class="item-header">
                        <input type="checkbox">
                        <span>文件名称： {{ file.name }}</span>
                    </div>
                    <div class="item-body">
                        <img class="course-image" :src="domainUrl + '/' + file.url">
                        <div class="btns">
                            <vue-button type="danger" @click="remove(file.id)">删除</vue-button>
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
            this.getData();
        },
        methods: {
            getData() {
                this.$http.get(domainUrl + '/admin/file/all', {
                    headers: {
                        'Lc-Lang': this.$route.params.lang === 'en' ? 'en' : 'zh',
                        'X-Auth-Token': localStorage.mytoken
                    },
                }).then(response => {
                    let body = response.body
                    console.log(body)
                    this.files = body
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
            }
        }
    }
</script>

<style scoped>
    /**/
    .course-box {
        height: 500px;
        overflow: auto;
    }
    .admin-header {
        background-color: #F1EFF1;
        margin-bottom: 24px;
        overflow: hidden;
    }
    .admin-header li {
        display: inline-block;
        float: left;
        text-align: center;
        padding: 16px 24px;
    }
    .col-image {
        width: 180px;
    }
    .col-sex {
        width: 140px;
    }
    .col-tel {

    }
    .col-desc {

    }
    .col-operate {

    }
    /**/
    .course-list {
        margin: 0 24px;
    }
    .course-list .course-item {
        border: 1px solid #ccc;
        margin-bottom: 24px;
    }
    .course-list .item-header {
        padding: 16px;
        border-bottom: 1px solid #ccc;
    }
    .course-list .item-body {
        padding: 16px;
        overflow: hidden;
    }
    .course-list .course-content {
        float: left;
        width: 120px;
        text-align: center;
    }
    .course-list .course-image {
        float: left;
        width: 120px;
        height: 120px;
        margin-right: 20px;
    }
    .course-list .btns {

    }
    .course-list .btns .btn {
        display: block;
    }
</style>