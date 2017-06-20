export default {
	bind (el, binding, vnode) {
		if (!binding.value || !localStorage.roleList) return

		let str = binding.value.toUpperCase(),
			roleObjList = JSON.parse(localStorage.roleList),
			roleList = roleObjList.map(item => item.authority),
			hasAuth = false;

		if (str.indexOf('OTH_IM') > -1 && roleList.indexOf('ADMIN') > -1) {
			hasAuth = false
		}else if (str.indexOf('&') > -1) {
			hasAuth = true
			let list = str.split('&')

			for (let i=0; i<list.length; i++) {
				if (roleList.indexOf(list[i]) === -1 && roleList.indexOf('ADMIN') === -1) {
					hasAuth = false
					break
				}
			}
		} else if (str.indexOf('|') > -1) {
			let list = str.split('|')

			for (let i=0; i<list.length; i++) {
				if (roleList.indexOf(list[i]) > -1 || roleList.indexOf('ADMIN') > -1) {
					hasAuth = true
					break
				}
			}
		} else {
			if (roleList.indexOf(str) > -1 || roleList.indexOf('ADMIN') > -1) {
				hasAuth = true
			}
		}

		!hasAuth && (el.style.display = 'none')
	}
}