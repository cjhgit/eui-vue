<template>
    <div class="layout-body">
        <div class="container">
            <img class="img-404" src="/static/img/404.png">
            <div class="error-text">{{ $t('error404') }}</div>
        </div>
    </div>
</template>


<script>
    import Vue from 'vue'
    import i18n from '@/i18n'

    export default {
        i18n,
        data () {
            return {
                error: ''
            }
        },
        mounted() {
        },
        computed: {
            routeUrl () {
                return '/' + this.$route.params.lang + '/home'
            },
            count () {
                return store.state.count
            }
        },
    }
</script>

<style scoped>
    .img-404 {
        display: block;
        width: 320px;
        margin: 160px auto 16px auto;
    }
    .error-text {
        color: #999;
        font-size: 18px;
        text-align: center;
    }
</style>