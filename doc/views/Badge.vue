<template>
    <div class="page-body-content">
        <ui-container>
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
