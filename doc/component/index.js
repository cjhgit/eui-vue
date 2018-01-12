import markdown from './markdownElement.vue'
import mobileTearSheet from './mobileTearSheet.vue'
import demo from './demo.vue'
import page from './page'

export default {
    install: function (Vue) {
        Vue.component('ui-markdown', markdown)
        Vue.component('ui-page', page)
        Vue.component('ui-demo', demo)
        Vue.component('mobile-tear-sheet', mobileTearSheet)
    }
}
