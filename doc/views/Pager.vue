<template>
    <div class="page-body-content">
        <ui-container>
            <h2>Paper</h2>
            <div>
                <ui-paper class="demo-paper" :zDepth="1" />
                <ui-paper class="demo-paper" :zDepth="2" />
                <ui-paper class="demo-paper" :zDepth="3" />
                <ui-paper class="demo-paper" :zDepth="4" />
                <ui-paper class="demo-paper" :zDepth="5" />
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
