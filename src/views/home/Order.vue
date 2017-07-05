<template>
    <div class="layout-body">
        <div class="container">
            <div class="bread-nav">
                <ui-goback></ui-goback>
                <ol class="breadcrumb">
                    <li><router-link :to="routeUrl">{{ $t('home') }}</router-link></li>
                    <li class="active">{{ $t('order') }}</li>
                </ol>
            </div>

            <div class="row">
                <div class="col-sm-5">

                    <!--<input v-validate="'required|email'" type="text" name="email">
                    <span v-show="errors.has('email')">{{ errors.first('email') }}</span>-->
                    <!--<div class="column is-12">-->
                        <!--<label class="label" for="email">Email</label>-->
                        <!--<p class="control">-->
                            <!--<span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>-->
                        <!--</p>-->
                    <!--</div>-->
                    <!--<vue-form :spacing="20" id="branchEditFrom" style="float:left;">
                        <vue-form-item>
                            <label slot="label">网点名称：</label>
                            <vue-vinput v-model="name" id="name" v-validate="'required|min:2|max:12'" :msg="errors.first('name')"></vue-vinput>
                        </vue-form-item>
                    </vue-form>-->
                    <div class="form-horizontal">
                        <div class="form-group">
                            <label class="control-label col-sm-3">{{ $t('name') }}：</label>
                            <div class="col-sm-9">
                                <input v-validate="'required'" :class="{'form-control': true, 'is-danger': errors.has('name') }" name="name">
                                <div v-show="errors.has('name')" class="help-block is-danger">{{ errors.first('name') }}</div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-sm-3">{{ $t('sex') }}：</label>
                            <div class="col-sm-9">
                                <select class="form-control sex-select">
                                    <option value="male">{{ $t('male') }}</option>
                                    <option value="female">{{ $t('female') }}</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-sm-3">{{ $t('phone') }}：</label>
                            <div class="col-sm-9">
                                <input class="form-control">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-sm-3">{{ $t('email') }}：</label>
                            <div class="col-sm-9">
                                <input v-validate="'required|email'" :class="{'form-control': true, 'is-danger': errors.has('email') }" name="email" type="text">
                                <div v-show="errors.has('email')" class="help-block is-danger">{{ errors.first('email') }}</div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-sm-3">{{ $t('orderTime') }}：</label>
                            <div class="col-sm-9">
                                <vue-calendar-input v-model="date"></vue-calendar-input>
                            </div>

                        </div>
                        <div class="form-group">
                            <div class="col-sm-12">
                                <button class="btn btn-primary" @click="submit">{{ $t('submit') }}</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-7">
                    <img class="order-img" src="/static/img/order.png" :alt="$t('order')">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import i18n from '@/i18n'
    import {domainUrl} from 'CONFIG/config'

    export default {
        i18n,
        data() {
            return {
                courses: [],
                date: '',
            }
        },
        computed: {
            routeUrl () {
                return '/' + this.$route.params.lang + '/home';
            }
        },
        mounted: function () {
            console.log(this.$i18n);
            console.log('create')

        },
        methods: {
            submit() {
                this.$http.post(domainUrl + '/admin/reserve/create', {
                        "name":"张三",
                        "phone":"18373939",
                        "email":"393939@aa.com",
                        "status":1      // 1未处理，2已处理 (本页均为此含义)
                    },
                    {
                        headers: {
//                            'Lc-Lang': this.$route.params.lang === 'en' ? 'en' : 'zh',
//                            'X-Auth-Token': localStorage.mytoken
                        },
                    }
                ).then(response => {
                    console.log(response)
//                    this.$router.push(this.routeUrl + '/courses')
                });
            }
        }
    }


</script>

<style scoped>

    .form-horizontal .control-label {
        text-align: left;
    }
    .form-horizontal .sex-select {
        width: 100px;
    }
   /* .form-horizontal {

    }
    .form-horizontal .form-group {
        margin-right: 0;
        margin-left: 0;
    }
    .form-horizontal .control-label {
        float: left;
        width: 80px;
        text-align: left;
    }
    .form-horizontal .form-control {
        float: left;
        width: 160px;
    }
    .
    .form-horizontal .btn {
        margin-left: 184px;
    }*/

    /**/
    .order-img {
        width: 100%;
    }
</style>