<template>
    <div class="layout-body">
        <div class="container">
            <img class="img-404" src="/static/img/404.png">
            <div class="error-text">抱歉，你访问的页面已丢失！</div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'

    export default {
        data: function () {
            return {
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