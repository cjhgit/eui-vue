<template>

    <div class="about">
        <h1>文章列表</h1>
        <ul>
            <li><router-link to="/articles/1">文章1</router-link></li>
            <li><router-link to="/articles/2">文章2</router-link></li>
        </ul>

    </div>
</template>

<script>
    /*import {
        domainUrl
    } from 'config/config'
    import {
        tranStatus,
        payer,
        payType,
        WS_UNSETTLE,
        WS_FINAL
    } from 'UTIL/constants'
    import {
        isNull
    } from 'UTIL/util'*/

    export default {
        name: 'about',
        data () {
            return {
                ship_name: 'asa',
                msg: 'Welcome to Your Vue.js App',


                /*tstatus: tranStatus,
                wpayer: payer,
                tpayType: payType,
                url: domainUrl + '/waybills/list',
                columns: [{
                    name: 'number',
                    title: '系统单号',
                    sortcol: true,
                    titleClass: 'table-title',
                    dataClass: 'highlight',
                    isVisible: true
                }, {
                    name: 'transport.tranNumber',
                    title: '企业单号',
                    sortcol: true,
                    titleClass: 'table-title',
                    dataClass: 'dataClass',
                    isVisible: false
                }, {
                    name: 'transport.tranStatus',
                    title: '运输状态',
                    sortcol: true,
                    isVisible: true,
                    /!*callback: function(value) {
                        return tranStatus[value];
                    }*!/
                }, {
                    name: 'payer',
                    title: '付款方式',
                    sortcol: false,
                    isVisible: true,
                    callback: function(value) {
                        return payer[value];
                    }
                },  {
                    name: 'transport.upCompany',
                    title: '上游企业',
                    sortcol: false,
                    isVisible: true
                }, {
                    name: 'transport.upPayType',
                    title: '上游结算',
                    sortcol: false,
                    isVisible: true,
                    callback: function(value) {
                        return payType[value];
                    }
                }, {
                    name: 'transport.downCompany',
                    title: '下游企业',
                    sortcol: false,
                    isVisible: true
                }, {
                    name: 'transport.downPayType',
                    title: '下游结算',
                    sortcol: false,
                    isVisible: true,
                    callback: function(value) {
                        return payType[value];
                    }
                }, {
                    name: 'shipName',
                    title: '发货人',
                    sortcol: false,
                    isVisible: true
                }, {
                    name: 'shipPhone',
                    title: '发货人电话',
                    sortcol: false,
                    isVisible: false
                }, {
                    name: 'shipProvince',
                    title: '发货区域',
                    sortcol: false,
                    isVisible: false,
                    callback: function(col, item) {
                        return item.shipProvince + item.shipCity + item.shipArea;
                    }
                }, {
                    name: 'shipAddress',
                    title: '发货地址',
                    sortcol: false,
                    isVisible: false
                }, {
                    name: 'recvName',
                    title: '收货人',
                    sortcol: false,
                    isVisible: true
                }, {
                    name: 'recvPhone',
                    title: '收货人电话',
                    sortcol: false,
                    isVisible: false
                }, {
                    name: 'recvAddress',
                    title: '收货区域',
                    sortcol: false,
                    isVisible: false,
                    callback: function(col, item) {
                        return item.recvProvince + item.recvCity + item.recvArea;
                    }
                }, {
                    name: 'recvAddress',
                    title: '收货地址',
                    sortcol: false,
                    isVisible: false
                }, {
                    name: 'createTime',
                    title: '创建时间',
                    sortcol: true,
                    isVisible: true,
                }, {
                    name: 'receivedTime',
                    title: '签收时间',
                    sortcol: true,
                    isVisible: true,
                }],
                gridFilter: {
                    branch_id: this.$root.selectedBranch,
                    status: [WS_UNSETTLE,WS_FINAL] //待结算，完成单
                },
                filter: {
                    branch_id: [],
                    status: [WS_UNSETTLE,WS_FINAL], //待结算，完成单
                    _search: '',
                    tran_status: '-',
                    up_pay_type: '-',
                    down_pay_type: '-',
                    payer: '-',
                    begin_time: '',
                    end_time: '',
                    ship_name: '',
                    recv_name: '',
                    ship_area: '',
                    recv_area: ''
                }*/
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
