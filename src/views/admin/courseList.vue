<template>
    <div class="layout-body">
        <div class="admin-nav">
            <div class="container">
                <div class="bread-nav">
                    <ol class="breadcrumb">
                        <li class="active">课程内容管理</li>
                    </ol>
                </div>
                <router-link class="btn btn-primary" :to="routeUrl + '/courses/add'">添加课程</router-link>
            </div>
        </div>
        <ul class="admin-header">
            <li class="col-image">课程图片</li>
            <li class="col-desc">课程介绍</li>
            <li class="col-operate">操作</li>
        </ul>

        <div class="course-box">
            <ul class="course-list">
                <li class="course-item" v-for="course in courses">
                    <div class="item-header">
                        <input type="checkbox">
                        <span>课程名称： {{ course.name }}</span>
                    </div>
                    <div class="item-body">
                        <div class="couse-img-box col-image">
                            <img class="course-image" :src="domainUrl + '/' + course.media">
                        </div>
                        <div class="course-content col-desc">{{ course.introduction }}</div>
                        <div class="btns col-operate">
                            <a class="btn" href="javascript:;" @click="update(course, 2)"
                               :class="{'btn-link': course.status !== 2, 'btn-primary': course.status === 2}">上架</a>
                            <a class="btn" href="javascript:;" @click="update(course, 3)"
                               :class="{'btn-link': course.status !== 3, 'btn-primary': course.status === 3}">下架</a>
                            <router-link class="btn btn-link" :to="routeUrl + '/tutors/' + course.id + '/edit'">编辑</router-link>
                            <a class="btn" href="javascript:;" @click="remove(course.id)">删除</a>
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
                key: '1223',
                search: function () {

                    //this
                },
                addArticle: function () {

                },
                courses: [],
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
            this.getData(this.$route.params.lang);
        },
        methods: {
            getData(lang) {
                this.$http.get(domainUrl + '/admin/course/all', {
                    headers: {
                        'Lc-Lang': this.$route.params.lang === 'en' ? 'en' : 'zh',
                        'X-Auth-Token': localStorage.mytoken
                    },
                }).then(response => {
                    let body = response.body
                    console.log(body)
                    this.courses = body
                }, response => {
                    let body = response.body
                    console.log(body);
                    if (body.code === 101) {
                        localStorage.mytoken = ''
                        this.$router.push('/login') // TODO
                    }
                })
            },
            remove(id) {
                this.$http.delete(domainUrl + '/admin/course/' + id + '/delete', {
                    headers: {
                        'Lc-Lang': this.$route.params.lang === 'en' ? 'en' : 'zh',
                        'X-Auth-Token': localStorage.mytoken
                    },
                }).then(response => {
                    for (let i = 0; i < this.courses.length; i++) {
                        if (this.courses[i].id === id) {
                            this.courses.splice(i, 1)
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
        width: 20%;
    }
    .col-desc {
        width: 50%;
    }
    .col-operate {
        width: 30%;
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
        height: 160px;
        padding: 16px;
        overflow: hidden;
    }
    .course-list .course-content {
        float: left;
        text-align: center;
    }
    .couse-img-box {
        float: left;
    }
    .course-list .course-image {
        width: 120px;
        height: 120px;
        margin: 0 auto;
    }
    .course-list .btns {
        float: left;
        padding: 16px 48px;
    }
    .course-list .btns .btn {
        display: inline-block;
    }
</style>