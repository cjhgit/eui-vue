<template>
    <div class="layout-body">
        <div class="layout-body-content">
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
                            <label class="control-label col-sm-3">图片：</label>
                            <div class="col-sm-9">
                                <img class="course-img" :src="domainUrl + '/' + course.media" v-if="course.media">
                                <ui-file :url="domainUrl + '/admin/file/save'" :success="uploadSuccess">本地上传</ui-file>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-sm-3">介绍：</label>
                            <div class="col-sm-9">
                                <script id="editor" type="text/plain"></script>

                                <!--<textarea class="form-control" v-model="course.introduction" rows="3" name="courseDesc" v-validate="'required'"></textarea>-->
                                <!--<div v-show="errors.has('courseName')" class="help-block is-danger">{{ errors.first('courseName') }}</div>-->
                            </div>
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
                editor: null
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
            this.editor = UE.getEditor('editor', {
                initialFrameWidth: 800,
                initialFrameHeight: 300,
                scaleEnabled: false
            })

            var _this = this
            setTimeout(() => {
                _this.editor.setHeight(300) // TODO 这段代码必须延迟执行，否则异常，原因不明
            }, 500)

            this.getData()
        },
        destroyed: function () {
            this.editor.destroy()
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
                    let _this = this
                    this.editor.addListener("ready", function () {
                        _this.editor.execCommand( 'inserthtml', body.introduction);
                    });
                    _this.editor.execCommand( 'inserthtml', body.introduction);
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
                    this.course.introduction = this.editor.getContent()
                    console.log('保存')
                    this.$http.post(domainUrl + '/admin/course/' + this.course.id + '/update', this.course,
                        {
                            headers: {
                                'Lc-Lang': this.$route.params.lang === 'en' ? 'en' : 'zh',
                                'X-Auth-Token': localStorage.mytoken
                            },
                        }
                    ).then(response => {
                        this.$router.push(this.routeUrl + '/courses')
                    }, response => {
                        let body = response.body
                        console.log(body);
                        if (body.code === 101 || body.code === 103) {
                            localStorage.mytoken = ''
                            this.$router.push('/login') // TODO
                        }
                    });
                });
            },
            uploadSuccess(url) {
                this.course.media = url
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
    .layout-body-content {
        position: absolute;
        top: 0;
        bottom: 80px;
        width: 100%;
        overflow: auto;
    }

    .course-img {
        width: 120px;
        height: 120px;
    }
</style>