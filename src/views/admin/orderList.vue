<template>
    <div class="layout-body">

        <div class="admin-nav">
            <div class="container">
                <div class="bread-nav">
                    <ol class="breadcrumb">
                        <li class="active">预约信息管理</li>
                    </ol>
                </div>
            </div>
        </div>

        <div class="container">
            <table class="table table-bordered">
                <tr>
                    <th>客户姓名</th>
                    <th>性别</th>
                    <th>电话号码</th>
                    <th>电子邮件</th>
                    <th>预约时间</th>
                    <th>操作</th>
                </tr>
                <tr v-for="order in orders">
                    <td>{{ order.name }}</td>
                    <td>{{ order.gender == 1 ? '男' : '女' }}</td>
                    <td>{{ order.phone }}</td>
                    <td>{{ order.email }}</td>
                    <td>{{ order.time }}</td>
                    <td>
                        <button class="btn btn-primary">完成</button>
                    </td>
                </tr>
            </table>
        </div>

    </div>
</template>

<script>
    import Vue from 'vue'
    import i18n from '@/i18n'
    import {domainUrl} from 'CONFIG/config'

    export default {
        i18n,
        data () {
            return {
                key: '1223',
                search: function () {

                    //this
                },
                addArticle: function () {

                },
                orders: []
            }
        },
        computed: {
            routeUrl () {
                return '/' + this.$route.params.lang + '/home'
            }
        },
        mounted: function () {
            this.getData()
        },
        methods: {
            getData(lang) {
                this.$http.get(domainUrl + '/admin/reserve/all', {
                    headers: {
                        'Lc-Lang': this.$route.params.lang === 'en' ? 'en' : 'zh',
                        'X-Auth-Token': localStorage.mytoken
                    },
                }).then(response => {
                    let body = response.body
                    console.log(body)
                    this.orders = body
                }, response => {
                    let body = response.body
                    console.log(body);
                    if (body.code === 101) {
                        localStorage.mytoken = ''
                        this.$router.push('/login') // TODO
                    }
                })
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
                        this.deleteModal = true
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