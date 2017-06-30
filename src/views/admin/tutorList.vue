<template>
    <div class="layout-body">
        <div class="bread-nav">
            <ui-goback></ui-goback>
            <ol class="breadcrumb">
                <li><router-link :to="routeUrl + '/'">管理</router-link></li>
                <li class="active">导师信息管理</li>
            </ol>
        </div>
        <router-link class="btn btn-primary" :to="routeUrl + '/tutors/add'">添加导师</router-link>

        <table>
            <tr>
                <th>图片</th>
                <th>性别</th>
                <th>电话</th>
                <th>介绍</th>
                <th>操作</th>
            </tr>
            <ul>
                <li class="tutor-list" v-for="tutor in tutors">
                    <div class="tutor-item">
                        <div>
                            <input type="checkbox">
                        </div>
                    </div>
                </li>
            </ul>
        </table>

        <div class="container">

            <vue-table
                :columns="columns"
                :tableData="tableData"
                @table-action="tableActions"></vue-table>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                tutors: [],
                columns: [
                    {
                        name: 'name',
                        title: '姓名'
                    },
                    {
                        name: 'sex',
                        title: '性别',
                    },
                    {
                        name: 'tel',
                        title: '电话'
                    },
                    {
                        name: 'desc',
                        title: '介绍'
                    },
                    {
                        name: '__actions',
                        title: '操作',
                        actions: [
                            {
                                name: 'edit',
                                label: '编辑',
                            },
                            {
                                name: 'delete',
                                label: '删除',
                            }
                        ]
                    }
                ],
                tableData: []
            }
        },
        computed: {
            routeUrl () {
                return '/' + this.$route.params.lang + '/admin';
            },
        },
        mounted: function () {
            console.log('mounted');
        },
        beforeMounted() {
            console.log('before mounted');
        },
        beforeUpdate() {
            console.log('before update');
        },
        created() {
            console.log('获取语言' + this.$route.params.lang);

            this.tutors = this.getData(this.$route.params.lang);
        },
        methods: {
            getData(lang) {
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
            tableActions(item) {
                console.log(item);
                let id = item.data.id;
                console.log('ID:' + id);
                switch (item.name) {
                    case 'view':
                        this.$router.push('/admin/orders/' + id);
                        break;
                    case 'edit':
                        this.$router.push('/admin/orders/1');
                        break;
                    case 'delete':
                        alert('删除'+id);
                        this.deleteModal = true;
                        break;
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