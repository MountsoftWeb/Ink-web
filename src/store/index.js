// vuex 核心管理对象
import Vuex from 'vuex'
import Vue from 'vue'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import geeters from './getters'

Vue.use(Vuex)
export default new Vuex.Store({
    state,
    mutations,
    actions,
    geeters
})