<template>
    <div class="layout-body">
        <div class="container">

            <div class="bread-nav">
                <ui-goback></ui-goback>
                <ol class="breadcrumb">
                    <li><router-link :to="routeUrl">{{ $t('home') }}</router-link></li>
                    <li class="active">{{ $t('contactUs') }}</li>
                </ol>
            </div>

            <div class="map-box">
                <baidu-map class="map" :center="{lng: 113.378461, lat: 22.507475}" :zoom="18">
                    <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
                    <bm-marker :position="{lng: 113.378461, lat: 22.507475}" :dragging="true"></bm-marker>
                </baidu-map>
                <div class="contact-info">
                    <h2 class="title">{{ $t('playgroundName') }}</h2>
                    <div class="info">{{ $t('address') }}：{{ $t('addressDetail') }}</div>
                    <div class="info">WECHAT: LILIPILATES</div>
                    <div class="info">{{ $t('contactPhone') }}：0760-88831122</div>
                    <div>{{ $t('qrcode') }}：
                        <img class="qrcode" src="http://www.8008mp.com/erweima/upload/28946/com/%B3%C2%D3%C2_RJ36988.png" :alt="$t('qrcode')">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import BaiduMap from 'vue-baidu-map'
    import i18n from '@/i18n'

    Vue.use(BaiduMap, {
        ak: 'qX1AZ35BaN9TLHd0Gu6YG9qd47T8eXgX'
    })

    export default {
        i18n,
        data () {
            return {
            }
        },
        computed: {
            routeUrl () {
                return '/' + this.$route.params.lang + '/home';
            },
        },
        mounted() {
        },
        methods: {
            handler ({BMap, map}) {
                console.log('1212121212121')
            }
        }
    }
</script>

<style scoped>
    .map-box {
        position: relative;
        height: 400px;
    }
    .map-box .map {
        width: 100%;
        height: 100%;
    }
    .contact-info {
        position: absolute;
        top: 0;
        left: 48px;
        width: 260px;
        padding: 16px;
        color: #fff;
        background-color: rgba(187, 195, 126, .9);
    }
    .contact-info .title {
        font-size: 18px;
        margin-bottom: 16px;
    }
    .contact-info .info {
        margin-bottom: 16px;
    }
    .contact-info .qrcode {
        width: 80px;
        height: 80px;
        vertical-align: top;
    }
</style>