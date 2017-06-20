<template>
    <div>
        <h1>添加文章</h1>
        <button></button>
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
        methods: {
            getEditorContent: function() {
                console.log(this.editor.getContent());
            }
        },
        mounted: function () {
            this.editor = UE.getEditor('editor');
        },
        destroyed: function () {
            this.editor.destroy();
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
