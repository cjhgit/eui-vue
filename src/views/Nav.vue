<template>
    <div class="page-body-content">
        <ui-container>
            <h2>面包屑</h2>
            <ui-breadcrumb>
                <ui-breadcrumb-item href="/">Home</ui-breadcrumb-item>
                <ui-breadcrumb-item to="/">VideoGame</ui-breadcrumb-item>
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

            <h1>Bottom Nav</h1>
            <div>
                <ui-bottom-nav value="recents" @change="handleChange">
                    <ui-bottom-nav-item value="recents" title="Recents" icon="restore"/>
                    <ui-bottom-nav-item value="favorites" title="Favorites" icon="favorite"/>
                    <ui-bottom-nav-item value="nearby" title="Nearby" icon="location_on"/>
                </ui-bottom-nav>
            </div>
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
