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

        <ul class="admin-tab border-bottom">
            <div class="container">
                <router-link class="tab-item active" :to="routeUrl + '/orders'">新预约</router-link>
                <router-link class="tab-item" :to="routeUrl + '/orders/finished'">已完成</router-link>
            </div>
        </ul>

        <div class="container">
            <table class="table admin-table">
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
                        <button class="btn btn-primary" @click="finish(order)">完成</button>
                    </td>
                </tr>
            </table>
            <ui-empty v-if="!orders.length"></ui-empty>
            <ui-page :page="page" :total="totalPage" :gotoPage="gotoPage"></ui-page>
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
                page: 1,
                totalPage: 1,
                pageSize: 12,

                orders: []
            }
        },
        computed: {
            domainUrl() {
                return domainUrl;
            },
            routeUrl () {
                return '/' + this.$route.params.lang + '/admin'
            }
        },
        mounted: function () {
            this.getData(1)
        },
        methods: {
            getData(page) {
                this.$http.post(domainUrl + '/admin/reserve/list', {
                    page: page,
                    pageSize: this.pageSize,
                    filters: {
                        status: 1
                    }
                }, {
                    headers: {
                        'Lc-Lang': this.$route.params.lang === 'en' ? 'en' : 'zh',
                        'X-Auth-Token': localStorage.mytoken
                    },
                }).then(response => {
                    let body = response.body
                    console.log(body)
                    this.orders = body.data
                    this.totalPage = Math.ceil(body.total / this.pageSize)
                }, response => {
                    let body = response.body
                    console.log(body);
                    if (body.code === 101 || body.code === 103) {
                        localStorage.mytoken = ''
                        this.$router.push('/login') // TODO
                    }
                })
            },
            finish(order) {
                this.$http.post(domainUrl + '/admin/reserve/' + order.id + '/updateStatus', {
                    status: 2
                }, {
                    headers: {
                        'Lc-Lang': this.$route.params.lang === 'en' ? 'en' : 'zh',
                        'X-Auth-Token': localStorage.mytoken
                    },
                    emulateJSON: true
                }).then(response => {

                }, response => {
                    let body = response.body
                    console.log(body)

                })
            }
        }
    }
</script>

<style scoped>
    .asd {

    }
</style>