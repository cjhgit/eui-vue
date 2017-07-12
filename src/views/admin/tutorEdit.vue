<template>
    <div class="layout-body">

        <div class="admin-nav border-bottom">
            <div class="container">
                <div class="bread-nav">
                    <ui-goback></ui-goback>
                    <ol class="breadcrumb">
                        <li><router-link :to="routeUrl + '/'">管理</router-link></li>
                        <li class="active">导师信息编辑</li>
                    </ol>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="admin-form">
                <div class="form-horizontal">
                    <div class="form-group">
                        <label class="control-label col-sm-3">姓名：</label>
                        <div class="col-sm-9">
                            <input class="form-control" v-model="tutor.name" name="courseName" v-validate="'required'">
                            <div v-show="errors.has('courseName')" class="help-block is-danger">{{ errors.first('courseName') }}</div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-sm-3">性别：</label>
                        <div class="col-sm-9">
                            <select v-model="tutor.gender" class="form-control sex-select">
                                <option value="1">男</option>
                                <option value="2">女</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-sm-3">电话：</label>
                        <div class="col-sm-9">
                            <input class="form-control" v-model="tutor.phone" name="phone" v-validate="'required'">
                            <div v-show="errors.has('phone')" class="help-block is-danger">{{ errors.first('phone') }}</div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-sm-3">介绍：</label>
                        <div class="col-sm-9">
                            <textarea class="form-control" v-model="tutor.introduction" rows="5" name="introduction" v-validate="'required|max:400'"></textarea>
                            <div v-show="errors.has('introduction')" class="help-block is-danger">{{ errors.first('introduction') }}</div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-sm-3">图片：</label>
                        <div class="col-sm-9">
                            <ul class="media-list">
                                <li class="media-item" v-for="media in tutor.mediaList">
                                    <div class="media-content">
                                        <img class="media-img" :src="domainUrl + '/' + media.url">
                                        <div class="triangle" v-if="media.cover"></div>
                                        <div class="cover" v-if="media.cover">封</div>
                                    </div>
                                    <div class="edit-content">
                                        <i class="icon icon-close" @click="remove(media.id)"></i>
                                        <!--<button class="btn btn-xs btn-update">更改图片</button>-->
                                        <button class="btn btn-xs btn-cover" @click="setCover(media.id)">设置为封面</button>
                                    </div>
                                </li>
                            </ul>
                            <ui-file :url="domainUrl + '/admin/file/save'" :success="uploadSuccess">本地上传</ui-file>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="layout-footer-btn">
            <!--<vue-button type="primary">212</vue-button>-->
            <button class="btn btn-default" @click="cancel">取消</button>
            <button class="btn btn-primary" @click="save">保存</button>
        </div>
    </div>
</template>

<script>
    import {domainUrl} from 'CONFIG/config'

    export default {
        data () {
            return {
                tutor: {}
            }
        },
        computed: {
            domainUrl() {
                return domainUrl
            },
            routeUrl () {
                return '/' + this.$route.params.lang + '/admin'
            },
        },
        mounted() {
            this.getData();
        },
        methods: {
            getData() {
                this.$http.get(domainUrl + '/admin/teacher/' + this.$route.params.id, {
                    headers: {
                        'Lc-Lang': this.$route.params.lang === 'en' ? 'en' : 'zh',
                        'X-Auth-Token': localStorage.mytoken
                    },
                }).then(response => {
                    let body = response.body
                    console.log(body)
                    this.tutor = body
                }, response => {
                    let body = response.body
                    console.log(body);
                    if (body.code === 101 || body.code === 103) {
                        localStorage.mytoken = ''
                        this.$router.push('/login') // TODO
                    }
                })
            },
            save() {
                this.$validator.validateAll().then(() => {
                    this.$http.post(domainUrl + '/admin/teacher/' + this.tutor.id + '/update', this.tutor,
                        {
                            headers: {
                                'Lc-Lang': this.$route.params.lang === 'en' ? 'en' : 'zh',
                                'X-Auth-Token': localStorage.mytoken
                            },
                        }
                    ).then(response => {
                        this.$router.push(this.routeUrl + '/tutors')
                    })
                });
            },
            cancel() {
                this.$router.go(-1)
            },
            uploadSuccess(url, media) {
                this.tutor.mediaList.push(media)
                //this.uploadUrl = url
            },
            remove(id) {
                for (let i = 0; i < this.tutor.mediaList.length; i++) {
                    let media = this.tutor.mediaList[i]
                    if (media.id === id) {
                        this.tutor.mediaList.splice(i, 1)
                        if (this.tutor.mediaList.length) {
                            this.tutor.mediaList[0].cover = true
                        }
                        break
                    }
                }
            },
            setCover(id) {
                for (let i = 0; i < this.tutor.mediaList.length; i++) {
                    let media = this.tutor.mediaList[i]
                    if (media.id === id) {
                        media.cover = true
                    } else {
                        media.cover = false
                    }
                }
            }
        },
        watch:{
            $route: function () {
                this.tableData = this.getData(this.$route.params.lang)
            },
            'route': function () {
                console.log('cccc')
            }
        }
    }
</script>

<style scoped>
    .media-list {
        overflow: hidden;
    }
    .media-list .media-item {
        position: relative;
        float: left;
        width: 120px;
        height: 120px;
        margin-right: 16px;
        margin-bottom: 16px;
        border-radius: 4px;
    }
    .media-list .media-content,
    .media-list .edit-content {
        position: absolute;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
    }
    .media-list .media-content {

    }
    .media-list .triangle {
        position: absolute;
        top: 0;
        left: 0;
        border-left: 40px solid #A9517A;
        border-top: none;
        border-right: 40px solid rgba(0, 0, 0, 0);
        border-bottom: 40px solid rgba(0, 0, 0, 0);
    }
    .media-list .icon-close {
        position: absolute;
        top: 8px;
        right: 8px;
        color: #fff;
        cursor: pointer;
    }
    .media-list .cover {
        position: absolute;
        top: -6px;
        left: 10px;
        width: 32px;
        height: 32px;
        color: #fff;
        font-size: 12px;
        transform: rotateZ(-45deg);
    }
    .media-list .edit-content {
        display: none;
        background-color: #747274;
    }
    .media-list .media-item:hover .edit-content {
        display: block;
    }
    .media-list .media-img {
        width: 100%;
        height: 100%;
    }
    .media-list .btn-update {
        display: block;
        margin: 32px auto 8px auto;
        color: #fff;
        background-color: #3F3D3F;
    }
    .media-list .btn-cover {
        display: block;
        /*margin: 0 auto;*/
        margin: 48px auto 8px auto;
        color: #fff;
        background-color: #525052;
    }

</style>