/*
import uiGoback from './vueGoback/index.js'

const install = function(Vue) {
    Vue.component('uiGoback', uiGoback)
}

if (typeof window !== 'undefined' && window.vue) {
    install(window.Vue)
}

module.exports = {
    install,
    uiGoback
}*/

// import uiGoback from './vueGoback/index.js'
import uiIcon from './icon'
import goback from './goback'

// 这里是重点
const Loading = {
    install: function(Vue){
        Vue.component('uiGoback', goback)
        Vue.component('uiIcon', uiIcon)
    }
}

// 导出组件
export default Loading