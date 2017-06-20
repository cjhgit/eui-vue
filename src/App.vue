<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data: function () {
            return {
                token: null,
                username: '',
                uid: '1231212',
                appKey: 'asd123456'
            }
        },
        methods: {
            loginout: function () {
                console.log('退出登录');
                localStorage.token = '';
                localStorage.username = '';

                this.$router.push('/login');

                //window.open('/login');
            },

        },
        components: {
            //'Tag': Tag,
            //'Icon': Icon
        },
    }

</script>

<style>

</style>
