// 拖拽类
class Drag {
	constructor(opt) {
		this.target = (opt && opt.target) || null;
		this.disX = (opt && opt.x) || 0;
		this.disY = (opt && opt.y) || 0;
		this.setttings = {
			target: (opt && opt.target) || null,
			parent: (opt && opt.parent) || null,
			toDown: function(){},
			toUp: function(){}
		};
	}

	init(opt) {
		this.target = document.getElementById(opt.target);
		this.parent = opt.parent && document.getElementById(opt.parent);
		this.extend = (obj1, obj2) => {
			for (let attr in obj2) {
				obj1[attr] = obj2[attr];
			}
		};
		this.extend( this.setttings, opt );
		this.target.onmousedown = (ev) => {
			ev = ev || window.event;
			this.fnDown(ev);
			this.setttings.toDown();

			document.onmousemove = (ev) => {
				ev = ev || window.event;
				this.fnMove(ev);
			};
			document.onmouseup = () => {
				this.fnUp();
				this.setttings.toUp();
			};
			return false;
		};
	}
	fnDown(ev) {
		let target = this.parent === undefined ? this.target : this.parent;
		this.disX = ev.clientX - target.offsetLeft;
		this.disY = ev.clientY - target.offsetTop;
	}
	fnMove(ev) {
		let target = this.parent === undefined ? this.target : this.parent;
		target.style.margin = '0';
		target.style.left = ev.clientX - this.disX + 'px';
	    target.style.top = ev.clientY - this.disY + 'px';
	}
	fnUp() {
		document.onmousemove = null;
		document.onmouseUp= null;
	}
}


// 获取兄弟元素
let getSiblings = (el) => {
	let _nodes = [], _el = el.parentNode.firstChild;

	for ( ; _el; _el = _el.nextSibling ) {
		if ( _el.nodeType === 1 && _el !== el ) {
			_nodes.push( _el );
		}
	}
	return _nodes;
};

// 获取滚动条宽度
let cached;
let getScrollBarSize = (fresh) => {
    if (fresh || cached === undefined) {
        const inner = document.createElement('div');
        inner.style.width = '100%';
        inner.style.height = '200px';

        const outer = document.createElement('div');
        const outerStyle = outer.style;

        outerStyle.position = 'absolute';
        outerStyle.top = 0;
        outerStyle.left = 0;
        outerStyle.pointerEvents = 'none';
        outerStyle.visibility = 'hidden';
        outerStyle.width = '200px';
        outerStyle.height = '150px';
        outerStyle.overflow = 'hidden';

        outer.appendChild(inner);

        document.body.appendChild(outer);

        const widthContained = inner.offsetWidth;
        outer.style.overflow = 'scroll';
        let widthScroll = inner.offsetWidth;

        if (widthContained === widthScroll) {
            widthScroll = outer.clientWidth;
        }

        document.body.removeChild(outer);

        cached = widthContained - widthScroll;
    }
    return cached;
};

// 设置侧边栏active
let setLiActive = (e) => {
	if (e.target.nodeName.toLowerCase() === 'a') {		
		e.target.parentNode.className = 'list-group-item active';	

		let others = getSiblings(e.target.parentNode);	
		for (let i in others) {
			others[i].className = 'list-group-item';
		}
	}
};

// 判断参数是否其中之一
let oneOf = (value, list) => {
	for (let i=0; i<list.length; i++) {
		if (value === list[i]) {
			return true;
		}
	}
	return false;
};

let setMainHeight = () => {
	let winH = window.innerHeight;
	let bodyH = document.querySelector('body').offsetHeight;
	let main = document.querySelectorAll('.article')[0];
	let mainH = main.offsetHeight;

	if (bodyH < winH) {
		main.style.height = (winH - bodyH + mainH) + 'px';
	}
};

let isNull = (val) => {
	if(val === null || val === undefined || val === '') {
		return true;
	}
	return false;
};

let isEmpty = (e) => {  
    var t;  
    for (t in e)  
        return !1;  
    return !0  
};

// 获取元素的绝对 y 值 
let getElementTop = (element) => {
	let actualTop = element.offsetTop;
	let current = element.offsetParent;
　　while (current !== null){
		actualTop += current.offsetTop;
		current = current.offsetParent;
	}
	return actualTop;
};

// 获取元素的绝对 x 值 
let getElementLeft = (element) => {
	let actualLeft = element.offsetLeft;
	let current = element.offsetParent;
	while (current !== null){
		actualLeft += current.offsetLeft;
		current = current.offsetParent;
	}
		return actualLeft;
};

// 权限定义
const AUTH_ADMIN = 'ADMIN'
let hasAuthAdmin = (auth) => {
	if(isNull(auth)) return false;
	return auth.indexOf(AUTH_ADMIN) >= 0;
}

