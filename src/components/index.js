
import uiIcon from './icon'
import goback from './goback'
import file from './file'
import page from './page'
import empty from './empty'
import canlendar from './vueCalendar'

// 这里是重点
const Loading = {
    install: function(Vue){
        Vue.component('uiGoback', goback)
        Vue.component('uiIcon', uiIcon)
        Vue.component('uiFile', file)
        Vue.component('uiPage', page)
        Vue.component('uiEmpty', empty)
        Vue.component('uiCalendar', canlendar)
    }
}

// 导出组件
export default Loading