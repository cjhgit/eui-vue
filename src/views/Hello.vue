<template>
    <div class="page page-home">
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
        <h1>{{ msg }}</h1>

        <button @click="changeTheme">切换主题</button>

        <h2>图标22</h2>
        <div>
            <ui-icon value="home"/>
            <ui-icon value="flight_takeoff" color="red"/>
            <ui-icon value="cloud_download" color="orange"/>
            <ui-icon value="videogame_asset" color="blue"/>
        </div>

        <h2>按钮</h2>
        <div>
            <ui-raised-button label="Default" class="demo-raised-button"/>
            <ui-icon-button icon="android"/>
        </div>

        <h2>App bar</h2>
        <div>

        </div>

        <h2>面包屑</h2>
        <ui-breadcrumb>
            <ui-breadcrumb-item href="/">Home</ui-breadcrumb-item>
            <ui-breadcrumb-item href="/">VideoGame</ui-breadcrumb-item>
            <ui-breadcrumb-item>Download</ui-breadcrumb-item>
        </ui-breadcrumb>

        <h2>返回顶部</h2>
        <div>
            <div>121
                <ui-back-top>
                    121212121212
                </ui-back-top>
            </div>
        </div>
        <h1>分页</h1>
        <div class="">
            <!--<ui-pagination total="5" current="1"></ui-pagination>-->
        </div>

        <h2>表单</h2>
        <ui-text-field hintText="提示文字"/>

        <div>Switch22</div>
        <div>
            <ui-checkbox label="最简单的" class="demo-checkbox"/>
            <ui-radio label="单选 1" name="group" nativeValue="simple1" v-model="boolValue" class="demo-radio"/> <br/>
            <ui-switch label="开关" class="demo-switch" /><br/>
        </div>
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
        <h1>Bottom Nav</h1>
        <div>
            <ui-bottom-nav value="recents" @change="handleChange">
                <ui-bottom-nav-item value="recents" title="Recents" icon="restore"/>
                <ui-bottom-nav-item value="favorites" title="Favorites" icon="favorite"/>
                <ui-bottom-nav-item value="nearby" title="Nearby" icon="location_on"/>
            </ui-bottom-nav>
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

        <h2>Menu</h2>

        <h2>Slider</h2>
        <ui-slider v-model="value1" class="demo-slider"/>

        <h2>Badge</h2>
        <p>徽章组件，可以配合图标、按钮、列表等组件使用，用于标记一些数字和文字。</p>
        <div style="width: 300px;border: 1px solid #ccc">
            <ui-menu>
                <ui-menu-item title="menu 1">
                    <ui-badge content="12" slot="after"/>
                </ui-menu-item>
                <ui-menu-item title="menu 2">
                    <ui-badge content="old" primary slot="after"/>
                </ui-menu-item>
                <ui-menu-item title="menu 3">
                    <ui-badge content="news" secondary slot="after"/>
                </ui-menu-item>
            </ui-menu>
        </div>
        <h2>Paper</h2>
        <div>
            <ui-paper class="demo-paper" :zDepth="1" />
            <ui-paper class="demo-paper" :zDepth="2" />
            <ui-paper class="demo-paper" :zDepth="3" />
            <ui-paper class="demo-paper" :zDepth="4" />
            <ui-paper class="demo-paper" :zDepth="5" />
        </div>
        <ul>
            <li><a href="https://vuejs.org" target="_blank">Cor2e Docs</a></li>
            <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
            <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
            <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
            <br>
            <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
        </ul>
        <h2>Ecosystem</h2>
        <ul>
            <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
            <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
            <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
            <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
        </ul>
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
