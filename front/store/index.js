/**
 * Created by tangjiang on 2017/8/1.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import user from './modules/user'

Vue.use(Vuex);
export default new Vuex.Store({
    actions,
    getters,
    modules: {
        user
    }
})