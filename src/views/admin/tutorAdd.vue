<template>
    <div class="layout-body">
        <div class="bread-nav">
            <ui-goback></ui-goback>
            <ol class="breadcrumb">
                <li><router-link :to="routeUrl + '/'">管理</router-link></li>
                <li><router-link :to="routeUrl + '/tutors'">导师信息管理</router-link></li>
                <li class="active">添加导师</li>
            </ol>
        </div>

        <button class="btn btn-primary" @click="create">添加导师</button>
        <div class="container">
            <div>添加导师</div>
        </div>
    </div>
</template>

<script>
    import {domainUrl} from 'CONFIG/config'

    export default {
        data () {
            return {
            }
        },
        computed: {
            routeUrl () {
                return '/' + this.$route.params.lang + '/admin';
            },
        },
        methods: {
            create() {
                this.$http.post(domainUrl + '/admin/teacher/create', {
                        name: "张老师",
                        gender: 1,
                        phone: "127837239383",
                        media:"upload/dsfdsf.jsp",
                        introduction:"i am introduce提",
                        status: 1,
                    },
                    {
                        headers: {
                            'Lc-Lang': this.$route.params.lang === 'en' ? 'en' : 'zh',
                            'X-Auth-Token': localStorage.mytoken
                        },
                    }
                ).then(response => {
                    this.$router.push(this.routeUrl + '/tutors')
                });
            }
        },
        watch:{
            $route: function () {
                console.log('获取语言' + this.$route.params.lang);
                this.tableData = this.getData(this.$route.params.lang);
            },
            'route': function () {
                console.log('cccc')
            }
        }
    }
</script>

<style scoped>
    .asd {

    }
</style>