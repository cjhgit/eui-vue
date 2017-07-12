<template>
    <div class="layout-body">
        <div class="layout-body-content">
            <div class="admin-nav border-bottom">
                <div class="container">
                    <div class="bread-nav">
                        <ui-goback></ui-goback>
                        <ol class="breadcrumb">
                            <li><router-link :to="routeUrl + '/'">管理</router-link></li>
                            <li class="active">编辑文章</li>
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
                                <div v-show="errors.has('courseName')" class="help-block is-danger">{{ errors.first('courseName') }}</div>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="control-label col-sm-3">封面：</label>
                            <div class="col-sm-9">
                                <img class="article-img" :src="domainUrl + '/' + article.medias" v-if="article.medias">
                                <ui-file :url="domainUrl + '/admin/file/save?'" :success="uploadSuccess">本地上传</ui-file>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-sm-3">内容：</label>
                            <div class="col-sm-9">
                                <script id="editor" type="text/plain"></script>
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
    import Util from '@/util/util'

    export default {
        data () {
            return {
                article: {},
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
                this.$http.get(domainUrl + '/admin/news/' + this.$route.params.id, {
                    headers: {
                        'Lc-Lang': this.$route.params.lang === 'en' ? 'en' : 'zh',
                        'X-Auth-Token': localStorage.mytoken
                    },
                }).then(response => {
                    let body = response.body
                    console.log(body)
                    this.article = body
                    let _this = this
                    this.editor.addListener("ready", function () {
                        // editor准备好之后才可以使用
                        console.log(body.content)
                        //alert(1)
                        _this.editor.execCommand( 'inserthtml', body.content);
                    });
                    _this.editor.execCommand( 'inserthtml', body.content);

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
                this.article.content = this.editor.getContent()

                // 解析文章中的所有图片
                let urls = Util.getImagesFromHtml(this.article.content)
                let mediaList = []
                urls.forEach(url => mediaList.push({url: url}))
                this.article.mediaList = mediaList

                this.$http.post(domainUrl + '/admin/news/' + this.article.id + '/update', this.article,
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
