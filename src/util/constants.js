// 所有常量内容定义在此处

const TK_GET = 0	//叫车提货
const TK_SEND = 1	//叫车发货
const TK_DISTRIBUTION = 2 //配送
const dtType = {
	"0": "提货",
	"1": "发货",
	"2": "配送"
}
const FEEDBACK_UP = 1	//向上游反馈
const FEEDBACK_DOWN = 2
const STREAM_UP = 1	//上游
const STREAM_DOWN = 2//下游

const TK_FREE = 0
const TK_BUSY = 1
const TK_NOT_BUSY = 2 // 已接未运

const TS_PRE_PICK = 100
const TS_PRE_STOCK = 101
const TS_IN_STOCK = 102
const TS_PRE_DELIVERY = 107
const tranStatus = {
	"-":"请选择",
	"100":"待提货",
	"101":"待进库",
	"102":"在库",
	"105":"部分装车",
	"106":"已装车",
	"103":"已发货",
	"104":"已送达",
	"107":"待配送",
	"108":"部分装车-配送",
	"109":"已装车-配送",
	"110":"配送中"
}

const WS_UNACCEPT = 0
const WS_UNRELEASE = 1
const WS_RELEASED = 2
const WS_PROCESS = 3
const WS_UNSETTLE = 4
const WS_SETTLED = 5
const WS_PROBLEM = 6
const WS_FINAL = 7
const WS_DRAFT = 9	//草稿（上游保存了承运下游(我），但还没有发布）
const WS_PRICE_OTHER_CONFIRM = 1	//等待对方确认报价
const WS_PRICE_ME_CONFIRM = 2		//对方修改报价，待确认
const WS_PRICE_OTHER_REFUSE = 3	//对方拒绝接单
const wStatus = {
	"-":"请选择",
	"0":"待接单",
	"1":"未发布",
	"2":"已发布",
	"3":"在运",
	"4":"待结算",
	"5":"已结算",
	"6":"异常",
	"7":"已完结",
	"8":"终止",
}

const PY_SEND = 0
const PY_TO = 1
const payer = {
	"-":"请选择",
	"0": "寄付",
	"1": "到付"
	// "2": "混合支付"
}
const payType = {
	"-":"请选择",
	"0": "现付",
	"1": "月结"
}

const PS_UNGET = 203
const PS_UNPAY = 201
const payStatus = {
	"200":"已付款",
	"201":"未付款",
	"202":"已收款",
	"203":"未收款",
	"204":"付款待确认"
}

// 运单结算类型
const ST_SHIP = 0	//发货人结算
const ST_PEER = 1	//同行结算
const ST_RECV = 2	//收货人结算
const ST_YEWU = 3	//业务费结算

const goodType = {
	"0": "普货",
	"1": "温控货物",
	"2": "危险品",
	"3": "易碎品",
	"4": "其他"
}
const packageType = {
	"0": "散装",
	"1": "裸装",
	"2": "单件包装",
	"3": "集合包装",
	"4": "其他"
}

const carsType = {
	"0": "普通车",
	"1": "牵引车",
	"2": "车厢"
}

const PICKUP_ORDER = 0;
const LOAD_ORDER = 1;

const PT_NORMAL = 0
const PT_ABNORMAL = 1
const problemType = {
	"0": "正常",
	"1": "异常",
	"2": "已反馈",
	"3": "对方已解决",
	"4": "已解决",
	"5": "不解决",
	"6": "对方不解决"
}

const DT_WAIT = 300 //待接单
const DT_ACCEPT = 301 // 已接单
const DT_SHIPPING = 302 // 已装货
const DT_DONE = 303 // 已送到
const dtStatus = {
	"300": "待接单",
	"301": "已接单",
	"302": "运输中",
	"303": "已送达"
}

const roleType = {
	"1": "工厂",
	"2": "三方物流",
	"3": "干线物流",
	"4": "经销商"
}

const chat = {
	"appkey": "23468400",
	"credential": "password"
}

const logLevel = {
	"1": "普通",
	"2": "警告"
}

const clientFtem = 2
const myFtem = 1

let getTranStatus = (code) => {
	return tranStatus[code];
}
let getWStatus = (code) => {
	return wStatus[code];
}

let returnCarsType = (code) => {
	return carsType[code];
}

const OSS_REGION = 'oss-cn-shenzhen'

const OSS_BUCKET = 'lc-yun'

const OSS_ENDPOINT = 'http://oss-cn-shenzhen.aliyuncs.com'

module.exports = {
	clientFtem,
	myFtem,
	tranStatus,
	wStatus,
	payer,
	payType,
	payStatus,
	goodType,
	packageType,
	dtStatus,
	WS_UNACCEPT,
	WS_UNRELEASE,
	WS_RELEASED,
	WS_PROCESS,
	WS_UNSETTLE,
	WS_SETTLED,
	WS_FINAL,
	WS_DRAFT,
	WS_PRICE_ME_CONFIRM,
	WS_PRICE_OTHER_CONFIRM,
	WS_PRICE_OTHER_REFUSE,
	TS_PRE_STOCK,
	TS_PRE_PICK,
	TS_IN_STOCK,
	TS_PRE_DELIVERY,
	TK_GET,
	TK_SEND,
	TK_DISTRIBUTION,
	PS_UNGET,
	PS_UNPAY,
	PT_NORMAL,
	PT_ABNORMAL,
	PY_TO,
	PY_SEND,
	roleType,
	logLevel,
	FEEDBACK_UP,
	FEEDBACK_DOWN,
	returnCarsType,
	problemType,
	PICKUP_ORDER,
	LOAD_ORDER,
	chat,
	TK_NOT_BUSY,
	TK_FREE,
	TK_BUSY,
	DT_WAIT, 
	DT_ACCEPT,
	DT_SHIPPING,
	DT_DONE,
	dtType,
	ST_YEWU,
	ST_RECV,
	ST_PEER,
	ST_SHIP,
	STREAM_UP,
	STREAM_DOWN,
	OSS_REGION,
	OSS_BUCKET,
	OSS_ENDPOINT
}
