<template>
    <div class="ui-page">
        <button class="btn btn-default" @click="prev"><i class="icon icon-page-left"></i> </button>
        <span class="page">{{ page }} / {{ total }}</span>
        <button class="btn btn-default" @click="next"><i class="icon icon-page-right"></i> </button>
        <input class="form-control" v-model.number="returnPage" style="width: 48px">
        <button class="btn btn-link" @click="myToPage">跳转</button>
    </div>
</template>

<script>
    export default {
        name: 'Icon',
        data() {
            return {
                returnPage: 1,
                curPage: 1,
            }
        },
        props: {
            gotoPage: Function,
            total: Number,
            page: Number
        },
        mounted() {
            console.log('mounted')
            this.curPage = this.page
        },
        computed: {
        },
        methods: {
            prev() {
                console.log('当前页',this.curPage)
                if (this.curPage > 1) {
                    this.curPage--
                    this.gotoPage(this.curPage)
                }
            },
            next() {
                if (this.curPage < this.total) {
                    this.curPage++
                    this.gotoPage(this.curPage)
                }
            },
            myToPage() {
                if (this.returnPage >= 1 && this.returnPage <= this.total)
                this.gotoPage(this.returnPage)
            }
        }
    };
</script>

<style scoped>
    .ui-page {
        float: right;
        width: 220px;
        margin-bottom: 24px;
    }
    .ui-page .page {
        font-size: 16px;
    }
    .ui-page .form-control {
        display: inline-block;
        height: 26px;
        padding: 2px 8px;
    }
    .ui-page .btn {
        padding: 2px 8px;
    }
    .ui-page .btn-link {
        color: #666;
        font-size: 18px;
        vertical-align: bottom;
    }
    .ui-page .icon {
        color: #666;
    }
</style>
