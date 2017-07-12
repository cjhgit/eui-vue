<template>
    <div class="layout-body">
        <div class="layout-body-content">
            <div class="admin-nav border-bottom">
                <div class="container">
                    <div class="bread-nav">
                        <ui-goback></ui-goback>
                        <ol class="breadcrumb">
                            <li><router-link :to="routeUrl + '/'">管理</router-link></li>
                            <li class="active">新建文章</li>
                        </ol>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="admin-form">
                    <div class="form-horizontal" style="width: 500px">
                        <div class="form-group">
                            <label class="control-label col-sm-3">标题：</label>
                            <div class="col-sm-9">
                                <input class="form-control" v-model="article.title" name="courseName" v-validate="'required'">
                                <div v-show="errors.has('title')" class="help-block is-danger">{{ errors.first('title') }}</div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-sm-3">封面：</label>
                            <div class="col-sm-9">
                                <img class="article-img" :src="domainUrl + '/' + article.medias" v-if="article.medias">
                                <ui-file :url="domainUrl + '/admin/file/save?'" :success="uploadSuccess">本地上传</ui-file>
                            </div>
                        </div>
                    </div>
                </div>
                <script id="editor" type="text/plain"></script>
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
    import { Message } from 'element-ui';

    export default {
        data () {
            return {
                article: {
                    title: '',
                    medias: '',
                    status: 0
                },
                editor: null
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
        mounted: function () {
            this.editor = UE.getEditor('editor', {
                initialFrameWidth: 800,
                initialFrameHeight: 300,
            })
            var _this = this
            setTimeout(() => {
                _this.editor.setHeight(300) // TODO 这段代码必须延迟执行，否则异常，原因不明
            }, 500)
        },
        methods: {
            save() {
                if (!this.article.title) {
                    Message({
                        type: 'warning',
                        message: '文章标题不能为空'
                    })
                    return
                }

                if (!this.article.medias) {
                    Message({
                        type: 'warning',
                        message: '请上传文章封面'
                    })
                    return
                }

                let content = this.editor.getContent()
                if (!content) {
                    Message({
                        type: 'warning',
                        message: '文章内容不能为空'
                    })
                    return
                }

                this.article.content = content
                this.$http.post(domainUrl + '/admin/news/create', this.article,
                    {
                        headers: {
                            'Lc-Lang': this.$route.params.lang === 'en' ? 'en' : 'zh',
                            'X-Auth-Token': localStorage.mytoken
                        },
                    }
                ).then(response => {
                    this.$router.push(this.routeUrl + '/articles')
                }, response => {
                    let body = response.body
                    console.log(body);
                    if (body.code === 101 || body.code === 103) {
                        localStorage.mytoken = ''
                        this.$router.push('/login') // TODO
                    }
                });
            },
            cancel() {
                this.$router.go(-1)
            },
            uploadSuccess(url) {
                this.article.medias = url
            },
        },
        destroyed: function () {
            this.editor.destroy()
        },
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

    .article-img {
        width: 120px;
        height: 120px;
    }
</style>
