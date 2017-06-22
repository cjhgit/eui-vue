<template>

    <div class="about">
        <h1>课程列表</h1>
        <ul>
            <li><router-link to="/admin/articles/1">文章1</router-link></li>
            <li><router-link to="/admin/articles/2">文章2</router-link></li>
        </ul>
        <div class="btn-add" id="guideAdd">
            <vue-tooltip content="添加车辆到装货进行装货">
                <button class="btn btn-primary" @click="openChooseCar">
                    添加文章
                </button>
            </vue-tooltip>
        </div>
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
                :tableData="tableData"></vue-table>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                key: '1223',
                search: function () {

                    //this
                },
                addArticle: function () {

                },
                columns: [
                    {
                        name: '__checkbox',
                        title: ''
                    },
                    {
                        name: 'title',
                        title: '文章标题'
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
                                name: 'edit',
                                label: '编辑',
                                hasAuth: 'read&noauth'
                            },
                            {
                                name: 'onSale',
                                label: '上架'
                            },
                            {
                                name: 'offSale',
                                label: '下架'
                            },
                            {
                                name: 'delete',
                                label: '删除',
                            }
                        ]
                    }
                ],
                tableData: [
                    {
                        "id": 1,
                        'title': '文章标题一',
                        "createTime": "2016-12-09",
                        "car_type": 1
                    },
                    {
                        "id": 3,
                        'title': '文章标题二',
                        "createTime": "2016-12-09",
                        "car_type": 2
                    }
                ]
            }
        },
        methods: {

        }
    }
</script>

<style scoped>
    .asd {

    }
</style>