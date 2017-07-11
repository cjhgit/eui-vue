<template>
    <div class="layout-body">
        <div class="admin-nav">
            <div class="container">
                <div class="bread-nav">
                    <ol class="breadcrumb">
                        <li class="active">素材管理</li>
                    </ol>
                </div>
                <ui-file :url="domainUrl + '/admin/file/save'" :success="uploadSuccess">本地上传</ui-file>
            </div>
        </div>

        <ul class="admin-tab border-bottom">
            <div class="container">
                <router-link class="tab-item active" :to="routeUrl + '/resources/banner'">海报素材</router-link>
                <router-link class="tab-item" :to="routeUrl + '/resources/playground'">场地素材</router-link>
            </div>
        </ul>


        <!--<div class="admin-header">
            <div class="container">
                <label class="select-all"><input type="checkbox" v-model="checked" @click="checkedAll"> 全选</label>
                <button class="btn btn-primary">删除</button>
            </div>
        </div>-->

        <div class="container">
            <ui-empty v-if="!banners.length"></ui-empty>

            <ul class="row banner-list">
                <li class="col-sm-3" v-for="banner in banners">
                    <div class="card-box">
                        <img class="card-image" :src="domainUrl + '/' + banner.url">
                        <div class="box-body">
                            <input type="checkbox" v-model="checkboxModel" :value="banner.id"> {{ banner.name }}
                        </div>
                        <div class="box-footer">
                            <span class="left">
                                <ui-icon type="edit" v-tooltip="'2121ewd21212'"></ui-icon>
                            </span>
                            <span class="center">
                                <i data-v-47dbc752="" class="icon icon-sort" @click="sort(banner.id)"></i>
                                <!--<ui-icon type="sort" v-tooltip="'排序'" ></ui-icon>-->
                            </span>
                            <span class="right">
                                <i data-v-47dbc752="" class="icon icon-remove" @click="remove(banner.id)"></i>
                                <!--<ui-icon type="remove" v-tooltip="'删除'" @click="remove(banner.id)"></ui-icon>-->
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
                checkList: [],
                banners: [],
                checkboxModel: ['1','3','4'],
                checked: ""
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
        mounted() {
            this.getData()
        },
        methods: {
            getData() {
                this.$http.get(domainUrl + '/admin/banner/all', {
                    headers: {
                        'Lc-Lang': this.$route.params.lang === 'en' ? 'en' : 'zh',
                        'X-Auth-Token': localStorage.mytoken
                    },
                }).then(response => {
                    let body = response.body
                    console.log(body)
                    this.banners = body
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
                this.$http.delete(domainUrl + '/admin/banner/' + id + '/delete', {
                    headers: {
                        'Lc-Lang': this.$route.params.lang === 'en' ? 'en' : 'zh',
                        'X-Auth-Token': localStorage.mytoken
                    },
                }).then(response => {
                    for (let i = 0; i < this.banners.length; i++) {
                        if (this.banners[i].id === id) {
                            this.banners.splice(i, 1)
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
            uploadSuccess(url) {
                this.uploadUrl = url

                this.$http.post(domainUrl + '/admin/banner/create', {
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
                    this.banners.push(response.body)
                    this.$router.push(this.routeUrl + '/resources/banner')
                });
            },
            sort(id) {
                for (let i = 0; i < this.banners.length; i++) {
                    if (this.banners[i].id === id) {
                        if (i === 0) {
                            break;
                        }
                        let idx = i
                        this.$http.get(domainUrl + '/admin/banner/swap?id1=' + id + '&id2=' + this.banners[i - 1].id, {
                            headers: {
                                'Lc-Lang': this.$route.params.lang === 'en' ? 'en' : 'zh',
                                'X-Auth-Token': localStorage.mytoken
                            },
                        }).then(response => {
                            this.getData()
//                            console.log(this.banners)
//                            console.log('家婆换'+idx)
//                            let tmp = this.banners[idx]
//                            this.banners[idx] = this.banners[idx - 1]
//                            console.log(this.banners)
//                            this.banners[idx - 1] = tmp
                        }, response => {

                        })
                    }
                }
            },
            edit: function () {
                alert('编辑');
            },
            checkedAll() {
                var _this = this;
                console.log(_this.checkboxModel);
                if (this.checked) {//实现反选
                    _this.checkboxModel = [];
                    _this.banners.forEach(function(item) {
                        _this.checkboxModel.push(item.id);
                    });
                }else{//实现全选
                    _this.checkboxModel = [];


                }
            }
        }
    }
</script>

<style scoped>
    .admin-header {
        background-color: #F1EFF1;
        padding: 12px 0;
        margin-bottom: 24px;
        overflow: hidden;
    }
    .admin-header .select-all {
        margin-right: 16px;
        font-size: 16px;
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