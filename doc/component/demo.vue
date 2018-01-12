<template>
    <div class="ui-demo">
        <div class="demo">
            <slot></slot>
        </div>
        <div class="code">
            <ui-markdown :content="codeContent"></ui-markdown>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            code: {
                type: String,
                default: ''
            }
        },
        computed: {
            codeContent() {
                return `\`\`\`html
${this.code}
             \`\`\``
            }
        },
        created () {
        },
        methods: {
        }
    }
</script>

<style lang="scss">
    .ui-demo {
        margin-top: 16px;
        border: 1px solid #ccc;
        .demo {
            padding: 16px;
            /*margin-bottom: 16px;*/
        }
    }
</style>