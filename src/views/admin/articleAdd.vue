<template>
    <div class="layout-body">
        <div class="admin-nav">
            <div class="bread-nav">
                <ol class="breadcrumb">
                    <li><router-link :to="routeUrl + '/'">管理</router-link></li>
                    <li class="active">新建文章</li>
                </ol>
            </div>
        </div>

        <div @click="getEditorContent">获取编辑器内容</div>
        <script id="editor" type="text/plain"></script>
    </div>
</template>

<script>
    /*import './assets/utf8-php/ueditor.config.js'
    import './assets/utf8-php/ueditor.all.min.js'
    import './assets/utf8-php/lang/zh-cn/zh-cn.js'
    import './assets/utf8-php/ueditor.parse.min.js'*/

    export default {
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
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
            this.editor = UE.getEditor('editor');
        },
        methods: {
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
