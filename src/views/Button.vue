<template>
    <div class="page-body-content">
        <ui-container>
            <h2>按钮</h2>
            <div>
                <ui-raised-button label="Default" class="demo-raised-button"/>
                <ui-icon-button icon="android"/>
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
