<template>
    <div class="page page-admin">
        <ui-drawer :open="drawerVisible" :docked="true">
            <ui-appbar title="Yunser UI"></ui-appbar>
            <ui-list>
                <ui-list-item title="首页" to="/"/>
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
        <div class="page-content" :style="{'left': drawerVisible ? '256px' : '0'}">
            <header class="page-header">
                <ui-appbar title="Menu233">
                    <ui-icon-button icon="menu" slot="left" @click.native="drawerVisible = !drawerVisible"/>

                    <ui-flat-button slot="right" label="expand_more" ref="button" @click="toggle">
                        <ui-popover :trigger="trigger" :open="open" @close="handleClose">
                            <div>1212</div>
                            <div>1212</div>
                            <div>1212</div>
                            <!--<ui-menu>-->
                                <!--<ui-menu-item title="Refresh"/>-->
                                <!--<ui-menu-item title="Send feedback"/>-->
                                <!--<ui-menu-item title="Settings"/>-->
                                <!--<ui-menu-item title="Help"/>-->
                                <!--<ui-menu-item title="Sign out"/>-->
                            <!--</ui-menu>-->
                        </ui-popover>
                    </ui-flat-button>

                    <ui-icon-button icon="expand_more" slot="right"/>
                    <ui-icon-menu icon="more_vert" slot="right">
                        <ui-menu-item title="菜单 1"/>
                        <ui-menu-item title="菜单 2"/>
                        <ui-menu-item title="菜单 3"/>
                        <ui-menu-item title="菜单 4"/>
                        <ui-menu-item title="菜单 5"/>
                    </ui-icon-menu>
                    <ui-icon-button icon="menu" slot="right" to="/help"/>
                </ui-appbar>
            </header>
            <div class="page-body">
                <ui-container top>

                    <ui-card class="admin-card">
                        <ui-card-header title="Myron Avatar" subTitle="sub title">
                        </ui-card-header>
                        <ui-card-title title="1212" subTitle="Content Title"/>
                        <ui-card-text>
                            232散2落222在指尖的阳222光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。
                            调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。
                            似乎在诉说着，我也2222可以在漆黑的角落里，找到阴影背后的阳光，
                            找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！
                        </ui-card-text>
                        <ui-card-actions>
                            <ui-flat-button label="Action 1"/>
                            <ui-flat-button label="Action 2"/>
                        </ui-card-actions>
                    </ui-card>
                </ui-container>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'hello',
        data () {
            return {
                drawerVisible: true,
                activeTab: 'tab1',
                boolValue: true,
                value1: 50,
                open: false,
                trigger: null
            }
        },
        mounted() {
            this.trigger = this.$refs.button.$el
        },
        methods: {
            toggle () {
                this.open = !this.open
            },
            handleClose (e) {
                this.open = false
            },
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
    .page-admin {
        background-color: #f1f1f1;
    }
    .admin-card {
        width: 300px;
    }
    .demo-paper {
        width: 100px;
        height: 100px;
    }
</style>
