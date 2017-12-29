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
                    <ui-list-item title="Badge" slot="nested" to="badge"></ui-list-item>
                    <ui-list-item title="Pager" slot="nested" to="pager"></ui-list-item>
                    <ui-list-item title="Button" slot="nested" to="button"></ui-list-item>
                    <ui-list-item title="Form" slot="nested" to="form"></ui-list-item>
                    <ui-list-item title="Nav" slot="nested" to="nav"></ui-list-item>
                </ui-list-item>
                <ui-list-item title="页面" toggleNested>
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
                <router-view></router-view>

                <button @click="changeTheme">切换2主题</button>

                <h2>图标22</h2>
                <div>
                    <ui-icon value="home"/>
                    <ui-icon value="flight_takeoff" color="red"/>
                    <ui-icon value="cloud_download" color="orange"/>
                    <ui-icon value="videogame_asset" color="blue"/>
                </div>

                <h2>App bar</h2>



                <h2>List</h2>
                <div>
                    <ui-list>
                        <ui-list-item title="Inbox">
                        </ui-list-item>
                    </ui-list>
                </div>
                <h2>Tab</h2>
                <ui-tabs :value="activeTab" @change="handleTabChange">
                    <ui-tab value="tab1" title="TAB ONE"/>
                    <ui-tab value="tab2" title="TAB TWO"/>
                    <ui-tab value="tab3" @active="handleActive" title="TAB ACTIVE"/>
                </ui-tabs>
                <div v-if="activeTab === 'tab1'">
                    <h2>Tab One</h2>
                    <p>
                        这是第一个 tab
                    </p>
                </div>
                <div v-if="activeTab === 'tab2'">
                    <h2>Tab Two</h2>
                    <p>
                        这是第二个 tab
                    </p>
                </div>
                <div v-if="activeTab === 'tab3'">
                    <h2>Tab Three</h2>
                    <p>
                        这是第三个 tab
                    </p>
                </div>

                <h1>子标题</h1>
                <div>

                </div>
                <h2>对话框</h2>
                <div>
                    <ui-dialog title="Dialog" :open="false">
                        这是一个简单的弹出框2
                        <ui-flat-button slot="actions" @click="close" primary label="取消"/>
                        <ui-flat-button slot="actions" primary @click="close" label="确定"/>
                    </ui-dialog>
                </div>


                <h1>Bottom Shift</h1>
                <ui-bottom-sheet :open="false">
                    <ui-list>
                        <ui-sub-header>
                            请选择一个
                        </ui-sub-header>
                        <ui-list-item title="阴阳师"/>
                        <ui-list-item title="贪吃蛇大作战"/>
                        <ui-list-item title="一划到底"/>
                        <ui-list-item title="全民斗地主"/>
                    </ui-list>
                </ui-bottom-sheet>
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
