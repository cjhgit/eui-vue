<template>
    <div class="layout-body">
        <div class="admin-nav">
            <div class="container">
                <div class="bread-nav">
                    <ol class="breadcrumb">
                        <li class="active">素材管理</li>
                    </ol>
                </div>
                <router-link class="btn btn-primary" :to="routeUrl + '/tutors/add'">本地上传</router-link>
            </div>
        </div>

        <div class="container">
            <ul class="admin-tab">
                <router-link class="tab-item" :to="routeUrl + '/resources/banner'">海报素材</router-link>
                <router-link class="tab-item" :to="routeUrl + '/resources/playground'">场地素材</router-link>
            </ul>
        </div>

        <div class="admin-header">
            <div class="container">
                <input type="checkbox"> 全选
                <button class="btn btn-primary">删除</button>
            </div>
        </div>

        <div class="container">
            <ul class="row playground-list">
                <li class="col-sm-3" v-for="playground in playgrounds">
                    <div class="card-box">
                        <img class="playground-image" src="http://localhost:1234/static/img/avatar.jpg">
                        <div class="box-body">
                            <input type="checkbox"> 教室图片
                        </div>
                        <div class="box-footer">
                            <span class="left">
                                <ui-icon type="edit" v-tooltip="'2121ewd21212'"></ui-icon>
                            </span>
                            <span class="center">
                                <ui-icon type="sort" v-tooltip="'排序'"></ui-icon>
                            </span>
                            <span class="right">
                                <ui-icon type="remove" v-tooltip="'删除'" @click="remove(playground.id)"></ui-icon>
                            </span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                playgrounds: [
                    {
                        id: '1',
                        image: 'http://localhost:1234/static/img/avatar.jpg'
                    },
                    {
                        id: '1',
                        image: 'http://localhost:1234/static/img/avatar.jpg'
                    },
                    {
                        id: '1',
                        image: 'http://localhost:1234/static/img/avatar.jpg'
                    },
                    {
                        id: '1',
                        image: 'http://localhost:1234/static/img/avatar.jpg'
                    },
                    {
                        id: '1',
                        image: 'http://localhost:1234/static/img/avatar.jpg'
                    },
                    {
                        id: '1',
                        image: 'http://localhost:1234/static/img/avatar.jpg'
                    },
                    {
                        id: '1',
                        image: 'http://localhost:1234/static/img/avatar.jpg'
                    }
                ],
                search: function () {

                    //this
                },
                addArticle: function () {

                },
                columns: [
                    {
                        name: '__checkbox',
                        title: ''
                    },
                    {
                        name: 'title',
                        title: '文章标题'
                    },
                    {
                        name: 'createTime',
                        title: '创建时间',
                    },
                    {
                        name: 'car_type',
                        title: '备注'
                    },
                    {
                        name: '__actions',
                        title: '操作',
                        actions: [
                            {
                                name: 'delete',
                                label: '查看'
                            },
                            {
                                name: 'edit',
                                label: '编辑',
                                hasAuth: 'read&noauth'
                            },
                            {
                                name: 'delete',
                                label: '删除',
                                //type: 'select'
                            }
                        ]
                    }
                ],
                tableData: [
                    {
                        "id": 1,
                        'title': '文章标题一',
                        "createTime": "2016-12-09",
                        "car_type": 1
                    },
                    {
                        "id": 3,
                        'title': '文章标题二',
                        "createTime": "2016-12-09",
                        "car_type": 2
                    }
                ]
            }
        },
        computed: {
            routeUrl () {
                return '/' + this.$route.params.lang + '/admin';
            },
        },
        methods: {
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

    .admin-tab {
        margin-bottom: 8px;
    }
    .admin-tab .tab-item {
        padding: 8px 0;
        margin-right: 16px;
        color: #333;
        font-size: 18px;
    }
    .admin-tab .tab-item.active {
        border-bottom: 2px solid #A9517A;
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
    .left {
        display: inline-block;
        width: 33.3%;
        text-align: left;
    }
    .right {
        display: inline-block;
        width: 33.3%;
        text-align: right;
    }
    .center {
        display: inline-block;
        width: 28%;
        text-align: center;
    }
</style>