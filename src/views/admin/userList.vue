<template>
    <div class="layout-body">

        <div class="admin-nav border-bottom">
            <div class="container">
                <div class="bread-nav">
                    <ol class="breadcrumb">
                        <li class="active">用户信息管理</li>
                    </ol>
                </div>
                <router-link class="btn btn-primary" :to="routeUrl + '/users/add'">添加管理员</router-link>
            </div>
        </div>

        <div class="container">
            <table class="table admin-table">
                <tr>
                    <th>管理员姓名</th>
                    <th>电话号码</th>
                    <th>电子邮件</th>
                    <th>备注</th>
                    <th>操作</th>
                </tr>
                <tr v-for="user in users">
                    <td>{{ user.name }}</td>
                    <td>{{ user.phone }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.note }}</td>
                    <td>
                        <router-link class="btn btn-link" :to="routeUrl + '/users/' + user.id + '/edit'">编辑</router-link>
                        <router-link class="btn btn-link" :to="routeUrl + '/users/' + user.id + '/password'">修改密码</router-link>
                        <button class="btn btn-primary" @click="remove(user.id)">删除</button>
                    </td>
                </tr>
            </table>

            <ui-empty v-if="!users.length"></ui-empty>
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
                users: []
            }
        },
        computed: {
            routeUrl () {
                return '/' + this.$route.params.lang + '/admin'
            }
        },
        mounted: function () {
            this.getData()
        },
        methods: {
            getData(lang) {
                this.$http.get(domainUrl + '/admin/user/all', {
                    headers: {
                        'Lc-Lang': this.$route.params.lang === 'en' ? 'en' : 'zh',
                        'X-Auth-Token': localStorage.mytoken
                    },
                }).then(response => {
                    let body = response.body
                    console.log(body)
                    this.users = body
                }, response => {
                    let body = response.body
                    console.log(body);
                    if (body.code === 101 || body.code === 103) {
                        localStorage.mytoken = ''
                        this.$router.push('/login') // TODO
                    }
                })
            },
            remove(id) {
                this.$http.delete(domainUrl + '/admin/deleteUser?id=' + id, {
                    headers: {
                        'Lc-Lang': this.$route.params.lang === 'en' ? 'en' : 'zh',
                        'X-Auth-Token': localStorage.mytoken
                    },
                }).then(response => {
                    for (let i = 0; i < this.users.length; i++) {
                        if (this.users[i].id === id) {
                            this.users.splice(i, 1)
                        }
                    }
                }, response => {
                    let body = response.body
                    console.log(body)
                    if (body.code === 101 || body.code === 103) {
                        localStorage.mytoken = ''
                        this.$router.push('/login') // TODO
                    }
                })
            },
        }
    }
</script>

<style scoped>
    .asd {

    }
</style>