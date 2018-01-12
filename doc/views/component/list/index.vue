<template>
    <ui-article>
        <ui-markdown :content="exampleFormCode"></ui-markdown>
        <ui-demo :code="demoCode">
            <demo></demo>
        </ui-demo>
    </ui-article>
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
