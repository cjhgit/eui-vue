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
        destroyed: function () {
//            this.editor.destroy();
        },
        methods: {
            loginout: function () {
                console.log('退出登录');
                localStorage.token = null;
                localStorage.username = '';

                this.$router.push('/login');

               // window.open('/login');
            },
            showNotification: function () {
                if (window.Notification) {
                    console.log('支持');
                    if (Notification.permission === "denied") {
                        alert('你已经禁用浏览器通知，请在浏览器中开启。');
                        return;
                    }
                    // 支持


                    Notification.requestPermission(function(status) {
                        var n = new Notification('通知标题', { body: '这里是通知内容！' });
                    });
                } else {
                    alert('你的浏览器不支持通知')
                    console.log('不支持');
                    // 不支持
                }
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

    if(window.Notification && Notification.permission !== "denied") {

    }


</script>

<style>

</style>
