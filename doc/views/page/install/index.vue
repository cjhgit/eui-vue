<template>
    <ui-article>
        <ui-markdown :content="doc"></ui-markdown>
    </ui-article>
</template>

<script>
    import doc from 'raw-loader!./README.md'

    export default {
        data() {
            return {
                doc: doc
            }
        }
    }
</script>
