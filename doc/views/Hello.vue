<template>
    <div class="page page-home">
        <ui-drawer :open="true" :docked="true">
            <ui-appbar title="Yunser UI"></ui-appbar>
            <ui-list>
                <ui-list-item title="首页" to="/"/>
                <ui-list-item title="快速开始" toggleNested>
                    <ui-list-item title="安装" slot="nested" to="install"></ui-list-item>
                    <ui-list-item title="使用" slot="nested" to="usage"></ui-list-item>
                </ui-list-item>
                <ui-list-item title="组件" toggleNested>
                    <ui-list-item title="Icon" slot="nested" to="icon"></ui-list-item>
                    <ui-list-item title="App Bar" slot="nested" to="appbar"></ui-list-item>
                    <ui-list-item title="Badge" slot="nested" to="badge"></ui-list-item>
                    <ui-list-item title="List" slot="nested" to="list"></ui-list-item>
                    <ui-list-item title="Pager" slot="nested" to="pager"></ui-list-item>
                    <ui-list-item title="Button" slot="nested" to="button"></ui-list-item>
                    <ui-list-item title="Form" slot="nested" to="form"></ui-list-item>
                    <ui-list-item title="Nav" slot="nested" to="nav"></ui-list-item>
                    <ui-list-item title="其他" slot="nested" to="other"></ui-list-item>
                </ui-list-item>
                <ui-list-item title="页面" toggleNested>
                    <ui-list-item title="404" slot="nested" to="/404"></ui-list-item>
                    <ui-list-item title="管理平台" slot="nested" to="admin"></ui-list-item>
                </ui-list-item>
                <ui-list-item title="关于" to="about"/>
            </ui-list>
        </ui-drawer>
        <div class="page-content">
            <header class="page-header">
                <ui-appbar title="Menu">
                    <!--<ui-icon-button icon="menu" slot="left"/>-->
                    <!--<ui-icon-menu icon="more_vert" slot="right">-->
                    <!--<ui-menu-item title="菜单 1"/>-->
                    <!--<ui-menu-item title="菜单 2"/>-->
                    <!--<ui-menu-item title="菜单 3"/>-->
                    <!--<ui-menu-item title="菜单 4"/>-->
                    <!--<ui-menu-item title="菜单 5"/>-->
                    <!--</ui-icon-menu>-->
                </ui-appbar>
            </header>
            <div class="page-body">
                <div class="my-container">
                    <router-view></router-view>
                </div>

                <!--<button @click="changeTheme">切换2主题</button>-->
            </div>
        </div>
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
            },
            close() {
            }
        }
    }
</script>

<style scoped>
    .my-container {
        padding: 16px;
    }
    .demo-paper {
        width: 100px;
        height: 100px;
    }
</style>
