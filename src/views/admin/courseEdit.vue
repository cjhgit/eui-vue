<template>
    <div class="layout-body">
        <div class="admin-nav border-bottom">
            <div class="container">
                <div class="bread-nav">
                    <ui-goback></ui-goback>
                    <ol class="breadcrumb">
                        <li><router-link :to="routeUrl + '/'">管理</router-link></li>
                        <li class="active">课程编辑</li>
                    </ol>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="admin-form">
                <div class="form-horizontal" style="width: 500px">
                    <div class="form-group">
                        <label class="control-label col-sm-3">名称：</label>
                        <div class="col-sm-9">
                            <input class="form-control" v-model="course.name" name="courseName" v-validate="'required'">
                            <div v-show="errors.has('courseName')" class="help-block is-danger">{{ errors.first('courseName') }}</div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-sm-3">介绍：</label>
                        <div class="col-sm-9">
                            <textarea class="form-control" v-model="course.introduction" rows="3" name="courseDesc" v-validate="'required'"></textarea>
                            <div v-show="errors.has('courseName')" class="help-block is-danger">{{ errors.first('courseName') }}</div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-sm-3">图片：</label>
                        <div class="col-sm-9">
                            <ui-file :url="domainUrl + '/admin/file/save'" :success="uploadSuccess">本地上传</ui-file>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="layout-footer-btn">
            <button class="btn btn-default" @click="cancel">取消</button>
            <button class="btn btn-primary" @click="save">保存</button>
        </div>
    </div>
</template>

<script>
    import {domainUrl} from 'CONFIG/config'

    export default {
        data () {
            return {
                course: {},
                myfile: null,
                input: null,
                courseName: '',
                courseDesc: '',
                uploadUrl: null,
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
                this.$http.get(domainUrl + '/admin/course/' + this.$route.params.id, {
                    headers: {
                        'Lc-Lang': this.$route.params.lang === 'en' ? 'en' : 'zh',
                        'X-Auth-Token': localStorage.mytoken
                    },
                }).then(response => {
                    let body = response.body
                    console.log(body)
                    this.course = body
                }, response => {
                    let body = response.body
                    console.log(body);
                    if (body.code === 101 || body.code === 103) {
                        localStorage.mytoken = ''
                        this.$router.push('/login') // TODO
                    }
                })
            },
            save() {
                this.$validator.validateAll().then(() => {
                    this.$http.post(domainUrl + '/admin/updateUser', this.course,
                        {
                            headers: {
                                'Lc-Lang': this.$route.params.lang === 'en' ? 'en' : 'zh',
                                'X-Auth-Token': localStorage.mytoken
                            },
                        }
                    ).then(response => {
                        this.$router.push(this.routeUrl + '/users')
                    });
                });
            },
            uploadSuccess(url) {
                console.log('成功了' + url);
                this.uploadUrl = url
            },
            cancel() {
                this.$router.go(-1)
            }
        },
        watch:{
            $route: function () {
                this.tableData = this.getData(this.$route.params.lang)
            },
            'route': function () {
                console.log('cccc')
            }
        }
    }
</script>

<style scoped>
    .footer-btn {

    }
</style>