<template>
    <div class="layout-body">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="layout-body">
                        <h2>文章列表</h2>
                        <li><router-link to="/articles/1">文章1</router-link></li>
                        <li><router-link to="/articles/2">文章2</router-link></li>
                    </div>
                    <div>
                        <router-link to="/404">404页面</router-link>
                        <router-link to="/admin/articles">文章管理</router-link>
                        <router-link to="/asd">404测试</router-link>
                        <router-link to="/demo">Demo</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>