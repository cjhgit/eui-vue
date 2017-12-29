<template>
    <div class="page-body-content">
        <ui-container>
            <h2>使用</h2>
            <p>Muse-UI 和其它 vue 的插件一样可以使用 Vue.use() 方法全部加载， 也可以通过 webpack 配置来单组件加载。</p>
            <h2>全部加载</h2>
            <pre>
                <code>
import Vue from 'vue'
import YunserUI from 'yunser-ui-vue'
import 'yunser-ui-vue/dist/muse-ui.css'
Vue.use(MuseUI)
                </code>
            </pre>
            <h2>单个组件加载</h2>
        </ui-container>
    </div>
</template>

<script>
    export default {
        name: 'hello',
        data () {
            return {
                activeTab: 'tab1',
                boolValue: true,
                value1: 50
            }
        },
        methods: {
            changeTheme() {

            },
            handleTabChange (val) {
                this.activeTab = val
            },
            handleActive () {
                window.alert('tab active')
            }
        }
    }
</script>

<style scoped>
    .demo-paper {
        width: 100px;
        height: 100px;
    }
</style>
