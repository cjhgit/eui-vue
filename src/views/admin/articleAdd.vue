<template>
    <div class="layout-body">
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
            <div @click="getEditorContent">获取编辑器内容</div>
            <input v-model="title" placeholder="文章标题">
            <script id="editor" type="text/plain"></script>
        </div>

        <div class="layout-footer-btn">
            <!--<vue-button type="primary">212</vue-button>-->
            <button class="btn btn-default" @click="cancel">取消</button>
            <button class="btn btn-primary" @click="save">保存</button>
        </div>
    </div>
</template>

<script>
    import {domainUrl} from 'CONFIG/config'
    /*import './assets/utf8-php/ueditor.config.js'
    import './assets/utf8-php/ueditor.all.min.js'
    import './assets/utf8-php/lang/zh-cn/zh-cn.js'
    import './assets/utf8-php/ueditor.parse.min.js'*/

    //document.domain = "192.168.3.110";

    export default {
        data () {
            return {
                uploadUrl: '',
                title: '',
                editor: null
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
        mounted: function () {

            /*UE.Editor.prototype._bkGetActionUrl = UE.Editor.prototype.getActionUrl
            UE.Editor.prototype.getActionUrl = function(action) {
                console.log('测试', action)
                if (action == 'uploadimage' || action == 'uploadscrawl') {
                    //return 'http://a.b.com/video.php';
                    return 'http://192.168.3.110:8989/admin/file/save';
                } else if (action == 'uploadvideo') {
                    return 'http://a.b.com/video.php';
                } else {
                    return this._bkGetActionUrl.call(this, action);
                }
            }*/
            /*
            UE.Editor.prototype.getActionUrl = function(action) {
                return this._bkGetActionUrl.call(this, action);
                console.log('测试', action)
                /!*if (action == 'uploadimage' || action == 'uploadscrawl' || action == 'uploadimage') {
                    return 'http://192.168.3.110:8989//admin/file/save';
                } else if (action == 'uploadvideo') {
                    return 'http://a.b.com/video.php';
                } else {
                    return this._bkGetActionUrl.call(this, action);
                }*!/
            }*/

            this.editor = UE.getEditor('editor');
        },
        methods: {
            save() {
                this.$http.post(domainUrl + '/admin/news/create', {
                        title: this.title,
                        //media: this.uploadUrl,
                        medias: '/upload/97b5d0a6-555f-4478-9912-311454b9b6d5.jpg',
                        content: this.editor.getContent(),
                        status: 2
                    },
                    {
                        headers: {
                            'Lc-Lang': this.$route.params.lang === 'en' ? 'en' : 'zh',
                            'X-Auth-Token': localStorage.mytoken
                        },
                    }
                ).then(response => {
                    this.$router.push(this.routeUrl + '/articles')
                });
            },
            cancel() {
                this.$router.go(-1)
            },
            getEditorContent: function() {
                console.log(this.editor.getContent());
            }
        },
        destroyed: function () {
            this.editor.destroy();
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
