<template>
    <header class="page-header">
        <ui-appbar title="微信管理系统 v1.0">
            <ui-icon-button icon="menu2" slot="left"/>
            <ui-icon-menu icon="more_vert" slot="right">
                <ui-menu-item title="菜单 1"/>
                <ui-menu-item title="菜单 2"/>
                <ui-menu-item title="菜单 3"/>
                <ui-menu-item title="菜单 4"/>
                <ui-menu-item title="菜单 5"/>
            </ui-icon-menu>
        </ui-appbar>
    </header>
</template>

<script>
    export default {
        name: 'ui-header',
        data() {
            return {
            }
        },
        mounted() {
        },
        methods: {
        }
    }
</script>
