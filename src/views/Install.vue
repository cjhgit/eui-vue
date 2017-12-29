<template>
    <div class="page-body-content">
        <ui-container>
            <h2>关于</h2>
            <p>Yunser UI for Vue（简称 UI） 已经发布在 <a href="https://www.npmjs.com/package/muse-ui">npm</a>, 可以使用 <code>npm</code> 和 <code>yarn</code> 安装，或者使用 <code>&lt;script&gt;</code> 直接在网页中引入。</p>
            <h3>引入图标和字体</h3>
            <p>UI 使用了 material design 的字体和图标，需要在网页中引入。</p>
            <pre>
                <code>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic">
                    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
                </code>
            </pre>
            <h3>npm / yarn 安装</h3>
            <pre>
                <code>
                    npm install --save yunser-ui-vue
                </code>
            </pre>
            <p>或者</p>
            <pre>
                <code>
                    yarn add yunser-ui-vue
                </code>
            </pre>


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
