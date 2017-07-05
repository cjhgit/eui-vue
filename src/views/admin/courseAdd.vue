<template>
    <div class="layout-body">
        <div class="bread-nav">
            <ui-goback></ui-goback>
            <ol class="breadcrumb">
                <li><router-link :to="routeUrl + '/'">管理</router-link></li>
                <li class="active">添加课程</li>
            </ol>
        </div>
        <div class="container">
            <div class="form-horizontal" style="width: 500px">
                <div class="form-group">
                    <label class="control-label col-sm-3">名称：</label>
                    <div class="col-sm-9">
                        <input class="form-control" v-model="courseName">
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label col-sm-3">介绍：</label>
                    <div class="col-sm-9">
                        <textarea class="form-control" v-model="courseDesc"></textarea>
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label col-sm-3">图片：</label>
                    <div class="col-sm-9">
                        <input type="file" @change="change($event)">
                        <!--<ui-file></ui-file>-->
                    </div>
                </div>
            </div>
        </div>

        <div class="footer-btn">
            <!--<vue-upload></vue-upload>-->
            <!--<vue-button type="primary">212</vue-button>-->
            <button class="btn btn-primary" @click="save">保存</button>
            <button class="btn btn-link" @click="cancel">取消</button>
        </div>
    </div>
</template>

<script>
    import {domainUrl} from 'CONFIG/config'

    export default {
        data () {
            return {
                myfile: null,
                input: null,
                courseName: '课程名称',
                courseDesc: '课程介绍',
                uploadUrl: null,
                key: '1223',
                search: function () {

                    //this
                },
                addArticle: function () {

                },
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
        created() {
            console.log('获取语言' + this.$route.params.lang)

        },
        methods: {
            save() {
                this.$http.post(domainUrl + '/admin/course/create', {
                        name: this.courseName,
                        media: this.uploadUrl,
                        introduction: this.courseDesc
                    },
                    {
                        headers: {
                            'Lc-Lang': this.$route.params.lang === 'en' ? 'en' : 'zh',
                            'X-Auth-Token': localStorage.mytoken
                        },
                    }
                ).then(response => {
                    this.$router.push(this.routeUrl + '/courses')
                });




            },
            change(e) {
                this.input=e.target

                if (!e.target.files.length) {
                    return
                }

                this.myfile = e.target.files[0]
                console.log(this.myfile)

                var zipFormData = new FormData();
                zipFormData.append('file', this.myfile, 'test.zip');//filename是键，file是值，就是要传的文件，test.zip是要传的文件名
                this.$http.post(domainUrl + '/admin/file/save', zipFormData, {
                    headers: {
                        'Lc-Lang': this.$route.params.lang === 'en' ? 'en' : 'zh',
                        'X-Auth-Token': localStorage.mytoken
                    },
                }).then(function(response) {
                    this.uploadUrl = response.body
                }, function(err) {
                    //alert("goodbye world")
                    console.log(err)
                })
            },
            cancel() {
                this.$router.go(-1)
            }
        },
        watch:{
            $route: function () {
                console.log('获取语言' + this.$route.params.lang)
                this.tableData = this.getData(this.$route.params.lang)
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