<template>
    <div id="app">
        <header class="layout-header">
            <div class="container">
                <div class="container">
                    <h1>EUI-vue 做最好的VUE UI</h1>
                </div>
            </div>
        </header>
        <div class="layout-body">
            <div class="container">
                <div class="col-sm-4">
                    <h2>导航</h2>
                    <ul>
                        <li><router-link to="/foo">首页</router-link></li>
                        <li><router-link to="/foo">Go to Foo</router-link></li>
                        <li><router-link to="/bar">Go to Bar</router-link></li>
                        <li><router-link to="/about">关于</router-link></li>
                        <li><router-link to="/test">测试</router-link></li>
                    </ul>
                </div>
                <div class="col-sm-8">
                    <h1>内容</h1>
                    <router-view></router-view>
                </div>
            </div>
        </div>
        <footer class="layout-footer">
        </footer>
    </div>
</template>

<script>
    export default {
        name: 'app'
    }
</script>

<style>

</style>
