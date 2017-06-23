import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//暂无内容，需要再加
const store = new Vuex.Store({
    state: {
        count: 0,
        language: 'zh'
    },
    actions: {

    },
    mutations: {
        changeLanguage(state,lang){
            alert(1);
            state.language = lang;
            Vue.config.lang = state.language;
        },
        inc: state => state.count++,
        dec: state => state.count--
    }
})


export default store;