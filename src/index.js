import './style-scss/base.scss'
import {retina} from './utils'
import icon from './icon'
import backTop from './backTop'
import badge from './badge'

import {breadCrumb, breadCrumbItem} from './breadCrumb'
import appBar from './appBar'
import iconButton from './iconButton'
import flatButton from './flatButton'
import raisedButton from './raisedButton'
import floatButton from './floatButton'
import contentBlock from './contentBlock'
import {list, listItem} from './list'
import subHeader from './subHeader'
import divider from './divider'
import refreshControl from './refreshControl'
import infiniteScroll from './infiniteScroll'
import avatar from './avatar'
import {tab, tabs} from './tabs'
import paper from './paper'
import {bottomNav, bottomNavItem} from './bottomNav'
import {card, cardHeader, cardMedia, cardTitle, cardText, cardActions} from './card'
import chip from './chip'
import overlay from './internal/popup/overlay'
import dialog from './dialog'
import toast from './toast'
import snackbar from './snackbar'
import popup from './popup'
import {menu, menuItem} from './menu'
import bottomSheet from './bottomSheet'
import popover from './popover'
import iconMenu from './iconMenu'
import dropDownMenu from './dropDownMenu'
import drawer from './drawer'
import picker from './picker'
import tooltip from './tooltip'

import textField from './textField'
import selectField from './selectField'
import checkbox from './checkbox'
import radio from './radio'
import _switch from './switch'
import slider from './slider'
import linearProgress from './linearProgress'
import circularProgress from './circularProgress'
import {gridList, gridTile} from './gridList'
import {table, thead, tbody, tfoot, tr, th, td} from './table'
import datePicker from './datePicker'
import timePicker from './timePicker'
import {step, stepButton, stepContent, stepLabel, stepper} from './stepper'
import autoComplete from './autoComplete'
import pagination from './pagination'
import {timeline, timelineItem} from './timeLine'

import header from './header'
import footer from './footer'
import container from './container'
import article from './article'
import {row, col} from './grid'
import {flexbox, flexboxItem} from './flexbox'
import config from './config'
const components = {
    header,
    footer,
    container,
    article,

    icon,
    backTop,
    badge,
    breadCrumb,
    breadCrumbItem,
    appBar,
    iconButton,
    flatButton,
    raisedButton,
    floatButton,
    contentBlock,
    list,
    listItem,
    subHeader,
    divider,
    refreshControl,
    infiniteScroll,
    avatar,

    tab,
    tabs,
    paper,
    bottomNav,
    bottomNavItem,
    card, cardHeader, cardMedia, cardTitle, cardText, cardActions,
    chip,
    overlay,
    dialog,
    toast,
    snackbar,
    popup,
    menu, menuItem,
    bottomSheet,
    popover,
    iconMenu,
    dropDownMenu,
    drawer,
    picker,
    tooltip,
    textField,
    selectField,
    checkbox,
    radio,
    _switch,
    slider,
    timeline, timelineItem,
    linearProgress,
    circularProgress,
    gridList, gridTile,
    table, thead, tbody, tfoot, tr, th, td,
    datePicker,
    timePicker,
    step, stepButton, stepContent, stepLabel, stepper,
    autoComplete,
    row,
    col,
    flexbox,
    flexboxItem,
    pagination
}

const install = function (Vue) {
    Object.keys(components).forEach((key) => {
        Vue.component(components[key].name, components[key])
    })
    retina()
}

if (typeof window !== 'undefined' && window.Vue) install(window.Vue)
export default {
    config,
    install
}
export {
    config,
    install
}
