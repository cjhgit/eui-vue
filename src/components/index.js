import header from './header'
import footer from './footer'
import icon from './icon'
import raisedButton from './raisedButton'
import appBar from './appBar'
import iconButton from './iconButton'
import badge from './badge'
import paper from './paper'
import switchC from './switch'
import radio from './radio'
import checkbox from './checkbox'
import backTop from './backTop'
import textField from './textField'
import slider from './slider'
import subHeader from './subHeader'
import bottomSheet from './bottomSheet'
import flatButton from './flatButton'
import floatButton from './floatButton'
import dialog from './dialog'
import {bottomNav, bottomNavItem} from './bottomNav'
import {tab, tabs} from './tabs'
// import pagination from './pagination'
import {menu, menuItem} from './menu'
import {list, listItem} from './list'
import {breadCrumb, breadCrumbItem} from './breadCrumb'

export default {
    install: function (Vue) {
        Vue.component('ui-header', header)
        Vue.component('ui-footer', footer)
        Vue.component('ui-icon', icon)
        Vue.component('ui-appbar', appBar)
        Vue.component('ui-raised-button', raisedButton)
        Vue.component('ui-icon-button', iconButton)
        Vue.component('ui-list', list)
        Vue.component('ui-list-item', listItem)
        Vue.component('ui-menu', menu)
        Vue.component('ui-menu-item', menuItem)
        Vue.component('ui-badge', badge)
        Vue.component('ui-paper', paper)
        Vue.component('ui-switch', switchC)
        Vue.component('ui-radio', radio)
        Vue.component('ui-checkbox', checkbox)
        Vue.component('ui-breadcrumb', breadCrumb)
        Vue.component('ui-breadcrumb-item', breadCrumbItem)
        Vue.component('ui-back-top', backTop)
        Vue.component('ui-text-field', textField)
        Vue.component('ui-slider', slider)
        Vue.component('ui-tab', tab)
        Vue.component('ui-tabs', tabs)
        Vue.component('ui-sub-header', subHeader)
        Vue.component('ui-bottom-sheet', bottomSheet)
        Vue.component('ui-bottom-nav', bottomNav)
        Vue.component('ui-bottom-nav-item', bottomNavItem)
        Vue.component('ui-flat-button', flatButton)
        Vue.component('ui-float-button', floatButton)
        Vue.component('ui-dialog', dialog)
    }
}
