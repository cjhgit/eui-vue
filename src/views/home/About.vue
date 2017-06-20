<template>
    <div class="layout-body">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <article class="article">
                        <h1>关于</h1>
                        <p>量川科技是一间XXX的公司，balabala</p>
                    </article>

                    <button class="btn btn-blue" @click="openPopover" style="margin-left: 100px;">popover</button>

                    <vue-form-item>
                        <label slot="label">单选框</label>
                        <vue-radio v-model="radio" :label="1" :isCustom="true">选项一</vue-radio>
                        <vue-radio v-model="radio" :label="2" :isCustom="true">选项二</vue-radio> {{radio}}
                    </vue-form-item>

                    <div>
                        <button class="btn btn-blue" @click="openModal">open modal</button>
                        <button class="btn btn-blue" @click="openMessage">打开$message</button>
                    </div>

                    <!--<vue-table :columns="columns" :tableData="tableData"></vue-table>-->

                    <vue-confirm-modal
                            :content="confirmContent"
                            :show="isShowModal"
                            @confirm="isConfrimDel"
                            @close="isShowModal=false"
                            @change="isShowModal=false">
                    </vue-confirm-modal>

                    <div class="demo">
                        <vue-calendar-input v-model="testDate"></vue-calendar-input>
                    </div>

                    <vue-panel :width="460">
                        <span slot="pheader">收货人信息</span>
                        <vue-form :label-width="130" :input-width="140" id="form1">
                            <vue-form-item class="clearmargin">
                                <label slot="label">收货人姓名:</label>
                                <label class="item-content">发掘的开发及阿里</label>
                            </vue-form-item>
                            <vue-form-item class="clearmargin">
                                <label slot="label">收名:</label>
                                <label class="item-content">发地方</label>
                            </vue-form-item>
                            <vue-form-item class="clearmargin">
                                <label slot="label">收货名:</label>
                                <label class="item-content">发掘的开发及阿里</label>
                            </vue-form-item>
                            <vue-form-item class="clearmargin">
                                <label slot="label">姓名:</label>
                                <label class="item-content">发及阿里</label>
                            </vue-form-item>
                            <vue-form-item class="clearmargin">
                                <label slot="label">收货人姓名:</label>
                                <label class="item-content">发掘的开发及阿里</label>
                            </vue-form-item>
                            <vue-form-item class="clearmargin">
                                <label slot="label">收货人姓名:</label>
                                <label class="item-content">发掘的开发及阿里</label>
                            </vue-form-item>
                        </vue-form>
                    </vue-panel>

                </div>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
                radioStr: "{'obj': 2}",
                radio: 1,
                options: [
                    {
                    value: 1,
                    label: '选项一'
                },{
                    value: 2,
                    label: '选项二'
                },{
                    value: 3,
                    label: '选项三'
                },{
                    value: 4,
                    label: '选项一'
                },{
                    value: 5,
                    label: '选项二'
                },{
                    value: 6,
                    label: '选项三'
                },{
                    value: 7,
                    label: '选项一'
                },{
                    value: 8,
                    label: '选项二'
                },{
                    value: 9,
                    label: '选项三'
                }],

                isShowModal: true,
                confirmContent: '',
                isConfrimDel (bool) {
                    this.modal = true
                    return bool;
                },

                testDate: '',

                columns: [
                    {
                        name: '__checkbox',
                        title: ''
                    },{
                        name: 'id',
                        title: '角色名称'
                    }, {
                        name: 'car_no',
                        title: '权限',
                    }, {
                        name: 'car_type',
                        title: '备注'
                    }, {
                        name: '__actions',
                        title: '操作',
                        actions: [{
                            name: 'delete',
                            label: '查看',
                            callback: function (row) {
                                if (row.car_type === 2) {
                                    return true;
                                }
                                return false;
                            }
                        },{
                            name: 'edit',
                            label: '编辑',
                            hasAuth: 'read&noauth'
                        }]
                    }, {
                        name: '__actions',
                        title: '操作',
                        actions: [{
                            name: 'delete',
                            label: '删除',
                            type: 'select',
                            actions: [{
                                name: 'aaaa',
                                label: 'aaaa'
                            },{
                                name: 'bbbb',
                                label: 'bbbbb'
                            }]
                        },{
                            name: 'edit',
                            label: '编辑'
                        },{
                            name: 'delete',
                            label: '删除',
                            type: 'select',
                            actions: [{
                                name: 'aaaa',
                                label: 'aaaa'
                            },{
                                name: 'bbbb',
                                label: 'bbbbb'
                            }]
                        }]
                    }
                ],
                tableData: [
                    {
                        "id": 1,
                        "car_no": "粤A123",
                        "car_type": 1
                    },{
                        "id": 3,
                        "car_no": "粤A123",
                        "car_type": 2
                    },{
                        "id": 4,
                        "car_no": "粤A123",
                        "car_type": 1
                    }
                ],
            }
        },
        methods: {
            openModal () {
                this.confirmContent = '重写提示消息'
                this.isShowModal = true;
            },
            openPopover (event) {
                this.target = event;
                this.isShowPopover = !this.isShowPopover;
            },
            openMessage () {
                this.$message({
                    type: 'error',
                    message: '消息通知'
                });
            },
        }
    }
</script>
<!--

<style lang="sass">
    .demo {
        margin-top: 60px;
        padding: 20px;
        background-color: #f00;
    }
    select {
        border: solid 1px #000;
    }
</style>
-->
