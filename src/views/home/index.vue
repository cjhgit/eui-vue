<template>
    <div class="layout-body">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="layout-body">
                        <div>
                            {{ $t('welcome') }}
                        </div>

                        教室环境图片、导师信息、课程等基本信息的展示


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


<script>
    import i18n from '@/i18n'

    export default {
        i18n,
        created: function () {
            console.log(this.$i18n);
            console.log('create')
        }
    }

    console.log(this)
    console.log(this.$i18n)

</script>