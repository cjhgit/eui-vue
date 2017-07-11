<template>
    <div class="about">
        <h1>这是后台控制面板</h1>
    </div>
</template>

<script>
    import Vue from 'vue'
//    import Tag from './components/tag'
//    import Asd from './components/asd'
    //import Tag from './components/icon'
    //import Icon from './components/icon/index.js'
//    import Alert from './components/Alert'
//    import Tab from './components/Alert'


//    Vue.use(Tag);
    //Vue.use(Asd);
    //Vue.use(Icon);
//    Vue.use(Alert);


    export default {
        data: function () {
            return {
                token: null,
                username: '',
                uid: '1231212',
                appKey: 'asd123456'
            }
        },
        mounted: function () {
//            this.editor = UE.getEditor('editor');
        },
        methods: {
            loginout: function () {
                console.log('退出登录');
                localStorage.token = null;
                localStorage.username = '';

                this.$router.push('/login');

               // window.open('/login');
            }
        },
        components: {
//            Alert,
//            Asd,
//            Tab,
            //'Tag': Tag,
            //'Icon': Icon
        },
    }
</script>

<style>

</style>
