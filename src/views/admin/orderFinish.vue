<template>

    <div class="about">
        <h1>预约列表</h1>
        <router-link to="/admin/orders/1">添加文章</router-link>
        <vue-filter-panel>
            <div slot="search-btn">
                <input type="text" class="form-control" v-model="key" placeholder="标题/内容关键字">
                <button class="btn btn-blue btn-search" @click="search">搜索</button>
            </div>
            <div slot="global-btn">
                <div class="btn-create">
                    <div class="btn-group">
                        <button type="button" class="btn btn-blue dropdown-toggle" @click="addArticle">
                            添加文章
                        </button>
                    </div>
                </div>
            </div>
        </vue-filter-panel>
        <vue-table
                :columns="columns"
                :tableData="tableData"
                @table-action="tableActions"></vue-table>
    </div>
</template>

<script>
    import Vue from 'vue'
    import i18n from '@/i18n'

    export default {
        i18n,
        data () {
            return {
                columns: [
                    {
                        name: 'title',
                        title: '预约内容'
                    },
                    {
                        name: 'createTime',
                        title: '创建时间',
                    },
                    {
                        name: 'car_type',
                        title: '备注'
                    },
                    {
                        name: '__actions',
                        title: '操作',
                        actions: [
                            {
                                name: 'view',
                                label: '查看',
                            },
                            {
                                name: 'edit',
                                label: '编辑',
                            },
                            {
                                name: 'remove',
                                label: '删除'
                            }
                        ]
                    }
                ],
                tableData: []
            }
        },
        computed: {
            routeUrl () {
                return '/' + this.$route.params.lang + '/home';
            }
        },
        created: function () {
            this.tableData = [
                {
                    "id": 1,
                    'title': '预约内容一',
                    "createTime": "2016-12-09",
                    "car_type": 1
                },
                {
                    "id": 2,
                    'title': '预约内容二',
                    "createTime": "2016-12-09",
                    "car_type": 2
                },
                {
                    "id": 2,
                    'title': '预约内容三',
                    "createTime": "2016-12-09",
                    "car_type": 2
                },
                {
                    "id": 2,
                    'title': '预约内容四',
                    "createTime": "2016-12-09",
                    "car_type": 2
                },
            ]
        },
        methods: {
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
        }
    }
</script>

<style scoped>
    .asd {

    }
</style>