<template>

    <div class="about">
        <h1>导师列表</h1>
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
                                hasAuth: 'read&noauth'
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