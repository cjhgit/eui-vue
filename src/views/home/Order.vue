<template>
    <div class="layout-body">
        <div class="container">
            <div class="bread-nav">
                <ui-goback></ui-goback>
                <ol class="breadcrumb">
                    <li><router-link :to="'/'">{{ $t('home') }}</router-link></li>
                    <li class="active">{{ $t('order') }}</li>
                </ol>
            </div>

            <div class="row">
                <div class="col-sm-5">
                    <div class="form-horizontal">
                        <div class="form-group">
                            <label class="control-label">{{ $t('name') }}：</label>
                            <input class="form-control">
                        </div>
                        <div class="form-group">
                            <label class="control-label">{{ $t('name') }}：</label>
                            <select class="form-control sex-select">
                                <option value="male">{{ $t('male') }}</option>
                                <option value="female">{{ $t('female') }}</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label class="control-label">{{ $t('phone') }}：</label>
                            <input class="form-control">
                        </div>
                        <div class="form-group">
                            <label class="control-label">{{ $t('email') }}：</label>
                            <input class="form-control">
                        </div>
                        <div class="form-group">
                            <label class="control-label">{{ $t('orderTime') }}：</label>
                            <vue-calendar-input v-model="date"></vue-calendar-input>
                        </div>
                        <div class="form-group">
                            <button class="btn btn-primary">{{ $t('submit') }}</button>
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

        }
    }


</script>

<style scoped>

    .form-horizontal {

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
    .form-horizontal .sex-select {
        width: 100px;
    }
    .form-horizontal .btn {
        margin-left: 184px;
    }

    /**/
    .order-img {
        width: 100%;
    }
</style>