// 截断字符串
const limitBy = (val, begin, end) => {
	if ( val.length && val.length <= end) {
		return val;
	} else {
		return val.slice(begin, end) + '...';
	}
};

// 转换成格式 -> '2.00'
const toDecimal2 = (x) => {    
    let f = parseFloat(x);    
    if (isNaN(f)) {    
        return false;    
    }    
    f = Math.round(x*100)/100;    
    let s = f.toString();    
    let rs = s.indexOf('.');    
    if (rs < 0) {    
        rs = s.length;    
        s += '.';    
    }    
    while (s.length <= rs + 2) {    
        s += '0';    
    }    
    return s;    
};

class Zoom {
	constructor (opt) {
		if (typeof opt === 'string') {
			this.target = document.getElementById(opt);
			this.scroll = false;
		} else {
			this.target = document.getElementById(opt.id);
			this.scroll = opt.scroll === undefined ? false : opt.scroll;
		}
	}

	init (opt) {
		this.target = opt ? document.getElementById(opt) : this.target;
		this.target.style.position = 'relative';
		const innerHtml = '<div id="arrow" style="position: absolute; bottom: 0; right: 0; z-index: 1; width: 30px; height: 30px; background-color: transparent; cursor: se-resize"></div>'
		this.target.innerHTML += innerHtml;

		this.arrow = this.target.querySelector('#arrow');

		this.arrow.onmousedown = e => {
			e = e || window.event;

			this.arrow.onmousemove = e => {
				e = e || window.event;				
				this.fnMove(e);
			}	

			this.arrow.onmouseup = e => {
				e = e || window.event;
				this.fnUp();
			}
			return false;
		}
		this.arrow.onmouseout = e => {
			this.arrow.onmousemove = null;
		}
	}

	fnMove (e) {
		let targetWidth = parseFloat(this.target.style.width);
		let targetHeight = parseFloat(this.target.style.height);
		let parentWidth = parseFloat(this.target.parentNode.offsetWidth);
		// debugger
		if (this.scroll) {
			if (targetWidth < parentWidth) {
				this.target.style.width = e.clientX + document.body.scrollLeft- this.target.offsetLeft + 5 + 'PX';
			} else {
				this.target.style.width = e.clientX + document.body.scrollLeft- this.target.offsetLeft + 5 + 'PX';
				this.target.parentNode.scrollLeft = this.target.offsetWidth - this.target.parentNode.offsetWidth;
			}
		} else {
			this.target.style.width = e.clientX + document.body.scrollLeft- this.target.offsetLeft + 5 + 'PX';
		}

		this.target.style.height = e.clientY + document.body.scrollTop - this.target.offsetTop + 5 + 'px';
	}

	fnUp () {
		this.arrow.onmousemove = null;
		this.arrow.onmouseUp = null;
	}
}

class listClass {
	toggle (tag,name){
		let list = tag.className.split(" ");
		for (var i = 0; i < list.length; i++) {
			if(list[i] == name){
				list.splice(i,1);
				tag.className = list.join(" ");
				return;
			};
		};
		tag.className += " " + name;
	}
	add (tag,name){
		let list = tag.className.split(" ");
		for (var i = 0; i < list.length; i++) {
			if (name == list[i]) return;
		}
		tag.className += " " + name;
	}
	remove (tag,name){
		let list = tag.className.split(" ");
		for (var i = 0; i < list.length; i++) {
			if(list[i] == name) {
				list.splice(i,1);
			};
		};
		tag.className = list.join(" ");
	}
}

const getDataSet = (target, name) => {
	if (!target) return
	if (target.dataset) {
		return target.dataset[name]
	} 
	return target.dataset !== undefined ? target.dataset[name] : target.getAttribute('data-' + name) 
}

const cloneObj = obj => JSON.parse(JSON.stringify(obj))

const getStyle = ele => {
	var style = null;
	if(window.getComputedStyle) {
	  style = window.getComputedStyle(ele, null);
	}else{
	  style = ele.currentStyle;
	}
	return style
}

const returnRandomStr = (len = 6) => {
	var rdmString = "";
	//toSting接受的参数表示进制，默认为10进制。36进制为0-9 a-z
	for (; rdmString.length < len; rdmString += Math.random().toString(36).substr(2));
	return rdmString.substr(0, len);
}

module.exports = {
	Drag,
	getSiblings,
	getScrollBarSize,
	setLiActive,
	isNull,
	isEmpty,
	oneOf,
	setMainHeight,
	getElementLeft,
	getElementTop,
	hasAuthAdmin,
	limitBy,
	toDecimal2,
	Zoom,
	listClass,
	getDataSet,
	cloneObj,
	getStyle,
	returnRandomStr
};

