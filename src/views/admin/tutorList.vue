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
        <div class="tutor-box">
            <div class="container">
                <ul class="tutor-list">
                    <li class="tutor-item" v-for="tutor in tutors">
                        <div class="item-header">
                            <input type="checkbox">
                            <span>姓名： {{ tutor.name }}</span>
                        </div>
                        <div class="item-body">
                            <img class="tutor-avatar col-image" :src="tutor.media">
                            <div class="tutor-sex col-sex">{{ tutor.gender === 1 ? '男' : '女' }}</div>
                            <div class="tutor-tel col-tel">{{ tutor.phone }}</div>
                            <div class="tutor-desc col-desc">{{ tutor.introduction }}</div>
                            <div class="btns col-operate">
                                <a class="btn" href="javascript:;" @click="update(tutor, 2)"
                                   :class="{'btn-link': tutor.status !== 2, 'btn-primary': tutor.status === 2}">上架</a>
                                <a class="btn" href="javascript:;" @click="update(tutor, 3)"
                                   :class="{'btn-link': tutor.status !== 3, 'btn-primary': tutor.status === 3}">下架</a>
                                <router-link class="btn btn-link" :to="routeUrl + '/tutors/' + tutor.id + '/edit'">编辑</router-link>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import {domainUrl} from 'CONFIG/config'

    export default {
        data () {
            return {
                tutors: [],
                columns: [
                    {
                        name: 'name',
                        title: '姓名'
                    },
                    {
                        name: 'sex',
                        title: '性别',
                    },
                    {
                        name: 'tel',
                        title: '电话'
                    },
                    {
                        name: 'desc',
                        title: '介绍'
                    },
                    {
                        name: '__actions',
                        title: '操作',
                        actions: [
                            {
                                name: 'edit',
                                label: '编辑',
                            },
                            {
                                name: 'delete',
                                label: '删除',
                            }
                        ]
                    }
                ],
                tableData: []
            }
        },
        computed: {
            routeUrl () {
                return '/' + this.$route.params.lang + '/admin';
            },
        },
        mounted: function () {
            this.getData()
        },
        methods: {
            getData() {
                this.$http.get(domainUrl + '/admin/teacher/all', {
                    headers: {
                        'Lc-Lang': this.$route.params.lang === 'en' ? 'en' : 'zh',
                        'X-Auth-Token': localStorage.mytoken
                    },
                }).then(response => {
                    let body = response.body
                    console.log(body)
                    this.tutors = body
                }, response => {
                    let body = response.body
                    console.log(body);
                    if (body.code === 101) {
                        localStorage.mytoken = ''
                        this.$router.push('/login') // TODO
                    }
                })
            },
            update(teacher, status) {
                teacher.status = status;
                this.$http.post(domainUrl + '/admin/teacher/' + teacher.id + '/update', teacher, {
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
        },
        watch:{
            $route: function () {
                console.log('获取语言' + this.$route.params.lang);
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
        padding: 16px;
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
        height: 150px;
        text-align: center;
    }
    .tutor-list .tutor-avatar {
        float: left;
        height: 120px;
    }
    .tutor-list .btns {
        float: left;
        padding: 16px 48px;
        height: 100%;
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