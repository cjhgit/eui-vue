<template>
    <div class="layout-body">
        <div class="admin-nav">
            <div class="container">
                <div class="bread-nav">
                    <ol class="breadcrumb">
                        <li class="active">导师信息管理</li>
                    </ol>
                </div>
                <router-link class="btn btn-primary" :to="routeUrl + '/tutors/add'">添加导师</router-link>
            </div>
        </div>
        <div class="admin-header">
            <div class="container">
                <ul>
                    <li class="col-image">图片</li>
                    <li class="col-sex">性别</li>
                    <li class="col-tel">电话</li>
                    <li class="col-desc">介绍</li>
                    <li class="col-operate">操作</li>
                </ul>
            </div>
        </div>
        <div class="container">
            <ui-empty v-if="!tutors.length"></ui-empty>
            <ul class="tutor-list">
                <li class="tutor-item" v-for="tutor in tutors">
                    <div class="item-header">
                        <input type="checkbox">
                        <span>姓名： {{ tutor.name }}</span>
                    </div>
                    <div class="item-body">
                        <div class="img-box col-image">
                            <img class="tutor-avatar" :src="domainUrl + '/' + tutor.media">
                        </div>
                        <div class="tutor-sex col-sex">{{ tutor.gender === 1 ? '男' : '女' }}</div>
                        <div class="tutor-tel col-tel">{{ tutor.phone }}</div>
                        <div class="tutor-desc col-desc">{{ tutor.introduction }}</div>
                        <div class="btns col-operate">
                            <div class="btn-inbox">
                                <a class="btn" href="javascript:;" @click="update(tutor, 2)"
                                   :class="{'btn-link': tutor.status !== 2, 'btn-primary': tutor.status === 2}">上架</a>
                                <a class="btn" href="javascript:;" @click="update(tutor, 3)"
                                   :class="{'btn-link': tutor.status !== 3, 'btn-primary': tutor.status === 3}">下架</a>
                                <router-link class="btn btn-link" :to="routeUrl + '/tutors/' + tutor.id + '/edit'">编辑</router-link>
                                <a class="btn" href="javascript:;" @click="remove(tutor.id)">删除</a>
                            </div>
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

    export default {
        data () {
            return {
                page: 1,
                totalPage: 1,
                pageSize: 12,

                tutors: []
            }
        },
        computed: {
            domainUrl() {
                return domainUrl
            },
            routeUrl () {
                return '/' + this.$route.params.lang + '/admin';
            },
        },
        mounted: function () {
            this.getData(1)
        },
        methods: {
            gotoPage(page) {
                this.page = page
                this.getData(page)
            },
            getData(page) {
                this.$http.post(domainUrl + '/admin/teacher/list', {
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
                    this.tutors = body.data
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
            update(teacher, status) {
                teacher.status = status;
                this.$http.post(domainUrl + '/admin/teacher/' + teacher.id + '/updateStatus', {
                    status: status
                }, {
                    headers: {
                        'Lc-Lang': this.$route.params.lang === 'en' ? 'en' : 'zh',
                        'X-Auth-Token': localStorage.mytoken
                    },
                    emulateJSON: true
                }).then(response => {

                }, response => {
                    let body = response.body
                    console.log(body)

                })
            },
            remove(id) {
                this.$http.delete(domainUrl + '/admin/teacher/' + id + '/delete', {
                    headers: {
                        'Lc-Lang': this.$route.params.lang === 'en' ? 'en' : 'zh',
                        'X-Auth-Token': localStorage.mytoken
                    },
                }).then(response => {
                    for (let i = 0; i < this.tutors.length; i++) {
                        if (this.tutors[i].id === id) {
                            this.tutors.splice(i, 1)
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
        },
        watch:{
            $route: function () {
                this.tableData = this.getData(this.$route.params.lang);
            },
            'route': function () {
                console.log('cccc')
            }
        }
    }
</script>

<style scoped>

    .tutor-list {
    }
    .tutor-list .tutor-item {
        border: 1px solid #ccc;
        margin-bottom: 24px;
    }
    .tutor-list .item-header {
        padding: 16px;
        border-bottom: 1px solid #ccc;
    }
    .tutor-list .item-body {
        height: 160px;
        overflow: hidden;
    }
    .tutor-list .tutor-sex {
        float: left;
        text-align: center;
        line-height: 120px;
    }
    .tutor-list .tutor-tel {
        float: left;
        text-align: center;
        line-height: 120px;
    }
    .tutor-list .tutor-desc {
        float: left;
        height: 60px;
        margin-top: 30px;
        text-align: center;
        overflow: hidden;
    }
    .tutor-list .img-box {
        float: left;
        height: 100%;
    }
    .tutor-list .tutor-avatar {
        display: block;
        width: 120px;
        height: 120px;
        margin: 20px auto;
    }
    .tutor-list .btns {
        float: left;
        height: 100%;
        padding: 16px 48px;
        border-left: 1px solid #ccc;
    }
    .tutor-list .btn-inbox {
        width: 60px;
        margin: 0 auto;
    }
    .tutor-list .btns .btn {
        display: inline-block;
    }
    /**/
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
        width: 20%;
    }
    .col-sex {
        width: 20%;
    }
    .col-tel {
        width: 20%;
    }
    .col-desc {
        width: 20%;
    }
    .col-operate {
        width: 20%;
    }
    /**/
    .tutor-box {
        position: absolute;
        top: 220px;
        left: 0;
        width: 100%;
        bottom: 0;
        overflow: auto;
    }
</style>