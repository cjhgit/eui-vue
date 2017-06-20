<template>
    <div class="layout-body">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <router-link to="/articles">返回文章列表</router-link>
                    <h1>文章详情</h1>
                    <div>{{ $route.params.id }}</div>
                </div>
            </div>
        </div>
    </div>
</template>