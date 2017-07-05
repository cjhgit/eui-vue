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
                <baidu-map class="map" :center="{lng: 113.382832, lat: 23.109058}" :zoom="16">
                    <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
                </baidu-map>
                <div class="contact-info">
                    <h2 class="title">紫然肌专业普拉提会馆</h2>
                    <div class="info">地址：广东省中山市石歧区悦来南路37号正和中州54/55卡</div>
                    <div class="info">WECHAT: LILIPILATES</div>
                    <div class="info">联系电话：0760-88831122</div>
                    <div>客服号二维码：
                        <img class="qrcode" src="http://www.8008mp.com/erweima/upload/28946/com/%B3%C2%D3%C2_RJ36988.png" alt="二维码">
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
        /* Visit http://lbsyun.baidu.com/apiconsole/key for details about app key. */
        ak: 'qX1AZ35BaN9TLHd0Gu6YG9qd47T8eXgX'
    })

    export default {
        i18n,
        data () {
            return {
                //zoom: 16,
                //center: {lng: 113.382832, lat: 23.109058}
            }
        },
        computed: {

        },
        mounted() {
            this.article = {
                title: '这是文章的标题',
                content: '<h2>什么是XXX？</h2><p>这是文章的内容</p><h2>第二段的标题</h2><p>这是第二段</p>'
            };
        },
        methods: {
            handler ({BMap, map}) {
                console.log('1212121212121')
                //this.lng = 113.382832
                //this.lat = 23.109058
            }
        }
    }
</script>

<style>
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
        font-weight: bold;
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