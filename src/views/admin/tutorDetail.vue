<template>
    <div class="layout-body">
        <div class="bread-nav">
            <ui-goback></ui-goback>
            <ol class="breadcrumb">
                <li><router-link :to="routeUrl + '/'">管理</router-link></li>
                <li class="active">导师信息管理</li>
            </ol>
        </div>

        <div class="container">
            <router-link class="btn btn-primary" :to="routeUrl + '/tutors/add'">添加导师</router-link>
            <vue-table
                    :columns="columns"
                    :tableData="tableData"></vue-table>
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
        mounted: function () {
            this.getData();
        },
        methods: {
            getData() {
                alert(1)
                this.$http.get(domainUrl + '/teacher/' + this.$route.params.id, {
                    headers: {
                        'Lc-Lang': this.$route.params.lang === 'en' ? 'en' : 'zh',
                        'X-Auth-Token': localStorage.mytoken
                    },
                }).then(response => {
                    let body = response.body
                    console.log(body)
                    this.courses = body
                }, response => {
                    let body = response.body
                    console.log(body);
                    if (body.code === 101) {
                        localStorage.mytoken = ''
                        this.$router.push('/login') // TODO
                    }
                })

                if (lang === 'cn') {
                    return [
                        {
                            "id": 1,
                            'name': 'ANN',
                            'sex': '男',
                            'tel': '15602221234',
                            'desc': '紫然肌身活馆、加拿大身活馆总教练 台湾普拉提协会创办人以及第一届会长'
                        },
                        {
                            "id": 1,
                            'name': 'STN',
                            'sex': '女',
                            'tel': '15602221234',
                            'desc': '紫然肌身活馆、加拿大身活馆总教练 台湾普拉提协会创办人以及第一届会长'
                        }
                    ]
                } else {
                    return [
                        {
                            "id": 1,
                            'name': 'ANN',
                            'sex': '男',
                            'tel': '15602221234',
                            'desc': 'English test'
                        },
                        {
                            "id": 1,
                            'name': 'STN',
                            'sex': '女',
                            'tel': '15602221234',
                            'desc': 'English test'
                        }
                    ]
                }
            },
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