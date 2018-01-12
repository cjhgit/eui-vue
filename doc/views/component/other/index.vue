<template>
    <div>
        <div>
            <h1>h1</h1>
            <h2>h2</h2>
            <h3>h3</h3>
            <h4>h4</h4>
            <h5>h5</h5>
            <h6>h6</h6>
        </div>
        <ui-article>
            <h1>一级标题</h1>
            <h2>二级标题</h2>
            <h3>三级标题</h3>
            <h4>四级标题</h4>
            <h5>五级标题</h5>
            <h6>六级标题</h6>
            <p>这是一个段落。</p>
            <p>这是第二个段落。</p>
            <ul>
                <li>无序列表项一</li>
                <li>无序列表项二</li>
                <li>无序列表项三</li>
            </ul>
            <ol>
                <li>有序列表项一</li>
                <li>有序列表项二</li>
                <li>有序列表项三</li>
            </ol>
            <p>测试一下<code>script</code>包含 code 的句子。</p>
            <pre><code>Hello hello = new Hello()
hello.sayWorld()</code></pre>
            <p>最后一段</p>
        </ui-article>
        <ui-article>
            <ui-markdown :content="exampleFormCode"></ui-markdown>
            <ui-demo :code="demoCode">
                <demo></demo>
            </ui-demo>
        </ui-article>
    </div>
</template>

<script>
    import demo from './demo.vue'
    import demoCode from '!raw-loader!./demo.vue'
    import exampleFormCode from 'raw-loader!./README.md'

    export default {
        components: {
            'demo': demo
        },
        data() {
            return {
                exampleFormCode: exampleFormCode,
                demoCode: demoCode
            }
        },
        mounted() {
        },
        methods: {
        }
    }
</script>

<style lang="scss" scoped>

</style>
