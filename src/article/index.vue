<template>
    <article class="ui-article">
        <slot></slot>
    </article>
</template>

<script>
    export default {
        name: 'ui-article',
        data() {
            return {
            }
        },
        mounted() {
        },
        methods: {
        }
    }
</script>

<style lang="scss">
    .ui-article {
        p {
            line-height: 1.7;
            margin-bottom: 15px;
        }
        img {
            max-width: 100%;
        }
        h1 {
            margin-top: 20px;
            margin-bottom: 15px;
            padding-bottom: 5px;
            font-size: 30px;
        }
        h2 {
            margin-top: 20px;
            margin-bottom: 15px;
            padding-bottom: 5px;
            font-size: 25px;
        }
        h3 {
            font-size: 22px;
            margin-top: 15px;
            margin-bottom: 15px;
        }
        h4 {
            font-size: 20px;
        }
        h5,
        h6 {
            font-size: 20px;
        }
        ul,
        ol {
            padding: 10px 0;
        }
        ul li {
            margin-left: 20px;
            padding: 4px 0;
            list-style-type: disc;
        }
        ol li {
            margin-left: 20px;
            padding: 4px 0;
            list-style-type: decimal;
        }
    }
</style>
