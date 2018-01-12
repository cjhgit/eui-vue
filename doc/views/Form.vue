<template>
    <div class="page-body-content">
        <ui-container>
            <h2>表单</h2>
            <ui-text-field hintText="提示文字"/>

            <div>Switch22</div>
            <div>
                <ui-checkbox label="最简单的" class="demo-checkbox"/>
                <ui-radio label="单选 1" name="group" nativeValue="simple1" v-model="boolValue" class="demo-radio"/> <br/>
                <ui-switch label="开关" class="demo-switch" /><br/>
            </div>

            <h2>Slider</h2>
            <ui-slider v-model="value1" class="demo-slider"/>
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
